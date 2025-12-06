// app.js (Düzeltilmiş Versiyon)

// --- yardimci fonksiyonlar ---
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
    // ... (HTML listesi oluşturan fonksiyon)
    return items.map(item => `
        <li class="flex items-start p-3 bg-white rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition duration-150">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ${colorClass} mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <span class="text-gray-700 font-medium">${item}</span>
        </li>
    `).join('');
}

// BUNU GLOBAL’E AÇ
window.createListHtml = createListHtml;

// ─────────────────────────────────────────────
// PRATİK MENÜ ÖZEL JS (Kartlar ve Kurallar) - (Bu kısım data.js'de olmalıydı, ama app.js'de ise...)
// (Data.js'de olması gereken değişkenler burada varsayılmıştır.)
// ─────────────────────────────────────────────

// Pratik menü data ve fonksiyonlarının geri kalanı (kesildi)
// ...

function renderPratikRules() {
    const container = document.getElementById("rulesContainer-pratik");
    // ÖNEMLİ KONTROL: data.js'de tanımlanması gereken global değişken kontrol ediliyor.
    if (!container || !window.pratikRulesData) return; 

    // ... (HTML render mantığı)
}

function renderPratikMenus(filterType = "all") {
    const container = document.getElementById("menusGrid-pratik");
    // ÖNEMLİ KONTROL: data.js'de tanımlanması gereken global değişken kontrol ediliyor.
    if (!container || !window.pratikMenuData) return; 
    
    // ... (HTML render mantığı)
}

function filterPratikMenus(type) {
    // ... (Pratik menü filtreleme mantığı)
    renderPratikMenus(type);
}

function initPratikMenuEnhancements(slug) {
    if (slug !== "pratik-menu-onerileri") return;
    renderPratikRules();
    renderPratikMenus("all");
}

// ─────────────────────────────────────────────
// GLÜTENSİZ MENÜ ÖZEL SAYFA
// ─────────────────────────────────────────────

function renderGlutenRules() {
    const container = document.getElementById('rulesContainerGluten');
    // ÖNEMLİ KONTROL
    if (!container || !Array.isArray(window.glutenRulesData)) return; 
    // ... (HTML render mantığı)
}

function renderGlutenFreeMenuPost(post) {
    // ... (Glutensiz özel yazı render mantığı)
    renderGlutenRules();
}

// ─────────────────────────────────────────────
// --- SIDEBAR VE SAYFA YÖNETİMİ ---
// ─────────────────────────────────────────────

function showSidebar() { /* ... */ }
function hideSidebar() { /* ... */ }

function showPage(pageId, fromSidebar = false) {
    // ... (Sayfa gizleme/gösterme mantığı)

    if (pageId === 'blog') {
        const params = new URLSearchParams(window.location.search);
        const slug = params.get('post');
        loadBlogContent(slug);
    }
    
    // ... (Title ve URL yönetimi)
}

// --- ANA SAYFA BLOG ÖNERİLERİ ---
function renderHomeBlogSection() {
    // ÖNEMLİ KONTROL: Eğer veri yüklenmemişse hata vermeyi engeller
    if (!window.blogPostsData || !Array.isArray(window.blogPostsData)) return;

    const container = document.getElementById('home-blog-list');
    if (!container) return;

    container.innerHTML = '';

    // En son eklenen 3 yazıyı göster (id'ye göre ters sırala)
    const sorted = [...window.blogPostsData].sort((a, b) => b.id - a.id);
    const latest = sorted.slice(0, 3);

    latest.forEach(post => {
        
        // DÜZELTME: Güvenli önizleme metni oluşturma
        // Önce description alanını kullan, yoksa content'in ilk 100 karakterini kullan
        const previewText = post.description 
                            ? (post.description.length > 100 ? post.description.substring(0, 100) + '...' : post.description)
                            : (post.content ? post.content.replace(/<[^>]*>?/gm, '').substring(0, 100) + '...' : 'İçerik önizlemesi...');

        container.innerHTML += `
            <article class="p-4 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
                <div>
                    <span class="text-xs font-bold text-secondary-green uppercase">
                        ${post.category || 'Blog'}
                    </span>
                    <h3 class="text-lg font-bold mt-1 mb-2 line-clamp-2">
                        ${post.title}
                    </h3>
                    <p class="text-gray-600 text-sm mb-3 line-clamp-3">${previewText}</p>
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

function viewBlogPost(slug) { /* ... */ }
function viewBlogList() { /* ... */ }

// HATA DÜZELTME: Blog listesinin yüklenmesi için güvenli hale getirildi
function loadBlogContent(postSlug = null) {
    const container = document.getElementById('blog-posts-container');
    container.innerHTML = '';

    // KRİTİK KONTROL: Veri yüklenmemişse hata mesajı göster
    if (!window.blogPostsData || !Array.isArray(window.blogPostsData)) {
         container.innerHTML = `
            <div class="p-6 bg-white rounded-xl shadow-xl">
                <p class="text-gray-700 font-semibold">Blog içerikleri yüklenemedi. Lütfen konsolu kontrol edin (data.js dosyası eksik veya hatalı olabilir).</p>
            </div>
        `;
        return; 
    }

    if (postSlug) {
        const post = window.blogPostsData.find(p => p.slug === postSlug);
        
        if (post) {
            // ... (Tekil yazı yükleme ve özel render mantığı)
            if (post.slug === 'glutensiz-menu-onerileri') {
                renderGlutenFreeMenuPost(post);
                return;
            }
            
            // ... (HTML basma mantığı)
            
            // PRATİK MENÜ ÖZEL KARTLARINI BAŞLAT
            initPratikMenuEnhancements(post.slug);
            
        } else {
            // ... (Yazı bulunamadı mesajı)
        }
        
    } else {
        // Blog Listesi görünümü
        window.blogPostsData.forEach(post => {
            
            // GÜVENLİK DÜZELTMESİ: HTML'deki <p> arama yerine, description'ı veya content'i temizleyip kullan
            let previewText = post.description || post.excerpt;

            if (!previewText && post.content) {
                // HTML etiketlerini kaldır ve ilk 100 karakteri al
                previewText = post.content.replace(/<[^>]*>?/gm, '').substring(0, 100) + '...';
            } else if (!previewText) {
                previewText = "İçerik önizlemesi bulunamadı.";
            }

            container.innerHTML += `
                <div class="p-4 bg-white rounded-xl shadow-sm border border-gray-100 mb-4">
                    <span class="text-xs font-bold text-secondary-green uppercase">${post.category || 'Genel'}</span>
                    <h3 class="text-xl font-bold mt-1 mb-2">${post.title}</h3>
                    <p class="text-gray-600 text-sm mb-4">${previewText}</p>
                    <button onclick="viewBlogPost('${post.slug}')" type="button" class="text-primary-blue font-semibold text-sm hover:underline">Devamını Oku →</button>
                </div>
            `;
        });
    }
}

// --- ARAMA, ÇEREZ VE İLK YÜKLEME ---
function searchDish() { /* ... */ }
function checkConsent() { /* ... */ }
function acceptCookies() { /* ... */ }
function rejectCookies() { /* ... */ }

// FONKSİYONLARI GLOBAL’E AÇ (önceki koddan kopyala)
window.hideSidebar = hideSidebar;
window.showSidebar = showSidebar;
window.showPage = showPage;
window.searchDish = searchDish;
window.loadBlogContent = loadBlogContent;
window.viewBlogPost = viewBlogPost;
window.viewBlogList = viewBlogList;
window.renderHomeBlogSection = renderHomeBlogSection;
window.acceptCookies = acceptCookies;
window.rejectCookies = rejectCookies;
window.filterPratikMenus = filterPratikMenus;

// İlk yükleme davranışı
window.addEventListener('load', () => {
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page');

    if (page === 'blog') {
        showPage('blog');
    } else {
        showPage('home');
        renderHomeBlogSection(); // Ana sayfa açılışında blog önerilerini doldur
    }

    document.getElementById('bottomAdContainer').classList.add('hidden');
    checkConsent();
});
