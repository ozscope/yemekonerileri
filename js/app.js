// app.js

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
    return items.map(item => `
        <li class="flex items-start p-3 bg-white rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition duration-150">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ${colorClass} mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <span class="text-gray-700 font-medium">${item}</span>
        </li>
    `).join('');
}

// BUNU GLOBAL’E AÇ: (önceden window.createListHtml = ... idi)
window.createListHtml = createListHtml;

// suggestionCategories ZATEN data.js’teyse tekrar tanımlama.
// Eğer app.js’teyse yine global kalabilir.

// --- SIDEBAR ---
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

// --- SAYFA GEÇİŞLERİ ---
function showPage(pageId, fromSidebar = false) {
    document.getElementById('page-home').classList.add('hidden');
    document.getElementById('page-blog').classList.add('hidden');
    document.getElementById('page-privacy').classList.add('hidden');

    document.getElementById(`page-${pageId}`).classList.remove('hidden');

    const bottomAd = document.getElementById('bottomAdContainer');
    if (pageId === 'home') {
        bottomAd.classList.add('hidden');
    } else {
        bottomAd.classList.remove('hidden');
    }

    if (pageId === 'blog') loadBlogContent();

    if (pageId === 'blog') {
        document.title = "Blog - Yanında Ne Yiyelim?";
    } else if (pageId === 'privacy') {
        document.title = "Gizlilik Politikası - Yanında Ne Yiyelim?";
    } else {
        document.title = "Yanında Ne Yiyelim? - Menü Önerileri";
    }

    if (fromSidebar) hideSidebar();
    window.scrollTo(0, 0);

    try {
        const url = new URL(window.location);
        if (pageId === 'blog') url.searchParams.set('page', 'blog');
        else url.searchParams.delete('page');
        window.history.pushState({}, '', url);
    } catch (e) {
        console.log("URL güncelleme bu ortamda desteklenmiyor");
    }
}

// --- BLOG ---
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

// --- ARAMA ---
function searchDish() {
    const input = document.getElementById('mainDishInput');
    const filter = document.getElementById('cuisineFilter');
    const container = document.getElementById('resultsContainer');
    const bottomAd = document.getElementById('bottomAdContainer');

    if (!document.getElementById('page-home').classList.contains('hidden')) {
        bottomAd.classList.remove('hidden');
    }

    const rawQuery = input.value.trim();
    const cuisine = filter.value;
    const query = normalizeText(rawQuery);

    container.innerHTML = '';

    let foundDish = null;
    let isRandom = false;

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
        foundDish = dishSuggestions.find(d => {
            const normMain = normalizeText(d.main);
            if (normMain === query) return true;
            return d.keywords && d.keywords.some(k => normalizeText(k) === query);
        });

        if (!foundDish) {
            foundDish = dishSuggestions.find(d => {
                const normMain = normalizeText(d.main);
                if (normMain.startsWith(query)) return true;
                return normMain.includes(query) ||
                    (d.keywords && d.keywords.some(k => normalizeText(k).includes(query)));
            });
        }
    }

    if (!foundDish && query.length < 2 && cuisine === "") {
        container.innerHTML = '<p class="text-gray-500 italic">Aramaya başlayın...</p>';
        bottomAd.classList.add('hidden');
        return;
    } else if (!foundDish) {
        container.innerHTML = `
            <div class="w-full text-center p-4">
                <p class="text-gray-800 font-semibold mb-2">Üzgünüz, aradığınız "${rawQuery}" yemeği için öneri bulamadık.</p>
                <p class="text-sm text-gray-500">Farklı bir arama yapın veya seçili filtreyi kaldırın.</p>
            </div>
        `;
        bottomAd.classList.add('hidden');
        return;
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
        info.style.display = isRandom ? 'block' : 'none';

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

// FONKSİYONLARI GLOBAL’E AÇ
window.hideSidebar = hideSidebar;
window.showSidebar = showSidebar;
window.showPage = showPage;
window.searchDish = searchDish;
window.loadBlogContent = loadBlogContent;
window.acceptCookies = acceptCookies;
window.rejectCookies = rejectCookies;


// İlk yükleme davranışı
window.addEventListener('load', () => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('page') === 'blog') showPage('blog');
    else showPage('home');
    document.getElementById('bottomAdContainer').classList.add('hidden');
    checkConsent();
});
