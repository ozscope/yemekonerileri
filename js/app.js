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

// BUNU GLOBAL’E AÇ
window.createListHtml = createListHtml;

// ─────────────────────────────────────────────
// PRATİK MENÜ ÖZEL JS (kartlar ve kurallar)
// ─────────────────────────────────────────────

const pratikMenuData = [
    {
        id: 1,
        title: "Somon Tava & Yeşillik",
        time: 20,
        desc: "Hafif, omega-3 zengini, tek tava menü.",
        main: "Tavada somon fileto (tuz, karabiber, limon)",
        side: "Hazır salata karışımı (yeşillik, domates, zeytinyağlı sos)",
        icon: "🐟"
    },
    {
        id: 2,
        title: "Tek Kapta Tavuk",
        time: 25,
        desc: "Tek tavada hem protein hem sebze.",
        main: "Sebzeli tavuk sote (tavuk, donuk sebze, soya sosu)",
        side: "Hızlı makarna / erişte (5 dk, yağ eklemeden)",
        icon: "🍗"
    },
    {
        id: 3,
        title: "Pratik Yumurta Ziyafeti",
        time: 15,
        desc: "Dolapta ne varsa yumurtayla taçlanır.",
        main: "Menemen veya hızlı omlet",
        side: "Peynir tabağı & çay",
        icon: "🍳"
    },
    {
        id: 4,
        title: "Konserve Kolaylığı",
        time: 15,
        desc: "Dolapta konserve varsa, aç-kapa menü.",
        main: "Nohut güveç (konserve nohut, domates, baharat)",
        side: "Yoğurtlu sos / cacık & maden suyu",
        icon: "🥫"
    },
    {
        id: 5,
        title: "Tek Tencerede Makarna",
        time: 25,
        desc: "Karbonhidrat + protein dengeli, tek kap çözüm.",
        main: "Domatesli ton balıklı makarna",
        side: "Roka salatası (limon, zeytinyağı)",
        icon: "🍝"
    },
    {
        id: 6,
        title: "Hızlı Pizza Alternatifi",
        time: 10,
        desc: "Lavaşla mini pizza / tost hissi.",
        main: "Lavaş üstü tost / pizza (salça, peynir, salamura sebze)",
        side: "Ayran",
        icon: "🍕"
    },
    {
        id: 7,
        title: "Hazır Köfte Hızlandırıcısı",
        time: 20,
        desc: "Buzluktaki köfteyle 20 dakikada sofra.",
        main: "Hazır köfte ve hazır/toz püre",
        side: "Turşu veya köz biber konservesi",
        icon: "🧆"
    },
    {
        id: 8,
        title: "Bakliyat Gücü",
        time: 20,
        desc: "Dolapta haşlanmış mercimek varsa, menü hazır.",
        main: "Hızlı mercimek yemeği (haşlanmış mercimek, salça, soğan)",
        side: "Kuru soğan / pirinç sirkeli salata",
        icon: "🍲"
    }
];

const pratikRulesData = [
    { title: "Donuk sebze kullan", icon: "🧊", desc: "Doğrama süresini sıfırlar, besin değerini korur." },
    { title: "Konserve avantajı", icon: "🥫", desc: "Nohut, domates, mısır gibi malzemeler hazırlığı dakikalara indirir." },
    { title: "Tek kap yemekler", icon: "🥘", desc: "Tencere/tava odaklı pişirme, bulaşık ve zaman yükünü azaltır." },
    { title: "Porsiyonluk et/köfte", icon: "📦", desc: "Buzlukta porsiyonlu ürün tutmak pişirme süresini kısaltır." },
    { title: "Hazır sos kavanozu", icon: "🥣", desc: "Salça-baharat-zeytinyağı karışımı makarna ve tavalar için kurtarıcıdır." }
];

function renderPratikRules() {
    const container = document.getElementById("rulesContainer-pratik");
    if (!container) return;

    container.innerHTML = pratikRulesData
        .map(rule => `
            <div class="bg-white p-4 rounded-xl shadow-sm border border-stone-100 hover:border-orange-200 transition cursor-default group">
                <div class="text-2xl mb-2 group-hover:scale-110 transition-transform">${rule.icon}</div>
                <h4 class="font-bold text-stone-800 mb-1 text-sm">${rule.title}</h4>
                <p class="text-xs text-stone-500 leading-snug">${rule.desc}</p>
            </div>
        `)
        .join("");
}

function renderPratikMenus(filterType = "all") {
    const container = document.getElementById("menusGrid-pratik");
    if (!container) return;

    const filtered = filterType === "fast"
        ? pratikMenuData.filter(m => m.time < 20)
        : pratikMenuData;

    container.innerHTML = filtered
        .map(menu => `
            <div class="bg-white rounded-xl border border-stone-200 p-6 flex flex-col h-full card-hover relative overflow-hidden">
                <div class="absolute top-0 right-0 p-4 opacity-10 text-6xl pointer-events-none select-none">
                    ${menu.icon}
                </div>

                <div class="flex justify-between items-start mb-4 relative z-10">
                    <div class="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full">
                        ~ ${menu.time} dk
                    </div>
                </div>

                <h3 class="text-lg md:text-xl font-bold text-stone-900 mb-2 relative z-10">
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
        `)
        .join("");
}

function filterPratikMenus(type) {
    const btnAll = document.getElementById("btn-pratik-all");
    const btnFast = document.getElementById("btn-pratik-fast");

    if (btnAll && btnFast) {
        if (type === "all") {
            btnAll.className = "px-4 py-2 text-xs md:text-sm font-medium rounded-md bg-orange-500 text-white shadow-sm transition-all";
            btnFast.className = "px-4 py-2 text-xs md:text-sm font-medium rounded-md text-stone-600 hover:bg-stone-100 transition-all";
        } else {
            btnAll.className = "px-4 py-2 text-xs md:text-sm font-medium rounded-md text-stone-600 hover:bg-stone-100 transition-all";
            btnFast.className = "px-4 py-2 text-xs md:text-sm font-medium rounded-md bg-green-600 text-white shadow-sm transition-all";
        }
    }

    renderPratikMenus(type);
}

// Sadece pratik menü yazısı açıldığında çalışacak
function initPratikMenuEnhancements(slug) {
    if (slug !== "pratik-menu-onerileri") return;

    // blog içeriği innerHTML ile basıldıktan sonra çağrılıyor
    renderPratikRules();
    renderPratikMenus("all");
}

// ─────────────────────────────────────────────
// GLÜTENSİZ MENÜ ÖZEL SAYFA
// ─────────────────────────────────────────────

// Glutensiz temel prensipleri kart olarak basar
function renderGlutenRules() {
    const container = document.getElementById('rulesContainerGluten');
    if (!container || !Array.isArray(window.glutenRulesData)) return;

    container.innerHTML = window.glutenRulesData
        .map(rule => `
            <div class="bg-white p-4 rounded-xl shadow-sm border border-stone-100 hover:border-indigo-200 transition cursor-default group">
                <div class="text-3xl mb-2 group-hover:scale-110 transition-transform">${rule.icon}</div>
                <h4 class="font-bold text-stone-800 mb-1 text-sm">${rule.title}</h4>
                <p class="text-xs text-stone-500 leading-snug">${rule.desc}</p>
            </div>
        `)
        .join('');
}

// Sadece "glutensiz-menu-onerileri" slug’ı için özel layout
function renderGlutenFreeMenuPost(post) {
    const container = document.getElementById('blog-posts-container');
    if (!container) return;

    // Dinamik title
    document.title = `${post.title} - Yanında Ne Yiyelim?`;

    // Meta description'ı blog'a uygun nötr hale getir
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute(
            "content",
            "Glutensiz beslenme için 7 günlük tam menü önerisi: dengeli, doyurucu ve pratik kombinasyonlar."
        );
    }

    container.innerHTML = `
        <button onclick="viewBlogList()" class="text-primary-blue font-semibold mb-4" type="button">
            ← Geri Dön
        </button>
        
        <article class="space-y-6 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 content-area">
            <header class="text-center max-w-3xl mx-auto space-y-4 mb-4">
                <h1 class="text-2xl md:text-3xl font-extrabold text-indigo-600">
                    🌾 Glutensiz Menü Rehberi
                </h1>
                <p class="text-sm text-gray-500 mb-1">
                    ${post.category || "Glutensiz Beslenme"}
                </p>
                <p class="text-lg text-stone-600 leading-relaxed">
                    Glutensiz beslenmenize çeşitlilik katacak, dengeli ve doyurucu 
                    <strong>7 farklı tam menü</strong> önerisi. Her menü ana yemek, yan lezzet ve tatlı/meyve dengesine göre planlanmıştır.
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

            <!-- Menü Grid -->
            <section id="menu-explorer" class="scroll-mt-20 space-y-4">
                <div>
                    <h3 class="text-2xl font-bold text-stone-900">7 Günlük Tam Menüler</h3>
                    <p class="text-stone-600 text-sm">Haftanın her günü için farklı bir glutensiz sofra deneyimi.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Menü 1 -->
                    <div class="bg-white rounded-xl shadow-md p-6 flex flex-col h-full card-hover border border-red-100">
                        <div class="flex justify-between items-start mb-4">
                            <h3 class="text-xl font-bold text-red-600">1. Fırında Tavuk ile Doyurucu Menü</h3>
                            <span class="bg-red-50 text-red-600 text-sm font-bold px-3 py-1 rounded-full">~ 980 kcal</span>
                        </div>
                        <p class="text-sm text-stone-500 mb-4 italic">
                            Fırında tavuk, tahıllı salata ve hafif bir tatlı ile klasik ama güvenli bir kombinasyon.
                        </p>
                        <div class="mt-auto space-y-3 bg-stone-50 p-4 rounded-lg">
                            <div class="flex items-start gap-2">
                                <span class="text-lg mt-0.5">🍗</span>
                                <div>
                                    <strong class="text-xs text-stone-400 uppercase tracking-wide block">Ana Yemek</strong>
                                    <span class="text-sm text-stone-800 font-medium">Fırında bütün tavuk (derili, orta porsiyon)</span>
                                </div>
                            </div>
                            <div class="flex items-start gap-2">
                                <span class="text-lg mt-0.5">🥗</span>
                                <div>
                                    <strong class="text-xs text-stone-400 uppercase tracking-wide block">Yan / Garnitür</strong>
                                    <span class="text-sm text-stone-800 font-medium">Karabuğdaylı salata, Közlenmiş sebzeler</span>
                                </div>
                            </div>
                            <div class="flex items-start gap-2">
                                <span class="text-lg mt-0.5">🍮</span>
                                <div>
                                    <strong class="text-xs text-stone-400 uppercase tracking-wide block">Tatlı</strong>
                                    <span class="text-sm text-stone-800 font-medium">Kabak tatlısı (cevizli)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Menü 2 -->
                    <div class="bg-white rounded-xl shadow-md p-6 flex flex-col h-full card-hover border border-blue-100">
                        <div class="flex justify-between items-start mb-4">
                            <h3 class="text-xl font-bold text-blue-600">2. Izgara Somon ile Omega-3 Deposu Menü</h3>
                            <span class="bg-blue-50 text-blue-600 text-sm font-bold px-3 py-1 rounded-full">~ 695 kcal</span>
                        </div>
                        <p class="text-sm text-stone-500 mb-4 italic">
                            Balık günleri için glutensiz, ferah ve besleyici bir sofra alternatifi.
                        </p>
                        <div class="mt-auto space-y-3 bg-stone-50 p-4 rounded-lg">
                            <div class="flex items-start gap-2">
                                <span class="text-lg mt-0.5">🐟</span>
                                <div>
                                    <strong class="text-xs text-stone-400 uppercase tracking-wide block">Ana Yemek</strong>
                                    <span class="text-sm text-stone-800 font-medium">Izgara somon balığı (~175 g)</span>
                                </div>
                            </div>
                            <div class="flex items-start gap-2">
                                <span class="text-lg mt-0.5">🌿</span>
                                <div>
                                    <strong class="text-xs text-stone-400 uppercase tracking-wide block">Yan / Garnitür</strong>
                                    <span class="text-sm text-stone-800 font-medium">Kinoa salatası, Buharda yeşil kuşkonmaz</span>
                                </div>
                            </div>
                            <div class="flex items-start gap-2">
                                <span class="text-lg mt-0.5">🍉</span>
                                <div>
                                    <strong class="text-xs text-stone-400 uppercase tracking-wide block">Tatlı</strong>
                                    <span class="text-sm text-stone-800 font-medium">Taze meyve tabağı (karışık)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Menü 3 -->
                    <div class="bg-white rounded-xl shadow-md p-6 flex flex-col h-full card-hover border border-green-100">
                        <div class="flex justify-between items-start mb-4">
                            <h3 class="text-xl font-bold text-green-600">3. Mercimek Köftesi ile Bitkisel Protein Menü</h3>
                            <span class="bg-green-50 text-green-600 text-sm font-bold px-3 py-1 rounded-full">~ 610 kcal</span>
                        </div>
                        <p class="text-sm text-stone-500 mb-4 italic">
                            Hem glutensiz hem de davet sofralarına yakışan, pratik bir tabak.
                        </p>
                        <div class="mt-auto space-y-3 bg-stone-50 p-4 rounded-lg">
                            <div class="flex items-start gap-2">
                                <span class="text-lg mt-0.5">🧆</span>
                                <div>
                                    <strong class="text-xs text-stone-400 uppercase tracking-wide block">Ana Yemek</strong>
                                    <span class="text-sm text-stone-800 font-medium">Mercimek köftesi (5–6 adet, az yağlı)</span>
                                </div>
                            </div>
                            <div class="flex items-start gap-2">
                                <span class="text-lg mt-0.5">🥣</span>
                                <div>
                                    <strong class="text-xs text-stone-400 uppercase tracking-wide block">Yan / Garnitür</strong>
                                    <span class="text-sm text-stone-800 font-medium">Yoğurtlu semizotu salatası, Turşu</span>
                                </div>
                            </div>
                            <div class="flex items-start gap-2">
                                <span class="text-lg mt-0.5">🍎</span>
                                <div>
                                    <strong class="text-xs text-stone-400 uppercase tracking-wide block">Tatlı</strong>
                                    <span class="text-sm text-stone-800 font-medium">Kuru yemişli elma dilimleri</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Menü 4 -->
                    <div class="bg-white rounded-xl shadow-md p-6 flex flex-col h-full card-hover border border-purple-100">
                        <div class="flex justify-between items-start mb-4">
                            <h3 class="text-xl font-bold text-purple-600">4. Kuzu Güveç ile Geleneksel Doyurucu Menü</h3>
                            <span class="bg-purple-50 text-purple-600 text-sm font-bold px-3 py-1 rounded-full">~ 870 kcal</span>
                        </div>
                        <p class="text-sm text-stone-500 mb-4 italic">
                            Restoran hissiyatı veren ama gluten açısından daha kontrollü bir menü.
                        </p>
                        <div class="mt-auto space-y-3 bg-stone-50 p-4 rounded-lg">
                            <div class="flex items-start gap-2">
                                <span class="text-lg mt-0.5">🍖</span>
                                <div>
                                    <strong class="text-xs text-stone-400 uppercase tracking-wide block">Ana Yemek</strong>
                                    <span class="text-sm text-stone-800 font-medium">Kuzu güveç (unsuz terbiye edilmiş)</span>
                                </div>
                            </div>
                            <div class="flex items-start gap-2">
                                <span class="text-lg mt-0.5">🍚</span>
                                <div>
                                    <strong class="text-xs text-stone-400 uppercase tracking-wide block">Yan / Garnitür</strong>
                                    <span class="text-sm text-stone-800 font-medium">Pirinç pilavı, Ev yapımı cacık</span>
                                </div>
                            </div>
                            <div class="flex items-start gap-2">
                                <span class="text-lg mt-0.5">🥛</span>
                                <div>
                                    <strong class="text-xs text-stone-400 uppercase tracking-wide block">Tatlı</strong>
                                    <span class="text-sm text-stone-800 font-medium">Sütlaç (mısır nişastalı / pirinç unlu)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Menü 5 -->
                    <div class="bg-white rounded-xl shadow-md p-6 flex flex-col h-full card-hover border border-teal-100">
                        <div class="flex justify-between items-start mb-4">
                            <h3 class="text-xl font-bold text-teal-600">5. Akdeniz Esintili Hafif Glutensiz Menü</h3>
                            <span class="bg-teal-50 text-teal-600 text-sm font-bold px-3 py-1 rounded-full">~ 480 kcal</span>
                        </div>
                        <p class="text-sm text-stone-500 mb-4 italic">
                            Sağlıklı yağlar ve bol yeşillik içeren, hafif ama doyurucu bir kombinasyon.
                        </p>
                        <div class="mt-auto space-y-3 bg-stone-50 p-4 rounded-lg">
                            <div class="flex items-start gap-2">
                                <span class="text-lg mt-0.5">🐔</span>
                                <div>
                                    <strong class="text-xs text-stone-400 uppercase tracking-wide block">Ana Yemek</strong>
                                    <span class="text-sm text-stone-800 font-medium">Izgara tavuk göğsü veya ton balığı</span>
                                </div>
                            </div>
                            <div class="flex items-start gap-2">
                                <span class="text-lg mt-0.5">🍠</span>
                                <div>
                                    <strong class="text-xs text-stone-400 uppercase tracking-wide block">Yan / Garnitür</strong>
                                    <span class="text-sm text-stone-800 font-medium">Bol yeşillikli salata, Fırınlanmış tatlı patates</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Menü 6 -->
                    <div class="bg-white rounded-xl shadow-md p-6 flex flex-col h-full card-hover border border-pink-100">
                        <div class="flex justify-between items-start mb-4">
                            <h3 class="text-xl font-bold text-pink-600">6. Bitkisel Protein Odaklı, Düşük Yağlı Menü</h3>
                            <span class="bg-pink-50 text-pink-600 text-sm font-bold px-3 py-1 rounded-full">~ 510 kcal</span>
                        </div>
                        <p class="text-sm text-stone-500 mb-4 italic">
                            Özellikle hafif ve düşük yağlı beslenmek isteyenler için ideal.
                        </p>
                        <div class="mt-auto space-y-3 bg-stone-50 p-4 rounded-lg">
                            <div class="flex items-start gap-2">
                                <span class="text-lg mt-0.5">🥣</span>
                                <div>
                                    <strong class="text-xs text-stone-400 uppercase tracking-wide block">Ana Yemek</strong>
                                    <span class="text-sm text-stone-800 font-medium">Kırmızı mercimek çorbası (unsuz)</span>
                                </div>
                            </div>
                            <div class="flex items-start gap-2">
                                <span class="text-lg mt-0.5">🥬</span>
                                <div>
                                    <strong class="text-xs text-stone-400 uppercase tracking-wide block">Yan / Garnitür</strong>
                                    <span class="text-sm text-stone-800 font-medium">Zeytinyağlı enginar/fasulye, Yoğurtlu semizotu</span>
                                </div>
                            </div>
                            <div class="flex items-start gap-2">
                                <span class="text-lg mt-0.5">🍞</span>
                                <div>
                                    <strong class="text-xs text-stone-400 uppercase tracking-wide block">Tahıl</strong>
                                    <span class="text-sm text-stone-800 font-medium">Glutensiz ekmek (porsiyon kontrollü)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Menü 7 -->
                    <div class="bg-white rounded-xl shadow-md p-6 flex flex-col h-full card-hover border border-indigo-100">
                        <div class="flex justify-between items-start mb-4">
                            <h3 class="text-xl font-bold text-indigo-600">7. Geleneksel ve Dengeli Kompleks Menü</h3>
                            <span class="bg-indigo-50 text-indigo-600 text-sm font-bold px-3 py-1 rounded-full">~ 660 kcal</span>
                        </div>
                        <p class="text-sm text-stone-500 mb-4 italic">
                            Kompleks karbonhidrat ve protein dengesini koruyan, geleneksel esintili bir sofra.
                        </p>
                        <div class="mt-auto space-y-3 bg-stone-50 p-4 rounded-lg">
                            <div class="flex items-start gap-2">
                                <span class="text-lg mt-0.5">🍲</span>
                                <div>
                                    <strong class="text-xs text-stone-400 uppercase tracking-wide block">Ana Yemek</strong>
                                    <span class="text-sm text-stone-800 font-medium">Yağsız dana etli sebze yemeği</span>
                                </div>
                            </div>
                            <div class="flex items-start gap-2">
                                <span class="text-lg mt-0.5">🍚</span>
                                <div>
                                    <strong class="text-xs text-stone-400 uppercase tracking-wide block">Yan / Garnitür</strong>
                                    <span class="text-sm text-stone-800 font-medium">Kinoa pilavı, Ev yapımı cacık</span>
                                </div>
                            </div>
                            <div class="flex items-start gap-2">
                                <span class="text-lg mt-0.5">🥝</span>
                                <div>
                                    <strong class="text-xs text-stone-400 uppercase tracking-wide block">Tatlı</strong>
                                    <span class="text-sm text-stone-800 font-medium">1 porsiyon meyve (kivi veya ananas)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Glutensiz Prensipler -->
            <section class="mt-10">
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
                        <button onclick="viewBlogPost('pratik-menu-onerileri')" class="underline hover:text-indigo-800 transition">
                            Pratik Menü Önerileri: 30 Dakikada Hazırlanan Menüler
                        </button>
                    </li>
                    <li>
                        <button onclick="viewBlogPost('pilav-yanina-hangi-yemek-gider')" class="underline hover:text-indigo-800 transition">
                            Pilav Rehberi: Hangi Pilav Hangi Yemeğe?
                        </button>
                    </li>
                    <li>
                        <button onclick="viewBlogPost('etin-yanina-ne-gider')" class="underline hover:text-indigo-800 transition">
                            Et Yemeklerinin Yanına Ne Gider?
                        </button>
                    </li>
                </ul>
            </section>
        </article>

        <!-- X PAYLAŞ BUTONU -->
        <div class="mt-6">
            <a 
                id="twitterShareBtn"
                href="#"
                target="_blank"
                class="inline-flex items-center px-4 py-2 bg-black text-white font-semibold rounded-lg shadow hover:bg-[#111] transition"
            >
                <!-- YENİ X LOGOSU -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.5 3L10 12l-5.5 9h3L12 14.5 16.5 21h3L14 12l5.5-9h-3L12 9.5 7.5 3h-3z"/>
                </svg>

                X'te Paylaş
            </a>
        </div>

        <div class="w-full text-center my-6 p-2 bg-gray-100 rounded-lg ad-placeholder">
            <p class="text-xs text-gray-500 font-semibold">REKLAM ALANI (Blog Altı)</p>
        </div>
    `;

    // X paylaş linkini hazırla
    const twitterBtn = document.getElementById("twitterShareBtn");
    if (twitterBtn) {
        const shareUrl =
            "https://twitter.com/intent/tweet?text="
            + encodeURIComponent(post.title)
            + "&url="
            + encodeURIComponent(window.location.href);

        twitterBtn.href = shareUrl;
    }

    // Glutensiz kural kartlarını doldur
    renderGlutenRules();
}

// ─────────────────────────────────────────────
// --- SIDEBAR ---
// ─────────────────────────────────────────────

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
        renderHomeBlogSection(); // 🔹 her home dönüşünde güncelle
    } else {
        bottomAd.classList.remove('hidden');
    }

    // BLOG sayfasına geçerken URL'deki post parametresine göre içerik yükle
    if (pageId === 'blog') {
        const params = new URLSearchParams(window.location.search);
        const slug = params.get('post');
        loadBlogContent(slug);
    }

    // Title yönetimi
    if (pageId === 'blog') {
        document.title = "Blog - Yanında Ne Yiyelim?";
    } else if (pageId === 'privacy') {
        document.title = "Gizlilik Politikası - Yanında Ne Yiyelim?";
    } else {
        document.title = "Yanında Ne Yiyelim? - Menü Önerileri";
    }

    if (fromSidebar) hideSidebar();
    window.scrollTo(0, 0);

    // URL'de sadece page parametresini yönet, post'a dokunma
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
    if (!window.blogPostsData || !Array.isArray(window.blogPostsData)) return;

    const container = document.getElementById('home-blog-list');
    if (!container) return;

    container.innerHTML = '';

    // En son eklenen 3 yazıyı göster (id'ye göre ters sırala)
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
                    onclick="showPage('blog'); viewBlogPost('${post.slug}')"
                    class="mt-2 text-primary-blue font-semibold text-sm hover:underline text-left"
                >
                    Devamını Oku →
                </button>
            </article>
        `;
    });
}

// --- BLOG ---

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

// postSlug: null ise liste, dolu ise tekil yazı gösterir
function loadBlogContent(postSlug = null) {
    const container = document.getElementById('blog-posts-container');
    container.innerHTML = '';

    if (postSlug) {
        const post = blogPostsData.find(p => p.slug === postSlug);
        if (post) {

            // ⭐ GLÜTENSİZ YAZI İÇİN ÖZEL RENDER
            if (post.slug === 'glutensiz-menu-onerileri') {
                renderGlutenFreeMenuPost(post);
                return;
            }

            // ⭐ DİNAMİK TITLE
            document.title = `${post.title} - Yanında Ne Yiyelim?`;

            // META DESCRIPTION RESET
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
                metaDesc.setAttribute(
                    "content",
                    "Blog yazılarımızı keşfedin. Menü önerileri, özel gün sofraları ve yanına ne gider içerikleri."
                );
            }

            // Sayfa HTML'sini bas (SADECE HTML!)
            container.innerHTML = `
                <button onclick="viewBlogList()" class="text-primary-blue font-semibold mb-4" type="button">
                    ← Geri Dön
                </button>
                
                <article class="bg-white p-6 rounded-2xl shadow-xl content-area">
                    <h1 class="text-2xl font-bold mb-2">${post.title}</h1>
                    <span class="text-xs font-bold text-secondary-green uppercase mb-4 block">${post.category}</span>
                    ${post.content}
                </article>

                <!-- X PAYLAŞ BUTONU -->
                <div class="mt-6">
                    <a 
                        id="twitterShareBtn"
                        href="#"
                        target="_blank"
                        class="inline-flex items-center px-4 py-2 bg-black text-white font-semibold rounded-lg shadow hover:bg-[#111] transition"
                    >
                        <!-- YENİ X LOGOSU -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4.5 3L10 12l-5.5 9h3L12 14.5 16.5 21h3L14 12l5.5-9h-3L12 9.5 7.5 3h-3z"/>
                        </svg>

                        X'te Paylaş
                    </a>
                </div>

                <div class="w-full text-center my-6 p-2 bg-gray-100 rounded-lg ad-placeholder">
                    <p class="text-xs text-gray-500 font-semibold">REKLAM ALANI (Blog Altı)</p>
                </div>
            `;

            // 🔹 X (Twitter) paylaş linkini dinamik oluştur
            const twitterBtn = document.getElementById("twitterShareBtn");
            if (twitterBtn) {
                const shareUrl =
                    "https://twitter.com/intent/tweet?text="
                    + encodeURIComponent(post.title)
                    + "&url="
                    + encodeURIComponent(window.location.href);

                twitterBtn.href = shareUrl;
            }

            // 🔹 PRATİK MENÜ ÖZEL KARTLARINI BAŞLAT
            initPratikMenuEnhancements(post.slug);

        } else {
            container.innerHTML = `
                <button onclick="viewBlogList()" class="text-primary-blue font-semibold mb-4" type="button">← Geri Dön</button>
                <div class="p-6 bg-white rounded-2xl shadow-xl">
                    <p class="text-gray-700 font-semibold">Yazı bulunamadı.</p>
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
                    <button onclick="viewBlogPost('${post.slug}')" type="button" class="text-primary-blue font-semibold text-sm hover:underline">Devamını Oku →</button>
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
        // --- 1200 KALORİ FİLTRESİ BİLGİSİ ---
        const lowCalorieOnly = document.getElementById('lowCalorieFilter')?.checked;
        const hasCalories = foundDish.calories && foundDish.calories.total;

        const totalCalOrig = hasCalories ? foundDish.calories.total : null;
        const isHighCalorie = hasCalories && totalCalOrig > 1200;

        // Başlangıçta her zaman ORİJİNAL toplam
        let effectiveTotalCal = totalCalOrig;
        let dessertCal = 0;
        let extraNote = '';

        // 🔴 SADECE şu durumda tatlıyı devre dışı bırakıyoruz:
        // - Filtre açık
        // - Orijinal toplam > 1200
        if (lowCalorieOnly && isHighCalorie && foundDish.calories.breakdown) {
            dessertCal = foundDish.calories.breakdown.dessert || 0;
            effectiveTotalCal = totalCalOrig - dessertCal;

            // Tatlı çıkarılmış hâli bile 1200'ün üstündeyse MENÜ GÖSTERME
            if (effectiveTotalCal > 1200) {
                container.innerHTML = `
                    <div class="w-full text-center p-4">
                        <p class="text-gray-800 font-semibold mb-2">
                            Bu yemek 1200 kcal üzerindedir.
                        </p>
                        <p class="text-sm text-gray-500">
                            Filtreyi kapatarak tüm yemekleri görebilirsiniz.
                        </p>
                    </div>
                `;
                bottomAd.classList.add('hidden');
                return;
            }

            extraNote = ' 1200 kcal filtresi aktif olduğu için tatlı menüden çıkarılmıştır; kalori toplamı buna göre yaklaşık olarak güncellenmiştir.';
        }

        let html = '';

        // 1) Yan lezzet listelerini oluştur
        suggestionCategories.forEach(cat => {
            const items = foundDish.suggestions[cat.key];

            // ✅ Tatlıyı sadece "filtre açık + yemek aslında >1200" durumunda gizliyoruz
            if (lowCalorieOnly && isHighCalorie && cat.key === 'dessert') {
                return; // tatlı kategorisini atla
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

        // 2) Kalori bilgisi varsa HTML'e ekle
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

        // 3) Şablona bas
        const template = document
            .getElementById('dishDetailTemplate')
            .content
            .cloneNode(true);

        template.querySelector('h2').innerHTML =
            `<span class="text-base text-gray-600">(${foundDish.cuisine})</span><br>"${foundDish.main}" Yanına Ne Gider?`;

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
window.viewBlogPost = viewBlogPost;
window.viewBlogList = viewBlogList;
window.renderHomeBlogSection = renderHomeBlogSection;
window.acceptCookies = acceptCookies;
window.rejectCookies = rejectCookies;

// Pratik menü filtre fonksiyonunu da global’e aç (HTML onclick kullanıyor)
window.filterPratikMenus = filterPratikMenus;

// İlk yükleme davranışı
window.addEventListener('load', () => {
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page');

    if (page === 'blog') {
        showPage('blog');
    } else {
        showPage('home');
        renderHomeBlogSection(); // 🔹 Ana sayfa açılışında blog önerilerini doldur
    }

    document.getElementById('bottomAdContainer').classList.add('hidden');
    checkConsent();
});
