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
            { main: "Tarhana Çorbası", keywords: ["tarhana", "çorba", "yöresel"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Etli Kuru Fasulye", "Turşu", "Tam Buğdaylı Ekmek"], drink: ["Su"], dessert: ["Sütlaç"]
            }},
            { main: "Mercimek Çorbası", keywords: ["mercimek çorbası", "çorba", "kırmızı"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Karnıyarık", "Limon Dilimleri", "Roka Salata"], drink: ["Su"], dessert: ["Kazandibi"]
            }},
            { main: "Ezogelin Çorbası", keywords: ["ezogelin", "çorba", "acılı"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Karnıyarık", "Limon", "Turşu"], drink: ["Su"], dessert: ["Un Helvası"]
            }},
            { main: "Şehriye Çorbası", keywords: ["şehriye çorbası", "çorba", "domatesli"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Izgara Köfte", "Limon", "Mevsim Salata"], drink: ["Su"], dessert: ["Sütlaç"]
            }},
            { main: "Yayla Çorbası", keywords: ["yayla çorbası", "yoğurt", "çorba", "pirinçli"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Taze Fasulye (Zeytinyağlı)", "Taze Pide"], drink: ["Su"], dessert: ["Güllaç"]
            }},
            { main: "Domates Çorbası", keywords: ["domates çorbası", "çorba", "kremalı"], cuisine: "Uluslararası", suggestions: {
                yanlar: ["Izgara Peynirli Sandviç (Grilled Cheese)", "Kruton", "Kaşar Rendesi"], drink: ["Su"], dessert: ["Sufle"]
            }},
            { main: "Brokoli Çorbası", keywords: ["brokoli çorbası", "çorba", "sebze", "kremalı"], cuisine: "Uluslararası", suggestions: {
                yanlar: ["Izgara Somon", "Kruton"], drink: ["Su"], dessert: ["Cheesecake"]
            }},
            { main: "Etli Bamya Çorbası", keywords: ["bamya çorbası", "çorba"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Etli Pilav", "Limon"], drink: ["Su"], dessert: ["Kabak Tatlısı"]
            }},
            { main: "Beyran", keywords: ["beyran", "çorba", "etli", "acılı", "gaziantep"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["İçli Köfte", "Bol Limon", "Lavaş"], drink: ["Şalgam Suyu"], dessert: ["Katmer"]
            }},
            { main: "Düğün Çorbası", keywords: ["düğün çorbası", "çorba", "terbiyeli"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["İzmir Köfte", "Limon"], drink: ["Su"], dessert: ["Revani"]
            }},
            { main: "Un Çorbası", keywords: ["un çorbası", "çorba", "terbiyeli"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Fırında Köfte", "Kuru Domates Salatası"], drink: ["Su"], dessert: ["Sütlaç"]
            }},
            { main: "Ayran Aşı (Soğuk Çorba)", keywords: ["ayran aşı", "çorba", "soğuk", "yaz"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Mücver", "Kıymalı Börek", "Dereotu"], drink: ["Su"], dessert: ["Meyve Tabağı"]
            }},
            { main: "İşkembe Çorbası", keywords: ["işkembe", "çorba", "sakatat"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Arnavut Ciğeri", "Sarımsaklı Sirke", "Limon"], drink: ["Su"], dessert: ["Künefe"]
            }},
            { main: "Paça Çorbası", keywords: ["paça", "çorba", "kelle"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Kokoreç", "Sarımsaklı Sirke", "Turşu"], drink: ["Su"], dessert: ["Sütlaç"]
            }},
            { main: "Sebze Çorbası", keywords: ["sebze çorbası", "çorba", "hafif"], cuisine: "Uluslararası", suggestions: {
                yanlar: ["Izgara Tavuk", "Kruton"], drink: ["Su"], dessert: ["Meyveli Yoğurt"]
            }},
            { main: "Bal Kabağı Çorbası", keywords: ["bal kabağı çorbası", "çorba", "kremalı"], cuisine: "Uluslararası", suggestions: {
                yanlar: ["Fırında Hindi", "Kıtır Ekmek"], drink: ["Su"], dessert: ["Brownie"]
            }},
            { main: "Yoğurt Çorbası", keywords: ["yoğurt çorbası", "çorba", "yayla"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Etli Biber Dolması", "Tam Buğdaylı Ekmek"], drink: ["Su"], dessert: ["Güllaç"]
            }},
            { main: "Yuvalama", keywords: ["yuvalama", "çorba", "antep", "etli"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Pirinç Pilavı", "Gavurdağı Salatası"], drink: ["Ayran"], dessert: ["Baklava"]
            }},
            { main: "Analı Kızlı", keywords: ["analı kızlı", "çorba", "yöresel"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Pastırmalı Humus", "Pide"], drink: ["Ayran"], dessert: ["Sütlaç"]
            }},
            { main: "Kabak Çorbası", keywords: ["kabak çorbası", "çorba", "sebze"], cuisine: "Uluslararası", suggestions: {
                yanlar: ["Izgara Tavuk", "Kruton"], drink: ["Maden Suyu"], dessert: ["Sufle"]
            }},

            // KÖFTELER
            { main: "Izgara Köfte", keywords: ["ızgara köfte", "köfte"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Mercimek Çorbası","Piyaz", "Pirinç Pilavı", "Izgara Biber"], drink: ["Ayran"], dessert: ["Kemalpaşa"]
            }},
            { main: "Fırında Köfte", keywords: ["fırında köfte", "fırın", "köfte"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Ezogelin Çorbası","Domatesli Bulgur Pilavı","Fırında Patates", "Avokadolu Humus"], drink: ["Ayran"], dessert: ["Sütlaç"]
            }},
            { main: "Sulu Köfte", keywords: ["sulu köfte", "ekşili", "terbiyeli", "misket", "köfte"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Sade Pirinç Pilavı", "Turşu", "Tam Buğdaylı Ekmek"], drink: ["Ayran"], dessert: ["Fırın Sütlaç"]
            }},
            { main: "İnegöl Köfte", keywords: ["inegöl köfte", "köfte", "ızgara"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Sebze Çorbası","Piyaz", "Acı Sos", "Patates Kızartması"], drink: ["Şıra"], dessert: ["Sütlaç"]
            }},
            { main: "Tekirdağ Köftesi", keywords: ["tekirdağ köfte", "köfte", "ızgara"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Piyaz", "Kapya Biber Mezesi", "Tahinli Nohut Salatası"], drink: ["Ayran"], dessert: ["Hayrabolu Tatlısı"]
            }},
            { main: "İzmir Köfte", keywords: ["izmir köfte", "köfte", "sulu", "patates"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Pirinç Pilavı", "Van Cacığı"], drink: ["Ayran"], dessert: ["Revani"]
            }},
            { main: "Fellah Köftesi", keywords: ["fellah köftesi", "köfte", "bulgur", "sarımsaklı"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Yoğurtlu Semizotu", "Yeşillik Tabağı"], drink: ["Ayran"], dessert: ["Muhallebi"]
            }},
            { main: "İçli Köfte", keywords: ["içli köfte", "kızartma", "haşlama"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Beyran","Gavurdağı Salatası", "Humus"], drink: ["Ayran"], dessert: ["Baklava"]
            }},
            { main: "Patates Köfte", keywords: ["patates köfte", "sulu", "köfte"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Kabak Çorbası","Pirinç Pilavı", "Turşu"], drink: ["Ayran"], dessert: ["Sütlaç"]
            }},
            { main: "Ekşili Köfte", keywords: ["ekşili köfte", "terbiyeli", "sulu"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Sade Makarna", "Tahinli Nohut Salatası"], drink: ["Ayran"], dessert: ["Şekerpare"]
            }},
            { main: "Fırında Köfte Patates", keywords: ["fırında köfte patates", "köfte", "patates"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Domates Çorbası", "Van Cacığı", "Kornişon Turşusu"], drink: ["Ayran"], dessert: ["Sütlaç"]
            }},

            // ETLİ YEMEKLER VE KEBAPLAR
            { main: "Hünkar Beğendi", keywords: ["hünkar beğendi", "beğendi", "patlıcan"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Kremalı Mantar Çorbası","Mevsim Salatası", "Yoğurt"], drink: ["Şalgam Suyu"], dessert: ["Kazandibi"]
            }},
            { main: "Tas Kebabı", keywords: ["tas kebabı"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Tarhana Çorbası","Pirinç Pilavı", "Van Cacığı", "Turşu"], drink: ["Ayran"], dessert: ["Sütlaç"]
            }},
            { main: "Adana Kebap", keywords: ["adana", "kebap", "acılı", "urfa kebap", "urfa"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Lavaş", "Sumaklı Soğan", "Acılı Ezme", "Haydari"], drink: ["Şalgam Suyu"], dessert: ["Künefe"]
            }},
            { main: "İskender Kebap", keywords: ["iskender", "döner"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Babagannuş", "Turşu"], drink: ["Şıra"], dessert: ["Sütlaç"]
            }},
            { main: "Döner", keywords: ["döner", "et döner", "tavuk döner", "dürüm"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Patates Kızartması", "Turşu", "Cevizli Kaşık Salatası"], drink: ["Ayran"], dessert: ["Sütlaç"]
            }},
            { main: "Antrikot", keywords: ["antrikot", "biftek", "et", "ızgara"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Yayla Çorbası","Mantar Sosu", "Patates Püresi", "Roka Salatası"], drink: ["Ayran"], dessert: ["Sufle"]
            }},
            { main: "Biftek", keywords: ["biftek", "bonfile", "et", "ızgara"], cuisine: "Uluslararası", suggestions: {
                yanlar: ["Kremalı Ispanak", "Fırın Patates", "Yeşil Salata"], drink: ["Ayran"], dessert: ["Cheesecake"]
            }},
            { main: "Bonfile", keywords: ["bonfile", "et", "ızgara"], cuisine: "Uluslararası", suggestions: {
                yanlar: ["Domates Çorbası","Kuşkonmaz", "Patates Püresi", "Zeytinyağlı Fasulye"], drink: ["Ayran"], dessert: ["Tiramisu"]
            }},
            { main: "Et Sote", keywords: ["et sote", "kırmızı et", "sote"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Ezogelin Çorbası","Pirinç Pilavı", "Zeytinyağlı Barbunya", "Gavurdağı Salata"], drink: ["Ayran"], dessert: ["Kemalpaşa"]
            }},
            { main: "Et Kavurma", keywords: ["et kavurma"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Ayran Aşı Çorbası","Bulgur Pilavı", "Zeytinyağlı Kereviz", "Turşu"], drink: ["Ayran"], dessert: ["Un Helvası"]
            }},
            { main: "Sac Kavurma", keywords: ["sac kavurma"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Lavaş", "Sumaklı Soğan", "Acılı Ezme"], drink: ["Ayran"], dessert: ["Künefe"]
            }},
            { main: "Orman Kebabı", keywords: ["orman kebabı", "kebap", "sebzeli"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Pirinç Pilavı", "Zeytinyağlı Barbunya", "Cevizli Kaşık Salatası"], drink: ["Dere Otlu Ayran"], dessert: ["Revani"]
            }},
            { main: "İslim Kebabı", keywords: ["islim kebabı", "kürdan kebabı", "patlıcan"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Domatesli Bulgur Pilavı", "Van Cacığı"], drink: ["Ayran"], dessert: ["Sütlaç"]
            }},
            { main: "Çökertme Kebabı", keywords: ["çökertme kebabı", "patates"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Tarhana Çorbası","Yoğurt", "Domates Sosu", "Kızarmış Patates"], drink: ["Ayran"], dessert: ["Sütlaç"]
            }},
            { main: "Sultan Kebabı", keywords: ["sultan kebabı", "yufka", "beşamel"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Pirinç Pilavı", "Mevsim Salatası"], drink: ["Ayran"], dessert: ["Sütlaç"]
            }},
            { main: "Balaban Kebabı", keywords: ["balaban kebabı", "eskişehir"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Yoğurt", "Domates Sosu", "Pide"], drink: ["Şıra"], dessert: ["Met Helvası"]
            }},
            { main: "Ciğer Kavurma", keywords: ["ciğer", "arnavut ciğeri", "tava"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Sumaklı Soğan", "Patates Kızartması"], drink: ["Ayran"], dessert: ["İrmik Helvası"]
            }},
            { main: "Ciğer Sote", keywords: ["ciğer sote", "ciğer", "sote"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Pirinç Pilavı", "Van Cacığı", "Zeytinyağlı Barbunya"], drink: ["Ayran"], dessert: ["Sütlaç"]
            }},
            { main: "Kokoreç", keywords: ["kokoreç", "sokak", "sakatat"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Turşu", "Bol Baharat"], drink: ["Şalgam Suyu"], dessert: ["Halka Tatlısı"]
            }},
            { main: "Et Yahni", keywords: ["et yahni", "yahni", "sulu"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Bulgur Pilavı", "Zeytinyağlı Enginar", "Turşu"], drink: ["Ayran", "Hoşaf"], dessert: ["Kabak Tatlısı"]
            }},
            { main: "Et Haşlama", keywords: ["et haşlama", "haşlama", "sebzeli"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Şehriye Çorbası","Zeytinyağlı Fasulye", "Pirinç Pilavı"], drink: ["Ayran", "Komposto"], dessert: ["Sütlaç"]
            }},
            { main: "Kuzu İncik", keywords: ["kuzu incik", "tandır", "fırın"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["İç Pilav", "Patates Püresi", "Zeytinyağlı Enginar"], drink: ["Ayran", "Hoşaf"], dessert: ["Ayva Tatlısı"]
            }},
            { main: "Keşkek", keywords: ["keşkek", "buğday"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Bamya Çorbası","Turşu", "Salça Sosu"], drink: ["Ayran"], dessert: ["Höşmerim"]
            }},

            // TAVUK - HİNDİ
            { main: "Tavuk Sote", keywords: ["tavuk sote", "tavuk", "sote"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Brokoli Çorbası", "Pirinç Pilavı", "Yoğurtlu Havuç Tarator"], drink: ["Ayran"], dessert: ["Sütlaç"]
            }},
            { main: "Fırında Tavuk", keywords: ["fırında tavuk", "tavuk", "fırın"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Düğün Çorbası", "İç Pilav", "Patates", "Kurutulmuş Domates Mezesi"], drink: ["Ayran", "Komposto"], dessert: ["Revani"]
            }},
            { main: "Fırında Bütün Tavuk", keywords: ["fırında bütün tavuk", "tavuk", "bütün"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Analı Kızlı", "Sebzeli Pilav", "Cacık"], drink: ["Ayran"], dessert: ["Kabak Tatlısı"]
            }},
            { main: "Pane Tavuk", keywords: ["pane tavuk", "schnitzel", "kızartma"], cuisine: "Uluslararası", suggestions: {
                yanlar: ["Patates Kızartması", "Coleslaw"], drink: ["Kola"], dessert: ["Brownie"]
            }},
            { main: "Çerkez Tavuğu", keywords: ["çerkez tavuğu", "tavuk", "cevizli"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Zeytinyağlı Yaprak Sarma", "Kızarmış Ekmek"], drink: ["Hoşaf"], dessert: ["Sütlaç"]
            }},
            { main: "Beşamel Soslu Tavuk", keywords: ["beşamel soslu tavuk", "tavuk", "fırın"], cuisine: "Uluslararası", suggestions: {
                yanlar: ["Bezelyeli Pilav", "Roka Salatası"], drink: ["Maden Suyu"], dessert: ["Tiramisu"]
            }},
            { main: "Fırında Hindi", keywords: ["fırında hindi", "hindi", "yılbaşı"], cuisine: "Uluslararası", suggestions: {
                yanlar: ["Yoğurt Çorbası","Kestaneli Pilav", "Kızılcık Sosu"], drink: ["Şıra"], dessert: ["Kabak Tatlısı"]
            }},
            { main: "Şinitzel", keywords: ["şinitzel"], cuisine: "Uluslararası", suggestions: {
                yanlar: ["Kremalı Sebze Çorbası","Maydonozlu Patates","Roka Salatası", "Kırmızı Lahana (Rotkohl)"], drink: ["Kırmızı Şarap (Öneri)"], dessert: ["Limonlu Sorbe"]
            }},

            // SEBZE / ZEYTİNYAĞLI
            { main: "Patlıcan Musakka", keywords: ["patlıcan musakka", "musakka", "patlıcan", "kıyma"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Pirinç Pilavı", "Cacık", "Mevsim Salata"], drink: ["Ayran"], dessert: ["Sütlaç"]
            }},
            { main: "Karnıyarık", keywords: ["karnıyarık", "patlıcan", "kıyma"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Ayran Aşı Çorbası","Pirinç Pilavı"], drink: ["Komposto"], dessert: ["Sütlaç"]
            }},
            { main: "İmam Bayıldı", keywords: ["imam bayıldı", "patlıcan", "zeytinyağlı"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Pirinç Pilavı", "Yoğurt"], drink: ["Ayran"], dessert: ["Revani"]
            }},
            { main: "Patlıcan Dolması", keywords: ["patlıcan dolması", "kuru patlıcan", "dolma"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Yoğurt", "Turşu"], drink: ["Ayran"], dessert: ["İrmik Helvası"]
            }},
            { main: "Kuru Patlıcan Dolması", keywords: ["kuru patlıcan dolması", "dolma", "antep"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Haydari", "Ezogelin Çorbası"], drink: ["Ayran"], dessert: ["Baklava"]
            }},
            { main: "Lahana Dolması", keywords: ["lahana dolması", "sarma", "lahana"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Bal Kabağı Çorbası","Yoğurt", "Turşu"], drink: ["Ayran"], dessert: ["Sütlaç"]
            }},
            { main: "Zeytinyağlı Enginar", keywords: ["zeytinyağlı enginar", "enginar", "zeytinyağlı"], cuisine: "Akdeniz Mutfağı", suggestions: {
                yanlar: ["Domates Çorbası","İç Bakla", "Dereotu", "Pirinç Pilavı"], drink: ["Maden Suyu"], dessert: ["Meyve"]
            }},
            { main: "Zeytinyağlı Kereviz", keywords: ["zeytinyağlı kereviz", "kereviz", "portakallı"], cuisine: "Akdeniz Mutfağı", suggestions: {
                yanlar: ["Mercimek Çorbası","Havuç Tarator", "Fırında Levrek"], drink: ["-"], dessert: ["Ispanaklı Pasta"]
            }},
            { main: "Portakallı Kereviz", keywords: ["portakallı kereviz", "kereviz"], cuisine: "Akdeniz Mutfağı", suggestions: {
                yanlar: ["Roka Salatası", "Yoğurt"], drink: ["Maden Suyu"], dessert: ["Kabak Tatlısı"]
            }},
            { main: "Zeytinyağlı Taze Fasulye", keywords: ["taze fasulye", "fasulye", "zeytinyağlı", "zeytinyağlı fasulye"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Pirinç Pilavı", "Cacık"], drink: ["Ayran"], dessert: ["Karpuz"]
            }},
            { main: "Bakla", keywords: ["bakla", "zeytinyağlı", "fava"], cuisine: "Akdeniz Mutfağı", suggestions: {
                yanlar: ["Dereotu", "Yoğurt"], drink: ["Maden Suyu"], dessert: ["Çilek"]
            }},
            { main: "Barbunya", keywords: ["barbunya", "zeytinyağlı barbunya", "pilaki"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Pirinç Pilavı", "Turşu"], drink: ["Ayran"], dessert: ["Şekerpare"]
            }},
            { main: "Ispanak", keywords: ["ıspanak", "ıspanak yemeği", "pirinçli"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Yoğurt", "Makarna"], drink: ["Su"], dessert: ["Sütlaç"]
            }},
            { main: "Ispanaklı Yumurta", keywords: ["ıspanaklı yumurta", "kahvaltı", "yumurta"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Yoğurt", "Tam Buğdaylı Ekmek"], drink: ["Çay"], dessert: []
            }},
            { main: "Pırasa", keywords: ["pırasa", "zeytinyağlı", "pirinçli"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Ezogelin Çorbası","Limon", "Pirinç Pilavı","Yoğurt"], drink: ["Su"], dessert: ["Revani"]
            }},
            { main: "Pırasa Graten", keywords: ["pırasa graten"], cuisine: "Uluslararası", suggestions: {
                yanlar: ["Çıtır Tavuk", "Domatesli Makarna", "Havuç Salata"], drink: ["Maden Suyu"], dessert: ["Muhallebi"]
              }},        
            { main: "Karnabahar Kızartması", keywords: ["karnabahar kızartması", "kızartma", "sebze"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Sarımsaklı Yoğurt", "Domates Sosu"], drink: ["Ayran"], dessert: ["Sütlaç"]
            }},
            { main: "Karnabahar Graten", keywords: ["karnabahar graten", "fırın", "beşamel"], cuisine: "Uluslararası", suggestions: {
                yanlar: ["Izgara Tavuk", "Salata"], drink: ["Maden Suyu"], dessert: ["Cheesecake"]
            }},
            { main: "Karnabahar Pane", keywords: ["karnabahar pane", "kızartma", "pane"], cuisine: "Uluslararası", suggestions: {
                yanlar: ["Yoğurtlu Sos", "Makarna"], drink: ["Kola"], dessert: ["Dondurma"]
            }},
            { main: "Mücver", keywords: ["mücver", "kabak"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Ayran Aşı Çorbası","Sarımsaklı Yoğurt", "Beyaz Peynir"], drink: ["Çay"], dessert: ["Karpuz"]
            }},
            { main: "Kabak", keywords: ["kabak", "kabak yemeği"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Dereotu", "Yoğurt"], drink: [], dessert: ["Sütlaç"]
            }},
            { main: "Türlü", keywords: ["türlü", "sebze", "etli"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Bulgur Pilavı", "Cacık"], drink: ["Ayran"], dessert: ["Aşure"]
            }},
            { main: "Kapuska", keywords: ["kapuska", "lahana"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Tarhana Çorbası","Bulgur Pilavı", "Turşu"], drink: ["Ayran"], dessert: ["Kabak Tatlısı"]
            }},
            { main: "Mancar", keywords: ["mancar", "karalahana", "karadeniz"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Mısır Ekmeği", "Yoğurt"], drink: [], dessert: ["Laz Böreği"]
            }},
            { main: "Şıhıl Mahşi", keywords: ["şıhıl mahşi", "kabak dolması", "antep"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Sarımsaklı Yoğurt", "Pirinç Pilavı"], drink: ["Ayran"], dessert: ["Künefe"]
            }},
            { main: "Ratatouille", keywords: ["ratatouille", "sebze", "fransız"], cuisine: "Akdeniz Mutfağı", suggestions: {
                yanlar: ["Pilav", "Izgara Et"], drink: ["Şarap (Öneri)"], dessert: ["Creme Brulee"]
            }},
            { main: "Fırında Sebze", keywords: ["fırında sebze", "sebze", "karışık"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Yoğurtlu Sos", "Köfte"], drink: ["Ayran"], dessert: ["Meyve"]
            }},
            { main: "Sebze Graten", keywords: ["sebze graten", "graten", "fırın"], cuisine: "Uluslararası", suggestions: {
                yanlar: ["Izgara Tavuk", "Salata"], drink: ["Maden Suyu"], dessert: ["Sufle"]
            }},
            { main: "Domates Biber Patlıcan Kızartma", keywords: ["kızartma", "karışık kızartma"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Sarımsaklı Yoğurt", "Domates Sosu", "Ekmek"], drink: ["Ayran"], dessert: ["Karpuz"]
            }},
            { main: "Patates Oturtma", keywords: ["patates oturtma", "patates", "kıyma"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Pirinç Pilavı", "Cacık"], drink: ["Ayran"], dessert: ["Revani"]
            }},
            { main: "Etli Patates", keywords: ["etli patates", "sulu patates"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Pirinç Pilavı", "Turşu"], drink: ["Ayran"], dessert: ["Sütlaç"]
            }},
            { main: "Fırında Patates", keywords: ["fırında patates", "patates", "baharatlı"], cuisine: "Uluslararası", suggestions: {
                yanlar: ["Fırında Köfte", "Soğan Halkası", "Ketçap", "Mayonez"], drink: ["Kola"], dessert: ["Dondurma"]
            }},
            { main: "Patates Graten", keywords: ["patates graten", "kremalı patates"], cuisine: "Fransız Mutfağı", suggestions: {
                yanlar: ["Biftek", "Yeşil Salata"], drink: ["Kırmızı Şarap (Öneri)"], dessert: ["Çikolatalı Mus"]
            }},
            { main: "Kumpir", keywords: ["kumpir", "patates", "ortaköy"], cuisine: "Sokak Lezzetleri", suggestions: {
                yanlar: ["Rus Salatası", "Sosis", "Turşu"], drink: ["Ayran"], dessert: ["Waffle"]
            }},
            { main: "Kaşarlı Mantar", keywords: ["kaşarlı mantar", "fırın mantar"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Domates Çorbası","Et Yemekleri", "Roka Salatası"], drink: ["Şalgam Suyu"], dessert: ["Helva"]
            }},
            { main: "İstiridye Mantarı", keywords: ["istiridye mantarı", "mantar sote"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Penne Makarna", "Yeşil Salata"], drink: ["Maden Suyu"], dessert: ["Sütlaç"]
            }},
            { main: "Zeytinyağlı Semizotu", keywords: ["semizotu", "yoğurtlu semizotu"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Karpuz", "Domatesli Pilav","Peynir", "Domates"], drink: ["Maden Suyu"], dessert: ["Dondurma"]
            }},
            { main: "Bamya", keywords: ["bamya", "zeytinyağlı bamya"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Yayla Çorbası", "Domatesli Pilav","Cacık"], drink: ["Maden Suyu"], dessert: ["Revani"]
            }},

            // BAKLAGİL & PİLAV
            { main: "Kuru Fasulye", keywords: ["kuru fasulye", "fasulye", "etli"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Pirinç Pilavı", "Turşu", "Kuru Soğan"], drink: ["Ayran"], dessert: ["Sütlaç"]
            }},
            { main: "Etli Kuru Fasulye", keywords: ["etli kuru fasulye", "fasulye"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Pirinç Pilavı", "Cacık"], drink: ["Hoşaf"], dessert: ["Kemalpaşa"]
            }},
            { main: "Nohut", keywords: ["nohut", "etli nohut", "sulu"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Bulgur Pilavı", "Turşu"], drink: ["Ayran"], dessert: ["Revani"]
            }},
            { main: "Pirinç Pilavı", keywords: ["pirinç pilavı", "pilav", "şehriyeli"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Kuru Fasulye", "Tavuk Sote", "Cacık"], drink: ["Hoşaf"], dessert: ["Sütlaç"]
            }},
            { main: "Bulgur Pilavı", keywords: ["bulgur pilavı", "bulgur", "domatesli"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Cacık", "Turşu", "Et Sote"], drink: ["Ayran"], dessert: ["İrmik Helvası"]
            }},
            { main: "Domatesli Bulgur Pilavı", keywords: ["domatesli bulgur pilavı"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Yoğurt", "Biber Turşusu"], drink: ["Ayran"], dessert: ["Meyve"]
            }},
            { main: "Meyhane Pilavı", keywords: ["meyhane pilavı", "bulgur"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Cacık", "Kuzu Şiş"], drink: ["Şalgam Suyu"], dessert: ["Künefe"]
            }},
            { main: "Özbek Pilavı", keywords: ["özbek pilavı", "etli pilav", "havuçlu"], cuisine: "Orta Asya Mutfağı", suggestions: {
                yanlar: ["Cevizli Kaşık Salatası", "Turşu"], drink: ["Ayran"], dessert: ["Kuru Meyve"]
            }},
            { main: "Falafel", keywords: ["falafel", "nohut köftesi"], cuisine: "Orta Doğu Mutfağı", suggestions: {
                yanlar: ["Avokadolu Humus", "Pita Ekmeği", "Salata"], drink: ["Ayran"], dessert: ["Baklava"]
            }},

            // MAKARNA & HAMUR İŞİ
            { main: "Makarna", keywords: ["makarna", "sade makarna", "peynirli"], cuisine: "İtalyan Mutfağı", suggestions: {
                yanlar: ["Tavuk Sote", "Yoğurt"], drink: ["Kola", "Kırmızı Şarap (Öneri)"], dessert: ["Puding"]
            }},
            { main: "Salçalı Makarna", keywords: ["salçalı makarna", "makarna"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Yoğurt", "Turşu"], drink: ["Ayran"], dessert: ["Revani"]
            }},
            { main: "Kremalı Makarna", keywords: ["kremalı makarna", "makarna", "kremalı"], cuisine: "İtalyan Mutfağı", suggestions: {
                yanlar: ["Fırında Tavuk", "Fırında Kaşarlı Mantar"], drink: ["Beyaz Şarap (Öneri)"], dessert: ["Tiramisu"]
            }},
            { main: "Fırında Makarna", keywords: ["fırında makarna", "beşamel"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Mercimek Çorbası","Ispanak", "Mor Lahana Salatası"], drink: ["Ayran"], dessert: ["Mozaik Pasta"]
            }},
            { main: "Spagetti", keywords: ["spagetti", "bolonez", "napoliten"], cuisine: "İtalyan Mutfağı", suggestions: {
                yanlar: ["Rendelenmiş Parmesan", "Sarımsaklı Ekmek"], drink: ["Kola"], dessert: ["Panna Cotta"]
            }},
            { main: "Penne", keywords: ["penne", "makarna", "arabiata"], cuisine: "İtalyan Mutfağı", suggestions: {
                yanlar: ["Pesto Sos", "Fırında Tavuk"], drink: ["Maden Suyu"], dessert: ["Tiramisu"]
            }},
            { main: "Fettucini", keywords: ["fettucini", "alfredo", "makarna"], cuisine: "İtalyan Mutfağı", suggestions: {
                yanlar: ["Tavuk Sote", "Mantar"], drink: ["Limonata"], dessert: ["Cheesecake"]
            }},
            { main: "Lazanya", keywords: ["lazanya"], cuisine: "İtalyan Mutfağı", suggestions: {
                yanlar: ["Mercimek Çorbası", "Sarımsaklı Ekmek","Dereotlu Kabak Tarator"], drink: ["Kayısı Hoşafı","Kırmızı Şarap (Öneri)"], dessert: ["Tiramusu"]
            }},
            { main: "Erişte", keywords: ["erişte", "ev yapımı erişte"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Tavuk Sote", "Kıymalı Börek", "Yoğurtlu Pancar Mezesi"], drink: ["Ayran", "Komposto"], dessert: ["Kabak Tatlısı"]
            }},
            { main: "Noodle", keywords: ["noodle", "çin eriştesi"], cuisine: "Asya Mutfağı", suggestions: {
                yanlar: ["Soya Sosu"], drink: ["Yeşil Çay"], dessert: ["Kızarmış Muz"]
            }},
            { main: "Mac and Cheese", keywords: ["mac and cheese", "peynirli makarna"], cuisine: "Amerikan Mutfağı", suggestions: {
                yanlar: ["Sosis", "Brokoli"], drink: ["Kola"], dessert: ["Cookie"]
            }},
            { main: "Mantı", keywords: ["mantı", "kayseri mantısı"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Sarımsaklı Yoğurt", "Salçalı Sos", "Sumak"], drink: ["Ayran"], dessert: ["Sütlaç"]
            }},
            { main: "Pizza", keywords: ["pizza", "karışık pizza"], cuisine: "İtalyan Mutfağı", suggestions: {
                yanlar: ["Patates Kızartması", "Kızarmış Baget Tavuk", "Ketçap", "Mayonez"], drink: ["Kola"], dessert: ["Sufle"]
            }},
            { main: "Hamburger", keywords: ["hamburger", "burger"], cuisine: "Amerikan Mutfağı", suggestions: {
                yanlar: ["Patates Kızartması", "Soğan Halkası"], drink: ["Kola"], dessert: ["Milkshake"]
            }},
            { main: "Pide", keywords: ["pide", "kıymalı pide", "kaşarlı pide"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Acılı Ezme", "Haydari"], drink: ["Ayran"], dessert: ["Künefe"]
            }},

            { main: "Lahmacun", keywords: ["lahmacun"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Maydanoz", "Limon", "Soğan", "Haydari", "Acılı Ezme"], drink: ["Ayran"], dessert: ["Künefe"]
            }},
            { main: "Su Böreği", keywords: ["su böreği"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Domates", "Salatalık", "Zeytin"], drink: ["Çay"], dessert: []
            }},
            { main: "Patatesli Börek", keywords: ["patatesli börek"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: [], drink: ["Ayran","Çay"], dessert: []
            }},
            { main: "Ispanaklı Börek", keywords: ["ıspanaklı börek"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Yoğurt"], drink: ["Ayran","Çay"], dessert: []
            }},
            { main: "Kıymalı Börek", keywords: ["kıymalı börek", "kol böreği"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Turşu"], drink: ["Ayran","Çay"], dessert: []
            }},
            { main: "Pırasalı Börek", keywords: ["pırasalı börek"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: [], drink: ["Ayran"], dessert: []
            }},
            { main: "Pişi", keywords: ["pişi", "hamur kızartması"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Peynir", "Reçel", "Domates"], drink: ["Çay"], dessert: []
            }},
            { main: "Hamur Kızartması", keywords: ["hamur kızartması"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Peynir", "Zeytin"], drink: ["Çay"], dessert: []
            }},
            { main: "Krep", keywords: ["krep", "akıtma"], cuisine: "Uluslararası", suggestions: {
                yanlar: ["Çikolata", "Meyve", "Bal"], drink: ["Süt","Çay"], dessert: []
            }},
            { main: "Pankek", keywords: ["pankek"], cuisine: "Uluslararası", suggestions: {
                yanlar: ["Akçaağaç Şurubu", "Meyve"], drink: ["Kahve"], dessert: []
            }},
            { main: "Simit", keywords: ["simit", "gevrek"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Kaşar Peyniri", "Zeytin"], drink: ["Çay"], dessert: []
            }},
            { main: "Menemen", keywords: ["menemen"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Patates Kızartması", "Sigara Böreği","Simit"], drink: ["Çay"], dessert: []
            }},

            // BALIKLAR
            { main: "Balık (Genel)", keywords: ["balık", "ızgara balık"], cuisine: "Akdeniz Mutfağı", suggestions: {
                yanlar: ["Mercimek Çorbası", "Roka Salatası", "Fava", "Çıtır Nohutlu Humus", "Közlenmiş Patlıcan Salatası"], drink: ["Şalgam Suyu", "Rakı (Öneri)"], dessert: ["İrmik Helvası"]
            }},
            // YENİ KAYIT: Hamsi Tava için daha spesifik bir kayıt eklendi.
            { main: "Hamsi Tava", keywords: ["hamsi tava", "hamsi"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Mercimek Çorbası", "Turp Mezesi", "Havuç Tarator", "Fırında Kremalı Patates"], drink: ["Şalgam Suyu", "Rakı (Öneri)"], dessert: ["Tahin Helvası"]
            }},
            { main: "Izgara Levrek", keywords: ["levrek", "ızgara levrek"], cuisine: "Akdeniz Mutfağı", suggestions: {
                yanlar: ["Köz Patlıcan Biber", "Roka", "Acılı Ezme", "Fava", "Deniz Börülcesi"], drink: ["Rakı (Öneri)", "Şalgam Suyu"], dessert: ["Fırın Helva"]
            }},
            { main: "Izgara Çipura", keywords: ["çipura", "ızgara çipura"], cuisine: "Akdeniz Mutfağı", suggestions: {
                yanlar: ["Roka Salatası", "Patates Salatası", "Kırmızı Soğan", "Pastırmalı Humus", "Deniz Börülcesi"], drink: ["Şalgam Suyu"], dessert: ["Helva"]
            }},
            { main: "Lüfer / Çinekop Tava", keywords: ["lüfer", "ızgara lüfer","çinekop"], cuisine: "Akdeniz Mutfağı", suggestions: {
                yanlar: ["Yeşil Salata", "Narlı Peynir Mezesi", "Şakşuka"], drink: ["Rakı (Öneri)", "Şalgam Suyu"], dessert: ["Helva"]
            }},
            { main: "Fırında Somon", keywords: ["somon", "fırın somon"], cuisine: "Uluslararası", suggestions: {
                yanlar: ["Kuşkonmaz", "Patates Püresi", "Deniz Börülcesi", "Fava"], drink: ["Beyaz Şarap (Öneri)"], dessert: ["Sufle"]
            }},
            { main: "Barbun", keywords: ["barbun", "barbun tava"], cuisine: "Akdeniz Mutfağı", suggestions: {
                yanlar: ["Yeşil Salata", "Atom Meze", "Girit Ezmesi"], drink: ["Şalgam Suyu"], dessert: ["Helva"]
            }},
            { main: "Ton Balığı", keywords: ["ton balığı", "konserve"], cuisine: "Uluslararası", suggestions: {
                yanlar: ["Makarna", "Cevizli Kaşık Salatası", "Mor Lahana Mezesi"], drink: ["Limonata"], dessert: ["Meyve"]
            }},
            { main: "Fırında Palamut", keywords: ["palamut", "fırın palamut", "balık", "kış balığı"], cuisine: "Akdeniz Mutfağı", suggestions: {
                yanlar: ["Hardal Soslu Roka Salatası", "Sumaklı Soğan", "Limon", "Haydari"], drink: ["Şalgam Suyu", "Maden Suyu"], dessert: ["Tahinli Kabak Tatlısı"]
            }},
            { main: "Hamsili Pilav", keywords: ["hamsili pilav", "karadeniz"], cuisine: "Türk Mutfağı", suggestions: {
                // Anahtar kelimeyi daha spesifik tuttuk.
                yanlar: ["Turşu Kavurması", "Mısır Ekmeği"], drink: ["Çay"], dessert: ["Laz Böreği"]
            }},

            // SALATALAR & MEZELER
            { main: "Salata (Genel)", keywords: ["salata", "karışık salata"], cuisine: "Uluslararası", suggestions: {
                yanlar: ["Izgara Tavuk", "Havuçlu Kerevizli Meze"], drink: ["Maden Suyu"], dessert: []
            }},
            { main: "Çoban Salatası", keywords: ["çoban salatası"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Kuru Fasulye", "Pilav", "Yoğurt"], drink: ["Ayran"], dessert: []
            }},
            { main: "Mevsim Salatası", keywords: ["mevsim salatası"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Izgara Balık/Et Sote"], drink: ["Maden Suyu"], dessert: []
            }},
            { main: "Gavurdağı Salatası", keywords: ["gavurdağı salatası", "cevizli salata"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Adana Kebap/Lahmacun"], drink: ["Şalgam Suyu"], dessert: []
            }},
            { main: "Piyaz", keywords: ["piyaz", "fasulye piyazı"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Izgara Köfte", "Havuçlu Kerevizli Meze"], drink: ["Şıra"], dessert: []
            }},
            { main: "Makarna Salatası", keywords: ["makarna salatası", "yoğurtlu makarna"], cuisine: "Uluslararası", suggestions: {
                yanlar: ["Kıymalı Börek", "Yoğurtlu Semizotu"], drink: ["Çay"], dessert: []
            }},
            { main: "Patates Salatası", keywords: ["patates salatası"], cuisine: "Uluslararası", suggestions: {
                yanlar: ["Börek", "Izgara Köfte"], drink: ["Ayran"], dessert: []
            }},
            { main: "Rus Salatası", keywords: ["rus salatası"], cuisine: "Uluslararası", suggestions: {
                yanlar: ["Kumpir", "Sandviç"], drink: ["Kola"], dessert: []
            }},
            { main: "Amerikan Salatası", keywords: ["amerikan salatası"], cuisine: "Uluslararası", suggestions: {
                yanlar: ["Et Yemekleri/Kızartma"], drink: ["Kola"], dessert: []
            }},
            { main: "Coleslaw", keywords: ["coleslaw", "lahana salatası"], cuisine: "Uluslararası", suggestions: {
                yanlar: ["Hamburger", "Tavuk Kızartma"], drink: ["Kola"], dessert: []
            }},
            { main: "Sezar Salata", keywords: ["sezar salata", "tavuklu salata"], cuisine: "Uluslararası", suggestions: {
                yanlar: ["Izgara Tavuk", "Kruton", "Parmesan"], drink: ["Maden Suyu"], dessert: []
            }},
            { main: "Akdeniz Salata", keywords: ["akdeniz salata", "peynirli salata"], cuisine: "Akdeniz Mutfağı", suggestions: {
                yanlar: ["Izgara Levrek", "Babagannuş"], drink: ["Maden Suyu"], dessert: []
            }},
            { main: "Roka Salatası", keywords: ["roka salatası"], cuisine: "Akdeniz Mutfağı", suggestions: {
                yanlar: ["Izgara Balık", "Et Yemekleri"], drink: ["Şalgam Suyu"], dessert: []
            }},
            { main: "Yeşil Salata", keywords: ["yeşil salata", "marul salatası"], cuisine: "Uluslararası", suggestions: {
                yanlar: ["Her Türlü Yemek"], drink: ["Maden Suyu"], dessert: []
            }},
            { main: "Yoğurtlu Semizotu", keywords: ["yoğurtlu semizotu", "semizotu salatası"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Kıymalı Yemekler", "Makarna"], drink: ["Maden Suyu"], dessert: []
            }},
            { main: "Kısır", keywords: ["kısır", "ince bulgur"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Marul", "Turşu"], drink: ["Ayran","Çay"], dessert: []
            }},
            { main: "Çiğ Köfte", keywords: ["çiğ köfte", "etsiz çiğ köfte"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Lavaş", "Marul", "Lahmacun"], drink: ["Ayran"], dessert: []
            }},
            { main: "Mercimek Köftesi", keywords: ["mercimek köftesi"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Marul", "Turşu"], drink: ["Ayran","Çay"], dessert: []
            }},
            { main: "Humus", keywords: ["humus", "nohut ezmesi"], cuisine: "Orta Doğu Mutfağı", suggestions: {
                yanlar: ["Pastırma", "Çıtır Nohut", "Fırında Çipura"], drink: ["Şalgam Suyu"], dessert: []
            }},
            { main: "Babagannuş", keywords: ["babagannuş", "patlıcan ezmesi"], cuisine: "Orta Doğu Mutfağı", suggestions: {
                yanlar: ["Adana Kebap", "Et"], drink: ["Şalgam Suyu"], dessert: []
            }},
            { main: "Haydari", keywords: ["haydari", "süzme yoğurt"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Fırında Levrek", "Közlenmiş Patlıcan Biber"], drink: ["Maden Suyu", "Rakı (Öneri)"], dessert: ["Tahin Helvası"]
            }},

            { main: "Acılı Ezme", keywords: ["acılı ezme", "ezme"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Adana Kebap", "Lahmacun"], drink: ["Ayran"], dessert: []
            }},
            { main: "Şakşuka", keywords: ["şakşuka", "patlıcan kızartma"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Yoğurt", "Zeytinyağlı Barbunya"], drink: ["Ayran"], dessert: []
            }},
            { main: "Atom", keywords: ["atom", "yoğurtlu biber"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Et Yemekleri", "Meze"], drink: ["Rakı (Öneri)"], dessert: []
            }},
            { main: "Fava (Meze)", keywords: ["fava", "bakla ezmesi"], cuisine: "Ege Mutfağı", suggestions: {
                yanlar: ["Dereotu", "Zeytinyağı"], drink: ["Rakı (Öneri)"], dessert: []
            }},
            { main: "Muhammara", keywords: ["muhammara", "cevizli biber"], cuisine: "Orta Doğu Mutfağı", suggestions: {
                yanlar: ["Kızarmış Ekmek", "Kahvaltı"], drink: ["Çay"], dessert: []
            }},
            { main: "Köz Patlıcan Salatası", keywords: ["köz patlıcan salatası", "patlıcan salatası"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Et Yemekleri/Kebap"], drink: ["Şalgam Suyu"], dessert: []
            }},
            { main: "Köz Biber", keywords: ["köz biber", "kırmızı biber"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Et Yemekleri/Kebap"], drink: ["Maden Suyu"], dessert: []
            }},
            { main: "Turşu", keywords: ["turşu", "karışık turşu"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Kuru Fasulye", "Pilav"], drink: ["Ayran"], dessert: []
            }},
            { main: "Havuç Tarator", keywords: ["havuç tarator", "yoğurtlu havuç"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Kıymalı Makarna", "Izgara Tavuk"], drink: ["Maden Suyu"], dessert: []
            }},
            { main: "Meksika Fasulyesi Salatası", keywords: ["meksika fasulyesi salatası"], cuisine: "Meksika Mutfağı", suggestions: {
                yanlar: ["Izgara Tavuk", "Babagannuş"], drink: ["Kola"], dessert: []
            }},
            { main: "Yeşil Mercimekli Salata", keywords: ["yeşil mercimekli salata"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: [], drink: ["Detoks Suyu"], dessert: []
            }},
            { main: "Maş Fasulyesi Salatası", keywords: ["maş fasulyesi salatası"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: [], drink: ["Detoks Suyu"], dessert: []
            }},
            { main: "Kinoalı Salata", keywords: ["kinoalı salata"], cuisine: "Uluslararası", suggestions: {
                yanlar: ["Avokado", "Peynir"], drink: ["Detoks Suyu"], dessert: []
            }},
            { main: "Arpa Şehriyeli Salata", keywords: ["arpa şehriyeli salata"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Kornişon Turşusu", "Izgara Tavuk"], drink: ["Maden Suyu"], dessert: []
            }},
            { main: "Domates Biber Söğüş", keywords: ["domates biber söğüş", "söğüş"], cuisine: "Türk Mutfağı", suggestions: {
                yanlar: ["Kahvaltı/Et Yemekleri"], drink: [], dessert: []
            }},
            { main: "Lor Peyniri Salatası", keywords: ["lor peyniri salatası", "lor ezmesi"], cuisine: "Ege Mutfağı", suggestions: {
                yanlar: ["Makarna/Izgara Balık"], drink: [], dessert: []
            }}
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
