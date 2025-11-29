// SIDEBAR
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

// SAYFA GEÇİŞLERİ
function showPage(pageId, fromSidebar = false) {
    document.getElementById('page-home').classList.add('hidden');
    document.getElementById('page-blog').classList.add('hidden');
    document.getElementById('page-privacy').classList.add('hidden');

    document.getElementById(`page-${pageId}`).classList.remove('hidden');
    
    // Reklam konteynerini sayfa bazlı gizle/göster
    const bottomAd = document.getElementById('bottomAdContainer');
    if (pageId === 'home') {
        // Sadece arama sonucunda gösterilecek, burada gizli kalmalı.
        bottomAd.classList.add('hidden'); 
    } else {
        // Blog ve Gizlilik sayfalarında reklamları gösterebiliriz.
        bottomAd.classList.remove('hidden');
    }

    if (pageId === 'blog') loadBlogContent();

    // title güncelleme
    if (pageId === 'blog') {
        document.title = "Blog - Yanında Ne Gider?";
    } else if (pageId === 'privacy') {
        document.title = "Gizlilik Politikası - Yanında Ne Gider?";
    } else {
        document.title = "Yanında Ne Gider? - Menü Önerileri";
    }

    if (fromSidebar) hideSidebar();
    window.scrollTo(0, 0);

    // URL Yönetimi
    try {
        const url = new URL(window.location);
        if (pageId === 'blog') url.searchParams.set('page', 'blog');
        else url.searchParams.delete('page');
        window.history.pushState({}, '', url);
    } catch (e) {
        console.log("URL güncelleme bu ortamda desteklenmiyor");
    }
}

// BLOG
function loadBlogContent(postId = null) {
    const container = document.getElementById('blog-posts-container');
    container.innerHTML = '';
    
    if (postId) {
        const post = blogPostsData.find(p => p.id === postId);
        if (post) {
            container.innerHTML = `
                <button onclick="loadBlogContent()" class="text-primary-blue font-semibold mb-4" type="button">← Geri Dön</button>
                <article class="bg-white p-6 rounded-2xl shadow-xl content-area">
                    <h1 class="text-2xl font-bold mb-2">${post.title}</h1>
                    <span class="text-xs font-bold text-secondary-green uppercase mb-4 block">${post.category}</span>
                    ${post.content}
                </article>
                <div class="w-full text-center my-6 p-2 bg-gray-100 rounded-lg ad-placeholder">
                    <p class="text-xs text-gray-500 font-semibold">REKLAM ALANI (Blog Altı)</p>
                </div>
            `;
        }
    } else {
        blogPostsData.forEach(post => {
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = post.content;
            const firstP = tempDiv.querySelector("p");
            const previewText = firstP ? firstP.innerText.substring(0, 100) : "İçerik önizlemesi...";

            container.innerHTML += `
                <div class="p-4 bg-white rounded-xl shadow-sm border border-gray-100 mb-4">
                    <span class="text-xs font-bold text-secondary-green uppercase">${post.category}</span>
                    <h3 class="text-xl font-bold mt-1 mb-2">${post.title}</h3>
                    <p class="text-gray-600 text-sm mb-4">${previewText}...</p>
                    <button onclick="loadBlogContent(${post.id})" type="button" class="text-primary-blue font-semibold text-sm hover:underline">Devamını Oku →</button>
                </div>
            `;
        });
    }
}

// ARAMA
function searchDish() {
    const input = document.getElementById('mainDishInput');
    const filter = document.getElementById('cuisineFilter');
    const container = document.getElementById('resultsContainer');
    const bottomAd = document.getElementById('bottomAdContainer');

    // Arama yapılınca sayfa altı reklamını göster (eğer ana sayfadaysak)
    if (!document.getElementById('page-home').classList.contains('hidden')) {
         bottomAd.classList.remove('hidden');
    }
    
    const rawQuery = input.value.trim();
    const cuisine = filter.value;
    const query = normalizeText(rawQuery);

    container.innerHTML = '';

    let foundDish = null;
    let isRandom = false;

    // Rastgele öneri (YALNIZCA arama kutusu boşken mutfak filtresini kullanır)
    if (query.length < 2 && !rawQuery) {
        const filteredDishes = dishSuggestions.filter(dish => 
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
        // Normal arama (Mutfak filtresi arama sonucunu daraltmaz)
        
        // ÖNCELİK 1: Ana yemeğin adıyla tam eşleşme veya anahtar kelime tam eşleşmesi
        foundDish = dishSuggestions.find(d => {
            const normMain = normalizeText(d.main);
            // Ana yemek adının tam eşleşmesi
            if (normMain === query) return true; 

            // Ana yemek adının anahtar kelime olarak tam eşleşmesi (daha kesin eşleşme)
            return d.keywords && d.keywords.some(k => normalizeText(k) === query);
        });

        // ÖNCELİK 2: Eğer tam eşleşme yoksa, kelime başlangıç veya kısmi eşleşmesine geç
        if (!foundDish) {
            foundDish = dishSuggestions.find(d => {
                const normMain = normalizeText(d.main);
                // Ana yemek adının başlangıç eşleşmesi (örn: "Hamsi" -> "Hamsi Tava")
                if (normMain.startsWith(query)) return true;
                
                // Ana yemek adının veya herhangi bir anahtar kelimenin kısmi olarak içermesi (örn: "hamsi" -> "hamsili pilav")
                return normMain.includes(query) || (d.keywords && d.keywords.some(k => normalizeText(k).includes(query)));
            });
        }
    }

    if (!foundDish && query.length < 2 && cuisine === "") {
        container.innerHTML = '<p class="text-gray-500 italic">Aramaya başlayın...</p>';
        // Arama yapılmayınca reklamı gizle
        bottomAd.classList.add('hidden');
        return;
    } else if (!foundDish) {
        container.innerHTML = `
            <div class="w-full text-center p-4">
                <p class="text-gray-800 font-semibold mb-2">Üzgünüz, aradığınız "${rawQuery}" yemeği için öneri bulamadık.</p>
                <p class="text-sm text-gray-500">Farklı bir arama yapın veya seçili filtreyi kaldırın.</p>
            </div>
        `;
         // Arama sonucu yoksa reklamı gizle
        bottomAd.classList.add('hidden'); 
    }

    if (foundDish) {
        let html = '';
        suggestionCategories.forEach(cat => {
            const items = foundDish.suggestions[cat.key];
            if (items && items.length) {
                html += `
                    <div class="mb-4">
                        <h4 class="font-bold ${cat.color} mb-2">${cat.icon} ${cat.title}</h4>
                        <ul class="space-y-2">${createListHtml(items, cat.color)}</ul>
                    </div>
                `;
            }
        });
        
        const template = document.getElementById('dishDetailTemplate').content.cloneNode(true);
        template.querySelector('h2').innerHTML = `<span class="text-base text-gray-600">(${foundDish.cuisine})</span><br>"${foundDish.main}" Yanına Ne Gider?`;
        template.querySelector('#suggestionsListContainer').innerHTML = html;

        const info = template.querySelector('#randomInfo');
        if (isRandom) {
            info.style.display = 'block';
        } else {
            info.style.display = 'none';
        }

        container.appendChild(template);
    } 

    // Mobilde klavyeyi kapat
    if (window.innerWidth < 768) {
        input.blur();
    }
}

// Fonksiyonları global scope'a ata
window.showSidebar = showSidebar;
window.hideSidebar = hideSidebar;
window.showPage = showPage;
window.loadBlogContent = loadBlogContent;
window.searchDish = searchDish;

// ÇEREZ / İZİN BANNERI
const COOKIE_CONSENT_KEY = 'cookieConsent';
const COOKIE_CONSENT_GRANTED = 'granted';

function checkConsent() {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    const banner = document.getElementById('cookieBanner');
    
    if (consent !== COOKIE_CONSENT_GRANTED && consent !== 'rejected') {
        banner.classList.remove('hidden');
        setTimeout(() => banner.classList.remove('opacity-0'), 10);
    }
}

function acceptCookies() {
    localStorage.setItem(COOKIE_CONSENT_KEY, COOKIE_CONSENT_GRANTED);
    const banner = document.getElementById('cookieBanner');
    banner.classList.add('opacity-0');
    setTimeout(() => banner.classList.add('hidden'), 300);
}

function rejectCookies() {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'rejected');
    const banner = document.getElementById('cookieBanner');
    banner.classList.add('opacity-0');
    setTimeout(() => banner.classList.add('hidden'), 300);
}

window.acceptCookies = acceptCookies;
window.rejectCookies = rejectCookies;

// SAYFA YÜKLENİRKEN BAŞLANGIÇ AYARLARI
window.addEventListener('load', () => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('page') === 'blog') showPage('blog');
    else showPage('home');
     // İlk yüklemede ana sayfada reklamı gizle
    document.getElementById('bottomAdContainer').classList.add('hidden');

    // Çerez kontrolü
    checkConsent();
});
