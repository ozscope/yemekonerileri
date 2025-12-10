// app.js

// --- YARDIMCI FONKSİYONLAR ---
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
    // Tailwind renk sınıfı için varsayılan
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

// --- SIDEBAR FONKSİYONLARI ---
function showSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    sidebar.classList.remove('sidebar-closed');
    sidebar.classList.add('sidebar-open');
    overlay.classList.remove('hidden');
    setTimeout(() => overlay.classList.remove('opacity-0'), 10);
}

function hideSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    sidebar.classList.remove('sidebar-open');
    sidebar.classList.add('sidebar-closed');
    overlay.classList.add('opacity-0');
    setTimeout(() => overlay.classList.add('hidden'), 300);
}

// --- HERO BUTONLARI (ÖZEL MENÜLER) ---
function handleMenuClick(type) {
    let slug = null;

    if (type === 'glutensiz') {
        slug = 'glutensiz-menu-onerileri';
    } else if (type === 'pratik') {
        slug = 'pratik-menu-onerileri';
    } else if (type === 'yilbasi') {
        slug = 'yilbasi-sofra-menu-onerileri';
    }

    if (!slug) return;

    // Blog sayfasına geçip ilgili yazıyı aç
    viewBlogPost(slug);
}

// --- SAYFA GEÇİŞLERİ (SADE: SADECE DOM & TITLE) ---
function showPage(pageId, fromSidebar = false) {
    const pagesToHide = ['page-home', 'page-blog', 'page-privacy'];

    pagesToHide.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.classList.add('hidden');
        }
    });

    const targetPage = document.getElementById(`page-${pageId}`);
    if (targetPage) {
        targetPage.classList.remove('hidden');
    } else {
        console.warn(`Warning: Element with ID 'page-${pageId}' not found in the DOM.`);
    }

    // Title yönetimi (blog özelinde metaTitle loadBlogContent içinde override ediliyor)
    if (pageId === 'blog') {
        document.title = "Blog - Yanında Ne Yiyelim?";
    } else if (pageId === 'privacy') {
        document.title = "Gizlilik Politikası - Yanında Ne Yiyelim?";
    } else {
        document.title = "Yanında Ne Yiyelim? - Menü Önerileri";
    }

    if (fromSidebar) hideSidebar();
    window.scrollTo(0, 0);
}

// --- ANA SAYFA BLOG ÖNERİLERİ ---
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
                <a
                    href="/blog/${post.slug}"
                    onclick="viewBlogPost('${post.slug}'); return false;"
                    class="mt-2 text-blue-600 font-semibold text-sm hover:underline text-left inline-block"
                >
                    Devamını Oku →
                </a>
            </article>
        `;
    });
}

// --- BLOG NAVİGASYON (PRETTY URL: /blog/slug) ---

function viewBlogPost(slug) {
    // SPA içinde blog sayfasını göster
    showPage('blog');

    // URL'yi /blog/slug yap (fallback olarak query sistemi)
    try {
        const base = window.location.origin || "";
        const newUrl = `${base}/blog/${slug}`;
        window.history.pushState({ type: 'blog-post', slug }, '', newUrl);
    } catch (e) {
        console.log("Path tabanlı URL güncelleme desteklenmiyor, query string'e düşüyorum.");
        try {
            const url = new URL(window.location);
            url.searchParams.set('page', 'blog');
            url.searchParams.set('post', slug);
            window.history.pushState({ type: 'blog-post', slug }, '', url);
        } catch (err) {
            console.log("URL güncelleme tamamen desteklenmiyor.");
        }
    }

    loadBlogContent(slug);
}

function viewBlogList() {
    // SPA içinde blog sayfasını göster
    showPage('blog');

    try {
        const base = window.location.origin || "";
        const newUrl = `${base}/blog`;
        window.history.pushState({ type: 'blog-list' }, '', newUrl);
    } catch (e) {
        console.log("Path tabanlı URL güncelleme desteklenmiyor, query string'e düşüyorum.");
        try {
            const url = new URL(window.location);
            url.searchParams.set('page', 'blog');
            url.searchParams.delete('post');
            window.history.pushState({ type: 'blog-list' }, '', url);
        } catch (err) {
            console.log("URL güncelleme tamamen desteklenmiyor.");
        }
    }

    loadBlogContent(null);
}

/* ============ ÖZEL BLOG LAYOUT FONKSİYONLARI ============ */

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

/* ============ GLUTENSİZ MENÜ ÖZEL SAYFA ============ */

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

                <div id="menusGridGluten" class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full card-hover border border-indigo-100">
                        <div class="flex justify-between items-start mb-4">
                            <h3 class="text-xl font-bold text-indigo-600">1. Tavuklu & Sebzeli Quinoa</h3>
                            <span class="bg-green-50 text-green-700 text-sm font-bold px-3 py-1 rounded-full">~ 850 kcal</span>
                        </div>
                        <p class="text-sm text-stone-500 mb-4 italic">"Doyurucu ve yüksek lifli, tam bir sporcu menüsü."</p>
                        <div class="mt-auto space-y-3 bg-stone-50 p-4 rounded-lg border border-stone-100">
                            <div class="flex items-start gap-2">
                                <span class="text-lg mt-0.5">🍗</span>
                                <div>
                                    <strong class="text-xs text-stone-400 uppercase tracking-wide block">Ana yemek</strong>
                                    <span class="text-sm text-stone-800 font-medium">Buharda pişirilmiş veya ızgara tavuk göğsü</span>
                                </div>
                            </div>
                            <div class="flex items-start gap-2">
                                <span class="text-lg mt-0.5">🍚</span>
                                <div>
                                    <strong class="text-xs text-stone-400 uppercase tracking-wide block">Yan lezzet</strong>
                                    <span class="text-sm text-stone-800 font-medium">Kinoa salatası (limon soslu)</span>
                                </div>
                            </div>
                            <div class="flex items-start gap-2">
                                <span class="text-lg mt-0.5">🍰</span>
                                <div>
                                    <strong class="text-xs text-stone-400 uppercase tracking-wide block">Tatlı</strong>
                                    <span class="text-sm text-stone-800 font-medium">Bir porsiyon taze meyve (muz/elma)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full card-hover border border-indigo-100">
                        <div class="flex justify-between items-start mb-4">
                            <h3 class="text-xl font-bold text-indigo-600">2. Mercimek Köftesi & Yeşil Salata</h3>
                            <span class="bg-green-50 text-green-700 text-sm font-bold px-3 py-1 rounded-full">~ 700 kcal</span>
                        </div>
                        <p class="text-sm text-stone-500 mb-4 italic">"Vegan, glutensiz ve doyurucu bir ana öğün alternatifi."</p>
                        <div class="mt-auto space-y-3 bg-stone-50 p-4 rounded-lg border border-stone-100">
                            <div class="flex items-start gap-2">
                                <span class="text-lg mt-0.5">🧆</span>
                                <div>
                                    <strong class="text-xs text-stone-400 uppercase tracking-wide block">Ana yemek</strong>
                                    <span class="text-sm text-stone-800 font-medium">Kırmızı mercimek köftesi</span>
                                </div>
                            </div>
                            <div class="flex items-start gap-2">
                                <span class="text-lg mt-0.5">🥗</span>
                                <div>
                                    <strong class="text-xs text-stone-400 uppercase tracking-wide block">Yan lezzet</strong>
                                    <span class="text-sm text-stone-800 font-medium">Bol limonlu mevsim yeşillikleri salatası</span>
                                </div>
                            </div>
                            <div class="flex items-start gap-2">
                                <span class="text-lg mt-0.5">🥛</span>
                                <div>
                                    <strong class="text-xs text-stone-400 uppercase tracking-wide block">İçecek</strong>
                                    <span class="text-sm text-stone-800 font-medium">Büyük bir kase ev yapımı cacık veya ayran</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full card-hover border border-indigo-100">
                        <div class="flex justify-between items-start mb-4">
                            <h3 class="text-xl font-bold text-indigo-600">3. Fırında Somon & Tatlı Patates</h3>
                            <span class="bg-green-50 text-green-700 text-sm font-bold px-3 py-1 rounded-full">~ 900 kcal</span>
                        </div>
                        <p class="text-sm text-stone-500 mb-4 italic">"Fırında kolay hazırlanan, sağlıklı ve lezzetli menü."</p>
                        <div class="mt-auto space-y-3 bg-stone-50 p-4 rounded-lg border border-stone-100">
                            <div class="flex items-start gap-2">
                                <span class="text-lg mt-0.5">🐟</span>
                                <div>
                                    <strong class="text-xs text-stone-400 uppercase tracking-wide block">Ana yemek</strong>
                                    <span class="text-sm text-stone-800 font-medium">Fırında somon (dereotu, zeytinyağı ile)</span>
                                </div>
                            </div>
                            <div class="flex items-start gap-2">
                                <span class="text-lg mt-0.5">🥔</span>
                                <div>
                                    <strong class="text-xs text-stone-400 uppercase tracking-wide block">Yan lezzet</strong>
                                    <span class="text-sm text-stone-800 font-medium">Fırında baharatlı tatlı patates dilimleri</span>
                                </div>
                            </div>
                            <div class="flex items-start gap-2">
                                <span class="text-lg mt-0.5">🍊</span>
                                <div>
                                    <strong class="text-xs text-stone-400 uppercase tracking-wide block">Tatlı</strong>
                                    <span class="text-sm text-stone-800 font-medium">Nar taneleri ve tarçınlı yoğurt</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full card-hover border border-indigo-100">
                        <div class="flex justify-between items-start mb-4">
                            <h3 class="text-xl font-bold text-indigo-600">4. Kırmızı Et ve Enginar</h3>
                            <span class="bg-green-50 text-green-700 text-sm font-bold px-3 py-1 rounded-full">~ 1100 kcal</span>
                        </div>
                        <p class="text-sm text-stone-500 mb-4 italic">"Doyurucu kırmızı et menüsüne hafif ve zarif bir yan lezzet."</p>
                        <div class="mt-auto space-y-3 bg-stone-50 p-4 rounded-lg border border-stone-100">
                            <div class="flex items-start gap-2">
                                <span class="text-lg mt-0.5">🥩</span>
                                <div>
                                    <strong class="text-xs text-stone-400 uppercase tracking-wide block">Ana yemek</strong>
                                    <span class="text-sm text-stone-800 font-medium">Izgara antrikot veya bonfile</span>
                                </div>
                            </div>
                            <div class="flex items-start gap-2">
                                <span class="text-lg mt-0.5">🍲</span>
                                <div>
                                    <strong class="text-xs text-stone-400 uppercase tracking-wide block">Yan lezzet</strong>
                                    <span class="text-sm text-stone-800 font-medium">Zeytinyağlı taze enginar (pirinçsiz)</span>
                                </div>
                            </div>
                            <div class="flex items-start gap-2">
                                <span class="text-lg mt-0.5">🥂</span>
                                <div>
                                    <strong class="text-xs text-stone-400 uppercase tracking-wide block">İçecek</strong>
                                    <span class="text-sm text-stone-800 font-medium">Sek kırmızı şarap (bir kadeh)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full card-hover border border-indigo-100">
                        <div class="flex justify-between items-start mb-4">
                            <h3 class="text-xl font-bold text-indigo-600">5. Tavuklu Çorba ve Glutensiz Ekmek</h3>
                            <span class="bg-green-50 text-green-700 text-sm font-bold px-3 py-1 rounded-full">~ 550 kcal</span>
                        </div>
                        <p class="text-sm text-stone-500 mb-4 italic">"Soğuk kış günleri için hafif ve tam koruyucu menü."</p>
                        <div class="mt-auto space-y-3 bg-stone-50 p-4 rounded-lg border border-stone-100">
                            <div class="flex items-start gap-2">
                                <span class="text-lg mt-0.5">🥣</span>
                                <div>
                                    <strong class="text-xs text-stone-400 uppercase tracking-wide block">Ana yemek</strong>
                                    <span class="text-sm text-stone-800 font-medium">Sebzeli tavuk suyu çorbası (glütensiz erişteyle)</span>
                                </div>
                            </div>
                            <div class="flex items-start gap-2">
                                <span class="text-lg mt-0.5">🍞</span>
                                <div>
                                    <strong class="text-xs text-stone-400 uppercase tracking-wide block">Yan lezzet</strong>
                                    <span class="text-sm text-stone-800 font-medium">Glutensiz tam buğday ekmeği</span>
                                </div>
                            </div>
                            <div class="flex items-start gap-2">
                                <span class="text-lg mt-0.5">🍯</span>
                                <div>
                                    <strong class="text-xs text-stone-400 uppercase tracking-wide block">Tatlı</strong>
                                    <span class="text-sm text-stone-800 font-medium">Az şekerli komposto</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full card-hover border border-indigo-100">
                        <div class="flex justify-between items-start mb-4">
                            <h3 class="text-xl font-bold text-indigo-600">6. Mısır Unlu Hamsi Tava & Roka Salatası</h3>
                            <span class="bg-green-50 text-green-700 text-sm font-bold px-3 py-1 rounded-full">~ 950 kcal</span>
                        </div>
                        <p class="text-sm text-stone-500 mb-4 italic">"Karadeniz'in klasiği, mısır unu ile glütensiz ve çıtır."</p>
                        <div class="mt-auto space-y-3 bg-stone-50 p-4 rounded-lg border border-stone-100">
                            <div class="flex items-start gap-2">
                                <span class="text-lg mt-0.5">🎣</span>
                                <div>
                                    <strong class="text-xs text-stone-400 uppercase tracking-wide block">Ana yemek</strong>
                                    <span class="text-sm text-stone-800 font-medium">Mısır unlu hamsi tava</span>
                                </div>
                            </div>
                            <div class="flex items-start gap-2">
                                <span class="text-lg mt-0.5">🥗</span>
                                <div>
                                    <strong class="text-xs text-stone-400 uppercase tracking-wide block">Yan lezzet</strong>
                                    <span class="text-sm text-stone-800 font-medium">Bol soğanlı, nar ekşili roka salatası</span>
                                </div>
                            </div>
                            <div class="flex items-start gap-2">
                                <span class="text-lg mt-0.5">🍋</span>
                                <div>
                                    <strong class="text-xs text-stone-400 uppercase tracking-wide block">İçecek</strong>
                                    <span class="text-sm text-stone-800 font-medium">Taze limonata veya şalgam suyu</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full card-hover border border-indigo-100">
                        <div class="flex justify-between items-start mb-4">
                            <h3 class="text-xl font-bold text-indigo-600">7. Köri Soslu Tavuk & Pirinç Pilavı</h3>
                            <span class="bg-green-50 text-green-700 text-sm font-bold px-3 py-1 rounded-full">~ 1050 kcal</span>
                        </div>
                        <p class="text-sm text-stone-500 mb-4 italic">"Uzakdoğu esintisi taşıyan, krema yerine Hindistan cevizi sütüyle hazırlanan glütensiz menü."</p>
                        <div class="mt-auto space-y-3 bg-stone-50 p-4 rounded-lg border border-stone-100">
                            <div class="flex items-start gap-2">
                                <span class="text-lg mt-0.5">🍛</span>
                                <div>
                                    <strong class="text-xs text-stone-400 uppercase tracking-wide block">Ana yemek</strong>
                                    <span class="text-sm text-stone-800 font-medium">Tavuklu sarı köri (Hindistan cevizi sütü ile)</span>
                                </div>
                            </div>
                            <div class="flex items-start gap-2">
                                <span class="text-lg mt-0.5">🍚</span>
                                <div>
                                    <strong class="text-xs text-stone-400 uppercase tracking-wide block">Yan lezzet</strong>
                                    <span class="text-sm text-stone-800 font-medium">Sade pirinç pilavı (bol tereyağsız)</span>
                                </div>
                            </div>
                            <div class="flex items-start gap-2">
                                <span class="text-lg mt-0.5">🍍</span>
                                <div>
                                    <strong class="text-xs text-stone-400 uppercase tracking-wide block">Tatlı</strong>
                                    <span class="text-sm text-stone-800 font-medium">Izgara ananas dilimi (tarçınlı)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
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
                        <a href="/blog/pratik-menu-onerileri" class="underline hover:text-indigo-800 transition" onclick="viewBlogPost('pratik-menu-onerileri'); return false;">
                            Pratik Menü Önerileri: 30 Dakikada Hazırlanan Menüler
                        </a>
                    </li>
                    <li>
                        <a href="/blog/pilav-yanina-hangi-yemek-gider" class="underline hover:text-indigo-800 transition" onclick="viewBlogPost('pilav-yanina-hangi-yemek-gider'); return false;">
                            Pilav Rehberi: Hangi Pilav Hangi Yemeğe?
                        </a>
                    </li>
                    <li>
                        <a href="/blog/etin-yanina-ne-gider" class="underline hover:text-indigo-800 transition" onclick="viewBlogPost('etin-yanina-ne-gider'); return false;">
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

/* ============ PRATİK MENÜ ÖZEL SAYFA ============ */

function renderPratikBlogPost(container, post) {
    container.innerHTML = `
        <button onclick="viewBlogList()" class="text-blue-600 font-semibold mb-4 hover:underline" type="button">
            ← Blog Listesine Dön
        </button>

        <article class="space-y-10 bg-transparent">
            <header class="text-center max-w-3xl mx-auto space-y-4">
                <h2 class="text-3xl md:text-4xl font-extrabold text-orange-600">
                    30 Dakikada Sofranız Hazır
                </h2>
                <p class="text-lg text-stone-600 leading-relaxed">
                    "Akşam ne pişirsem?" derdine son. Zamanı kısıtlı olanlar, öğrenciler ve çalışanlar için özel olarak hazırlanmış,
                    maksimum 25 dakikada hazırlanan <strong>8 hayat kurtarıcı menü</strong>.
                </p>
                <div class="flex flex-wrap justify-center gap-3 mt-4">
                    <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">⏱ Hızlı</span>
                    <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">💸 Ekonomik</span>
                    <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">😋 Lezzetli</span>
                </div>
            </header>

            <section>
                <div class="flex flex-col md:flex-row justify-between items-end mb-6">
                    <div>
                        <h3 class="text-xl font-bold text-stone-800 flex items-center gap-2">
                            <span>🌟</span> Pratik Menü İçin 5 Altın Kural
                        </h3>
                        <p class="text-stone-600 text-sm mt-1">Hız kazanmak için ipuçlarına göz atın.</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-5 gap-4" id="rulesContainerPratik"></div>
            </section>

            <section id="menu-explorer-pratik" class="scroll-mt-20">
                <div class="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                    <div>
                        <h3 class="text-2xl font-bold text-stone-900">Menüleri Keşfet</h3>
                        <p class="text-stone-600 text-sm">Damak tadınıza ve vaktinize uygun menüyü seçin.</p>
                    </div>
                    
                    <div class="flex bg-white p-1 rounded-lg border border-stone-200 shadow-sm">
                        <button onclick="filterPratikMenus('all')" id="btn-all-pratik" class="px-4 py-2 text-sm font-medium rounded-md bg-orange-500 text-white transition-colors">
                            Tümü
                        </button>
                        <button onclick="filterPratikMenus('fast')" id="btn-fast-pratik" class="px-4 py-2 text-sm font-medium rounded-md text-stone-600 hover:bg-stone-100 transition-colors">
                            20 dk Altı
                        </button>
                    </div>
                </div>

                <div id="menusGridPratik" class="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
            </section>

            <section class="bg-stone-800 text-stone-300 rounded-2xl p-8 text-center space-y-4">
                <h4 class="text-xl font-semibold text-white">Ekstra Hız İpuçları</h4>
                <ul class="flex flex-wrap justify-center gap-6 text-sm">
                    <li class="flex items-center gap-2">
                        <span class="text-orange-400">●</span> Hafta başı haşlama yapın
                    </li>
                    <li class="flex items-center gap-2">
                        <span class="text-orange-400">●</span> Dolapta yeşillik bulundurun
                    </li>
                    <li class="flex items-center gap-2">
                        <span class="text-orange-400">●</span> Tek tava yemeklerini seçin
                    </li>
                </ul>
                <hr class="border-stone-700 max-w-xs mx-auto my-4">
                <p class="text-xs text-stone-500">
                    2025 © Pratik Menü Rehberi. Kaynak: Pratik Menü Önerileri.
                </p>
            </section>
        </article>

        <div class="mt-6">
            <a 
                id="twitterShareBtn"
                href="#"
                target="_blank"
                class="inline-flex items-center px-4 py-2 bg-orange-600 text-white font-semibold rounded-lg shadow hover:bg-orange-700 transition"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.5 3L10 12l-5.5 9h3L12 14.5 16.5 21h3L14 12l5.5-9h-3L12 9.5 7.5 3h-3z"/>
                </svg>
                X'te Pratik Menü Yazısını Paylaş
            </a>
        </div>
    `;

    const rulesData = [
        { title: "Donuk Sebze", icon: "🧊", desc: "Doğrama süresini sıfırlar, besin değerini korur." },
        { title: "Konserve", icon: "🥫", desc: "Nohut, domates, mısır... Hazırlığı dakikalara indirir." },
        { title: "Tek Kap", icon: "🥘", desc: "Fırın yerine tencere/tava kullanın, bulaşığı azaltın." },
        { title: "Porsiyonluk", icon: "📦", desc: "Buzlukta hazır porsiyon köfte/et saklayın." },
        { title: "Hazır Sos", icon: "🥣", desc: "Salça-baharat-yağ karışımını kavanozda hazır tutun." }
    ];

    const rulesContainer = document.getElementById('rulesContainerPratik');
    if (rulesContainer) {
        rulesContainer.innerHTML = rulesData.map(rule => `
            <div class="bg-white p-4 rounded-xl shadow-sm border border-stone-100 hover:border-orange-200 transition cursor-default group">
                <div class="text-3xl mb-2 group-hover:scale-110 transition-transform">${rule.icon}</div>
                <h4 class="font-bold text-stone-800 mb-1 text-sm">${rule.title}</h4>
                <p class="text-xs text-stone-500 leading-snug">${rule.desc}</p>
            </div>
        `).join('');
    }

    const menuData = [
        { id: 1, title: "Somon Tava & Yeşillik", time: 20, desc: "Hafif, omega-3 zengini, tek tava menü.", main: "Tavada somon fileto (Tuz, karabiber, limon)", side: "Hazır salata karışımı (Yeşillik, domates, sos)", icon: "🐟" },
        { id: 2, title: "Tek Kapta Tavuk", time: 25, desc: "Tek tavada hem protein hem sebze.", main: "Sebzeli tavuk sote (Tavuk, donuk sebze, soya sosu)", side: "Hızlı makarna / erişte (5 dk)", icon: "🍗" },
        { id: 3, title: "Pratik Yumurta Ziyafeti", time: 15, desc: "Dolapta ne varsa yumurtayla taçlanır.", main: "Menemen veya hızlı omlet", side: "Peynir tabağı & Çay", icon: "🍳" },
        { id: 4, title: "Konserve Kolaylığı", time: 15, desc: "Dolapta konserve varsa, aç-kapa menü.", main: "Nohut güveç (Konserve nohut, domates, baharat)", side: "Yoğurtlu sos / Cacık & Maden Suyu", icon: "🥫" },
        { id: 5, title: "Tek Tencerede Makarna", time: 25, desc: "Karbonhidrat + protein dengeli, tek kap çözüm.", main: "Domatesli ton balıklı makarna", side: "Roka salatası (Limon, zeytinyağı)", icon: "🍝" },
        { id: 6, title: "Hızlı Pizza Alternatifi", time: 10, desc: "Lavaşla mini pizza / tost hissi.", main: "Lavaş üstü tost / pizza (Salça, peynir, salamura sebze)", side: "Ayran", icon: "🍕" },
        { id: 7, title: "Hazır Köfte Hızlandırıcısı", time: 20, desc: "Buzluktaki köfteyle 20 dakikada sofra.", main: "Hazır köfte ve hazır/toz püre", side: "Turşu veya köz biber konservesi", icon: "🧆" },
        { id: 8, title: "Bakliyat Gücü", time: 20, desc: "Dolapta haşlanmış mercimek varsa, menü hazır.", main: "Hızlı mercimek yemeği (Haşlanmış mercimek, salça, soğan)", side: "Kuru soğan / pirinç sirkeli salata", icon: "🍲" }
    ];

    function renderPratikMenus(filterType = 'all') {
        const containerMenus = document.getElementById('menusGridPratik');
        if (!containerMenus) return;

        const filteredData = filterType === 'fast'
            ? menuData.filter(m => m.time < 20)
            : menuData;

        containerMenus.innerHTML = filteredData.map(menu => `
            <div class="bg-white rounded-xl border border-stone-200 p-6 flex flex-col h-full card-hover relative overflow-hidden">
                <div class="absolute top-0 right-0 p-4 opacity-10 text-6xl pointer-events-none select-none">
                    ${menu.icon}
                </div>
                
                <div class="flex justify-between items-start mb-4 relative z-10">
                    <div class="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full">
                        ~ ${menu.time} dk
                    </div>
                </div>

                <h3 class="text-xl font-bold text-stone-900 mb-2 relative z-10">
                    ${menu.id}. ${menu.title}
                </h3>
                
                <p class="text-sm text-stone-500 mb-4 italic relative z-10">
                    "${menu.desc}"
                </p>

                <div class="mt-auto space-y-3 bg-stone-50 p-4 rounded-lg relative z-10">
                    <div class="flex items-start gap-2">
                        <span class="text-lg mt-0.5">🥘</span>
                        <div>
                            <strong class="text-xs text-stone-400 uppercase tracking-wide block">Ana Yemek</strong>
                            <span class="text-sm text-stone-800 font-medium">${menu.main}</span>
                        </div>
                    </div>
                    <div class="flex items-start gap-2">
                        <span class="text-lg mt-0.5">🥗</span>
                        <div>
                            <strong class="text-xs text-stone-400 uppercase tracking-wide block">Yan Lezzet</strong>
                            <span class="text-sm text-stone-800 font-medium">${menu.side}</span>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Global'e aç (HTML onclick için)
    window.filterPratikMenus = function(type) {
        const btnAll = document.getElementById('btn-all-pratik');
        const btnFast = document.getElementById('btn-fast-pratik');

        if (btnAll && btnFast) {
            if (type === 'all') {
                btnAll.className = "px-4 py-2 text-sm font-medium rounded-md bg-orange-500 text-white shadow-sm transition-all";
                btnFast.className = "px-4 py-2 text-sm font-medium rounded-md text-stone-600 hover:bg-stone-100 transition-all";
            } else {
                btnAll.className = "px-4 py-2 text-sm font-medium rounded-md text-stone-600 hover:bg-stone-100 transition-all";
                btnFast.className = "px-4 py-2 text-sm font-medium rounded-md bg-green-600 text-white shadow-sm transition-all";
            }
        }

        renderPratikMenus(type);
    };

    renderPratikMenus('all');
}

/* ============ YILBAŞI MENÜ ÖZEL SAYFA ============ */

function renderYilbasiBlogPost(container, post) {
    container.innerHTML = `
        <button onclick="viewBlogList()" class="text-blue-600 font-semibold mb-4 hover:underline" type="button">
            ← Geri Dön
        </button>

        <article class="space-y-10">
            <header class="text-center max-w-3xl mx-auto space-y-4">
                <h1 class="text-3xl md:text-4xl font-extrabold text-red-600">
                    🎄 Unutulmaz Yılbaşı Menüleri
                </h1>
                <p class="text-lg text-stone-600 leading-relaxed">
                    Bu özel akşam için, başlangıçtan tatlıya kadar her detayı düşünülmüş
                    <strong>4 farklı tematik menü</strong> hazırladık. İster klasik ister hafif olsun, misafirlerinizi etkileyecek sofrayı kurun.
                </p>
                <div class="flex flex-wrap justify-center gap-3 mt-4">
                    <span class="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold">✨ Şölen hissi</span>
                    <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">🥂 Kutlama zamanı</span>
                </div>
            </header>

            <section id="menu-explorer-yilbasi" class="scroll-mt-20">
                <div class="mb-6">
                    <h2 class="text-2xl font-bold text-stone-900">Tematik menü setleri</h2>
                    <p class="text-stone-600 text-sm">Temanıza uygun menüyü seçin ve hazırlıklara başlayın.</p>
                </div>

                <div id="menusGridYilbasi" class="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
            </section>

            <section>
                <div class="flex flex-col md:flex-row justify-between items-end mb-6">
                    <div>
                        <h3 class="text-xl font-bold text-stone-800 flex items-center gap-2">
                            <span>⏱</span> Yılbaşı sofrası 4 planlama aşaması
                        </h3>
                        <p class="text-stone-600 text-sm mt-1">
                            Stresi azaltmak ve gecenin tadını çıkarmak için ipuçları.
                        </p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-4 gap-4" id="rulesContainerYilbasi"></div>
            </section>

            <section class="bg-stone-800 text-stone-300 rounded-2xl p-8 text-center space-y-4">
                <h4 class="text-xl font-semibold text-white">Ekstra sofrayı zenginleştirme ipuçları</h4>
                <ul class="flex flex-wrap justify-center gap-6 text-sm">
                    <li class="flex items-center gap-2">
                        <span class="text-red-400">★</span> Kokteyl öncesi hafif atıştırmalıklar hazırlayın.
                    </li>
                    <li class="flex items-center gap-2">
                        <span class="text-red-400">★</span> Masada mutlaka bir yılbaşı çiçeği bulundurun.
                    </li>
                    <li class="flex items-center gap-2">
                        <span class="text-red-400">★</span> Yemek sonrası kahve yanına likör ikram edin.
                    </li>
                </ul>
                <hr class="border-stone-700 max-w-xs mx-auto my-4">
                <p class="text-xs text-stone-500">
                    2025 © Yılbaşı Sofrası Rehberi. Kaynak: Yılbaşı Sofrası Menü Önerileri Raporu.
                </p>
            </section>
        </article>
        
        <div class="mt-6">
            <a 
                id="twitterShareBtn"
                href="#"
                target="_blank"
                class="inline-flex items-center px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700 transition"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.5 3L10 12l-5.5 9h3L12 14.5 16.5 21h3L14 12l5.5-9h-3L12 9.5 7.5 3h-3z"/>
                </svg>
                X'te Yılbaşı Menü Yazısını Paylaş
            </a>
        </div>
    `;

    const menuDataYilbasi = [
        {
            id: 1,
            title: "Klasik Türk sofrası",
            kcal: 1500,
            desc: "Geleneksel lezzetlerin başrolde olduğu, doyurucu ve büyük bir kutlama menüsü.",
            main: "Kestaneli iç pilavlı bütün hindi",
            side: "Zeytinyağlı enginar, Rus salatası ve haydari",
            dessert: "Cevizli kabak tatlısı",
            themeColor: "text-red-600",
            bgColor: "border-red-100",
            icon: "🦃"
        },
        {
            id: 2,
            title: "Akdeniz esintisi",
            kcal: 1100,
            desc: "Daha hafif, ferahlatıcı ve modern bir lezzet arayanlar için zarif bir seçenek.",
            main: "Mantar soslu ızgara somon fileto",
            side: "Roka ve nar ekşili yeşil salata, fırınlanmış biberli patates",
            dessert: "Hafif sütlaç veya taze meyve tabağı",
            themeColor: "text-blue-600",
            bgColor: "border-blue-100",
            icon: "🐟"
        },
        {
            id: 3,
            title: "Gurme et ziyafeti",
            kcal: 1800,
            desc: "Yoğun lezzetleri, kremalı eşlikçileri ve sofistike sosları sevenler için.",
            main: "Dana rosto (kırmızı şarap soslu)",
            side: "Kremalı patates püresi, buharda kuşkonmaz",
            dessert: "Sıcak çikolatalı sufle",
            themeColor: "text-purple-600",
            bgColor: "border-purple-100",
            icon: "🥩"
        },
        {
            id: 4,
            title: "Vejetaryen şölen",
            kcal: 1000,
            desc: "Etsiz, ancak zengin ve çok katmanlı lezzetlere sahip unutulmaz bir menü.",
            main: "Fırında peynirli ıspanak lazanya",
            side: "Yeşil mercimek salatası, közlenmiş kök sebzeler",
            dessert: "Kaymaklı ayva tatlısı",
            themeColor: "text-green-600",
            bgColor: "border-green-100",
            icon: "🥬"
        }
    ];

    const rulesDataYilbasi = [
        { title: "Zamanlama", icon: "⏱️", desc: "Tüm yemeklerin pişirme ve servis saatlerini misafirlerin gelişine göre planlayın." },
        { title: "Denge", icon: "⚖️", desc: "Ana yemek ne kadar ağırsa, başlangıç ve yan lezzetleri o kadar hafif tutarak dengeleyin." },
        { title: "İçecek uyumu", icon: "🍷", desc: "Menüdeki ana protein türü (kırmızı et, balık vb.) ile uyumlu içecekleri belirleyin." },
        { title: "Ambians", icon: "🕯️", desc: "Sofra düzeni, mumlar ve özel müzik listesi ile gecenin atmosferini tamamlayın." }
    ];

    const gridY = document.getElementById('menusGridYilbasi');
    if (gridY) {
        gridY.innerHTML = menuDataYilbasi.map(menu => `
            <div class="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full card-hover border ${menu.bgColor}">
                <div class="flex justify-between items-start mb-4">
                    <h3 class="text-xl font-bold ${menu.themeColor}">${menu.id}. ${menu.title}</h3>
                    <span class="bg-yellow-50 text-yellow-700 text-sm font-bold px-3 py-1 rounded-full">~ ${menu.kcal} kcal</span>
                </div>

                <p class="text-sm text-stone-500 mb-4 italic">
                    "${menu.desc}"
                </p>

                <div class="mt-auto space-y-3 bg-stone-50 p-4 rounded-lg border border-stone-100">
                    <div class="flex items-start gap-2">
                        <span class="text-lg mt-0.5">${menu.icon}</span>
                        <div>
                            <strong class="text-xs text-stone-400 uppercase tracking-wide block">Ana yemek</strong>
                            <span class="text-sm text-stone-800 font-medium">${menu.main}</span>
                        </div>
                    </div>
                    <div class="flex items-start gap-2">
                        <span class="text-lg mt-0.5">🍚</span>
                        <div>
                            <strong class="text-xs text-stone-400 uppercase tracking-wide block">Yan / başlangıç</strong>
                            <span class="text-sm text-stone-800 font-medium">${menu.side}</span>
                        </div>
                    </div>
                    <div class="flex items-start gap-2">
                        <span class="text-lg mt-0.5">🍰</span>
                        <div>
                            <strong class="text-xs text-stone-400 uppercase tracking-wide block">Tatlı</strong>
                            <span class="text-sm text-stone-800 font-medium">${menu.dessert}</span>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    const rulesY = document.getElementById('rulesContainerYilbasi');
    if (rulesY) {
        rulesY.innerHTML = rulesDataYilbasi.map(rule => `
            <div class="bg-white p-4 rounded-xl shadow-sm border border-stone-100 hover:border-red-200 transition cursor-default group">
                <div class="text-3xl mb-2 group-hover:scale-110 transition-transform">${rule.icon}</div>
                <h4 class="font-bold text-stone-800 mb-1 text-sm">${rule.title}</h4>
                <p class="text-xs text-stone-500 leading-snug">${rule.desc}</p>
            </div>
        `).join('');
    }
}


/* ============ BLOG İÇERİK YÜKLEYİCİ ============ */

function loadBlogContent(postSlug = null) {
    const container = document.getElementById('blog-posts-container');
    if (!container) return;

    // Hem window.blogPostsData hem de global blogPostsData üzerinden dene
    const data =
        (typeof window !== 'undefined' && Array.isArray(window.blogPostsData))
            ? window.blogPostsData
            : (typeof blogPostsData !== 'undefined' ? blogPostsData : null);

    if (!data || !Array.isArray(data)) {
        console.error('Blog verisi bulunamadı (blogPostsData).');
        container.innerHTML = `
            <div class="p-6 bg-white rounded-2xl shadow-xl">
                <p class="text-red-600 font-semibold">
                    Blog verisi yüklenirken bir hata oluştu. Lütfen sayfayı yenileyin.
                </p>
            </div>
        `;
        return;
    }

    container.innerHTML = '';

    // TEK YAZI GÖRÜNÜMÜ
    if (postSlug) {
        const post = data.find(p => p.slug === postSlug);

        if (post) {
            // <title> ve <meta description> güncelle
            if (post.metaTitle) {
                document.title = post.metaTitle;
            } else {
                document.title = `${post.title} - Yanında Ne Yiyelim?`;
            }

            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
                if (post.metaDescription) {
                    metaDesc.setAttribute('content', post.metaDescription);
                } else {
                    metaDesc.setAttribute(
                        'content',
                        'Blog yazılarımızı keşfedin. Menü önerileri, özel gün sofraları ve yanına ne gider içerikleri.'
                    );
                }
            }

            // Özel layout’lar
            if (post.slug === 'glutensiz-menu-onerileri') {
                renderGlutenFreeBlogPost(container, post);
            } else if (post.slug === 'pratik-menu-onerileri') {
                renderPratikBlogPost(container, post);
            } else if (post.slug === 'yilbasi-sofra-menu-onerileri') {
                renderYilbasiBlogPost(container, post);
            } else {
                renderDefaultBlogPost(container, post);
            }

            // X (Twitter) paylaşım linki
            const twitterBtn = document.getElementById('twitterShareBtn');
            if (twitterBtn) {
                const shareUrl =
                    'https://twitter.com/intent/tweet?text=' +
                    encodeURIComponent(post.title) +
                    '&url=' +
                    encodeURIComponent(window.location.href);

                twitterBtn.href = shareUrl;
            }
        } else {
            // slug bulunamadı → 404 mesajı
            container.innerHTML = `
                <button onclick="viewBlogList()" class="text-blue-600 font-semibold mb-4 hover:underline" type="button">
                    ← Blog listesine dön
                </button>
                <div class="p-6 bg-white rounded-2xl shadow-xl">
                    <p class="text-gray-800 font-semibold mb-2">Yazı bulunamadı.</p>
                    <p class="text-sm text-gray-500">Bağlantı eski olabilir veya yazı kaldırılmış olabilir.</p>
                </div>
            `;
        }

        return; // tek yazı modunda burada bitiriyoruz
    }

    // LİSTE GÖRÜNÜMÜ
    data.forEach(post => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML =
            post.content ||
            `<p>${post.description || 'İçerik önizlemesi...'}</p>`;

        const firstP = tempDiv.querySelector('p');
        const previewText = firstP
            ? firstP.innerText.substring(0, 100)
            : 'İçerik önizlemesi...';

        container.innerHTML += `
            <article class="p-4 bg-white rounded-xl shadow-sm border border-gray-100 mb-4">
                <span class="text-xs font-bold text-green-600 uppercase">
                    ${post.category || 'Blog'}
                </span>
                <h3 class="text-xl font-bold mt-1 mb-2">
                    ${post.title}
                </h3>
                <p class="text-gray-600 text-sm mb-4">
                    ${previewText}...
                </p>
                <button
                    onclick="viewBlogPost('${post.slug}')"
                    type="button"
                    class="text-blue-600 font-semibold text-sm hover:underline"
                >
                    Devamını Oku →
                </button>
            </article>
        `;
    });
}

// --- ARAMA (performSearch) ---
function performSearch() {
    const input = document.getElementById('mainDishInput');
    const filter = document.getElementById('cuisineFilter');
    const container = document.getElementById('resultsContainer');
    
    const bottomAd = document.getElementById('bottomAdContainer'); 

    if (!window.dishSuggestions || !window.suggestionCategories) {
        console.error('Data loading error: dishSuggestions or suggestionCategories not defined.');
        container.innerHTML = '<p class="text-red-500 italic">Hata: Yemek öneri verileri yüklenemedi.</p>';
        return;
    }

    if (!document.getElementById('page-home').classList.contains('hidden') && bottomAd) {
        bottomAd.classList.remove('hidden');
    }

    const rawQuery = input.value.trim();
    const cuisine = filter.value;
    const query = normalizeText(rawQuery);

    container.innerHTML = '';

    let foundDish = null;
    let isRandom = false;
    const lowCalorieOnly = document.getElementById('lowCalorieFilter')?.checked;

    // 1. Durum: Boş arama (Günün Önerisi)
    if (query.length < 2 && !rawQuery) {
        const filteredDishes = window.dishSuggestions.filter(dish =>
            cuisine === "" || dish.cuisine === cuisine
        );
        if (filteredDishes.length > 0) {
            const randomIndex = Math.floor(Math.random() * filteredDishes.length);
            foundDish = { ...filteredDishes[randomIndex] };
            if (!foundDish.main.startsWith("Günün Önerisi")) {
                foundDish.main = `Günün Önerisi: ${foundDish.main}`;
            }
            isRandom = true;
        }
    } else {
        // 2. Durum: Tam eşleşme / keyword eşleşmesi
        foundDish = window.dishSuggestions.find(d => {
            const normMain = normalizeText(d.main);
            if (normMain === query) return true;
            return d.keywords && d.keywords.some(k => normalizeText(k) === query);
        });

        // 3. Durum: Kısmi eşleşme
        if (!foundDish) {
            foundDish = window.dishSuggestions.find(d => {
                const normMain = normalizeText(d.main);
                if (normMain.startsWith(query)) return true;
                return normMain.includes(query) ||
                    (d.keywords && d.keywords.some(k => normalizeText(k).includes(query)));
            });
        }
    }

    // Eşleşme yok / boş başlangıç
    if (!foundDish && query.length < 2 && cuisine === "") {
        container.innerHTML = '<p class="text-gray-500 italic">Aramaya başlayın...</p>';
        if(bottomAd) bottomAd.classList.add('hidden');
        return;
    } else if (!foundDish) {
        container.innerHTML = `
            <div class="w-full text-center p-4">
                <p class="text-gray-800 font-semibold mb-2">Üzgünüz, aradığınız "${rawQuery}" yemeği için öneri bulamadık.</p>
                <p class="text-sm text-gray-500">Farklı bir arama yapın veya seçili filtreyi kaldırın.</p>
            </div>
        `;
        if(bottomAd) bottomAd.classList.add('hidden');
        return;
    }
    
    // Yemek bulundu
    if (foundDish) {
        const hasCalories = foundDish.calories && foundDish.calories.total;
        const totalCalOrig = hasCalories ? foundDish.calories.total : null;
        const isHighCalorie = hasCalories && totalCalOrig > 1200;

        let effectiveTotalCal = totalCalOrig;
        let dessertCal = 0;
        let extraNote = '';

        if (lowCalorieOnly && isHighCalorie && foundDish.calories.breakdown) {
            dessertCal = foundDish.calories.breakdown.dessert || 0;
            effectiveTotalCal = totalCalOrig - dessertCal;

            if (effectiveTotalCal > 1200) {
                container.innerHTML = `
                    <div class="w-full text-center p-4">
                        <p class="text-gray-800 font-semibold mb-2">
                            Bu yemek, tatlı çıkarılmasına rağmen hala 1200 kcal üzerindedir.
                        </p>
                        <p class="text-sm text-gray-500">
                            Filtreyi kapatarak tüm yemekleri görebilirsiniz.
                        </p>
                    </div>
                `;
                if(bottomAd) bottomAd.classList.add('hidden');
                return;
            }

            extraNote = ' 1200 kcal filtresi aktif olduğu için tatlı menüden çıkarılmıştır; kalori toplamı buna göre yaklaşık olarak güncellenmiştir.';
        }

        let html = '';

        window.suggestionCategories.forEach(cat => {
            const items = foundDish.suggestions[cat.key];

            if (lowCalorieOnly && isHighCalorie && cat.key === 'dessert') {
                return;
            }

            if (items && items.length) {
                html += `
                    <div class="mb-4">
                        <h4 class="font-bold ${cat.color} mb-2">${cat.icon} ${cat.title}</h4>
                        <ul class="space-y-2">${createListHtml(items, cat.color)}</ul>
                    </div>
                `;
            }
        });

        // Kalori bilgisi
        if (hasCalories) {
            const c = foundDish.calories;

            html += `
                <div class="mt-4 p-3 rounded-lg bg-amber-50 border border-amber-200 text-sm text-amber-900">
                    <div class="font-semibold mb-1">🔢 Tahmini Kalori Bilgisi</div>
                    <p class="mb-1">
                        Toplam: <strong>${effectiveTotalCal} kcal</strong>
                    </p>
                    ${
                        c.breakdown
                            ? `<ul class="list-disc ml-4">
                                ${c.breakdown.main ? `<li>Ana yemek: ~${c.breakdown.main} kcal</li>` : ''}
                                ${c.breakdown.yanlar ? `<li>Yan lezzetler: ~${c.breakdown.yanlar} kcal</li>` : ''}
                                ${c.breakdown.drink ? `<li>İçecek: ~${c.breakdown.drink} kcal</li>` : ''}
                                ${
                                    (lowCalorieOnly && isHighCalorie)
                                        ? ''
                                        : (c.breakdown.dessert ? `<li>Tatlı: ~${c.breakdown.dessert} kcal</li>` : '')
                                }
                               </ul>`
                            : ''
                    }
                    <p class="mt-1 text-xs text-amber-700">
                        ${c.note || "Değerler yaklaşık olup porsiyon ve tarifinize göre değişebilir."}${extraNote}
                    </p>
                </div>
            `;
        }

        // Template kullan
        const template = document
            .getElementById('dishDetailTemplate')
            .content
            .cloneNode(true);

        template.querySelector('h2').innerHTML =
            `<span class="text-base text-gray-600">(${foundDish.cuisine})</span><br>"${foundDish.main}" Yanına Ne Gider?`;

        template.querySelector('#suggestionsListContainer').innerHTML = html;

        const info = template.querySelector('#randomInfo');
        if(info) info.style.display = isRandom ? 'block' : 'none';

        container.appendChild(template);
    }

    if (window.innerWidth < 768) {
        input.blur();
    }
}

// --- ÇEREZ / İZİN ---
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

// ============== FONKSİYONLARI GLOBAL’E AÇ ==============
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

// --- TARAYICI İLK YÜKLEME DAVRANIŞI ---
// /, /blog, /blog/slug ve eski ?page=... query yapısını birlikte destekler.
window.addEventListener('load', () => {
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page');

    const path = window.location.pathname || "/";
    // /blog/slug
    const blogMatch = path.match(/^\/blog\/([^\/]+)\/?$/);

    if (blogMatch) {
        const slug = blogMatch[1];
        showPage('blog');
        loadBlogContent(slug);
    } else if (path === '/blog' || path === '/blog/') {
        showPage('blog');
        loadBlogContent(null);
    } else if (page === 'blog') {
        showPage('blog');
        const slug = params.get('post');
        loadBlogContent(slug);
    } else if (page === 'privacy') {
        showPage('privacy');
    } else {
        showPage('home');
        renderHomeBlogSection();
    }

    const bottomAd = document.getElementById('bottomAdContainer');
    if (bottomAd) bottomAd.classList.add('hidden');
    checkConsent();
});

// BACK / FORWARD tuşları için basic popstate desteği (opsiyonel ama faydalı)
window.addEventListener('popstate', (event) => {
    const path = window.location.pathname || "/";
    const blogMatch = path.match(/^\/blog\/([^\/]+)\/?$/);

    if (blogMatch) {
        const slug = blogMatch[1];
        showPage('blog');
        loadBlogContent(slug);
    } else if (path === '/blog' || path === '/blog/') {
        showPage('blog');
        loadBlogContent(null);
    } else if (path === '/privacy' || path === '/privacy/') {
        showPage('privacy');
    } else {
        showPage('home');
        renderHomeBlogSection();
    }
});
