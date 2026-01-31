// app.js - tek dosya, query-param router kullanır (?page=blog&post=slug)

// ============================
// Yardımcı fonksiyonlar
// ============================
function normalizeText(text) {
    if (!text) return '';
    return text.toLowerCase()
        .replace(/ı/g, 'i')
        .replace(/ğ/g, 'g')
        .replace(/ü/g, 'u')
        .replace(/ş/g, 's')
        .replace(/ö/g, 'o')
        .replace(/ç/g, 'c');
}

function createListHtml(items, colorClass) {
    const finalColorClass = colorClass || 'text-green-600';

    return items.map(item => `
        <li class="flex items-start p-3 bg-white rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition duration-150">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ${finalColorClass} mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <span class="text-gray-700 font-medium">${item}</span>
        </li>
    `).join('');
}

// ============================
// Sidebar
// ============================
function showSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    if (!sidebar || !overlay) return;
    sidebar.classList.remove('sidebar-closed');
    sidebar.classList.add('sidebar-open');
    overlay.classList.remove('hidden');
    setTimeout(() => overlay.classList.remove('opacity-0'), 10);
}

function hideSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    if (!sidebar || !overlay) return;
    sidebar.classList.remove('sidebar-open');
    sidebar.classList.add('sidebar-closed');
    overlay.classList.add('opacity-0');
    setTimeout(() => overlay.classList.add('hidden'), 300);
}

// ============================
// AdSense yönetimi (GÜNCEL)
// Kural: Home'da reklam yok. Blog listesinde reklam yok.
// Sadece tekil blog yazısı (postSlug var) açılınca göster.
// ============================
let adsInitialized = false;

function safeAdsPush() {
    if (!window.adsbygoogle) window.adsbygoogle = [];
    try {
        window.adsbygoogle.push({});
    } catch (e) {
        console.warn("adsbygoogle push hatası (görmezden gelinebilir):", e);
    }
}

function hideTopAd() {
    const topAd = document.getElementById('topAdContainer');
    if (topAd && !topAd.classList.contains('hidden')) topAd.classList.add('hidden');
}

function showTopAd() {
    const topAd = document.getElementById('topAdContainer');
    if (!topAd) return;

    if (topAd.classList.contains('hidden')) topAd.classList.remove('hidden');

    // Reklamı tek sefer initialize et (SPA içinde tekrar tekrar basmasın)
    if (!adsInitialized) {
        adsInitialized = true;
        requestAnimationFrame(() => safeAdsPush());
    }
}

function hideBottomAd() {
    const bottomAd = document.getElementById('bottomAdContainer');
    if (bottomAd && !bottomAd.classList.contains('hidden')) bottomAd.classList.add('hidden');
}

function showBottomAd() {
    // Home'da reklam göstermiyoruz; bu fonksiyon güvenlik için kalsın.
    const bottomAd = document.getElementById('bottomAdContainer');
    if (!bottomAd) return;

    if (bottomAd.classList.contains('hidden')) bottomAd.classList.remove('hidden');

    if (!adsInitialized) {
        adsInitialized = true;
        requestAnimationFrame(() => safeAdsPush());
    }
}

// ============================
// Hero butonları
// ============================
function handleMenuClick(type) {
    let slug = null;
    if (type === 'glutensiz') slug = 'glutensiz-menu-onerileri';
    else if (type === 'pratik') slug = 'pratik-menu-onerileri';
    else if (type === 'yilbasi') slug = 'yilbasi-sofra-menu-onerileri';

    if (!slug) return;
    viewBlogPost(slug);
}

// ============================
// Router & sayfa geçişleri (query-param based)
// ============================
function showPage(pageId, fromSidebar = false) {
    const pagesToHide = ['page-home', 'page-blog', 'page-privacy'];
    pagesToHide.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('hidden');
    });

    const target = document.getElementById(`page-${pageId}`);
    if (target) target.classList.remove('hidden');

    // Reklamları her sayfa geçişinde kapat (kararı loadBlogContent verir)
    hideTopAd();
    hideBottomAd();

    // Title yönetimi (blog yazıları loadBlogContent içinde override ediliyor)
    if (pageId === 'blog') document.title = "Blog - Yanında Ne Yiyelim?";
    else if (pageId === 'privacy') document.title = "Gizlilik Politikası - Yanında Ne Yiyelim?";
    else document.title = "Yanında Ne Yiyelim? - Menü Önerileri";

    if (fromSidebar) hideSidebar();
    window.scrollTo(0, 0);

    // URL query param'larını yönet
    try {
        const url = new URL(window.location);
        const params = url.searchParams;

        if (pageId === 'home') {
            params.delete('page');
            params.delete('post');
        } else if (pageId === 'blog') {
            params.set('page', 'blog');
            // post param'ını değiştirmiyoruz; viewBlogPost set edebilir
        } else if (pageId === 'privacy') {
            params.set('page', 'privacy');
            params.delete('post');
        }

        window.history.pushState({}, '', url.pathname + (params.toString() ? '?' + params.toString() : ''));
    } catch (e) {
        // Local dosyalarda URL güncellemesi desteklenmeyebilir
    }

    // Blog sayfası için query'den içerik yükle
    if (pageId === 'blog') {
        const params = new URLSearchParams(window.location.search);
        const slug = params.get('post');
        loadBlogContent(slug);
    }

    // Home'a dönünce önerileri yenile
    if (pageId === 'home') {
        renderHomeBlogSection();
    }
}

// Route çözümü (query param'den)
function handleRouteFromLocation() {
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page');
    const post = params.get('post');

    if (page === 'blog') {
        showPage('blog');
        loadBlogContent(post || null);
        return;
    }

    if (page === 'privacy') {
        showPage('privacy');
        return;
    }

    // default home
    showPage('home');
    renderHomeBlogSection();
}

function navigateToQuery(paramsObj) {
    try {
        const url = new URL(window.location);
        const params = url.searchParams;

        Object.keys(paramsObj).forEach(k => {
            const v = paramsObj[k];
            if (v === null) params.delete(k);
            else params.set(k, v);
        });

        window.history.pushState({}, '', url.pathname + (params.toString() ? '?' + params.toString() : ''));
    } catch (e) {}
    handleRouteFromLocation();
}
window.navigateToQuery = navigateToQuery;

// ============================
// Home blog önerileri
// ============================
function renderHomeBlogSection() {
    if (!window.blogPostsData || !Array.isArray(window.blogPostsData)) return;
    const container = document.getElementById('home-blog-list');
    if (!container) return;

    container.innerHTML = '';
    const sorted = [...window.blogPostsData].sort((a, b) => b.id - a.id);
    const latest = sorted.slice(0, 3);

    latest.forEach(post => {
        container.innerHTML += `
            <article class="p-4 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
                <div>
                    <span class="text-xs font-bold text-secondary-green uppercase">
                        ${post.category || 'Blog'}
                    </span>
                    <h3 class="text-lg font-bold mt-1 mb-2 line-clamp-2">
                        ${post.title}
                    </h3>
                    ${
                        post.description
                            ? `<p class="text-gray-600 text-sm mb-3 line-clamp-3">${post.description}</p>`
                            : ''
                    }
                </div>
                <button
                    type="button"
                    onclick="viewBlogPost('${post.slug}')"
                    class="mt-2 text-blue-600 font-semibold text-sm hover:underline text-left"
                >
                    Devamını Oku →
                </button>
            </article>
        `;
    });
}

// ============================
// Blog navigation (query param)
// ============================
function viewBlogPost(slug) {
    if (!slug) return;

    try {
        const url = new URL(window.location);
        const params = url.searchParams;
        params.set('page', 'blog');
        params.set('post', slug);
        window.history.pushState({ type: 'blog-post', slug }, '', url.pathname + '?' + params.toString());
    } catch (e) {
        console.log('URL güncelleme desteklenmiyor:', e);
    }

    showPage('blog');
    loadBlogContent(slug);
}

function viewBlogList() {
    try {
        const url = new URL(window.location);
        const params = url.searchParams;
        params.set('page', 'blog');
        params.delete('post');
        window.history.pushState({ type: 'blog-list' }, '', url.pathname + (params.toString() ? '?' + params.toString() : ''));
    } catch (e) {
        console.log('URL güncelleme desteklenmiyor:', e);
    }

    showPage('blog');
    loadBlogContent(null);
}

// ============================
// ÖZEL BLOG LAYOUT FONKSİYONLARI
// (Senin mevcut fonksiyonların korunmuştur.)
// ============================
function renderDefaultBlogPost(container, post) {
    container.innerHTML = `
        <button onclick="viewBlogList()" class="text-blue-600 font-semibold mb-4 hover:underline" type="button">
            ← Geri Dön
        </button>
        
        <article class="bg-white p-6 rounded-2xl shadow-xl content-area">
            <h1 class="text-2xl font-bold mb-2">${post.title}</h1>
            <span class="text-xs font-bold text-green-600 uppercase mb-4 block">${post.category || ''}</span>
            ${post.content}
        </article>

        <div class="mt-6">
            <a 
                id="twitterShareBtn"
                href="#"
                target="_blank"
                class="inline-flex items-center px-4 py-2 bg-black text-white font-semibold rounded-lg shadow hover:bg-[#111] transition"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.5 3L10 12l-5.5 9h3L12 14.5 16.5 21h3L14 12l5.5-9h-3L12 9.5 7.5 3h-3z"/>
                </svg>
                X'te Paylaş
            </a>
        </div>
    `;
}

function renderGlutenFreeBlogPost(container, post) {
    container.innerHTML = `
        <button onclick="viewBlogList()" class="text-blue-600 font-semibold mb-4 hover:underline" type="button">
            ← Blog Listesine Dön
        </button>

        <article class="space-y-6 bg-transparent">
            <header class="text-center max-w-3xl mx-auto space-y-4 mb-8">
                <h2 class="text-3xl md:text-4xl font-extrabold text-indigo-600">
                    🌾 Glutensiz Menü Rehberi
                </h2>
                <p class="text-lg text-stone-600 leading-relaxed">
                    Glutensiz beslenmenize çeşitlilik katacak, dengeli ve doyurucu
                    <strong>7 farklı tam menü</strong> önerisi. Her menü ana yemek, yan lezzet
                    ve tatlı/meyve dengesine göre planlanmıştır.
                </p>
                <p class="text-xs text-stone-500 bg-yellow-50 p-2 rounded-lg border border-yellow-200 inline-block">
                    ⚠️ Kalori değerleri yaklaşık tahminlerdir ve porsiyon miktarına göre değişebilir.
                </p>
                <div class="flex flex-wrap justify-center gap-3 mt-4">
                    <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">✅ Gluten-Free</span>
                    <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">⚖️ Dengeli</span>
                    <span class="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">🔥 Kalori Hesaplı</span>
                </div>
            </header>

            <section id="menu-explorer-gluten" class="scroll-mt-20">
                <div class="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                    <div>
                        <h3 class="text-2xl font-bold text-stone-900">7 Günlük Tam Menüler</h3>
                        <p class="text-stone-600 text-sm">Haftanın her günü için farklı bir glutensiz sofra deneyimi.</p>
                    </div>
                </div>

                <div id="menusGridGluten" class="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
            </section>

            <section class="mt-12">
                <div class="flex flex-col md:flex-row justify-between items-end mb-6">
                    <div>
                        <h3 class="text-xl font-bold text-stone-800 flex items-center gap-2">
                            <span>🔒</span> Glutensiz Beslenmenin Temel Prensipleri
                        </h3>
                        <p class="text-stone-600 text-sm mt-1">Hassasiyetinizi korumak için bilmeniz gerekenler.</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-4 gap-4" id="rulesContainerGluten"></div>
            </section>

            <hr class="my-6 border-stone-200">

            <section>
                <h2 class="text-lg font-semibold mb-2">İlgini Çekebilecek Diğer Menü Rehberleri</h2>
                <ul class="list-disc list-inside text-sm text-indigo-600 space-y-1 ml-4">
                    <li>
                        <a href="?page=blog&post=pratik-menu-onerileri" class="underline hover:text-indigo-800 transition" onclick="viewBlogPost('pratik-menu-onerileri'); return false;">
                            Pratik Menü Önerileri: 30 Dakikada Hazırlanan Menüler
                        </a>
                    </li>
                    <li>
                        <a href="?page=blog&post=pilav-yanina-hangi-yemek-gider" class="underline hover:text-indigo-800 transition" onclick="viewBlogPost('pilav-yanina-hangi-yemek-gider'); return false;">
                            Pilav Rehberi: Hangi Pilav Hangi Yemeğe?
                        </a>
                    </li>
                    <li>
                        <a href="?page=blog&post=etin-yanina-ne-gider" class="underline hover:text-indigo-800 transition" onclick="viewBlogPost('etin-yanina-ne-gider'); return false;">
                            Et Yemeklerinin Yanına Ne Gider?
                        </a>
                    </li>
                </ul>
            </section>
        </article>

        <div class="mt-6">
            <a 
                id="twitterShareBtn"
                href="#"
                target="_blank"
                class="inline-flex items-center px-4 py-2 bg-emerald-700 text-white font-semibold rounded-lg shadow hover:bg-emerald-800 transition"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.5 3L10 12l-5.5 9h3L12 14.5 16.5 21h3L14 12l5.5-9h-3L12 9.5 7.5 3h-3z"/>
                </svg>
                X'te Glutensiz Menü Yazısını Paylaş
            </a>
        </div>
    `;

    const glutenRulesData = [
        { title: "Etiket Okuma", icon: "🏷️", desc: "Soslar, hazır karışımlar ve işlenmiş ürünler gizli gluten içerebilir. Daima etiketi kontrol edin." },
        { title: "Çapraz Bulaş", icon: "❌", desc: "Aynı yağda kızartma, aynı tencerede pişirme veya aynı kesme tahtasını kullanma riskine dikkat edin." },
        { title: "Çeşitlilik", icon: "🌾", desc: "Karabuğday, kinoa, mısır, pirinç, amarant gibi glutensiz tahılları menünüze yayın." },
        { title: "Ev Yapımı", icon: "🏡", desc: "İçeriğini bildiğiniz ev yapımı tarifleri tercih edin. Kontrol sizde olsun." }
    ];

    const rulesContainer = document.getElementById('rulesContainerGluten');
    if (rulesContainer) {
        rulesContainer.innerHTML = glutenRulesData.map(rule => `
            <div class="bg-white p-4 rounded-xl shadow-sm border border-stone-100 hover:border-indigo-200 transition cursor-default group">
                <div class="text-3xl mb-2 group-hover:scale-110 transition-transform">${rule.icon}</div>
                <h4 class="font-bold text-stone-800 mb-1 text-sm">${rule.title}</h4>
                <p class="text-xs text-stone-500 leading-snug">${rule.desc}</p>
            </div>
        `).join('');
    }
}

// ============================
// BLOG İÇERİK YÜKLEYİCİ (GÜNCEL)
// Reklam yalnızca tekil yazıda gösterilir
// ============================
function loadBlogContent(postSlug = null) {
    const container = document.getElementById('blog-posts-container');
    if (!container) return;

    // Güvenlik: Home reklamı yok, bottom reklamı yok
    hideBottomAd();

    const data = (typeof window !== 'undefined' && Array.isArray(window.blogPostsData))
        ? window.blogPostsData
        : (typeof blogPostsData !== 'undefined' ? blogPostsData : null);

    if (!data || !Array.isArray(data)) {
        container.innerHTML = `
            <div class="p-6 bg-white rounded-2xl shadow-xl">
                <p class="text-red-600 font-semibold">Blog verisi yüklenemedi.</p>
            </div>
        `;
        hideTopAd();
        return;
    }

    container.innerHTML = '';

    // ✅ Blog liste: reklam yok
    if (!postSlug) {
        hideTopAd();
        document.title = "Blog - Yanında Ne Yiyelim?";

        data.forEach(post => {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = post.content || `<p>${post.description || 'İçerik önizlemesi...'}</p>`;
            const firstP = tempDiv.querySelector('p');
            const previewText = firstP ? firstP.innerText.substring(0, 100) : 'İçerik önizlemesi...';

            container.innerHTML += `
                <article class="p-4 bg-white rounded-xl shadow-sm border border-gray-100 mb-4">
                    <span class="text-xs font-bold text-green-600 uppercase">${post.category || 'Blog'}</span>
                    <h3 class="text-xl font-bold mt-1 mb-2">${post.title}</h3>
                    <p class="text-gray-600 text-sm mb-4">${previewText}...</p>
                    <button onclick="viewBlogPost('${post.slug}')" type="button" class="text-blue-600 font-semibold text-sm hover:underline">
                        Devamını Oku →
                    </button>
                </article>
            `;
        });

        return;
    }

    // ✅ Tekil yazı: reklam var
    const post = data.find(p => p.slug === postSlug);
    if (!post) {
        container.innerHTML = `
            <button onclick="viewBlogList()" class="text-blue-600 font-semibold mb-4 hover:underline" type="button">
                ← Blog listesine dön
            </button>
            <div class="p-6 bg-white rounded-2xl shadow-xl">
                <p class="text-gray-800 font-semibold mb-2">Yazı bulunamadı.</p>
                <p class="text-sm text-gray-500">Bağlantı eski olabilir veya yazı kaldırılmış olabilir.</p>
            </div>
        `;
        hideTopAd();
        return;
    }

    if (post.metaTitle) document.title = post.metaTitle;
    else document.title = `${post.title} - Yanında Ne Yiyelim?`;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        if (post.metaDescription) metaDesc.setAttribute('content', post.metaDescription);
        else metaDesc.setAttribute('content', 'Blog yazılarımızı keşfedin. Menü önerileri, özel gün sofraları ve yanına ne gider içerikleri.');
    }

    // Özel render fonksiyonların varsa çağır
    if (typeof renderGlutenFreeBlogPost === 'function' && post.slug === 'glutensiz-menu-onerileri') {
        renderGlutenFreeBlogPost(container, post);
    } else if (typeof renderPratikBlogPost === 'function' && post.slug === 'pratik-menu-onerileri') {
        renderPratikBlogPost(container, post);
    } else if (typeof renderYilbasiBlogPost === 'function' && post.slug === 'yilbasi-sofra-menu-onerileri') {
        renderYilbasiBlogPost(container, post);
    } else {
        renderDefaultBlogPost(container, post);
    }

    const twitterBtn = document.getElementById("twitterShareBtn");
    if (twitterBtn) {
        twitterBtn.href = 'https://twitter.com/intent/tweet?text='
            + encodeURIComponent(post.title)
            + '&url=' + encodeURIComponent(window.location.href);
    }

    // Tekil içerik render olduktan sonra reklamı aç
    requestAnimationFrame(() => {
        showTopAd();
    });
}

// ============================
// ARAMA (performSearch)
// Kural: Home'da reklam göstermiyoruz
// ============================
function performSearch() {
    const input = document.getElementById('mainDishInput');
    const filter = document.getElementById('cuisineFilter');
    const container = document.getElementById('resultsContainer');

    if (!input || !filter || !container) return;

    // Home'da bottom reklam yok; her ihtimale karşı gizle
    hideBottomAd();

    if (!window.dishSuggestions || !window.suggestionCategories) {
        container.innerHTML = '<p class="text-red-500 italic">Hata: Yemek öneri verileri yüklenemedi.</p>';
        return;
    }

    const rawQuery = input.value.trim();
    const cuisine = filter.value;
    const query = normalizeText(rawQuery);
    container.innerHTML = '';

    let foundDish = null;
    let isRandom = false;
    const lowCalorieOnly = document.getElementById('lowCalorieFilter')?.checked;

    // Boş bırakıldıysa "Günün önerisi"
    if (query.length < 2 && !rawQuery) {
        const filtered = window.dishSuggestions.filter(d => cuisine === "" || d.cuisine === cuisine);
        if (filtered.length > 0) {
            const ri = Math.floor(Math.random() * filtered.length);
            foundDish = { ...filtered[ri] };
            if (!foundDish.main.startsWith("Günün Önerisi")) foundDish.main = `Günün Önerisi: ${foundDish.main}`;
            isRandom = true;
        }
    } else {
        foundDish = window.dishSuggestions.find(d => {
            const nm = normalizeText(d.main);
            if (nm === query) return true;
            return d.keywords && d.keywords.some(k => normalizeText(k) === query);
        });

        if (!foundDish) {
            foundDish = window.dishSuggestions.find(d => {
                const nm = normalizeText(d.main);
                if (nm.startsWith(query)) return true;
                return nm.includes(query) || (d.keywords && d.keywords.some(k => normalizeText(k).includes(query)));
            });
        }
    }

    if (!foundDish && query.length < 2 && cuisine === "") {
        container.innerHTML = '<p class="text-gray-500 italic">Aramaya başlayın...</p>';
        return;
    } else if (!foundDish) {
        container.innerHTML = `
            <div class="w-full text-center p-4">
                <p class="text-gray-800 font-semibold mb-2">Üzgünüz, aradığınız "${rawQuery}" yemeği için öneri bulamadık.</p>
                <p class="text-sm text-gray-500">Farklı bir arama yapın veya seçili filtreyi kaldırın.</p>
            </div>
        `;
        return;
    }

    const hasCalories = foundDish.calories && foundDish.calories.total;
    const totalCalOrig = hasCalories ? foundDish.calories.total : null;
    const isHighCalorie = hasCalories && totalCalOrig > 1200;

    let effectiveTotalCal = totalCalOrig;
    let extraNote = '';

    if (lowCalorieOnly && isHighCalorie && foundDish.calories?.breakdown) {
        const dessertCal = foundDish.calories.breakdown.dessert || 0;
        effectiveTotalCal = totalCalOrig - dessertCal;

        if (effectiveTotalCal > 1200) {
            container.innerHTML = `
                <div class="w-full text-center p-4">
                    <p class="text-gray-800 font-semibold mb-2">
                        Bu yemek, tatlı çıkarılmasına rağmen hala 1200 kcal üzerindedir.
                    </p>
                    <p class="text-sm text-gray-500">Filtreyi kapatarak tüm yemekleri görebilirsiniz.</p>
                </div>
            `;
            return;
        }

        extraNote = ' 1200 kcal filtresi aktif olduğu için tatlı menüden çıkarılmıştır; kalori toplamı buna göre yaklaşık olarak güncellenmiştir.';
    }

    let html = '';
    window.suggestionCategories.forEach(cat => {
        const items = foundDish.suggestions[cat.key];
        if (lowCalorieOnly && isHighCalorie && cat.key === 'dessert') return;
        if (items && items.length) {
            html += `
                <div class="mb-4">
                    <h4 class="font-bold ${cat.color} mb-2">${cat.icon} ${cat.title}</h4>
                    <ul class="space-y-2">${createListHtml(items, cat.color)}</ul>
                </div>
            `;
        }
    });

    if (hasCalories) {
        const c = foundDish.calories;
        html += `
            <div class="mt-4 p-3 rounded-lg bg-amber-50 border border-amber-200 text-sm text-amber-900">
                <div class="font-semibold mb-1">🔢 Tahmini Kalori Bilgisi</div>
                <p class="mb-1">Toplam: <strong>${effectiveTotalCal} kcal</strong></p>
                ${ c.breakdown ? `<ul class="list-disc ml-4">
                    ${c.breakdown.main ? `<li>Ana yemek: ~${c.breakdown.main} kcal</li>` : ''}
                    ${c.breakdown.yanlar ? `<li>Yan lezzetler: ~${c.breakdown.yanlar} kcal</li>` : ''}
                    ${c.breakdown.drink ? `<li>İçecek: ~${c.breakdown.drink} kcal</li>` : ''}
                    ${ (lowCalorieOnly && isHighCalorie) ? '' : (c.breakdown.dessert ? `<li>Tatlı: ~${c.breakdown.dessert} kcal</li>` : '') }
                </ul>` : '' }
                <p class="mt-1 text-xs text-amber-700">${c.note || "Değerler yaklaşık olup porsiyon ve tarifinize göre değişebilir."}${extraNote}</p>
            </div>
        `;
    }

    const template = document.getElementById('dishDetailTemplate')?.content?.cloneNode(true);
    if (!template) return;

    template.querySelector('h2').innerHTML = `<span class="text-base text-gray-600">(${foundDish.cuisine})</span><br>"${foundDish.main}" Yanına Ne Gider?`;
    template.querySelector('#suggestionsListContainer').innerHTML = html;

    const info = template.querySelector('#randomInfo');
    if (info) info.style.display = isRandom ? 'block' : 'none';

    container.appendChild(template);

    if (window.innerWidth < 768) input.blur();
}

// ============================
// ÇEREZ / İZİN
// ============================
const COOKIE_CONSENT_KEY = 'cookieConsent';
const COOKIE_CONSENT_GRANTED = 'granted';

function checkConsent() {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    const banner = document.getElementById('cookieBanner');
    if (banner && consent !== COOKIE_CONSENT_GRANTED && consent !== 'rejected') {
        banner.classList.remove('hidden');
        setTimeout(() => banner.classList.remove('opacity-0'), 10);
    }
}

function acceptCookies() {
    localStorage.setItem(COOKIE_CONSENT_KEY, COOKIE_CONSENT_GRANTED);
    const banner = document.getElementById('cookieBanner');
    if (banner) {
        banner.classList.add('opacity-0');
        setTimeout(() => banner.classList.add('hidden'), 300);
    }
}

function rejectCookies() {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'rejected');
    const banner = document.getElementById('cookieBanner');
    if (banner) {
        banner.classList.add('opacity-0');
        setTimeout(() => banner.classList.add('hidden'), 300);
    }
}

// ============================
// GLOBAL EXPORT
// ============================
window.createListHtml = createListHtml;
window.hideSidebar = hideSidebar;
window.showSidebar = showSidebar;
window.handleMenuClick = handleMenuClick;
window.showPage = showPage;
window.performSearch = performSearch;
window.loadBlogContent = loadBlogContent;
window.viewBlogPost = viewBlogPost;
window.viewBlogList = viewBlogList;
window.renderHomeBlogSection = renderHomeBlogSection;
window.acceptCookies = acceptCookies;
window.rejectCookies = rejectCookies;

// ============================
// İLK YÜKLEME
// ============================
window.addEventListener('load', () => {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    if (sidebar) { sidebar.classList.remove('sidebar-open'); sidebar.classList.add('sidebar-closed'); }
    if (overlay) { overlay.classList.add('hidden'); overlay.classList.add('opacity-0'); }

    handleRouteFromLocation();

    // Güvenlik: ilk yükte reklam kapalı başlasın
    hideTopAd();
    hideBottomAd();

    checkConsent();
});

// ============================
// POPSTATE
// ============================
window.addEventListener('popstate', () => {
    handleRouteFromLocation();
});
