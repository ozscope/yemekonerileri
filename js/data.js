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

// Liste HTML
window.createListHtml = (items, colorClass) => {
    return items.map(item => `
        <li class="flex items-start p-3 bg-white rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition duration-150">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ${colorClass} mr-3 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <span class="text-gray-700 font-medium">${item}</span>
        </li>
    `).join('');
};

// --- BLOG VERİSİ ---
const blogPostsData = [
    {
        id: 2,
        category: "Mutfak Sırları",
        title: "Zeytinyağlı Yemeklerin Yanına Ne Gider? Sofraya Uyum Katan En İyi Eşlikçiler",
        content: `
            <p>Türk mutfağının en hafif, en zarif lezzetleri arasında yer alan zeytinyağlılar; hem sıcak yaz sofralarının hem de dört mevsim kurulan geleneksel yemek masalarının vazgeçilmezidir. Dolma, enginar, barbunya, pırasa, bamya veya taze fasulye… Hepsi hafif oldukları kadar besleyicidir. Peki zeytinyağlı yemeklerin yanına en çok ne yakışır?</p>
            <p>İşte sofrayı tamamlayan en iyi eşlikçi önerileri…</p>
            
            <h4>1. Pirinç veya Bulgur Pilavı</h4>
            <p>Zeytinyağlıların hafif dokusunu dengeleyerek öğünü daha doyurucu hale getirir.</p>
            <ul>
                <li>Tane tane pirinç pilavı</li>
                <li>Nohutlu bulgur pilavı</li>
                <li>Sebzeli pilav</li>
            </ul>
            <p>Özellikle dolma, taze fasulye ve barbunya ile mükemmel bir uyum yakalar.</p>

            <h4>2. Cacık</h4>
            <p>Yoğurt ve salatalığın ferahlığı, zeytinyağlıların aromasıyla birleştiğinde sofrada harika bir denge oluşturur. Nane, dereotu veya sarımsakla tatlandırılabilir.</p>

            <h4>3. Yoğurt Çeşitleri</h4>
            <p>Yoğurt, neredeyse tüm zeytinyağlı yemeklerle uyumludur:</p>
            <ul>
                <li>Süzme yoğurt</li>
                <li>Sarımsaklı yoğurt</li>
                <li>Otlu yoğurt</li>
            </ul>
            <p>Özellikle pırasa, kabak ve enginar yanında tercih edilir.</p>

            <h4>4. Mevsim Salatası</h4>
            <p>Taze ve çıtır bir salata, zeytinyağlı yemeklerle birlikte hem renk hem de lezzet dengesi sağlar. Nar ekşisi veya limon sosuyla tatlandırabilirsiniz.</p>

            <h4>5. Kızarmış Ekmek veya Lavaş</h4>
            <p>Zeytinyağlıların suyuna batırmak için idealdir.</p>
            <ul>
                <li>Kıtır baget dilimleri</li>
                <li>Fırınlanmış lavaş</li>
                <li>Tahıllı ekmekler</li>
            </ul>
            <p>Özellikle zeytinyağlı patlıcan, fasulye ve kereviz yemekleriyle çok yakışır.</p>

            <h4>6. Peynir Tabağı</h4>
            <p>Hafif tuzlu peynirler zeytinyağlıların aromasını destekler.</p>
            <ul>
                <li>Ezine peynir</li>
                <li>İzmir tulumu</li>
                <li>Beyaz peynir</li>
            </ul>
            <p>Bu eşlikçi özellikle kalabalık yaz sofralarında güzel bir alternatif olur.</p>

            <h4>7. Zeytin & Zeytinyağı Soslu Mezeler</h4>
            <p>Zeytin tabakları ve hafif mezeler sofrada bütünlük sağlar:</p>
            <ul>
                <li>Zeytinyağlı zeytin salatası</li>
                <li>Zahter</li>
                <li>Nar ekşili zeytin</li>
            </ul>
            <p>Bu seçenekler zeytinyağlı ana yemeğin yanına hoş bir ara tat ekler.</p>

            <h4>8. Çorba (Başlangıç Olarak)</h4>
            <p>Özellikle yaz aylarında soğuk çorbalar, kışın ise hafif sebze çorbaları sofrayı tamamlar:</p>
            <ul>
                <li>Ayran aşı (soğuk)</li>
                <li>Mercimek çorbası</li>
                <li>Sebze çorbası</li>
            </ul>

            <h4>9. Limonlu veya Dereotlu Garnitürler</h4>
            <p>Zeytinyağlılara ferahlık katan bu küçük dokunuşlar sofrayı zenginleştirir:</p>
            <ul>
                <li>Limon dilimleri</li>
                <li>Taze dereotu</li>
                <li>Kapari</li>
                <li>Turşu çeşitleri</li>
            </ul>
        `
    },
    {
        id: 1,
        category: "Mutfak Sırları",
        title: "Etin Yanında En İyi Ne Gider? Sofraları Tamamlayan En İyi 12 Lezzet",
        content: `
            <p>Damak tadımızda özel bir yer tutan et yemekleri, doğru eşlikçilerle birleştiğinde hem daha dengeli hem de daha doyurucu hale gelir. Izgaradan fırına, kavurmadan güvece kadar tüm et çeşitlerinin yanında sunabileceğiniz garnitürleri bu yazıda derledik.</p>
            <h4>1. Közlenmiş Sebzeler</h4>
            <p>Köz patlıcan, biber, kabak ve domates; etin yoğun aromasını hafifletir.</p>
            <h4>2. Patates Püresi</h4>
            <p>Yumuşak dokusu ve hafif tereyağı aromasıyla özellikle <b>bonfile ve rosto</b> yanında harika bir tamamlayıcıdır.</p>
            <h4>3. Fırınlanmış Patates</h4>
            <p>Kıtır dışı ve yumuşak iç dokusuyla etin ağırlığını dengeler.</p>
            <h4>4. Pilav Çeşitleri</h4>
            <p>Et yemeklerinin en klasik eşlikçisi pilavdır.</p>
            <ul>
                <li>Tereyağlı pirinç pilavı</li>
                <li>Arpa şehriyeli pilav</li>
                <li>Bulgur pilavı</li>
            </ul>
            <h4>5. Mevsim Salatası</h4>
            <p>Zeytinyağı, limon ve nar ekşili soslarla ferahlık katar.</p>
            <h4>6. Roka Salatası</h4>
            <p>Roka'nın <i>acımsı</i> aroması kırmızı etle muhteşem uyum sağlar.</p>
            <h4>7. Soğan Halkaları</h4>
            <p>Özellikle <b>steak ve burger</b> yanında tercih edilir.</p>
            <h4>8. Yoğurtlu Mezeler</h4>
            <ul>
                <li>Haydari</li>
                <li>Cacık</li>
                <li>Köz patlıcan yoğurtlama</li>
            </ul>
            <h4>9. Humus</h4>
            <p>Nohut ve tahinin aromasıyla et yemekleri için ideal bir mezedir.</p>
            <h4>10. Tandır Lavaşı</h4>
            <p>Izgara etlerin suyunu içine çeker.</p>
            <h4>11. Mantar Sote</h4>
            <p>Sarımsak ve tereyağı ile etin yanına çok yakışır.</p>
            <h4>12. Soslar</h4>
            <ul>
                <li>Biberiye sosu</li>
                <li>Barbekü sos</li>
                <li>Hardal</li>
            </ul>
        `
    }
];

        // --- ANA VERİ SETİ ---
        const dishSuggestions = [
            // ÇORBALAR
           {
    main: "Tarhana Çorbası",
    keywords: ["tarhana", "çorba", "yöresel"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Etli Kuru Fasulye", "Turşu", "Tam Buğdaylı Ekmek"],
        drink: ["Su"],
        dessert: ["Sütlaç"]
    },
    calories: {
        total: 1040,
        breakdown: {
            main: 180,    // Tarhana çorbası
            yanlar: 530,  // Etli kuru fasulye (≈350) + turşu (≈20) + tam buğday ekmek (≈160)
            drink: 0,     // Su
            dessert: 330  // Sütlaç
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Mercimek Çorbası",
    keywords: ["mercimek çorbası", "çorba", "kırmızı"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Karnıyarık", "Limon Dilimleri", "Roka Salata"],
        drink: ["Su"],
        dessert: ["Kazandibi"]
    },
    calories: {
        total: 1095,
        breakdown: {
            main: 220,    // Mercimek çorbası
            yanlar: 525,  // Karnıyarık (≈450) + limon (≈5) + roka salata (≈70)
            drink: 0,     // Su
            dessert: 350  // Kazandibi
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Ezogelin Çorbası",
    keywords: ["ezogelin", "çorba", "acılı"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Karnıyarık", "Limon", "Turşu"],
        drink: ["Su"],
        dessert: ["Un Helvası"]
    },
    calories: {
        total: 1110,
        breakdown: {
            main: 220,    // Ezogelin çorbası
            yanlar: 470,  // Karnıyarık (≈450) + limon (≈5) + turşu (≈15)
            drink: 0,     // Su
            dessert: 420  // Un helvası
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Şehriye Çorbası",
    keywords: ["şehriye çorbası", "çorba", "domatesli"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Izgara Köfte", "Limon", "Mevsim Salata"],
        drink: ["Su"],
        dessert: ["Sütlaç"]
    },
    calories: {
        total: 1045,
        breakdown: {
            main: 180,    // Şehriye çorbası
            yanlar: 535,  // Izgara köfte (≈450) + limon (≈5) + mevsim salata (≈80)
            drink: 0,     // Su
            dessert: 330  // Sütlaç
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Yayla Çorbası",
    keywords: ["yayla çorbası", "yoğurt", "çorba", "pirinçli"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Taze Fasulye (Zeytinyağlı)", "Taze Pide"],
        drink: ["Su"],
        dessert: ["Güllaç"]
    },
    calories: {
        total: 960,
        breakdown: {
            main: 200,    // Yayla çorbası
            yanlar: 460,  // Zeytinyağlı taze fasulye (≈260) + taze pide (≈200)
            drink: 0,     // Su
            dessert: 300  // Güllaç
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Domates Çorbası",
    keywords: ["domates çorbası", "çorba", "kremalı"],
    cuisine: "Uluslararası",
    suggestions: {
        yanlar: ["Izgara Peynirli Sandviç (Grilled Cheese)", "Kruton", "Kaşar Rendesi"],
        drink: ["Su"],
        dessert: ["Sufle"]
    },
    calories: {
        total: 1210,
        breakdown: {
            main: 160,    // Domates çorbası
            yanlar: 630,  // Grilled cheese (≈450) + kruton (≈80) + kaşar rendesi (≈100)
            drink: 0,     // Su
            dessert: 420  // Sufle
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Brokoli Çorbası",
    keywords: ["brokoli çorbası", "çorba", "sebze", "kremalı"],
    cuisine: "Uluslararası",
    suggestions: {
        yanlar: ["Izgara Somon", "Kruton"],
        drink: ["Su"],
        dessert: ["Cheesecake"]
    },
    calories: {
        total: 1100,
        breakdown: {
            main: 170,    // Brokoli çorbası
            yanlar: 480,  // Izgara somon (≈400) + kruton (≈80)
            drink: 0,     // Su
            dessert: 450  // Cheesecake
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},

           {
    main: "Etli Bamya Çorbası",
    keywords: ["bamya çorbası", "çorba"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Etli Pilav", "Limon"],
        drink: ["Su"],
        dessert: ["Kabak Tatlısı"]
    },
    calories: {
        total: 1220,
        breakdown: {
            main: 200,    // Bamya çorbası (etli)
            yanlar: 510,  // Etli pilav (≈500) + limon (≈10)
            drink: 0,     // Su
            dessert: 510  // Kabak tatlısı + tahin
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Beyran",
    keywords: ["beyran", "çorba", "etli", "acılı", "gaziantep"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["İçli Köfte", "Bol Limon", "Lavaş"],
        drink: ["Şalgam Suyu"],
        dessert: ["Katmer"]
    },
    calories: {
        total: 1990,
        breakdown: {
            main: 350,    // Beyran (yağlı kuzu etli)
            yanlar: 650,  // İçli köfte (≈350) + lavaş (≈250) + limon (≈10)
            drink: 40,    // Şalgam
            dessert: 950  // Katmer (bir porsiyon)
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Düğün Çorbası",
    keywords: ["düğün çorbası", "çorba", "terbiyeli"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["İzmir Köfte", "Limon"],
        drink: ["Su"],
        dessert: ["Revani"]
    },
    calories: {
        total: 1290,
        breakdown: {
            main: 230,    // Düğün çorbası
            yanlar: 510,  // İzmir köfte (≈500) + limon (≈10)
            drink: 0,     // Su
            dessert: 550  // Revani
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Un Çorbası",
    keywords: ["un çorbası", "çorba", "terbiyeli"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Fırında Köfte", "Kuru Domates Salatası"],
        drink: ["Su"],
        dessert: ["Sütlaç"]
    },
    calories: {
        total: 1400,
        breakdown: {
            main: 200,    // Un çorbası
            yanlar: 600,  // Fırında köfte (≈500) + kuru domates mezesi (≈100)
            drink: 0,     // Su
            dessert: 600  // Sütlaç (büyük porsiyon)
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Ayran Aşı (Soğuk Çorba)",
    keywords: ["ayran aşı", "çorba", "soğuk", "yaz"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Mücver", "Kıymalı Börek", "Dereotu"],
        drink: ["Su"],
        dessert: ["Meyve Tabağı"]
    },
    calories: {
        total: 1485,
        breakdown: {
            main: 220,    // Ayran aşı çorbası
            yanlar: 850,  // Mücver (≈250) + kıymalı börek (≈550) + dereotu (≈10)
            drink: 0,     // Su
            dessert: 415  // Meyve tabağı (çeşitli)
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "İşkembe Çorbası",
    keywords: ["işkembe", "çorba", "sakatat"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Arnavut Ciğeri", "Sarımsaklı Sirke", "Limon"],
        drink: ["Su"],
        dessert: ["Künefe"]
    },
    calories: {
        total: 2020,
        breakdown: {
            main: 320,    // İşkembe çorbası (terbiyeli)
            yanlar: 650,  // Arnavut ciğeri (≈600) + soslar (≈50)
            drink: 0,     // Su
            dessert: 1050 // Künefe
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Paça Çorbası",
    keywords: ["paça", "çorba", "kelle"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Kokoreç", "Sarımsaklı Sirke", "Turşu"],
        drink: ["Su"],
        dessert: ["Sütlaç"]
    },
    calories: {
        total: 2080,
        breakdown: {
            main: 330,    // Paça çorbası
            yanlar: 1000, // Kokoreç (≈900) + turşu + soslar (~100)
            drink: 0,     // Su
            dessert: 750  // Sütlaç (büyük + şekerli)
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Sebze Çorbası",
    keywords: ["sebze çorbası", "çorba", "hafif"],
    cuisine: "Uluslararası",
    suggestions: {
        yanlar: ["Izgara Tavuk", "Kruton"],
        drink: ["Su"],
        dessert: ["Meyveli Yoğurt"]
    },
    calories: {
        total: 1020,
        breakdown: {
            main: 150,    // Sebze çorbası
            yanlar: 550,  // Izgara tavuk (≈450) + kruton (≈100)
            drink: 0,     // Su
            dessert: 320  // Meyveli yoğurt
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Bal Kabağı Çorbası",
    keywords: ["bal kabağı çorbası", "çorba", "kremalı"],
    cuisine: "Uluslararası",
    suggestions: {
        yanlar: ["Fırında Hindi", "Kıtır Ekmek"],
        drink: ["Su"],
        dessert: ["Brownie"]
    },
    calories: {
        total: 1560,
        breakdown: {
            main: 200,    // Bal kabağı çorbası
            yanlar: 650,  // Fırında hindi (≈450) + kıtır ekmek (≈200)
            drink: 0,     // Su
            dessert: 710  // Brownie (çikolatalı büyük)
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},

            {
    main: "Yoğurt Çorbası",
    keywords: ["yoğurt çorbası", "çorba", "yayla"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Etli Biber Dolması", "Tam Buğdaylı Ekmek"],
        drink: ["Su"],
        dessert: ["Güllaç"]
    },
    calories: {
        total: 1030,
        breakdown: {
            main: 200,    // Yoğurt çorbası
            yanlar: 480,  // Etli biber dolması (≈380) + tam buğday ekmek (≈100)
            drink: 0,     // Su
            dessert: 350  // Güllaç
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Yuvalama",
    keywords: ["yuvalama", "çorba", "antep", "etli"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Pirinç Pilavı", "Gavurdağı Salatası"],
        drink: ["Ayran"],
        dessert: ["Baklava"]
    },
    calories: {
        total: 1810,
        breakdown: {
            main: 450,    // Yuvalama (etli + yoğurtlu ağır çorba)
            yanlar: 430,  // Pilav (≈220) + gavurdağı salatası (≈210, cevizli)
            drink: 90,    // Ayran
            dessert: 840  // Baklava (2 ince dilim ≈420x2)
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Analı Kızlı",
    keywords: ["analı kızlı", "çorba", "yöresel"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Pastırmalı Humus", "Pide"],
        drink: ["Ayran"],
        dessert: ["Sütlaç"]
    },
    calories: {
        total: 1710,
        breakdown: {
            main: 400,    // Analı kızlı çorbası (köfteli + etli + yoğurtlu)
            yanlar: 610,  // Pastırmalı humus (≈350) + pide (≈260)
            drink: 90,    // Ayran
            dessert: 610  // Sütlaç (büyük porsiyon şekerli)
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Kabak Çorbası",
    keywords: ["kabak çorbası", "çorba", "sebze"],
    cuisine: "Uluslararası",
    suggestions: {
        yanlar: ["Izgara Tavuk", "Kruton"],
        drink: ["Maden Suyu"],
        dessert: ["Sufle"]
    },
    calories: {
        total: 1110,
        breakdown: {
            main: 150,    // Kabak çorbası (hafif)
            yanlar: 500,  // Izgara tavuk (≈400) + kruton (≈100)
            drink: 5,     // Maden suyu
            dessert: 455  // Sufle
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},

            // KÖFTELER
            {
    main: "Izgara Köfte",
    keywords: ["ızgara köfte", "köfte"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Mercimek Çorbası","Piyaz", "Pirinç Pilavı", "Izgara Biber"],
        drink: ["Ayran"],
        dessert: ["Kemalpaşa"]
    },
    calories: {
        total: 1610,
        breakdown: {
            main: 400,    // Izgara köfte
            yanlar: 720,  // Mercimek çorbası (180) + piyaz (300) + pilav (220) + ızgara biber (20)
            drink: 90,    // Ayran
            dessert: 400  // Kemalpaşa tatlısı
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Fırında Köfte",
    keywords: ["fırında köfte", "fırın", "köfte"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Ezogelin Çorbası","Domatesli Bulgur Pilavı","Fırında Patates", "Avokadolu Humus"],
        drink: ["Ayran"],
        dessert: ["Sütlaç"]
    },
    calories: {
        total: 1640,
        breakdown: {
            main: 380,    // Fırında köfte
            yanlar: 870,  // Ezogelin (190) + bulgur pilavı (230) + fırında patates (200) + avokadolu humus (250)
            drink: 90,    // Ayran
            dessert: 300  // Sütlaç
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Sulu Köfte",
    keywords: ["sulu köfte", "ekşili", "terbiyeli", "misket", "köfte"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Sade Pirinç Pilavı", "Turşu", "Tam Buğdaylı Ekmek"],
        drink: ["Ayran"],
        dessert: ["Fırın Sütlaç"]
    },
    calories: {
        total: 1100,
        breakdown: {
            main: 320,    // Sulu köfte
            yanlar: 340,  // Pilav (220) + turşu (20) + tam buğday ekmek (100)
            drink: 90,    // Ayran
            dessert: 350  // Fırın sütlaç
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "İnegöl Köfte",
    keywords: ["inegöl köfte", "köfte", "ızgara"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Sebze Çorbası","Piyaz", "Acı Sos", "Patates Kızartması"],
        drink: ["Şıra"],
        dessert: ["Sütlaç"]
    },
    calories: {
        total: 1640,
        breakdown: {
            main: 400,    // İnegöl köfte
            yanlar: 790,  // Sebze çorbası (120) + piyaz (300) + acı sos (20) + patates kızartması (350)
            drink: 150,   // Şıra
            dessert: 300  // Sütlaç
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Tekirdağ Köftesi",
    keywords: ["tekirdağ köfte", "köfte", "ızgara"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Piyaz", "Kapya Biber Mezesi", "Tahinli Nohut Salatası"],
        drink: ["Ayran"],
        dessert: ["Hayrabolu Tatlısı"]
    },
    calories: {
        total: 1790,
        breakdown: {
            main: 420,    // Tekirdağ köftesi
            yanlar: 730,  // Piyaz (300) + kapya biber mezesi (150) + tahinli nohut salatası (280)
            drink: 90,    // Ayran
            dessert: 550  // Hayrabolu tatlısı
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "İzmir Köfte",
    keywords: ["izmir köfte", "köfte", "sulu", "patates"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Pirinç Pilavı", "Van Cacığı"],
        drink: ["Ayran"],
        dessert: ["Revani"]
    },
    calories: {
        total: 1260,
        breakdown: {
            main: 450,    // İzmir köfte (köfte + soslu patates)
            yanlar: 370,  // Pilav (220) + Van cacığı (150)
            drink: 90,    // Ayran
            dessert: 350  // Revani
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Fellah Köftesi",
    keywords: ["fellah köftesi", "köfte", "bulgur", "sarımsaklı"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Yoğurtlu Semizotu", "Yeşillik Tabağı"],
        drink: ["Ayran"],
        dessert: ["Muhallebi"]
    },
    calories: {
        total: 1010,
        breakdown: {
            main: 450,    // Fellah köftesi
            yanlar: 220,  // Yoğurtlu semizotu (180) + yeşillik tabağı (40)
            drink: 90,    // Ayran
            dessert: 250  // Muhallebi
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "İçli Köfte",
    keywords: ["içli köfte", "kızartma", "haşlama"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Beyran","Gavurdağı Salatası", "Humus"],
        drink: ["Ayran"],
        dessert: ["Baklava"]
    },
    calories: {
        total: 1860,
        breakdown: {
            main: 600,    // 2 adet kızarmış içli köfte
            yanlar: 750,  // Beyran (300) + gavurdağı salatası (200) + humus (250)
            drink: 90,    // Ayran
            dessert: 420  // Baklava
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},

            {
    main: "Patates Köfte",
    keywords: ["patates köfte", "sulu", "köfte"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Kabak Çorbası","Pirinç Pilavı", "Turşu"],
        drink: ["Ayran"],
        dessert: ["Sütlaç"]
    },
    calories: {
        total: 1380,
        breakdown: {
            main: 420,   // Patates + köfte sulu yemek
            yanlar: 430, // Kabak çorbası (120) + pilav (220) + turşu (20) + yağ farkı (70)
            drink: 90,   // Ayran
            dessert: 440 // Sütlaç (büyük porsiyon)
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Ekşili Köfte",
    keywords: ["ekşili köfte", "terbiyeli", "sulu"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Sade Makarna", "Tahinli Nohut Salatası"],
        drink: ["Ayran"],
        dessert: ["Şekerpare"]
    },
    calories: {
        total: 1520,
        breakdown: {
            main: 380,   // Ekşili köfte (terbiyeli sulu)
            yanlar: 550, // Makarna (300) + tahinli nohut salatası (250)
            drink: 90,   // Ayran
            dessert: 500 // Şekerpare (iki küçük adet)
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Fırında Köfte Patates",
    keywords: ["fırında köfte patates", "köfte", "patates"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Domates Çorbası", "Van Cacığı", "Kornişon Turşusu"],
        drink: ["Ayran"],
        dessert: ["Sütlaç"]
    },
    calories: {
        total: 1450,
        breakdown: {
            main: 500,   // Fırında köfte + patates
            yanlar: 380, // Domates çorbası (150) + Van cacığı (200) + turşu (30)
            drink: 90,   // Ayran
            dessert: 480 // Sütlaç (şekerli, büyük porsiyon)
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},


            // ETLİ YEMEKLER VE KEBAPLAR
            {
    main: "Hünkar Beğendi",
    keywords: ["hünkar beğendi", "beğendi", "patlıcan"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Kremalı Mantar Çorbası","Mevsim Salatası", "Yoğurt"],
        drink: ["Şalgam Suyu"],
        dessert: ["Kazandibi"]
    },
    calories: {
        total: 1700,
        breakdown: {
            main: 750,   // Etli hünkar beğendi (patlıcan beğendi + tereyağlı et)
            yanlar: 430, // Kremalı mantar çorbası (200) + mevsim salatası (80) + yoğurt (150)
            drink: 50,   // Şalgam suyu (şekersiz)
            dessert: 470 // Kazandibi (büyük dilim)
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Tas Kebabı",
    keywords: ["tas kebabı"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Tarhana Çorbası","Pirinç Pilavı", "Van Cacığı", "Turşu"],
        drink: ["Ayran"],
        dessert: ["Sütlaç"]
    },
    calories: {
        total: 1850,
        breakdown: {
            main: 650,   // Tas kebabı (et + az yağlı sos)
            yanlar: 620, // Tarhana (170) + pilav (250) + Van cacığı (170) + turşu (30)
            drink: 90,   // Ayran
            dessert: 490 // Sütlaç
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Adana Kebap",
    keywords: ["adana", "kebap", "acılı", "urfa kebap", "urfa"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Lavaş", "Sumaklı Soğan", "Acılı Ezme", "Haydari"],
        drink: ["Şalgam Suyu"],
        dessert: ["Künefe"]
    },
    calories: {
        total: 2100,
        breakdown: {
            main: 800,   // Adana/Urfa (2 şiş, yağlı kıyma)
            yanlar: 500, // Lavaş (220) + soğan salatası (60) + acılı ezme (80) + haydari (140)
            drink: 50,   // Şalgam suyu
            dessert: 750 // Künefe (bol şerbetli, büyük porsiyon)
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "İskender Kebap",
    keywords: ["iskender", "döner"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Babagannuş", "Turşu"],
        drink: ["Şıra"],
        dessert: ["Sütlaç"]
    },
    calories: {
        total: 2250,
        breakdown: {
            main: 1200,  // İskender (pide, tereyağı, yoğurt, et)
            yanlar: 260, // Babagannuş (200) + turşu (60)
            drink: 120,  // Şıra (şekerli)
            dessert: 670 // Sütlaç (büyük + şeker payı)
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Döner",
    keywords: ["döner", "et döner", "tavuk döner", "dürüm"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Patates Kızartması", "Turşu", "Cevizli Kaşık Salatası"],
        drink: ["Ayran"],
        dessert: ["Sütlaç"]
    },
    calories: {
        total: 1900,
        breakdown: {
            main: 850,   // Döner: et + lavaş/yaprak + sos
            yanlar: 550, // Patates kızartması (350) + turşu (40) + cevizli salata (160)
            drink: 90,   // Ayran
            dessert: 410 // Sütlaç (orta-büyük porsiyon)
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Antrikot",
    keywords: ["antrikot", "biftek", "et", "ızgara"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Yayla Çorbası","Mantar Sosu", "Patates Püresi", "Roka Salatası"],
        drink: ["Ayran"],
        dessert: ["Sufle"]
    },
    calories: {
        total: 2050,
        breakdown: {
            main: 900,   // Tereyağlı/ızgara antrikot (yağlı et)
            yanlar: 600, // Yayla çorbası (200) + mantar sosu (120) + patates püresi (220) + roka salatası (60)
            drink: 90,   // Ayran
            dessert: 460 // Çikolatalı sufle
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},

            {
    main: "Biftek",
    keywords: ["biftek", "bonfile", "et", "ızgara"],
    cuisine: "Uluslararası",
    suggestions: {
        yanlar: ["Kremalı Ispanak", "Fırın Patates", "Yeşil Salata"],
        drink: ["Ayran"],
        dessert: ["Cheesecake"]
    },
    calories: {
        total: 1760,
        breakdown: {
            main: 600,   // Izgara biftek (200–250 g)
            yanlar: 500, // Kremalı ıspanak (200) + fırın patates (220) + salata (80)
            drink: 90,   // Ayran
            dessert: 570 // Cheesecake
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Bonfile",
    keywords: ["bonfile", "et", "ızgara"],
    cuisine: "Uluslararası",
    suggestions: {
        yanlar: ["Domates Çorbası","Kuşkonmaz", "Patates Püresi", "Zeytinyağlı Fasulye"],
        drink: ["Ayran"],
        dessert: ["Tiramisu"]
    },
    calories: {
        total: 1790,
        breakdown: {
            main: 550,   // Izgara bonfile
            yanlar: 530, // Domates çorbası (150) + kuşkonmaz (50) + püre (230) + fasulye (100)
            drink: 90,   // Ayran
            dessert: 620 // Tiramisu
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Et Sote",
    keywords: ["et sote", "kırmızı et", "sote"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Ezogelin Çorbası","Pirinç Pilavı", "Zeytinyağlı Barbunya", "Gavurdağı Salata"],
        drink: ["Ayran"],
        dessert: ["Kemalpaşa"]
    },
    calories: {
        total: 1840,
        breakdown: {
            main: 550,   // Et sote (yağlı kuşbaşı)
            yanlar: 690, // Ezogelin (190) + pilav (220) + barbunya (180) + gavurdağı (100)
            drink: 90,   // Ayran
            dessert: 510 // Kemalpaşa
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Et Kavurma",
    keywords: ["et kavurma"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Ayran Aşı Çorbası","Bulgur Pilavı", "Zeytinyağlı Kereviz", "Turşu"],
        drink: ["Ayran"],
        dessert: ["Un Helvası"]
    },
    calories: {
        total: 1950,
        breakdown: {
            main: 650,   // Et kavurma (orta yağlı)
            yanlar: 630, // Ayran aşı (200) + bulgur pilavı (230) + kereviz (150) + turşu (50)
            drink: 90,   // Ayran
            dessert: 580 // Un helvası
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Sac Kavurma",
    keywords: ["sac kavurma"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Lavaş", "Sumaklı Soğan", "Acılı Ezme"],
        drink: ["Ayran"],
        dessert: ["Künefe"]
    },
    calories: {
        total: 2230,
        breakdown: {
            main: 700,   // Sac kavurma
            yanlar: 420, // Lavaş (220) + sumaklı soğan (70) + ezme (130)
            drink: 90,   // Ayran
            dessert: 1020 // Künefe (büyük porsiyon)
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Orman Kebabı",
    keywords: ["orman kebabı", "kebap", "sebzeli"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Pirinç Pilavı", "Zeytinyağlı Barbunya", "Cevizli Kaşık Salatası"],
        drink: ["Dere Otlu Ayran"],
        dessert: ["Revani"]
    },
    calories: {
        total: 1830,
        breakdown: {
            main: 480,   // Orman kebabı (et + sebze)
            yanlar: 740, // Pilav (220) + barbunya (180) + cevizli kaşık salatası (340)
            drink: 120,  // Dereotlu ayran
            dessert: 490 // Revani
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},

           {
    main: "İslim Kebabı",
    keywords: ["islim kebabı", "kürdan kebabı", "patlıcan"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Domatesli Bulgur Pilavı", "Van Cacığı"],
        drink: ["Ayran"],
        dessert: ["Sütlaç"]
    },
    calories: {
        total: 1620,
        breakdown: {
            main: 550,   // İslim kebabı (köfte + patlıcan + sos)
            yanlar: 470, // Bulgur pilavı (230) + van cacığı (240)
            drink: 90,   // Ayran
            dessert: 510 // Sütlaç (şekerli büyük)
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Çökertme Kebabı",
    keywords: ["çökertme kebabı", "patates"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Tarhana Çorbası","Yoğurt", "Domates Sosu", "Kızarmış Patates"],
        drink: ["Ayran"],
        dessert: ["Sütlaç"]
    },
    calories: {
        total: 1870,
        breakdown: {
            main: 700,   // Çökertme kebabı: kızarmış kibrit patates + et + yoğurt + sos
            yanlar: 460, // Tarhana (170) + yoğurt (120) + domates sosu (30) + ek patates (140)
            drink: 90,   // Ayran
            dessert: 620 // Sütlaç (büyük porsiyon)
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Sultan Kebabı",
    keywords: ["sultan kebabı", "yufka", "beşamel"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Pirinç Pilavı", "Mevsim Salatası"],
        drink: ["Ayran"],
        dessert: ["Sütlaç"]
    },
    calories: {
        total: 1730,
        breakdown: {
            main: 700,   // Sultan kebabı (yufka + et + beşamel)
            yanlar: 330, // Pilav (230) + mevsim salatası (100)
            drink: 90,   // Ayran
            dessert: 610 // Sütlaç
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Balaban Kebabı",
    keywords: ["balaban kebabı", "eskişehir"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Yoğurt", "Domates Sosu", "Pide"],
        drink: ["Şıra"],
        dessert: ["Met Helvası"]
    },
    calories: {
        total: 2220,
        breakdown: {
            main: 900,   // Balaban kebabı (pide + sos + tereyağı + et)
            yanlar: 450, // Yoğurt (150) + sos (50) + pide ekstra (250)
            drink: 120,  // Şıra
            dessert: 750 // Met helvası (çok yüksek enerjili)
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Ciğer Kavurma",
    keywords: ["ciğer", "arnavut ciğeri", "tava"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Sumaklı Soğan", "Patates Kızartması"],
        drink: ["Ayran"],
        dessert: ["İrmik Helvası"]
    },
    calories: {
        total: 1890,
        breakdown: {
            main: 520,   // Arnavut ciğeri (kızartma)
            yanlar: 660, // Patates kızartması (350) + soğan (60) + yağ farkı (250)
            drink: 90,   // Ayran
            dessert: 620 // İrmik helvası
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Ciğer Sote",
    keywords: ["ciğer sote", "ciğer", "sote"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Pirinç Pilavı", "Zeytinyağlı Barbunya"],
        drink: ["Ayran"],
        dessert: ["Sütlaç"]
    },
    calories: {
        total: 1510,
        breakdown: {
            main: 450,   // Ciğer sote (az yağlı)
            yanlar: 380, // Pilav (220)  + barbunya (160)
            drink: 90,   // Ayran
            dessert: 590 // Sütlaç (büyük + şekerli)
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Kokoreç",
    keywords: ["kokoreç", "sokak", "sakatat"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Turşu", "Bol Baharat"],
        drink: ["Şalgam Suyu"],
        dessert: ["Halka Tatlısı"]
    },
    calories: {
        total: 1880,
        breakdown: {
            main: 900,   // Kokoreç (orta porsiyon 250–300 g)
            yanlar: 60,  // Turşu (20) + baharat (40)
            drink: 40,   // Şalgam suyu
            dessert: 880 // Halka tatlısı (çok yüksek kalorili, 2 adet)
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Et Yahni",
    keywords: ["et yahni", "yahni", "sulu"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Bulgur Pilavı", "Zeytinyağlı Enginar", "Turşu"],
        drink: ["Ayran", "Hoşaf"],
        dessert: ["Kabak Tatlısı"]
    },
    calories: {
        total: 1830,
        breakdown: {
            main: 450,   // Et yahni
            yanlar: 650, // Bulgur pilavı (230) + enginar (350) + turşu (70)
            drink: 210,  // Ayran (90) + hoşaf (120)
            dessert: 520 // Kabak tatlısı
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Et Haşlama",
    keywords: ["et haşlama", "haşlama", "sebzeli"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Şehriye Çorbası","Zeytinyağlı Fasulye", "Pirinç Pilavı"],
        drink: ["Ayran", "Komposto"],
        dessert: ["Sütlaç"]
    },
    calories: {
        total: 1590,
        breakdown: {
            main: 350,   // Et haşlama (hafif, haşlama pişirme)
            yanlar: 610, // Şehriye çorbası (180) + zeytinyağlı fasulye (200) + pilav (230)
            drink: 210,  // Ayran (90) + komposto (120)
            dessert: 420 // Sütlaç
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Kuzu İncik",
    keywords: ["kuzu incik", "tandır", "fırın"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["İç Pilav", "Patates Püresi", "Zeytinyağlı Enginar"],
        drink: ["Ayran", "Hoşaf"],
        dessert: ["Ayva Tatlısı"]
    },
    calories: {
        total: 2050,
        breakdown: {
            main: 700,   // Kuzu incik (fırın, yağlı et)
            yanlar: 760, // İç pilav (350) + püre (230) + enginar (180)
            drink: 210,  // Ayran (90) + hoşaf (120)
            dessert: 380 // Ayva tatlısı
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Keşkek",
    keywords: ["keşkek", "buğday"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Bamya Çorbası","Turşu", "Salça Sosu"],
        drink: ["Ayran"],
        dessert: ["Höşmerim"]
    },
    calories: {
        total: 1520,
        breakdown: {
            main: 480,   // Keşkek (buğday + et yağlı sos)
            yanlar: 360, // Bamya çorbası (150) + turşu (40) + salça sosu (170)
            drink: 90,   // Ayran
            dessert: 590 // Höşmerim
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},

            // TAVUK - HİNDİ
{
    main: "Tavuk Sote",
    keywords: ["tavuk sote", "tavuk", "sote"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Brokoli Çorbası", "Pirinç Pilavı", "Yoğurtlu Havuç Tarator"],
        drink: ["Ayran"],
        dessert: ["Sütlaç"]
    },
    calories: {
        total: 1310,
        breakdown: {
            main: 350,   // Tavuk sote
            yanlar: 490, // Brokoli çorbası (≈120) + pilav (≈220) + yoğurtlu havuç (≈150)
            drink: 90,   // Ayran
            dessert: 380 // Sütlaç
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Fırında Tavuk",
    keywords: ["fırında tavuk", "tavuk", "fırın"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Düğün Çorbası", "İç Pilav", "Patates", "Kurutulmuş Domates Mezesi"],
        drink: ["Ayran", "Komposto"],
        dessert: ["Revani"]
    },
    calories: {
        total: 1920,
        breakdown: {
            main: 420,   // Fırında tavuk
            yanlar: 830, // Düğün çorbası (≈200) + iç pilav (≈300) + patates (≈180) + kurutulmuş domates mezesi (≈150)
            drink: 100,  // Ayran (≈90) + komposto (≈120)
            dessert: 560 // Revani
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Fırında Bütün Tavuk",
    keywords: ["fırında bütün tavuk", "tavuk", "bütün"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Analı Kızlı", "Sebzeli Pilav"],
        drink: ["Ayran"],
        dessert: ["Kabak Tatlısı"]
    },
    calories: {
        total: 1760,
        breakdown: {
            main: 500,   // Fırında bütün tavuktan büyük porsiyon
            yanlar: 610, // Analı kızlı (≈350) + sebzeli pilav (≈260) 
            drink: 90,   // Ayran
            dessert: 560 // Kabak tatlısı
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Pane Tavuk",
    keywords: ["pane tavuk", "schnitzel", "kızartma"],
    cuisine: "Uluslararası",
    suggestions: {
        yanlar: ["Patates Kızartması", "Coleslaw"],
        drink: ["Kola"],
        dessert: ["Brownie"]
    },
    calories: {
        total: 1740,
        breakdown: {
            main: 550,   // Pane tavuk
            yanlar: 600, // Patates kızartması (≈400) + coleslaw (≈200)
            drink: 140,  // Kola
            dessert: 450 // Brownie
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Çerkez Tavuğu",
    keywords: ["çerkez tavuğu", "tavuk", "cevizli"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Zeytinyağlı Yaprak Sarma", "Kızarmış Ekmek"],
        drink: ["Hoşaf"],
        dessert: ["Sütlaç"]
    },
    calories: {
        total: 1345,
        breakdown: {
            main: 450,   // Çerkez tavuğu (cevizli soslu)
            yanlar: 410, // Yaprak sarma (≈260) + kızarmış ekmek (≈150)
            drink: 160,  // Hoşaf
            dessert: 325 // Sütlaç
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Beşamel Soslu Tavuk",
    keywords: ["beşamel soslu tavuk", "tavuk", "fırın"],
    cuisine: "Uluslararası",
    suggestions: {
        yanlar: ["Bezelyeli Pilav", "Roka Salatası"],
        drink: ["Maden Suyu"],
        dessert: ["Tiramisu"]
    },
    calories: {
        total: 1345,
        breakdown: {
            main: 520,   // Beşamel soslu fırın tavuk
            yanlar: 340, // Bezelyeli pilav (≈260) + roka salatası (≈80)
            drink: 5,    // Maden suyu
            dessert: 480 // Tiramisu
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Fırında Hindi",
    keywords: ["fırında hindi", "hindi", "yılbaşı"],
    cuisine: "Uluslararası",
    suggestions: {
        yanlar: ["Yoğurt Çorbası","Kestaneli Pilav", "Kızılcık Sosu"],
        drink: ["Şıra"],
        dessert: ["Kabak Tatlısı"]
    },
    calories: {
        total: 1730,
        breakdown: {
            main: 400,   // Fırında hindi
            yanlar: 610, // Yoğurt çorbası (≈180) + kestaneli pilav (≈350) + kızılcık sosu (≈80)
            drink: 160,  // Şıra
            dessert: 560 // Kabak tatlısı
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Şinitzel",
    keywords: ["şinitzel"],
    cuisine: "Uluslararası",
    suggestions: {
        yanlar: ["Kremalı Sebze Çorbası","Maydonozlu Patates","Roka Salatası", "Kırmızı Lahana (Rotkohl)"],
        drink: ["Kırmızı Şarap (İsteğe Bağlı)"],
        dessert: ["Limonlu Sorbe"]
    },
    calories: {
        total: 1470,
        breakdown: {
            main: 550,   // Şinitzel (pane et)
            yanlar: 620, // Kremalı sebze çorba (≈200) + maydanozlu patates (≈220) + roka salatası (≈80) + rotkohl (≈120)
            drink: 120,  // Kırmızı şarap
            dessert: 180 // Limonlu sorbe
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},


            // SEBZE / ZEYTİNYAĞLI
            {
    main: "Patlıcan Musakka",
    keywords: ["patlıcan musakka", "musakka", "patlıcan", "kıyma"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Pirinç Pilavı", "Cacık", "Mevsim Salata"],
        drink: [],
        dessert: ["Sütlaç"]
    },
    calories: {
        total: 1080,
        breakdown: {
            main: 350,      // Patlıcan musakka
            yanlar: 480,    // Pirinç pilavı (≈220) + cacık (≈200) + mevsim salata (≈60)
            drink: 0,      
            dessert: 250    // Sütlaç
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Karnıyarık",
    keywords: ["karnıyarık", "patlıcan", "kıyma"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Ayran Aşı Çorbası", "Pirinç Pilavı"],
        drink: ["Komposto"],
        dessert: ["Sütlaç"]
    },
    calories: {
        total: 1190,
        breakdown: {
            main: 420,      // Karnıyarık
            yanlar: 400,    // Ayran aşı çorbası (≈180) + pirinç pilavı (≈220)
            drink: 120,     // Komposto (1 bardak)
            dessert: 250    // Sütlaç
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "İmam Bayıldı",
    keywords: ["imam bayıldı", "patlıcan", "zeytinyağlı"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Pirinç Pilavı", "Yoğurt"],
        drink: ["Ayran"],
        dessert: ["Revani"]
    },
    calories: {
        total: 1020,
        breakdown: {
            main: 290,      // İmam bayıldı
            yanlar: 340,    // Pirinç pilavı (≈220) + yoğurt (≈120)
            drink: 90,      // Ayran
            dessert: 300    // Revani
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Patlıcan Dolması",
    keywords: ["patlıcan dolması", "kuru patlıcan", "dolma"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Yoğurt", "Turşu"],
        drink: ["Ayran"],
        dessert: ["İrmik Helvası"]
    },
    calories: {
        total: 870,
        breakdown: {
            main: 310,      // Patlıcan dolması
            yanlar: 150,    // Yoğurt (≈120) + turşu (≈30)
            drink: 90,      // Ayran
            dessert: 320    // İrmik helvası
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Kuru Patlıcan Dolması",
    keywords: ["kuru patlıcan dolması", "dolma", "antep"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Haydari", "Ezogelin Çorbası"],
        drink: ["Ayran"],
        dessert: ["Baklava"]
    },
    calories: {
        total: 1120,
        breakdown: {
            main: 330,      // Kuru patlıcan dolması
            yanlar: 350,    // Haydari (≈180) + ezogelin çorbası (≈170)
            drink: 90,      // Ayran
            dessert: 350    // Baklava
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},

            {
    main: "Lahana Dolması",
    keywords: ["lahana dolması", "sarma", "lahana"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Bal Kabağı Çorbası","Yoğurt", "Turşu"],
        drink: ["Ayran"],
        dessert: ["Sütlaç"]
    },
    calories: {
        total: 930,
        breakdown: {
            main: 280,      // Lahana dolması
            yanlar: 310,    // Bal kabağı çorbası (≈160) + yoğurt (≈120) + turşu (≈30)
            drink: 90,      // Ayran
            dessert: 250    // Sütlaç
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Zeytinyağlı Enginar",
    keywords: ["zeytinyağlı enginar", "enginar", "zeytinyağlı"],
    cuisine: "Akdeniz Mutfağı",
    suggestions: {
        yanlar: ["Domates Çorbası","İç Bakla", "Dereotu", "Pirinç Pilavı"],
        drink: ["Maden Suyu"],
        dessert: ["Meyve"]
    },
    calories: {
        total: 830,
        breakdown: {
            main: 220,      // Zeytinyağlı enginar
            yanlar: 535,    // Domates çorbası (≈150) + iç bakla (≈160) + dereotu (≈5) + pilav (≈220)
            drink: 5,       // Maden suyu (çok düşük)
            dessert: 70     // Meyve porsiyonu
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Zeytinyağlı Kereviz",
    keywords: ["zeytinyağlı kereviz", "kereviz", "portakallı"],
    cuisine: "Akdeniz Mutfağı",
    suggestions: {
        yanlar: ["Mercimek Çorbası","Havuç Tarator", "Fırında Levrek"],
        drink: [],
        dessert: ["Ispanaklı Pasta"]
    },
    calories: {
        total: 1100,
        breakdown: {
            main: 210,      // Zeytinyağlı kereviz
            yanlar: 570,    // Mercimek çorbası (≈170) + havuç tarator (≈140) + fırında levrek (≈260)
            drink: 0,       // İçerik belirtilmemiş ("-")
            dessert: 320    // Ispanaklı pasta
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Portakallı Kereviz",
    keywords: ["portakallı kereviz", "kereviz"],
    cuisine: "Akdeniz Mutfağı",
    suggestions: {
        yanlar: ["Roka Salatası", "Yoğurt"],
        drink: ["Maden Suyu"],
        dessert: ["Kabak Tatlısı"]
    },
    calories: {
        total: 655,
        breakdown: {
            main: 210,      // Portakallı kereviz
            yanlar: 180,    // Roka salatası (≈60) + yoğurt (≈120)
            drink: 5,       // Maden suyu
            dessert: 260    // Kabak tatlısı
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Zeytinyağlı Taze Fasulye",
    keywords: ["taze fasulye", "fasulye", "zeytinyağlı", "zeytinyağlı fasulye"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Pirinç Pilavı", "Cacık"],
        drink: [],
        dessert: ["Karpuz"]
    },
    calories: {
        total: 710,
        breakdown: {
            main: 230,      // Zeytinyağlı taze fasulye
            yanlar: 420,    // Pilav (≈220) + cacık (≈200)
            drink: 0,      // 
            dessert: 60     // Karpuz porsiyonu
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Bakla",
    keywords: ["bakla", "zeytinyağlı", "fava"],
    cuisine: "Akdeniz Mutfağı",
    suggestions: {
        yanlar: ["Dereotu", "Yoğurt"],
        drink: ["Maden Suyu"],
        dessert: ["Çilek"]
    },
    calories: {
        total: 410,
        breakdown: {
            main: 220,      // Zeytinyağlı bakla
            yanlar: 125,    // Dereotu (≈5) + yoğurt (≈120)
            drink: 5,       // Maden suyu
            dessert: 60     // Çilek porsiyonu
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Barbunya",
    keywords: ["barbunya", "zeytinyağlı barbunya", "pilaki"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Pirinç Pilavı", "Turşu"],
        drink: ["Ayran"],
        dessert: ["Şekerpare"]
    },
    calories: {
        total: 920,
        breakdown: {
            main: 260,      // Zeytinyağlı barbunya
            yanlar: 250,    // Pilav (≈220) + turşu (≈30)
            drink: 90,      // Ayran
            dessert: 320    // Şekerpare
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},

            {
    main: "Ispanak",
    keywords: ["ıspanak", "ıspanak yemeği", "pirinçli"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Yoğurt", "Makarna"],
        drink: ["Su"],
        dessert: ["Sütlaç"]
    },
    calories: {
        total: 870,
        breakdown: {
            main: 200,    // Ispanak yemeği
            yanlar: 420,  // Yoğurt (≈120) + makarna (≈300)
            drink: 0,     // Su (ihmal edilebilir)
            dessert: 250  // Sütlaç
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Ispanaklı Yumurta",
    keywords: ["ıspanaklı yumurta", "kahvaltı", "yumurta"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Yoğurt", "Tam Buğdaylı Ekmek"],
        drink: ["Çay"],
        dessert: []
    },
    calories: {
        total: 455,
        breakdown: {
            main: 250,   // Ispanaklı yumurta (2 yumurta + ıspanak)
            yanlar: 200, // Yoğurt (≈120) + tam buğday ekmek (≈80)
            drink: 5,    // Çay (şekersiz çok düşük)
            dessert: 0   // Tatlı yok
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Pırasa",
    keywords: ["pırasa", "zeytinyağlı", "pirinçli"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Ezogelin Çorbası","Limon", "Pirinç Pilavı","Yoğurt"],
        drink: ["Su"],
        dessert: ["Revani"]
    },
    calories: {
        total: 1015,
        breakdown: {
            main: 200,   // Zeytinyağlı pırasa
            yanlar: 515, // Ezogelin (≈170) + limon (≈5) + pilav (≈220) + yoğurt (≈120)
            drink: 0,    // Su
            dessert: 300 // Revani
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Pırasa Graten",
    keywords: ["pırasa graten"],
    cuisine: "Uluslararası",
    suggestions: {
        yanlar: ["Çıtır Tavuk", "Domatesli Makarna", "Havuç Salata"],
        drink: ["Maden Suyu"],
        dessert: ["Muhallebi"]
    },
    calories: {
        total: 1135,
        breakdown: {
            main: 260,   // Pırasa graten (peynir + beşamel)
            yanlar: 650, // Çıtır tavuk (≈250) + domatesli makarna (≈280) + havuç salata (≈120)
            drink: 5,    // Maden suyu
            dessert: 220 // Muhallebi
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Karnabahar Kızartması",
    keywords: ["karnabahar kızartması", "kızartma", "sebze"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Sarımsaklı Yoğurt", "Domates Sosu"],
        drink: ["Ayran"],
        dessert: ["Sütlaç"]
    },
    calories: {
        total: 720,
        breakdown: {
            main: 220,   // Karnabahar kızartması
            yanlar: 160, // Sarımsaklı yoğurt (≈120) + domates sosu (≈40)
            drink: 90,   // Ayran
            dessert: 250 // Sütlaç
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Karnabahar Graten",
    keywords: ["karnabahar graten", "fırın", "beşamel"],
    cuisine: "Uluslararası",
    suggestions: {
        yanlar: ["Izgara Tavuk", "Salata"],
        drink: ["Maden Suyu"],
        dessert: ["Cheesecake"]
    },
    calories: {
        total: 875,
        breakdown: {
            main: 230,   // Karnabahar graten
            yanlar: 290, // Izgara tavuk (≈230) + salata (≈60)
            drink: 5,    // Maden suyu
            dessert: 350 // Cheesecake
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Karnabahar Pane",
    keywords: ["karnabahar pane", "kızartma", "pane"],
    cuisine: "Uluslararası",
    suggestions: {
        yanlar: ["Yoğurtlu Sos", "Makarna"],
        drink: ["Kola"],
        dessert: ["Dondurma"]
    },
    calories: {
        total: 990,
        breakdown: {
            main: 230,   // Karnabahar pane
            yanlar: 420, // Yoğurtlu sos (≈120) + makarna (≈300)
            drink: 140,  // Kola (1 bardak)
            dessert: 200 // Dondurma
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Mücver",
    keywords: ["mücver", "kabak"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Ayran Aşı Çorbası","Sarımsaklı Yoğurt", "Beyaz Peynir"],
        drink: ["Çay"],
        dessert: ["Karpuz"]
    },
    calories: {
        total: 715,
        breakdown: {
            main: 260,   // Mücver
            yanlar: 390, // Ayran aşı (≈180) + sarımsaklı yoğurt (≈120) + beyaz peynir (≈90)
            drink: 5,    // Çay
            dessert: 60  // Karpuz
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Kabak",
    keywords: ["kabak", "kabak yemeği"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Dereotu", "Yoğurt"],
        drink: [],
        dessert: ["Sütlaç"]
    },
    calories: {
        total: 525,
        breakdown: {
            main: 150,   // Hafif kabak yemeği
            yanlar: 125, // Dereotu (≈5) + yoğurt (≈120)
            drink: 0,    // İçecek belirtilmemiş
            dessert: 250 // Sütlaç
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},

            {
    main: "Türlü",
    keywords: ["türlü", "sebze", "etli"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Bulgur Pilavı", "Cacık"],
        drink: [],
        dessert: ["Aşure"]
    },
    calories: {
        total: 1150,
        breakdown: {
            main: 210,   // Etli türlü
            yanlar: 420, // Bulgur pilavı (≈220) + cacık (≈200) 
            drink: 0,   // Ayran
            dessert: 520 // Aşure
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Kapuska",
    keywords: ["kapuska", "lahana"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Tarhana Çorbası","Bulgur Pilavı", "Turşu"],
        drink: ["Ayran"],
        dessert: ["Kabak Tatlısı"]
    },
    calories: {
        total: 1320,
        breakdown: {
            main: 190,   // Kapuska (lahana + az et/yağ)
            yanlar: 480, // Tarhana (≈180) + bulgur pilavı (≈220) + turşu (≈30)
            drink: 90,   // Ayran
            dessert: 560 // Kabak tatlısı (tahinli + şerbetli)
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Mancar",
    keywords: ["mancar", "karalahana", "karadeniz"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Mısır Ekmeği", "Yoğurt"],
        drink: [],
        dessert: ["Laz Böreği"]
    },
    calories: {
        total: 1030,
        breakdown: {
            main: 150,   // Mancar
            yanlar: 260, // Mısır ekmeği (≈180) + yoğurt (≈80)
            drink: 0,    // İçecek yok
            dessert: 620 // Laz böreği
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Şıhıl Mahşi",
    keywords: ["şıhıl mahşi", "kabak dolması", "antep"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Sarımsaklı Yoğurt", "Pirinç Pilavı"],
        drink: ["Ayran"],
        dessert: ["Künefe"]
    },
    calories: {
        total: 1440,
        breakdown: {
            main: 330,   // Şıhıl mahşi
            yanlar: 350, // Sarımsaklı yoğurt (≈130) + pilav (≈220)
            drink: 90,   // Ayran
            dessert: 670 // Künefe
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Ratatouille",
    keywords: ["ratatouille", "sebze", "fransız"],
    cuisine: "Akdeniz Mutfağı",
    suggestions: {
        yanlar: ["Pilav", "Izgara Et"],
        drink: ["Şarap (İsteğe Bağlı)"],
        dessert: ["Creme Brulee"]
    },
    calories: {
        total: 1520,
        breakdown: {
            main: 160,   // Ratatouille
            yanlar: 680, // Pilav (≈220) + ızgara et (≈460)
            drink: 120,  // Şarap
            dessert: 560 // Creme brulee
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Fırında Sebze",
    keywords: ["fırında sebze", "sebze", "karışık"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Yoğurtlu Sos", "Köfte"],
        drink: ["Ayran"],
        dessert: ["Meyve"]
    },
    calories: {
        total: 1010,
        breakdown: {
            main: 180,   // Fırında sebze
            yanlar: 510, // Yoğurtlu sos (≈120) + köfte (≈390)
            drink: 90,   // Ayran
            dessert: 230 // Meyve (karışık porsiyon)
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Sebze Graten",
    keywords: ["sebze graten", "graten", "fırın"],
    cuisine: "Uluslararası",
    suggestions: {
        yanlar: ["Izgara Tavuk", "Salata"],
        drink: ["Maden Suyu"],
        dessert: ["Sufle"]
    },
    calories: {
        total: 1090,
        breakdown: {
            main: 260,   // Sebze graten
            yanlar: 420, // Izgara tavuk (≈320) + salata (≈100)
            drink: 5,    // Maden suyu
            dessert: 405 // Sufle
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Domates Biber Patlıcan Kızartma",
    keywords: ["kızartma", "karışık kızartma"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Sarımsaklı Yoğurt", "Domates Sosu", "Ekmek"],
        drink: ["Ayran"],
        dessert: ["Karpuz"]
    },
    calories: {
        total: 1080,
        breakdown: {
            main: 380,   // Karışık kızartma
            yanlar: 310, // Sarımsaklı yoğurt (≈120) + domates sosu (≈40) + ekmek (≈150)
            drink: 90,   // Ayran
            dessert: 300 // Karpuz büyük porsiyon
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Patates Oturtma",
    keywords: ["patates oturtma", "patates", "kıyma"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Mercimek Çorbası","Pirinç Pilavı"],
        drink: ["Ayran"],
        dessert: ["Revani"]
    },
    calories: {
        total: 14500,
        breakdown: {
            main: 420,   // Patates oturtma
            yanlar: 380, // Pilav (≈220) + mercimek çorbası (≈160)
            drink: 90,   // Ayran
            dessert: 560 // Revani + büyük porsiyon
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Etli Patates",
    keywords: ["etli patates", "sulu patates"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Pirinç Pilavı", "Turşu"],
        drink: ["Ayran"],
        dessert: ["Sütlaç"]
    },
    calories: {
        total: 1130,
        breakdown: {
            main: 330,   // Etli patates
            yanlar: 250, // Pilav (≈220) + turşu (≈30)
            drink: 90,   // Ayran
            dessert: 460 // Sütlaç (şekerli, büyük porsiyon)
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Fırında Patates",
    keywords: ["fırında patates", "patates", "baharatlı"],
    cuisine: "Uluslararası",
    suggestions: {
        yanlar: ["Fırında Köfte", "Soğan Halkası", "Ketçap", "Mayonez"],
        drink: ["Kola"],
        dessert: ["Dondurma"]
    },
    calories: {
        total: 1650,
        breakdown: {
            main: 290,   // Fırında baharatlı patates
            yanlar: 790, // Köfte (≈420) + soğan halkası (≈250) + ketçap/mayo (≈120)
            drink: 140,  // Kola
            dessert: 430 // Dondurma (2 top)
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Patates Graten",
    keywords: ["patates graten", "kremalı patates"],
    cuisine: "Fransız Mutfağı",
    suggestions: {
        yanlar: ["Biftek", "Yeşil Salata"],
        drink: ["Kırmızı Şarap (İsteğe Bağlı)"],
        dessert: ["Çikolatalı Mus"]
    },
    calories: {
        total: 1700,
        breakdown: {
            main: 350,   // Patates graten
            yanlar: 600, // Biftek (≈500) + salata (≈100)
            drink: 120,  // Şarap
            dessert: 630 // Çikolatalı mus
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Kumpir",
    keywords: ["kumpir", "patates", "ortaköy"],
    cuisine: "Sokak Lezzetleri",
    suggestions: {
        yanlar: ["Rus Salatası", "Sosis", "Turşu"],
        drink: ["Ayran"],
        dessert: ["Waffle"]
    },
    calories: {
        total: 2050,
        breakdown: {
            main: 900,   // Kumpir (bol malzemeli)
            yanlar: 380, // Rus salatası (≈240) + sosis (≈120) + turşu (≈20)
            drink: 90,   // Ayran
            dessert: 680 // Waffle (çikolata + meyve)
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Kaşarlı Mantar",
    keywords: ["kaşarlı mantar", "fırın mantar"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Domates Çorbası","Et Yemekleri", "Roka Salatası"],
        drink: ["Şalgam Suyu"],
        dessert: ["Helva"]
    },
    calories: {
        total: 960,
        breakdown: {
            main: 180,   // Kaşarlı fırın mantar
            yanlar: 450, // Domates çorbası (≈150) + roka salatası (≈60) + et yan porsiyon (≈240)
            drink: 40,   // Şalgam
            dessert: 290 // Helva
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "İstiridye Mantarı",
    keywords: ["istiridye mantarı", "mantar sote"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Penne Makarna", "Yeşil Salata"],
        drink: ["Maden Suyu"],
        dessert: ["Sütlaç"]
    },
    calories: {
        total: 1070,
        breakdown: {
            main: 160,   // Mantar sote
            yanlar: 580, // Makarna (≈500) + salata (≈80)
            drink: 5,    // Maden suyu
            dessert: 325 // Sütlaç
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Zeytinyağlı Semizotu",
    keywords: ["semizotu", "yoğurtlu semizotu"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Karpuz", "Domatesli Pilav","Peynir", "Domates"],
        drink: ["Maden Suyu"],
        dessert: ["Dondurma"]
    },
    calories: {
        total: 1025,
        breakdown: {
            main: 150,   // Yoğurtlu semizotu
            yanlar: 430, // Domatesli pilav (≈220) + peynir (≈150) + domates (≈60) + karpuz (≈60)
            drink: 5,    // Maden suyu
            dessert: 440 // 2 top dondurma
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Bamya",
    keywords: ["bamya", "zeytinyağlı bamya"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Yayla Çorbası", "Domatesli Pilav","Cacık"],
        drink: ["Maden Suyu"],
        dessert: ["Revani"]
    },
    calories: {
        total: 1390,
        breakdown: {
            main: 150,   // Zeytinyağlı bamya
            yanlar: 600, // Yayla çorbası (≈180) + domatesli pilav (≈220) + cacık (≈200)
            drink: 5,    // Maden suyu
            dessert: 635 // Revani (büyük porsiyon)
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},


            // BAKLAGİL & PİLAV
{
    main: "Kuru Fasulye",
    keywords: ["kuru fasulye", "fasulye", "etli"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Pirinç Pilavı", "Turşu", "Kuru Soğan"],
        drink: ["Ayran"],
        dessert: ["Sütlaç"]
    },
    calories: {
        total: 1120, // toplam yaklaşık kalori
        breakdown: {
            main: 400,     // kuru fasulye
            yanlar: 350,   // pilav + turşu
            drink: 100,     // ayran
            dessert: 300 // 1 porsiyon sütlaç
        },
        note: "Ortalama bir porsiyon değeri, kişiye göre değişebilir."
    }
},

{
    main: "Nohut",
    keywords: ["nohut", "etli nohut", "sulu"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Bulgur Pilavı", "Turşu"],
        drink: ["Ayran"],
        dessert: ["Revani"]
    },
    calories: {
        total: 1500,
        breakdown: {
            main: 400,   // 1 porsiyon etli nohut
            yanlar: 450, // 1 porsiyon bulgur pilavı + biraz turşu
            drink: 120,  // 1 bardak ayran
            dessert: 530 // 1 dilim revani (şerbetli)
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Pirinç Pilavı",
    keywords: ["pirinç pilavı", "pilav", "şehriyeli"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Kuru Fasulye", "Tavuk Sote", "Cacık"],
        drink: ["Hoşaf"],
        dessert: ["Sütlaç"]
    },
    calories: {
        total: 1750,
        breakdown: {
            main: 450,   // şehriyeli pirinç pilavı (1 büyük porsiyon)
            yanlar: 850, // kuru fasulye + tavuk sote + küçük kase cacık
            drink: 150,  // 1 bardak hoşaf
            dessert: 300 // 1 porsiyon sütlaç
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Bulgur Pilavı",
    keywords: ["bulgur pilavı", "bulgur", "domatesli"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Turşu", "Et Sote"],
        drink: ["Ayran"],
        dessert: ["İrmik Helvası"]
    },
    calories: {
        total: 1560,
        breakdown: {
            main: 380,   // 1 porsiyon domatesli bulgur
            yanlar: 610, //  turşu + 1 porsiyon et sote
            drink: 120,  // 1 bardak ayran
            dessert: 450 // 1 porsiyon irmik helvası
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Domatesli Bulgur Pilavı",
    keywords: ["domatesli bulgur pilavı"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Yoğurt", "Biber Turşusu"],
        drink: ["Ayran"],
        dessert: ["Meyve"]
    },
    calories: {
        total: 1050,
        breakdown: {
            main: 380,   // 1 porsiyon domatesli bulgur
            yanlar: 170, // yoğurt + biber turşusu
            drink: 120,  // 1 bardak ayran
            dessert: 380 // 1 orta boy meyve tabağı
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Meyhane Pilavı",
    keywords: ["meyhane pilavı", "bulgur"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Cacık", "Kuzu Şiş"],
        drink: ["Şalgam Suyu"],
        dessert: ["Künefe"]
    },
    calories: {
        total: 2000,
        breakdown: {
            main: 420,   // 1 porsiyon meyhane pilavı
            yanlar: 820, // cacık + 1 porsiyon kuzu şiş
            drink: 30,   // şekersiz şalgam (yaklaşık)
            dessert: 730 // 1 porsiyon künefe
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Özbek Pilavı",
    keywords: ["özbek pilavı", "etli pilav", "havuçlu"],
    cuisine: "Orta Asya Mutfağı",
    suggestions: {
        yanlar: ["Cevizli Kaşık Salatası", "Turşu"],
        drink: ["Ayran"],
        dessert: ["Kuru Meyve"]
    },
    calories: {
        total: 1650,
        breakdown: {
            main: 750,   // yağlı etli havuçlu pilav (1 dolu porsiyon)
            yanlar: 250, // cevizli salata + turşu
            drink: 120,  // 1 bardak ayran
            dessert: 530 // 1 küçük kase kuru meyve karışımı
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Falafel",
    keywords: ["falafel", "nohut köftesi"],
    cuisine: "Orta Doğu Mutfağı",
    suggestions: {
        yanlar: ["Avokadolu Humus", "Pita Ekmeği", "Salata"],
        drink: ["Ayran"],
        dessert: ["Baklava"]
    },
    calories: {
        total: 1950,
        breakdown: {
            main: 550,   // 4–5 adet falafel
            yanlar: 650, // avokadolu humus + 1 pita + salata
            drink: 120,  // 1 bardak ayran
            dessert: 630 // 2 küçük dilim baklava
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},

            // MAKARNA & HAMUR İŞİ
{
    main: "Makarna",
    keywords: ["makarna", "sade makarna", "peynirli"],
    cuisine: "İtalyan Mutfağı",
    suggestions: {
        yanlar: ["Tavuk Sote", "Yoğurt"],
        drink: ["Kola/Kırmızı Şarap (İsteğe Bağlı)"],
        dessert: ["Puding"]
    },
    calories: {
        total: 14150,
        breakdown: {
            main: 600,   // sade/peynirli makarna (1 büyük porsiyon)
            yanlar: 400, // tavuk sote + 1 küçük kase yoğurt
            drink: 125,  // 1 bardak kola + 1 küçük kadeh şarap 
            dessert: 290 // 1 porsiyon puding
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Salçalı Makarna",
    keywords: ["salçalı makarna", "makarna"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Yoğurt", "Turşu"],
        drink: ["Ayran"],
        dessert: ["Revani"]
    },
    calories: {
        total: 1250,
        breakdown: {
            main: 550,   // 1 büyük tabak salçalı makarna
            yanlar: 150, // yoğurt + turşu
            drink: 120,  // 1 bardak ayran
            dessert: 430 // 1 porsiyon revani (şerbetli)
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Kremalı Makarna",
    keywords: ["kremalı makarna", "makarna", "kremalı"],
    cuisine: "İtalyan Mutfağı",
    suggestions: {
        yanlar: ["Fırında Tavuk", "Fırında Kaşarlı Mantar"],
        drink: ["Beyaz Şarap (İsteğe Bağlı)"],
        dessert: ["Tiramisu"]
    },
    calories: {
        total: 1700,
        breakdown: {
            main: 750,   // krema + tereyağlı makarna (1 büyük porsiyon)
            yanlar: 420, // fırında tavuk + kaşarlı mantar
            drink: 120,  // 1 küçük kadeh beyaz şarap (öneri)
            dessert: 410 // 1 porsiyon tiramisu (restoran tipi)
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
}
,
{
    main: "Fırında Makarna",
    keywords: ["fırında makarna", "beşamel"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Mercimek Çorbası", "Ispanak", "Mor Lahana Salatası"],
        drink: ["Ayran"],
        dessert: ["Mozaik Pasta"]
    },
    calories: {
        total: 550 + 290 + 100 + 330,  // ≈ 1270 kcal
        breakdown: {
            main: 550,
            yanlar: 290,
            drink: 100,
            dessert: 330
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Spagetti",
    keywords: ["spagetti", "bolonez", "napoliten"],
    cuisine: "İtalyan Mutfağı",
    suggestions: {
        yanlar: ["Rendelenmiş Parmesan", "Sarımsaklı Ekmek"],
        drink: ["Kola"],
        dessert: ["Panna Cotta"]
    },
    calories: {
        total: 1440,
        breakdown: {
            main: 650,    // Bolonez/napoliten spagetti (1 büyük porsiyon)
            yanlar: 350,  // parmesan + 1-2 dilim sarımsaklı ekmek
            drink: 140,   // 1 bardak kola
            dessert: 300  // 1 porsiyon panna cotta
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Penne",
    keywords: ["penne", "makarna", "arabiata"],
    cuisine: "İtalyan Mutfağı",
    suggestions: {
        yanlar: ["Pesto Sos", "Fırında Tavuk"],
        drink: ["Maden Suyu"],
        dessert: ["Tiramisu"]
    },
    calories: {
        total: 1335,
        breakdown: {
            main: 600,   // Penne arabiata (1 büyük porsiyon)
            yanlar: 350, // pesto sos + 1 porsiyon fırında tavuk
            drink: 0,    // maden suyu
            dessert: 385 // 1 porsiyon tiramisu
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Fettucini",
    keywords: ["fettucini", "alfredo", "makarna"],
    cuisine: "İtalyan Mutfağı",
    suggestions: {
        yanlar: ["Tavuk Sote", "Mantar"],
        drink: ["Limonata"],
        dessert: ["Cheesecake"]
    },
    calories: {
        total: 1390,
        breakdown: {
            main: 700,   // Fettucini alfredo (krema + tereyağı)
            yanlar: 250, // tavuk sote + sotelenmiş mantar
            drink: 120,  // 1 bardak limonata
            dessert: 320 // 1 dilim cheesecake
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Lazanya",
    keywords: ["lazanya"],
    cuisine: "İtalyan Mutfağı",
    suggestions: {
        yanlar: ["Mercimek Çorbası", "Sarımsaklı Ekmek", "Dereotlu Kabak Tarator"],
        drink: ["Kayısı Hoşafı/Kırmızı Şarap (İsteğe Bağlı)"],
        dessert: ["Tiramusu"]
    },
    calories: {
        total: 1690,
        breakdown: {
            main: 750,   // kıymalı, beşamel soslu lazanya (1 büyük dilim)
            yanlar: 430, // mercimek çorbası + sarımsaklı ekmek + kabak tarator
            drink: 125,  // 1 bardak hoşaf + 1 küçük kadeh şarap (öneri)
            dessert: 385 // 1 porsiyon tiramisu
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Erişte",
    keywords: ["erişte", "ev yapımı erişte"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Tavuk Sote", "Kıymalı Börek", "Yoğurtlu Pancar Mezesi"],
        drink: ["Ayran", "Komposto"],
        dessert: ["Kabak Tatlısı"]
    },
    calories: {
        total: 1420,
        breakdown: {
            main: 550,   // tereyağlı ev yapımı erişte
            yanlar: 520, // tavuk sote + kıymalı börek + pancar mezesi
            drink: 130,  // 1 bardak ayran + 1 bardak komposto
            dessert: 220 // 1 porsiyon kabak tatlısı
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Noodle",
    keywords: ["noodle", "çin eriştesi"],
    cuisine: "Asya Mutfağı",
    suggestions: {
        yanlar: ["Soya Sosu"],
        drink: ["Yeşil Çay"],
        dessert: ["Kızarmış Muz"]
    },
    calories: {
        total: 950,
        breakdown: {
            main: 650,   // sebzeli/etli noodle (1 büyük kase)
            yanlar: 50,  // soya sosu ve küçük eklemeler
            drink: 0,    // şekersiz yeşil çay
            dessert: 250 // kızarmış muz (bal veya dondurmayla)
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Mac and Cheese",
    keywords: ["mac and cheese", "peynirli makarna"],
    cuisine: "Amerikan Mutfağı",
    suggestions: {
        yanlar: ["Sosis", "Brokoli"],
        drink: ["Kola"],
        dessert: ["Cookie"]
    },
    calories: {
        total: 1350,
        breakdown: {
            main: 750,   // kremalı peynirli makarna (1 büyük porsiyon)
            yanlar: 250, // sosis + brokoli
            drink: 140,  // 1 bardak kola
            dessert: 210 // 1 büyük cookie
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Mantı",
    keywords: ["mantı", "kayseri mantısı"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Sarımsaklı Yoğurt", "Salçalı Sos", "Sumak"],
        drink: ["Ayran"],
        dessert: ["Sütlaç"]
    },
    calories: {
        total: 1250,
        breakdown: {
            main: 800,   // tereyağlı, yoğurtlu mantı (1 dolu tabak)
            yanlar: 100, // ekstra sos/yoğurt ilavesi
            drink: 120,  // 1 bardak ayran
            dessert: 230 // 1 porsiyon sütlaç
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Pizza",
    keywords: ["pizza", "karışık pizza"],
    cuisine: "İtalyan Mutfağı",
    suggestions: {
        yanlar: ["Patates Kızartması", "Kızarmış Baget Tavuk", "Ketçap", "Mayonez"],
        drink: ["Kola"],
        dessert: ["Sufle"]
    },
    calories: {
        total: 1800,
        breakdown: {
            main: 900,   // karışık pizza (yaklaşık 4 büyük dilim)
            yanlar: 500, // patates kızartması + baget tavuk + soslar
            drink: 140,  // 1 bardak kola
            dessert: 260 // 1 porsiyon sufle
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Hamburger",
    keywords: ["hamburger", "burger"],
    cuisine: "Amerikan Mutfağı",
    suggestions: {
        yanlar: ["Patates Kızartması", "Soğan Halkası"],
        drink: ["Kola"],
        dessert: ["Milkshake"]
    },
    calories: {
        total: 1900,
        breakdown: {
            main: 800,   // peynirli, soslu büyük burger
            yanlar: 550, // patates kızartması + soğan halkası
            drink: 140,  // kola
            dessert: 410 // 1 büyük milkshake
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Pide",
    keywords: ["pide", "kıymalı pide", "kaşarlı pide"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Acılı Ezme", "Haydari"],
        drink: ["Ayran"],
        dessert: ["Künefe"]
    },
    calories: {
        total: 1550,
        breakdown: {
            main: 900,   // 1 adet orta boy kıymalı/kaşarlı pide
            yanlar: 200, // acılı ezme + haydari
            drink: 120,  // ayran
            dessert: 330 // 1 porsiyon künefe
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},

{
    main: "Lahmacun",
    keywords: ["lahmacun"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Maydanoz", "Limon", "Soğan", "Haydari", "Acılı Ezme"],
        drink: ["Ayran"],
        dessert: ["Künefe"]
    },
    calories: {
        total: 1450,
        breakdown: {
            main: 800,   // 2 adet lahmacun
            yanlar: 220, // yeşillik + haydari + acılı ezme
            drink: 120,  // ayran
            dessert: 310 // 1 porsiyon künefe (biraz daha küçük porsiyon)
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Su Böreği",
    keywords: ["su böreği"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Domates", "Salatalık", "Zeytin"],
        drink: ["Çay"],
        dessert: []
    },
    calories: {
        total: 800,
        breakdown: {
            main: 650,   // 2 dilim su böreği
            yanlar: 150, // domates + salatalık + zeytin
            drink: 0,    // şekersiz çay
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Patatesli Börek",
    keywords: ["patatesli börek"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: [],
        drink: ["Ayran", "Çay"],
        dessert: []
    },
    calories: {
        total: 650,
        breakdown: {
            main: 550,   // 2 dilim patatesli börek
            yanlar: 0,
            drink: 100,  // 1 bardak ayran (çay şekersiz varsayıldı)
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Ispanaklı Börek",
    keywords: ["ıspanaklı börek"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Yoğurt"],
        drink: ["Ayran", "Çay"],
        dessert: []
    },
    calories: {
        total: 600,
        breakdown: {
            main: 480,   // 2 dilim ıspanaklı börek
            yanlar: 50,  // 1-2 kaşık yoğurt
            drink: 70,   // küçük ayran, çay şekersiz
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Kıymalı Börek",
    keywords: ["kıymalı börek", "kol böreği"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Turşu"],
        drink: ["Ayran", "Çay"],
        dessert: []
    },
    calories: {
        total: 750,
        breakdown: {
            main: 600,   // 2 dilim kıymalı börek
            yanlar: 50,  // turşu
            drink: 100,  // ayran
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Pırasalı Börek",
    keywords: ["pırasalı börek"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: [],
        drink: ["Ayran"],
        dessert: []
    },
    calories: {
        total: 550,
        breakdown: {
            main: 480,   // 2 dilim pırasalı börek
            yanlar: 0,
            drink: 70,   // küçük ayran
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Pişi",
    keywords: ["pişi", "hamur kızartması"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Peynir", "Reçel", "Domates"],
        drink: ["Çay"],
        dessert: []
    },
    calories: {
        total: 900,
        breakdown: {
            main: 650,   // birkaç adet kızarmış pişi
            yanlar: 250, // peynir + reçel + domates
            drink: 0,
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Hamur Kızartması",
    keywords: ["hamur kızartması"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Peynir", "Zeytin"],
        drink: ["Çay"],
        dessert: []
    },
    calories: {
        total: 750,
        breakdown: {
            main: 600,   // kızarmış hamur parçaları
            yanlar: 150, // peynir + zeytin
            drink: 0,
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Krep",
    keywords: ["krep", "akıtma"],
    cuisine: "Uluslararası",
    suggestions: {
        yanlar: ["Çikolata", "Meyve", "Bal"],
        drink: ["Süt", "Çay"],
        dessert: []
    },
    calories: {
        total: 700,
        breakdown: {
            main: 400,   // 2 adet sade krep
            yanlar: 230, // çikolata + bal + meyve
            drink: 70,   // 1 bardak süt (çay şekersiz)
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Pankek",
    keywords: ["pankek"],
    cuisine: "Uluslararası",
    suggestions: {
        yanlar: ["Akçaağaç Şurubu", "Meyve"],
        drink: ["Kahve"],
        dessert: []
    },
    calories: {
        total: 750,
        breakdown: {
            main: 450,   // 3 küçük pankek
            yanlar: 220, // şurup + meyve
            drink: 80,   // 1 fincan kahve (az süt/şeker varsayıldı)
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Simit",
    keywords: ["simit", "gevrek"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Kaşar Peyniri", "Zeytin"],
        drink: ["Çay"],
        dessert: []
    },
    calories: {
        total: 600,
        breakdown: {
            main: 350,   // 1 adet simit
            yanlar: 250, // kaşar peyniri + zeytin
            drink: 0,
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Menemen",
    keywords: ["menemen"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Patates Kızartması", "Sigara Böreği", "Simit"],
        drink: ["Çay"],
        dessert: []
    },
    calories: {
        total: 900,
        breakdown: {
            main: 300,   // 2-3 yumurtalı menemen
            yanlar: 600, // patates kızartması + sigara böreği + yarım simit
            drink: 0,
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},


            // BALIKLAR
            { main: "Balık (Genel)", keywords: ["balık", "ızgara balık"], cuisine: "Akdeniz Mutfağı", suggestions: {
                yanlar: ["Mercimek Çorbası", "Roka Salatası", "Fava", "Çıtır Nohutlu Humus", "Közlenmiş Patlıcan Salatası"], drink: ["Şalgam Suyu/Rakı (İsteğe Bağlı)"], dessert: ["İrmik Helvası"]
            },
    calories: {
        total: 1200,
        breakdown: {
            main: 450,
            yanlar: 475,
            drink: 90,
            dessert: 185
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},

            // YENİ KAYIT: Hamsi Tava için daha spesifik bir kayıt eklendi.
{
    main: "Hamsi Tava",
    keywords: ["hamsi tava", "hamsi"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Mercimek Çorbası", "Turp Mezesi", "Havuç Tarator", "Fırında Kremalı Patates"],
        drink: ["Şalgam Suyu/Rakı (İsteğe Bağlı)"],
        dessert: ["Tahin Helvası"]
    },
    calories: {
        total: 1200,
        breakdown: {
            main: 450,
            yanlar: 475,
            drink: 90,
            dessert: 185
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},

{ 
    main: "Izgara Levrek", 
    keywords: ["levrek", "ızgara levrek"], 
    cuisine: "Akdeniz Mutfağı", 
    suggestions: {
        yanlar: ["Köz Patlıcan Biber", "Roka", "Acılı Ezme", "Fava", "Deniz Börülcesi"], 
        drink: ["Rakı (İsteğe Bağlı)/Şalgam Suyu"], 
        dessert: ["Fırın Helva"]
    },
    calories: {
        total: 1015,
        breakdown: {
            main: 350,
            yanlar: 345,
            drink: 90,
            dessert: 230
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
}, 

{ 
    main: "Izgara Çipura", 
    keywords: ["çipura", "ızgara çipura"], 
    cuisine: "Akdeniz Mutfağı", 
    suggestions: {
        yanlar: ["Roka Salatası", "Patates Salatası", "Kırmızı Soğan", "Pastırmalı Humus", "Deniz Börülcesi"], 
        drink: ["Şalgam Suyu"], 
        dessert: ["Helva"]
    },
    calories: {
        total: 995,
        breakdown: {
            main: 340,
            yanlar: 460,
            drink: 15,
            dessert: 180
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
}, 
{ 
    main: "Lüfer / Çinekop Tava", 
    // ... suggestions
    suggestions: {
        yanlar: ["Yeşil Salata", "Narlı Peynir Mezesi", "Şakşuka"], 
        drink: ["Rakı (İsteğe Bağlı)/Şalgam Suyu"], 
        dessert: ["Helva"]
    },
    calories: {
        total: 965,
        // ... breakdown
        breakdown: {
            main: 400,
            yanlar: 295,
            drink: 90,
            dessert: 180
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
}, // <-- KRİTİK EKSİK VİRGÜL EKLENDİ

{
    main: "Fırında Somon",
    // ... keywords, cuisine, suggestions, calories
    keywords: ["somon", "fırın somon"],
    cuisine: "Uluslararası",
    suggestions: {
        yanlar: ["Kuşkonmaz", "Patates Püresi", "Deniz Börülcesi", "Fava"],
        drink: ["Beyaz Şarap (İsteğe Bağlı)"],
        dessert: ["Sufle"]
    },
    calories: {
        total: 1375,
        breakdown: {
            main: 480,
            yanlar: 395,
            drink: 120,
            dessert: 380
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},

{
    main: "Barbun",
    keywords: ["barbun", "barbun tava"],
    cuisine: "Akdeniz Mutfağı",
    suggestions: {
        yanlar: ["Yeşil Salata", "Atom Meze", "Girit Ezmesi"],
        drink: ["Şalgam Suyu"],
        dessert: ["Helva"]
    },
    calories: {
        total: 830,
        breakdown: {
            main: 340,    // 200 g barbun tava + kızartma yağı
            yanlar: 295,  // yeşil salata + atom meze + Girit ezmesi
            drink: 15,    // 1 bardak şalgam
            dessert: 180  // 1 ince dilim helva
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},

{
    main: "Ton Balığı",
    keywords: ["ton balığı", "konserve"],
    cuisine: "Uluslararası",
    suggestions: {
        yanlar: ["Makarna", "Cevizli Kaşık Salatası", "Mor Lahana Mezesi"],
        drink: ["Limonata"],
        dessert: ["Meyve"]
    },
    calories: {
        total: 940,
        breakdown: {
            main: 250,   // 150 g ton balığı (konserve, az yağlı)
            yanlar: 490, // makarna + cevizli kaşık salatası + mor lahana mezesi
            drink: 120,  // 1 bardak limonata
            dessert: 80  // 1 porsiyon meyve (örneğin 1 orta boy elma/portakal)
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},

{
    main: "Fırında Palamut",
    keywords: ["palamut", "fırın palamut", "balık", "kış balığı"],
    cuisine: "Akdeniz Mutfağı",
    suggestions: {
        yanlar: ["Hardal Soslu Roka Salatası", "Sumaklı Soğan", "Limon", "Haydari"],
        drink: ["Şalgam Suyu", "Maden Suyu"],
        dessert: ["Tahinli Kabak Tatlısı"]
    },
    calories: {
        total: 855,
        breakdown: {
            main: 380,   // 250 g fırında palamut + az zeytinyağı
            yanlar: 200, // roka salatası + sumaklı soğan + limon + haydari
            drink: 15,   // şalgam (~15 kcal), maden suyu 0
            dessert: 260 // 1 porsiyon tahinli kabak tatlısı
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},

{
    main: "Hamsili Pilav",
    keywords: ["hamsili pilav", "karadeniz"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Turşu Kavurması", "Mısır Ekmeği"],
        drink: ["Çay"],
        dessert: ["Laz Böreği"]
    },
    calories: {
        total: 1040,
        breakdown: {
            main: 550,   // büyükçe bir dilim hamsili pilav (pirinç + hamsi + yağ)
            yanlar: 230, // turşu kavurması + mısır ekmeği
            drink: 0,    // şekersiz çay
            dessert: 260 // 1 dilim laz böreği
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},


            // SALATALAR & MEZELER
            {
    main: "Salata (Genel)",
    keywords: ["salata", "karışık salata"],
    cuisine: "Uluslararası",
    suggestions: {
        yanlar: ["Izgara Tavuk", "Havuçlu Kerevizli Meze"],
        drink: ["Maden Suyu"],
        dessert: []
    },
    calories: {
        total: 550,
        breakdown: {
            main: 120,    // Karışık salata (zeytinyağlı)
            yanlar: 430,  // Izgara tavuk (250) + havuçlu kerevizli meze (180)
            drink: 0,     // Maden suyu
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Çoban Salatası",
    keywords: ["çoban salatası"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Kuru Fasulye", "Pilav", "Yoğurt"],
        drink: ["Ayran"],
        dessert: []
    },
    calories: {
        total: 830,
        breakdown: {
            main: 110,    // Çoban salatası (az zeytinyağlı)
            yanlar: 630,  // Kuru fasulye (280) + pilav (230) + yoğurt (120)
            drink: 90,    // Ayran
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Mevsim Salatası",
    keywords: ["mevsim salatası"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Izgara Balık/Et Sote"],
        drink: ["Maden Suyu"],
        dessert: []
    },
    calories: {
        total: 520,
        breakdown: {
            main: 120,   // Mevsim salatası
            yanlar: 400, // Ortalama bir ızgara balık / et sote porsiyonu
            drink: 0,    // Maden suyu
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Gavurdağı Salatası",
    keywords: ["gavurdağı salatası", "cevizli salata"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Adana Kebap/Lahmacun"],
        drink: ["Şalgam Suyu"],
        dessert: []
    },
    calories: {
        total: 840,
        breakdown: {
            main: 200,   // Cevizli, yağlı salata
            yanlar: 600, // Adana kebap / lahmacun ortalama
            drink: 40,   // Şalgam suyu
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Piyaz",
    keywords: ["piyaz", "fasulye piyazı"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Izgara Köfte", "Havuçlu Kerevizli Meze"],
        drink: ["Şıra"],
        dessert: []
    },
    calories: {
        total: 1000,
        breakdown: {
            main: 250,   // Piyaz (fasulye + yağ)
            yanlar: 630, // Izgara köfte (450) + havuçlu kerevizli meze (180)
            drink: 120,  // Şıra
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Makarna Salatası",
    keywords: ["makarna salatası", "yoğurtlu makarna"],
    cuisine: "Uluslararası",
    suggestions: {
        yanlar: ["Kıymalı Börek", "Yoğurtlu Semizotu"],
        drink: ["Çay"],
        dessert: []
    },
    calories: {
        total: 855,
        breakdown: {
            main: 350,   // Yoğurtlu makarna salatası
            yanlar: 500, // Kıymalı börek (320) + yoğurtlu semizotu (180)
            drink: 5,    // Şekersiz çay
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Patates Salatası",
    keywords: ["patates salatası"],
    cuisine: "Uluslararası",
    suggestions: {
        yanlar: ["Börek", "Izgara Köfte"],
        drink: ["Ayran"],
        dessert: []
    },
    calories: {
        total: 1090,
        breakdown: {
            main: 250,   // Patates salatası (yağlı)
            yanlar: 750, // Börek (300) + ızgara köfte (450)
            drink: 90,   // Ayran
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},

            {
    main: "Rus Salatası",
    keywords: ["rus salatası"],
    cuisine: "Uluslararası",
    suggestions: {
        yanlar: ["Kumpir", "Sandviç"],
        drink: ["Kola"],
        dessert: []
    },
    calories: {
        total: 1490,
        breakdown: {
            main: 350,    // Rus salatası (mayonez ağırlıklı)
            yanlar: 900,  // Kumpir (700) + sandviç (200)
            drink: 140,   // Kola
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Amerikan Salatası",
    keywords: ["amerikan salatası"],
    cuisine: "Uluslararası",
    suggestions: {
        yanlar: ["Et Yemekleri/Kızartma"],
        drink: ["Kola"],
        dessert: []
    },
    calories: {
        total: 820,
        breakdown: {
            main: 300,    // Amerikan salatası
            yanlar: 380,  // Ortalama et/kızartma yan porsiyon
            drink: 140,   // Kola
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Coleslaw",
    keywords: ["coleslaw", "lahana salatası"],
    cuisine: "Uluslararası",
    suggestions: {
        yanlar: ["Hamburger", "Tavuk Kızartma"],
        drink: ["Kola"],
        dessert: []
    },
    calories: {
        total: 1750,
        breakdown: {
            main: 220,    // Coleslaw (mayonezli)
            yanlar: 1390, // Hamburger (800) + tavuk kızartma (590)
            drink: 140,   // Kola
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Sezar Salata",
    keywords: ["sezar salata", "tavuklu salata"],
    cuisine: "Uluslararası",
    suggestions: {
        yanlar: ["Izgara Tavuk", "Kruton", "Parmesan"],
        drink: ["Maden Suyu"],
        dessert: []
    },
    calories: {
        total: 860,
        breakdown: {
            main: 350,    // Sezar salata (sos + parmesan + kruton)
            yanlar: 480,  // Ekstra ızgara tavuk (250) + kruton (150) + parmesan (80)
            drink: 30,    // Maden suyu (mineral içerikli)
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Akdeniz Salata",
    keywords: ["akdeniz salata", "peynirli salata"],
    cuisine: "Akdeniz Mutfağı",
    suggestions: {
        yanlar: ["Izgara Levrek", "Babagannuş"],
        drink: ["Maden Suyu"],
        dessert: []
    },
    calories: {
        total: 880,
        breakdown: {
            main: 260,    // Akdeniz salatası (zeytinyağlı + peynirli)
            yanlar: 590,  // Izgara levrek (350) + babagannuş (240)
            drink: 30,    // Maden suyu
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Roka Salatası",
    keywords: ["roka salatası"],
    cuisine: "Akdeniz Mutfağı",
    suggestions: {
        yanlar: ["Izgara Balık", "Et Yemekleri"],
        drink: ["Şalgam Suyu"],
        dessert: []
    },
    calories: {
        total: 830,
        breakdown: {
            main: 120,    // Roka + limon + az yağ
            yanlar: 670,  // Ortalama ızgara balık / et porsiyonu
            drink: 40,    // Şalgam suyu
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Yeşil Salata",
    keywords: ["yeşil salata", "marul salatası"],
    cuisine: "Uluslararası",
    suggestions: {
        yanlar: ["Her Türlü Yemek"],
        drink: ["Maden Suyu"],
        dessert: []
    },
    calories: {
        total: 180,
        breakdown: {
            main: 120,   // Yeşil salata (çok düşük kalorili)
            yanlar: 0,   // “Her yemekle gider” — ek kalori yok
            drink: 30,   // Maden suyu
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Yoğurtlu Semizotu",
    keywords: ["yoğurtlu semizotu", "semizotu salatası"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Kıymalı Yemekler", "Makarna"],
        drink: ["Maden Suyu"],
        dessert: []
    },
    calories: {
        total: 600,
        breakdown: {
            main: 180,   // Yoğurtlu semizotu
            yanlar: 390, // Ortalama kıymalı yemek/ makarna eşlik kalorisi
            drink: 30,   // Maden suyu
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Kısır",
    keywords: ["kısır", "ince bulgur"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Marul", "Turşu"],
        drink: ["Ayran","Çay"],
        dessert: []
    },
    calories: {
        total: 690,
        breakdown: {
            main: 450,   // Kısır (zeytinyağı + bulgur + salça)
            yanlar: 50,  // Marul + turşu
            drink: 190,  // Ayran (90) + çay (0) + opsiyonel şeker (100)
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},

            {
    main: "Çiğ Köfte",
    keywords: ["çiğ köfte", "etsiz çiğ köfte"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Lavaş", "Marul", "Lahmacun"],
        drink: ["Ayran"],
        dessert: []
    },
    calories: {
        total: 1570,
        breakdown: {
            main: 400,   // Çiğ köfte porsiyonu
            yanlar: 980, // Lavaş (250) + marul (20) + lahmacun (710)
            drink: 190,  // Ayran (büyük bardak)
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Mercimek Köftesi",
    keywords: ["mercimek köftesi"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Marul", "Turşu"],
        drink: ["Ayran","Çay"],
        dessert: []
    },
    calories: {
        total: 740,
        breakdown: {
            main: 450,  // Mercimek köftesi tabak
            yanlar: 60, // Marul + turşu
            drink: 230, // Ayran (130) + çay + şeker opsiyonu (~100)
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Humus",
    keywords: ["humus", "nohut ezmesi"],
    cuisine: "Orta Doğu Mutfağı",
    suggestions: {
        yanlar: ["Pastırma", "Çıtır Nohut", "Fırında Çipura"],
        drink: ["Şalgam Suyu"],
        dessert: []
    },
    calories: {
        total: 1580,
        breakdown: {
            main: 350,  // Humus porsiyonu (zeytinyağlı)
            yanlar: 1180, // Pastırma (200) + çıtır nohut (250) + fırında çipura (730)
            drink: 50,  // Şalgam suyu
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Babagannuş",
    keywords: ["babagannuş", "patlıcan ezmesi"],
    cuisine: "Orta Doğu Mutfağı",
    suggestions: {
        yanlar: ["Adana Kebap", "Et"],
        drink: ["Şalgam Suyu"],
        dessert: []
    },
    calories: {
        total: 1550,
        breakdown: {
            main: 250,  // Babagannuş (zeytinyağlı patlıcan ezmesi)
            yanlar: 1250, // Adana kebap (750) + ekstra et porsiyonu (500)
            drink: 50, // Şalgam suyu
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Haydari",
    keywords: ["haydari", "süzme yoğurt"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Fırında Levrek", "Közlenmiş Patlıcan Biber"],
        drink: ["Maden Suyu/Rakı (İsteğe Bağlı)"],
        dessert: ["Tahin Helvası"]
    },
    calories: {
        total: 1500,
        breakdown: {
            main: 220,  // Haydari
            yanlar: 620, // Fırında levrek (350) + köz patlıcan biber (270)
            drink: 100,  // Maden suyu (20) + 2 duble rakı (~240)
            dessert: 560 // Tahin helvası porsiyon
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Acılı Ezme",
    keywords: ["acılı ezme", "ezme"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Adana Kebap", "Lahmacun"],
        drink: ["Ayran"],
        dessert: []
    },
    calories: {
        total: 1710,
        breakdown: {
            main: 150,   // Acılı ezme (zeytinyağlı)
            yanlar: 1370, // Adana kebap (750) + lahmacun (620)
            drink: 190,  // Ayran
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Şakşuka",
    keywords: ["şakşuka", "patlıcan kızartma"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Yoğurt", "Zeytinyağlı Barbunya"],
        drink: ["Ayran"],
        dessert: []
    },
    calories: {
        total: 1180,
        breakdown: {
            main: 400,  // Kızartma patlıcan + sos
            yanlar: 530, // Yoğurt (120) + zeytinyağlı barbunya (410)
            drink: 250,  // Ayran (büyük, 1,5 bardak varsayıldı)
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Atom",
    keywords: ["atom", "yoğurtlu biber"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Et Yemekleri", "Meze"],
        drink: ["Rakı (İsteğe Bağlı)"],
        dessert: []
    },
    calories: {
        total: 830,
        breakdown: {
            main: 280,  // Atom (yoğurt + tereyağlı biber)
            yanlar: 450, // Ortalama et yemeği + başka mezeler
            drink: 100,  // 1 duble rakı varsayıldı
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},

           {
    main: "Fava (Meze)",
    keywords: ["fava", "bakla ezmesi"],
    cuisine: "Ege Mutfağı",
    suggestions: {
        yanlar: ["Dereotu", "Zeytinyağlı Enginar","Fırında Somon"],
        drink: ["Rakı (İsteğe Bağlı)"],
        dessert: []
    },
    calories: {
        total: 920,
        breakdown: {
            main: 300,   // Fava (bakla + zeytinyağı)
            yanlar: 520,  // Dereotu (10) + zeytinyağlı enginar (150) + somon (360)
            drink: 100,  // 1 duble rakı
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Muhammara",
    keywords: ["muhammara", "cevizli biber"],
    cuisine: "Orta Doğu Mutfağı",
    suggestions: {
        yanlar: ["Kızarmış Ekmek", "Kahvaltı"],
        drink: ["Çay"],
        dessert: []
    },
    calories: {
        total: 910,
        breakdown: {
            main: 350,   // Muhammara (ceviz + biber + yağ)
            yanlar: 540, // Kızarmış ekmek (200) + kahvaltı eşlikleri (~340)
            drink: 20,   // Çay (az şekerli)
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Köz Patlıcan Salatası",
    keywords: ["köz patlıcan salatası", "patlıcan salatası"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Et Yemekleri/Kebap"],
        drink: ["Şalgam Suyu"],
        dessert: []
    },
    calories: {
        total: 420,
        breakdown: {
            main: 180,   // Köz patlıcan salatası (az yağlı)
            yanlar: 200, // Ortalama bir et/kebap eşlik miktarı
            drink: 40,   // Şalgam suyu
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Köz Biber",
    keywords: ["köz biber", "kırmızı biber"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Et Yemekleri/Kebap"],
        drink: ["Maden Suyu"],
        dessert: []
    },
    calories: {
        total: 230,
        breakdown: {
            main: 70,    // Közlenmiş kırmızı biber
            yanlar: 130, // Et yemeklerine eşlik eden miktar
            drink: 30,   // Maden suyu
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Turşu",
    keywords: ["turşu", "karışık turşu"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Kuru Fasulye", "Pilav"],
        drink: ["Ayran"],
        dessert: []
    },
    calories: {
        total: 480,
        breakdown: {
            main: 40,    // Turşu çok düşük kalorili
            yanlar: 350, // Kuru fasulye (250) + küçük pilav (100)
            drink: 90,   // Ayran
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Havuç Tarator",
    keywords: ["havuç tarator", "yoğurtlu havuç"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Kıymalı Makarna", "Izgara Tavuk"],
        drink: ["Maden Suyu"],
        dessert: []
    },
    calories: {
        total: 1080,
        breakdown: {
            main: 250,   // Havuç tarator (yoğurt + yağ + havuç)
            yanlar: 800, // Kıymalı makarna (550) + ızgara tavuk (250)
            drink: 30,   // Maden suyu
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Meksika Fasulyesi Salatası",
    keywords: ["meksika fasulyesi salatası"],
    cuisine: "Meksika Mutfağı",
    suggestions: {
        yanlar: ["Izgara Tavuk", "Babagannuş"],
        drink: ["Kola"],
        dessert: []
    },
    calories: {
        total: 1360,
        breakdown: {
            main: 300,   // Fasulyeli salata (orta yağ)
            yanlar: 800, // Izgara tavuk (250) + babagannuş (250) + ek porsiyonlar (~300)
            drink: 260,  // Kola (330 ml)
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},

            {
    main: "Yeşil Mercimekli Salata",
    keywords: ["yeşil mercimekli salata"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: [],
        drink: ["Detoks Suyu"],
        dessert: []
    },
    calories: {
        total: 350,
        breakdown: {
            main: 300,   // Yeşil mercimek + soğan + yeşillik
            yanlar: 0,
            drink: 50,   // Detoks suyu (limon + salatalık)
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Maş Fasulyesi Salatası",
    keywords: ["maş fasulyesi salatası"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: [],
        drink: ["Detoks Suyu"],
        dessert: []
    },
    calories: {
        total: 330,
        breakdown: {
            main: 280,   // Maş fasulyesi + limon + sebze
            yanlar: 0,
            drink: 50,   // Detoks suyu
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Kinoalı Salata",
    keywords: ["kinoalı salata"],
    cuisine: "Uluslararası",
    suggestions: {
        yanlar: ["Avokado", "Peynir"],
        drink: ["Detoks Suyu"],
        dessert: []
    },
    calories: {
        total: 720,
        breakdown: {
            main: 300,   // Kinoalı sebzeli salata
            yanlar: 350, // Avokado (200) + beyaz peynir (150)
            drink: 70,   // Detoks suyu (meyveli)
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Arpa Şehriyeli Salata",
    keywords: ["arpa şehriyeli salata"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Kornişon Turşusu", "Izgara Tavuk"],
        drink: ["Maden Suyu"],
        dessert: []
    },
    calories: {
        total: 820,
        breakdown: {
            main: 400,   // Arpa şehriyesi + sebze + yağ
            yanlar: 350, // Turşu (20) + ızgara tavuk (330)
            drink: 70,   // Maden suyu + limonlu içim
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Domates Biber Söğüş",
    keywords: ["domates biber söğüş", "söğüş"],
    cuisine: "Türk Mutfağı",
    suggestions: {
        yanlar: ["Kahvaltı/Et Yemekleri"],
        drink: [],
        dessert: []
    },
    calories: {
        total: 90,
        breakdown: {
            main: 90,   // Domates + biber sade
            yanlar: 0,
            drink: 0,
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
},
{
    main: "Lor Peyniri Salatası",
    keywords: ["lor peyniri salatası", "lor ezmesi"],
    cuisine: "Ege Mutfağı",
    suggestions: {
        yanlar: ["Makarna/Izgara Balık"],
        drink: [],
        dessert: []
    },
    calories: {
        total: 310,
        breakdown: {
            main: 260,   // Lor peyniri + domates + zeytinyağı + otlar
            yanlar: 50,  // Makarna veya balığa eşlik eden küçük porsiyon yağ farkı
            drink: 0,
            dessert: 0
        },
        note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
    }
}

        ];

/*
  Not: Buraya kadar olan bölümde sadece veriler ve küçük yardımcı fonksiyonlar var.
  Aşağıdaki kategoriler app.js tarafından kullanılıyor.
*/

const suggestionCategories = [
    { key: 'yanlar', title: 'Yan Lezzetler (Pilav, Salata, Meze, Çorba)', icon: '🍽️', color: 'text-secondary-green' },
    { key: 'drink', title: 'İçecek Önerisi', icon: '🥤', color: 'text-primary-blue' },
    { key: 'dessert', title: 'Tatlı Önerisi', icon: '🍰', color: 'text-pink-500' }
];

// data.js dosyasının en sonuna eklenmesi önerilir
window.dishSuggestions = dishSuggestions;
window.blogPostsData = blogPostsData;
window.suggestionCategories = suggestionCategories;
