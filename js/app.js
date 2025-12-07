// app.js (Düzeltilmiş Versiyon)

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
    return items.map(item => `
        <li class="flex items-start p-3 bg-white rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition duration-150">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ${colorClass} mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <span class="text-gray-700 font-medium">${item}</span>
        </li>
    `).join('');
}

// Global'e aç
window.normalizeText = normalizeText;
window.createListHtml = createListHtml;

// --- SIDEBAR VE SAYFA GEÇİŞLERİ ---
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

function showPage(pageId, fromSidebar = false) {
    document.getElementById('page-home').classList.add('hidden');
    document.getElementById('page-blog').classList.add('hidden');
    document.getElementById('page-privacy').classList.add('hidden');

    document.getElementById(`page-${pageId}`).classList.remove('hidden');

    const bottomAd = document.getElementById('bottomAdContainer');
    if (pageId === 'home') {
        bottomAd.classList.add('hidden');
        // Ana sayfaya her dönüldüğünde blog önerilerini yeniden yükle
        if (window.renderHomeBlogSection) {
            renderHomeBlogSection();
        }
    } else {
        bottomAd.classList.remove('hidden');
    }

    if (pageId === 'blog') {
        const params = new URLSearchParams(window.location.search);
        const slug = params.get('post');
        // loadBlogContent artık global blogPostsData'yı kullanacak
        loadBlogContent(slug); 
    }

    // Title yönetimi
    // ... (Title yönetimi kodunun geri kalanı)

    if (fromSidebar) hideSidebar();
    window.scrollTo(0, 0);

    // URL yönetimi
    // ... (URL yönetimi kodunun geri kalanı)

    try {
        const url = new URL(window.location);
        if (pageId === 'blog') {
            url.searchParams.set('page', 'blog');
        }
        else if (pageId === 'privacy') {
            url.searchParams.set('page', 'privacy');
            url.searchParams.delete('post');
        }
        else {
            url.searchParams.delete('page');
            url.searchParams.delete('post');
        }
        window.history.pushState({}, '', url);
    } catch (e) {
        console.log("URL güncelleme bu ortamda desteklenmiyor");
    }
}


// --- ANA SAYFA BLOG ÖNERİLERİ ---
function renderHomeBlogSection() {
    // KRİTİK KONTROL: Veri var mı?
    if (!window.blogPostsData || !Array.isArray(window.blogPostsData)) return;

    const container = document.getElementById('home-blog-list');
    if (!container) return;

    container.innerHTML = '';

    // En son eklenen 3 yazıyı göster (id'ye göre ters sırala)
    const sorted = [...window.blogPostsData].sort((a, b) => b.id - a.id);
    const latest = sorted.slice(0, 3);

    latest.forEach(post => {
        // Önizleme metnini description'dan veya content'ten temizleyerek al.
        const previewText = post.description || post.excerpt;
        let displayDescription = '';

        if (previewText) {
            displayDescription = `<p class="text-gray-600 text-sm mb-3 line-clamp-3">${previewText}</p>`;
        } else if (post.content) {
             // HTML içeriği varsa, etiketleri temizle ve 100 karakter al (güvenlik)
            const cleanText = post.content.replace(/<[^>]*>?/gm, '').trim();
            displayDescription = `<p class="text-gray-600 text-sm mb-3 line-clamp-3">${cleanText.substring(0, 100)}...</p>`;
        }
        
        container.innerHTML += `
            <article class="p-4 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
                <div>
                    <span class="text-xs font-bold text-secondary-green uppercase">
                        ${post.category || 'Blog'}
                    </span>
                    <h3 class="text-lg font-bold mt-1 mb-2 line-clamp-2">
                        ${post.title}
                    </h3>
                    ${displayDescription}
                </div>
                <button
                    type="button"
                    onclick="showPage('blog'); viewBlogPost('${post.slug}')"
                    class="mt-2 text-primary-blue font-semibold text-sm hover:underline text-left"
                >
                    Devamını Oku →
                </button>
            </article>
        `;
    });
}

// --- BLOG YAZILARI LİSTESİ VE GÖRÜNTÜLEME ---

// Tekil yazıyı slug'a göre aç ve URL'yi güncelle
function viewBlogPost(slug) {
    try {
        const url = new URL(window.location);
        url.searchParams.set('page', 'blog');
        url.searchParams.set('post', slug);
        window.history.pushState({}, '', url);
    } catch (e) {
        console.log("URL güncelleme bu ortamda desteklenmiyor");
    }

    loadBlogContent(slug);
}

// Blog listesine dön ve URL'den post parametresini sil
function viewBlogList() {
    try {
        const url = new URL(window.location);
        url.searchParams.set('page', 'blog');
        url.searchParams.delete('post');
        window.history.pushState({}, '', url);
    } catch (e) {
        console.log("URL güncelleme bu ortamda desteklenmiyor");
    }

    loadBlogContent(null);
}


/* ============ ÖZEL BLOG LAYOUT FONKSİYONLARI (Kullanıcının gönderdiği kod) ============ */
// Bu fonksiyonlar normalde data.js'den ayrılmalı veya ayrı bir dosyada olmalıdır.
// Hata vermemesi için gerekli global atamaları ve kontrolleri yaptık.

// Bu fonksiyonların tanımlarının tam olarak dosyanızda olduğundan emin olun.
// renderGlutenFreeBlogPost, renderPratikBlogPost, renderDefaultBlogPost
// ... (Orijinal render fonksiyonlarının tanımları buraya geliyor)
// ...

/* ============ BLOG İÇERİK YÜKLEYİCİ - KRİTİK DÜZELTME ============ */
function loadBlogContent(postSlug = null) {
    const container = document.getElementById('blog-posts-container');
    
    // KRİTİK KONTROL 1: Blog verisi yüklenmiş mi? (data.js'den geliyor)
    if (!window.blogPostsData || !Array.isArray(window.blogPostsData)) {
         container.innerHTML = `
            <div class="p-6 bg-white rounded-xl shadow-xl">
                <p class="text-gray-700 font-semibold">Blog içerikleri yüklenemedi. Veri kaynağı (data.js) eksik veya hatalı.</p>
            </div>
        `;
        return; 
    }

    container.innerHTML = ''; // Önceki içeriği temizle

    if (postSlug) {
        const post = window.blogPostsData.find(p => p.slug === postSlug);
        
        if (post) {
            // ÖZEL LAYOUT SEÇİMİ (Kullanıcının mantığı korundu)
            if (post.slug === 'glutensiz-menu-onerileri' && typeof renderGlutenFreeBlogPost === 'function') {
                renderGlutenFreeBlogPost(container, post);
            } else if (post.slug === 'pratik-menu-onerileri' && typeof renderPratikBlogPost === 'function') {
                renderPratikBlogPost(container, post);
            } else {
                renderDefaultBlogPost(container, post);
            }

            // X (Twitter) paylaş linkini dinamik oluştur
            const twitterBtn = document.getElementById("twitterShareBtn");
            if (twitterBtn) {
                const shareUrl =
                    "https://twitter.com/intent/tweet?text="
                    + encodeURIComponent(post.title)
                    + "&url="
                    + encodeURIComponent(window.location.href);
                twitterBtn.href = shareUrl;
            }

        } else {
            // Yazı bulunamadı mesajı
            container.innerHTML = `
                <button onclick="viewBlogList()" class="text-primary-blue font-semibold mb-4" type="button">← Geri Dön</button>
                <div class="p-6 bg-white rounded-2xl shadow-xl">
                    <p class="text-gray-700 font-semibold">Aradığınız yazı bulunamadı.</p>
                </div>
            `;
        }
    } else {
        // BLOG LİSTESİ GÖRÜNÜMÜ
        window.blogPostsData.forEach(post => {
            
            // KRİTİK DÜZELTME: Önizleme metnini güvenli çekme
            let previewText = post.description || post.excerpt;

            if (!previewText && post.content) {
                // HTML etiketlerini kaldır ve ilk 100 karakteri al (Güvenilir liste oluşturma)
                previewText = post.content.replace(/<[^>]*>?/gm, '').substring(0, 100).trim() + '...';
            } else if (!previewText) {
                previewText = "İçerik önizlemesi bulunamadı.";
            }

            container.innerHTML += `
                <div class="p-4 bg-white rounded-xl shadow-sm border border-gray-100 mb-4">
                    <span class="text-xs font-bold text-secondary-green uppercase">${post.category || 'Blog'}</span>
                    <h3 class="text-xl font-bold mt-1 mb-2">${post.title}</h3>
                    <p class="text-gray-600 text-sm mb-4">${previewText}</p>
                    <button onclick="viewBlogPost('${post.slug}')" type="button" class="text-primary-blue font-semibold text-sm hover:underline">Devamını Oku →</button>
                </div>
            `;
        });
    }
}


// --- ARAMA, ÇEREZ VE İLK YÜKLEME ---
// ... (Bu kısımlar değiştirilmedi)

// FONKSİYONLARI GLOBAL’E AÇ
window.hideSidebar = hideSidebar;
window.showSidebar = showSidebar;
window.showPage = showPage;
window.searchDish = searchDish;
window.loadBlogContent = loadBlogContent;
window.viewBlogPost = viewBlogPost;
window.viewBlogList = viewBlogList;
window.renderHomeBlogSection = renderHomeBlogSection;
// ... (Diğer global açılan fonksiyonlar)

// İlk yükleme davranışı
window.addEventListener('load', () => {
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page');
    const post = params.get('post');

    if (page === 'blog') {
        showPage('blog');
        // Eğer URL'de post varsa, loadBlogContent(post) showPage içinde çağrılacaktır.
    } else {
        showPage('home');
        renderHomeBlogSection(); 
    }

    // ... (Diğer ilk yükleme kodları)
});
