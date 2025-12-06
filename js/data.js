// data.js

// --- YARDIMCI FONKSİYONLAR ---

function normalizeText(text) {
    if (!text) return '';
    // Türkçe karakterlerin normalize edilmesi
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

// Global olarak erişilebilir kılınan fonksiyon
if (typeof window !== "undefined") {
    window.normalizeText = normalizeText;
    window.createListHtml = createListHtml;
}

// --- BLOG YAZILARI VERİSİ ---
// Değişkenler hala const ile tanımlanıyor, ancak global atama için kullanılacak.
const blogPostsData = [
    {
        id: 1,
        category: "Mutfak Sırları",
        title: "Etin Yanına Ne Gider? Sofranızı Tamamlayan En İyi 12 Lezzet",
        slug: "etin-yanina-ne-gider",
        description: "Et yemeklerinin yanına en çok yakışan 12 lezzeti keşfedin. Pilav, közlenmiş sebzeler, meze ve salata önerileriyle sofranızı mükemmel tamamlayın.",
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
            <p>
            Daha hafif bir menü oluşturmak isterseniz 
            <strong><a href="https://yanindanevar.com/?page=blog&post=zeytinyagli-yanina-ne-gider">zeytinyağlı yemeklerin yanına ne gider</a></strong>
            rehberimize de göz atabilirsiniz.
            </p>

            <p>
            Et yemeklerinin yanında sunabileceğiniz en doğru pilav önerileri için 
            <strong><a href="https://yanindanevar.com/?page=blog&post=pilav-yanina-hangi-yemek-gider">pilav rehberi</a></strong>
            yazımızı inceleyebilirsiniz.
            </p>

            <p>
            Menünüzde çorba varsa, 
            <strong><a href="https://yanindanevar.com/?page=blog&post=kis-corbasi-yanina-ne-gider">kış çorbalarının yanına ne gider</a></strong>
            listesi size fikir verebilir.
            </p>
        `
    },
    {
        id: 2,
        category: "Mutfak Sırları",
        title: "Zeytinyağlı Yemeklerin Yanına Ne Gider? Sofraya Uyum Katan En İyi Eşlikçiler",
        slug: "zeytinyagli-yanina-ne-gider",
        description: "Zeytinyağlı yemeklerin yanına en çok yakışan pilav, yoğurt, salata ve meze önerilerini keşfedin. Sofranıza hafif ve uyumlu lezzetler ekleyin.",
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

            <h4>7. Zeytin &amp; Zeytinyağı Soslu Mezeler</h4>
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
            
            <p>
            Et ağırlıklı bir menü hazırlıyorsanız, 
            <strong><a href="https://yanindanevar.com/?page=blog&post=etin-yanina-ne-gider">etin yanına ne gider</a></strong>
            rehberimiz size yardımcı olabilir.
            </p>

            <p>
            Zeytinyağlıların yanında servis edilecek en doğru pilav türleri için 
            <strong><a href="https://yanindanevar.com/?page=blog&post=pilav-yanina-hangi-yemek-gider">pilav uyum rehberine</a></strong>
            göz atabilirsiniz.
            </p>

            <p>
            Menünüzde çorba eklemek isterseniz,
            <strong><a href="https://yanindanevar.com/?page=blog&post=kis-corbasi-yanina-ne-gider">kış çorbalarının yanına ne gider</a></strong>
            yazımız size fikir verebilir.
            </p>
        `
    },
    {
        id: 3,
        category: "Özel Gün",
        title: "🎄 Yılbaşı Sofrası İçin 10 Özel Menü (2025 Rehberi) – En Şık ve Doyurucu Seçenekler",
        slug: "yilbasi-sofra-menu-onerileri",
        description: "2025 için yılbaşı sofrasına uygun 10 özel menü! Etli, deniz ürünlü, vegan, glutensiz ve klasik seçeneklerle şık ve doyurucu yılbaşı menüleri keşfedin.",
        content: `
            <p>
            Yılbaşı akşamı sofranın hem göze hem mideye hitap etmesini istiyorsan, planlı bir menü hazırlamak büyük fark yaratır.
            Aşağıda; <strong>klasik</strong>, <strong>deniz ürünlü</strong>, <strong>vejetaryen</strong>, <strong>vegan</strong> ve <strong>glutensiz</strong> seçeneklerin de bulunduğu 
            <strong>10 farklı yılbaşı menüsü</strong> bulacaksın.
            </p>

            <p>
            Kaloriler, ortalama bir yetişkin için tek tabak / porsiyon baz alınarak yaklaşık değerlerdir;
            tarifine ve porsiyon büyüklüğüne göre değişebilir.
            </p>

            <hr>

            <h2>🕯️ 1) Klasik Türk Yılbaşı Menüsü</h2>
            <p>Türk mutfağının sevilen tatlarıyla, geleneksel bir yılbaşı sofrası.</p>

            <table>
                <thead>
                    <tr>
                        <th>Kategori</th>
                        <th>İçerik</th>
                        <th>Yaklaşık Kalori</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Mezeler</strong></td>
                        <td>Haydari, Acılı Ezme, Köz Patlıcan, Rus Salatası</td>
                        <td>~600 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>Çorba</strong></td>
                        <td>Ezogelin Çorbası</td>
                        <td>~150 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>Salata</strong></td>
                        <td>Cevizli Gavurdağı Salatası</td>
                        <td>~120 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>Ana Yemek</strong></td>
                        <td>Fırında Bütün Hindi + İç Pilav</td>
                        <td>~550 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>Tatlı</strong></td>
                        <td>Fırın Sütlaç</td>
                        <td>~350 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>İçecek (Alkollü)</strong></td>
                        <td>Rakı veya Kırmızı Şarap</td>
                        <td>~150 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>İçecek (Alkolsüz)</strong></td>
                        <td>Şalgam Suyu veya Ayran</td>
                        <td>~80 kcal</td>
                    </tr>
                </tbody>
            </table>

            <p><strong>Toplam (Alkollü içecek ile): ~1920 kcal</strong><br>
            <strong>Toplam (Alkolsüz içecek ile): ~1850 kcal</strong></p>

            <hr>

            <h2>🎅 2) Izgara Etli Yılbaşı Menüsü</h2>
            <p>Kırmızı et severler için doyurucu ve şık bir yılbaşı menüsü.</p>

            <table>
                <thead>
                    <tr>
                        <th>Kategori</th>
                        <th>İçerik</th>
                        <th>Yaklaşık Kalori</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Mezeler</strong></td>
                        <td>Humus, Fava, Köz Biber, Mantar Sote</td>
                        <td>~650 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>Çorba</strong></td>
                        <td>Kremalı Mantar Çorbası</td>
                        <td>~180 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>Salata</strong></td>
                        <td>Roka, Parmesan &amp; Nar Ekşili Salata</td>
                        <td>~120 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>Ana Yemek</strong></td>
                        <td>Izgara Antrikot (Mantar soslu)</td>
                        <td>~900 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>Tatlı</strong></td>
                        <td>Çikolatalı Sufle</td>
                        <td>~400 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>İçecek (Alkollü)</strong></td>
                        <td>Kırmızı Şarap</td>
                        <td>~160 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>İçecek (Alkolsüz)</strong></td>
                        <td>Soda + Limon</td>
                        <td>~70 kcal</td>
                    </tr>
                </tbody>
            </table>

            <p><strong>Toplam (Alkollü içecek ile): ~2410 kcal</strong><br>
            <strong>Toplam (Alkolsüz içecek ile): ~2320 kcal</strong></p>

            <hr>

            <h2>🥂 3) Deniz Ürünlü Şık Yılbaşı Menüsü</h2>
            <p>Daha hafif ama gösterişli bir yılbaşı sofrası isteyenlere.</p>

            <table>
                <thead>
                    <tr>
                        <th>Kategori</th>
                        <th>İçerik</th>
                        <th>Yaklaşık Kalori</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Mezeler</strong></td>
                        <td>Deniz Börülcesi, Fava, Hardal Soslu Hamsi, Girit Ezmesi</td>
                        <td>~500 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>Çorba</strong></td>
                        <td>Kremalı Mantar Çorbası</td>
                        <td>~230 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>Salata</strong></td>
                        <td>Akdeniz yeşillikli salata</td>
                        <td>~120 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>Ana Yemek</strong></td>
                        <td>Fırında Somon + Kuşkonmaz</td>
                        <td>~400 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>Tatlı</strong></td>
                        <td>Limonlu Cheesecake</td>
                        <td>~300 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>İçecek (Alkollü)</strong></td>
                        <td>Beyaz Şarap</td>
                        <td>~140 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>İçecek (Alkolsüz)</strong></td>
                        <td>Soda + Limon</td>
                        <td>~10 kcal</td>
                    </tr>
                </tbody>
            </table>

            <p><strong>Toplam (Alkollü içecek ile): ~1690 kcal</strong><br>
            <strong>Toplam (Alkolsüz içecek ile): ~1560 kcal</strong></p>

            <hr>

            <h2>🌿 4) Vejetaryen Yılbaşı Menüsü</h2>
            <p>Et tercih etmeyenler için dengeli ve renkli bir yılbaşı menüsü. (Vejetaryen)</p>

            <table>
                <thead>
                    <tr>
                        <th>Kategori</th>
                        <th>İçerik</th>
                        <th>Yaklaşık Kalori</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Mezeler</strong></td>
                        <td>Kabak Mücver, Yoğurtlu Havuç Tarator, Patlıcan Ezmesi, Zeytinyağlı Enginar</td>
                        <td>~520 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>Çorba</strong></td>
                        <td>Mercimek Çorbası</td>
                        <td>~150 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>Salata</strong></td>
                        <td>Kırmızı lahana &amp; Yeşillik Salatası</td>
                        <td>~110 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>Ana Yemek</strong></td>
                        <td>Sebzeli Kremalı Fırın Makarna</td>
                        <td>~650 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>Tatlı</strong></td>
                        <td>Fırın Helva veya İrmik Helvası</td>
                        <td>~320 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>İçecek (Alkollü)</strong></td>
                        <td>Beyaz Şarap</td>
                        <td>~140 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>İçecek (Alkolsüz)</strong></td>
                        <td>Ayran</td>
                        <td>~90 kcal</td>
                    </tr>
                </tbody>
            </table>

            <p><strong>Toplam (Alkollü içecek ile): ~1890 kcal</strong><br>
            <strong>Toplam (Alkolsüz içecek ile): ~1840 kcal</strong></p>

            <hr>

            <h2>🌱 5) Vegan Yılbaşı Menüsü</h2>
            <p>Tamamen hayvansal ürün içermeyen, hafif ama doyurucu bir yılbaşı sofrası. (Vegan)</p>

            <table>
                <thead>
                    <tr>
                        <th>Kategori</th>
                        <th>İçerik</th>
                        <th>Yaklaşık Kalori</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Mezeler</strong></td>
                        <td>Zeytinyağlı Barbunya, Köz Sebze Trio, Avokadolu Humus, Zeytinyağlı Brokoli</td>
                        <td>~480 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>Çorba</strong></td>
                        <td>Zerdeçallı Bal Kabağı Çorbası</td>
                        <td>~200 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>Salata</strong></td>
                        <td>Limonlu Roka &amp; Domates Salatası</td>
                        <td>~100 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>Ana Yemek</strong></td>
                        <td>Fırında Sebzeli Kinoa</td>
                        <td>~600 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>Tatlı</strong></td>
                        <td>Şekersiz Kakao &amp; Hurma Topları</td>
                        <td>~260 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>İçecek (Alkollü)</strong></td>
                        <td>Vegan uyumlu Beyaz Şarap</td>
                        <td>~120 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>İçecek (Alkolsüz)</strong></td>
                        <td>Maden Suyu + Limon</td>
                        <td>~5 kcal</td>
                    </tr>
                </tbody>
            </table>

            <p><strong>Toplam (Alkollü içecek ile): ~1760 kcal</strong><br>
            <strong>Toplam (Alkolsüz içecek ile): ~1645 kcal</strong></p>

            <hr>

            <h2>✨ 6) Glutensiz Yılbaşı Menüsü</h2>
            <p>Bu menüde ekmek, makarna, bulgur gibi gluten içeren ürünler yer almıyor. (Glutensiz)</p>

            <table>
                <thead>
                    <tr>
                        <th>Kategori</th>
                        <th>İçerik</th>
                        <th>Yaklaşık Kalori</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Mezeler</strong></td>
                        <td>Yoğurtlu Semizotu, Zeytinyağlı Bamya, Fırınlanmış Kabak, Somonlu Avokado Ezmesi</td>
                        <td>~450 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>Çorba</strong></td>
                        <td>Sebzeli Pirinç Çorbası</td>
                        <td>~130 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>Salata</strong></td>
                        <td>Turunçlu Yeşil Salata</td>
                        <td>~90 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>Ana Yemek</strong></td>
                        <td>Izgara Levrek</td>
                        <td>~550 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>Tatlı</strong></td>
                        <td>Unsuz Çikolatalı Bitter Mousse</td>
                        <td>~280 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>İçecek (Alkollü)</strong></td>
                        <td>Beyaz Şarap</td>
                        <td>~130 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>İçecek (Alkolsüz)</strong></td>
                        <td>Şekersiz Limonata</td>
                        <td>~110 kcal</td>
                    </tr>
                </tbody>
            </table>

            <p><strong>Toplam (Alkollü içecek ile): ~1630 kcal</strong><br>
            <strong>Toplam (Alkolsüz içecek ile): ~1610 kcal</strong></p>

            <hr>

            <h2>🍽️ 7) Hafif &amp; Şık Yılbaşı Menüsü</h2>
            <p>Hem göze hitap eden hem de nispeten hafif bir yılbaşı sofrası.</p>

            <table>
                <thead>
                    <tr>
                        <th>Kategori</th>
                        <th>İçerik</th>
                        <th>Yaklaşık Kalori</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Mezeler</strong></td>
                        <td>Yoğurtlu Semizotu, Fırın Mantar, Köz Biber, Nohutlu Humus</td>
                        <td>~420 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>Çorba</strong></td>
                        <td>Domates Çorbası</td>
                        <td>~70 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>Salata</strong></td>
                        <td>Mevsim Salatası</td>
                        <td>~90 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>Ana Yemek</strong></td>
                        <td>Tavuk Sote + Az Yağlı Pirinç Pilavı</td>
                        <td>~600 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>Tatlı</strong></td>
                        <td>Meyveli Parfe</td>
                        <td>~250 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>İçecek (Alkollü)</strong></td>
                        <td>Beyaz Şarap</td>
                        <td>~120 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>İçecek (Alkolsüz)</strong></td>
                        <td>Soda</td>
                        <td>~50 kcal</td>
                    </tr>
                </tbody>
            </table>

            <p><strong>Toplam (Alkollü içecek ile): ~1550 kcal</strong><br>
            <strong>Toplam (Alkolsüz içecek ile): ~1480 kcal</strong></p>

            <hr>

            <h2>🔥 8) Acılı Sevenlere Yılbaşı Menüsü</h2>
            <p>Baharat ve acı sevenler için, bol lezzetli bir yılbaşı menüsü.</p>

            <table>
                <thead>
                    <tr>
                        <th>Kategori</th>
                        <th>İçerik</th>
                        <th>Yaklaşık Kalori</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Mezeler</strong></td>
                        <td>Acılı Ezme, Şakşuka, Atom, Jalapeno Turşusu</td>
                        <td>~600 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>Çorba</strong></td>
                        <td>Yayla Çorbası</td>
                        <td>~170 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>Salata</strong></td>
                        <td>Soğanlı Domates Salatası</td>
                        <td>~100 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>Ana Yemek</strong></td>
                        <td>Adana Kebap + Lavaş + Bulgur Pilavı</td>
                        <td>~1050 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>Tatlı</strong></td>
                        <td>Künefe</td>
                        <td>~380 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>İçecek (Alkollü)</strong></td>
                        <td>Rakı</td>
                        <td>~220 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>İçecek (Alkolsüz)</strong></td>
                        <td>Acılı Şalgam Suyu</td>
                        <td>~40 kcal</td>
                    </tr>
                </tbody>
            </table>

            <p><strong>Toplam (Alkollü içecek ile): ~2520 kcal</strong><br>
            <strong>Toplam (Alkolsüz içecek ile): ~2340 kcal</strong></p>

            <hr>

            <h2>🍷 9) Gurme Yılbaşı Menüsü</h2>
            <p>Özenli sunumlar ve yoğun aromalarla “fine dining” havasında bir yılbaşı sofrası.</p>

            <table>
                <thead>
                    <tr>
                        <th>Kategori</th>
                        <th>İçerik</th>
                        <th>Yaklaşık Kalori</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Mezeler</strong></td>
                        <td>Trüflü Patates Püresi, Somon Carpaccio, Zeytinyağlı Enginar, Köz Süt Kabağı</td>
                        <td>~650 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>Çorba</strong></td>
                        <td>Kremalı Bal Kabağı Çorbası</td>
                        <td>~180 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>Salata</strong></td>
                        <td>Balsamikli Roka Salatası</td>
                        <td>~120 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>Ana Yemek</strong></td>
                        <td>Kuzu incik + Firik Pilavı</td>
                        <td>~1080 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>Tatlı</strong></td>
                        <td>Tiramisu</td>
                        <td>~420 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>İçecek (Alkollü)</strong></td>
                        <td>Kırmızı Şarap</td>
                        <td>~170 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>İçecek (Alkolsüz)</strong></td>
                        <td>Soğuk Bitki Çayı veya Hafif gazoz</td>
                        <td>~60 kcal</td>
                    </tr>
                </tbody>
            </table>

            <p><strong>Toplam (Alkollü içecek ile): ~2620 kcal</strong><br>
            <strong>Toplam (Alkolsüz içecek ile): ~2510 kcal</strong></p>

            <hr>

            <h2>🧀 10) Peynir Ağırlıklı Yılbaşı Sofrası</h2>
            <p>Peynir sevenler için zengin ve doyurucu bir yılbaşı menüsü.</p>

            <table>
                <thead>
                    <tr>
                        <th>Kategori</th>
                        <th>İçerik</th>
                        <th>Yaklaşık Kalori</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Mezeler</strong></td>
                        <td>Beyaz Peynir Tabağı, Lorlu Kabak, Zeytin Ezmeli Ekmek Üstü, Köz Domates &amp; Peynirli Meze</td>
                        <td>~580 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>Çorba</strong></td>
                        <td>Domates Çorbası (Kaşarlı)</td>
                        <td>~150 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>Salata</strong></td>
                        <td>Akdeniz Salatası (Peynirli)</td>
                        <td>~120 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>Ana Yemek</strong></td>
                        <td>Fırında Kaşarlı Mantarlı Tavuk</td>
                        <td>~800 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>Tatlı</strong></td>
                        <td>Fırın Kazandibi</td>
                        <td>~350 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>İçecek (Alkollü)</strong></td>
                        <td>Kırmızı Şarap</td>
                        <td>~150 kcal</td>
                    </tr>
                    <tr>
                        <td><strong>İçecek (Alkolsüz)</strong></td>
                        <td>Ayran</td>
                        <td>~90 kcal</td>
                    </tr>
                </tbody>
            </table>

            <p><strong>Toplam (Alkollü içecek ile): ~2150 kcal</strong><br>
            <strong>Toplam (Alkolsüz içecek ile): ~2090 kcal</strong></p>

            <hr>

            <h2>🎁 Son Söz: Yılbaşı Sofranı Kişiselleştir</h2>

            <p>
            Bu 10 yılbaşı menüsü; et severler, deniz ürünlerini sevenler, 
            <strong>vejetaryen</strong>, <strong>vegan</strong> ve <strong>glutensiz</strong> beslenenler için çeşitli seçenekler sunuyor.
            </p>

            <p>İstersen aynı kategorideki mezeleri değiştirerek kendi tarzını yaratabilir, tatlıyı daha hafif seçeneklerle değiştirebilir,
            alkollü veya alkolsüz içeceğe göre toplam kalorini dengeleyebilirsin. </p>

            <p>
            Yılbaşı menünüzde kırmızı et yer alıyorsa, 
            <strong><a href="https://yanindanevar.com/?page=blog&post=etin-yanina-ne-gider">etin yanına ne gider</a></strong>
            rehberine göz atabilirsiniz.
            </p>

            <p>
            Pilav çeşitlerini doğru ana yemekle eşleştirmek için 
            <strong><a href="https://yanindanevar.com/?page=blog&post=pilav-yanina-hangi-yemek-gider">pilav rehberi</a></strong>
            yazımızı inceleyebilirsiniz.
            </p>

            <p>
            Menünüzü hafifletmek isterseniz,
            <strong><a href="https://yanindanevar.com/?page=blog&post=zeytinyagli-yanina-ne-gider">zeytinyağlı yemeklerin yanına ne gider</a></strong>
            listesi size ilham verebilir.
            </p>
        `
    },
    {
        id: 4,
        category: "Mutfak Sırları",
        title: "🍚 Ana Yemeğe Göre İdeal Pilav Seçimi: 7 Farklı Pilav Uyum Rehberi",
        slug: "pilav-yanina-hangi-yemek-gider",
        description: "Hangi pilav hangi ana yemeğin yanına gider? Et, tavuk, balık ve geleneksel yemekler için ideal pilav eşleşmelerini içeren 7 farklı pilav uyum rehberini keşfedin.",
        content: ` 
            <p>
            Türk mutfağında pilav, ana yemeğin sadece bir yan lezzeti değil, sofra kültürünün tamamlayıcı bir parçasıdır. Ancak her pilav, her yemeğe yakışmaz. Bu rehberde, farklı pilav çeşitlerinin hangi ana yemeklerle mükemmel bir uyum yakaladığını keşfedin.
            </p>

            <p>
            Menünüzde doğru dengeyi yakalamak için pilavın yağ oranı, baharat yoğunluğu ve tane yapısı önemlidir.
            </p>

            <h4>1. Tereyağlı Sade Pirinç Pilavı</h4>
            <p>
            Klasik ve vazgeçilmezdir. Etli sulu yemeklerin, özellikle tencere yemeklerinin ve nohut/kuru fasulye gibi baklagillerin suyunu çekmesi için idealdir.
            </p>
            <ul>
            <li>Yakışan Ana Yemekler: Kuru Fasulye, Tas Kebabı, İzmir Köfte, Karnıyarık.</li>
            </ul>

            <h4>2. Arpa Şehriyeli Pirinç Pilavı</h4>
            <p>
            Hafif kavrulmuş arpa şehriyesiyle daha dolgun bir lezzet sunar. Et ve tavuk sote türü lezzetlerin yanında, tek başına doyuruculuğu artırmak için idealdir.
            </p>
            <ul>
            <li>Yakışan Ana Yemekler: Tavuk Sote, Et Sote, Döner, Salçalı Köfte.</li>
            </ul>

            <h4>3. İç Pilav (Kestaneli/Kuş Üzümlü)</h4>
            <p>
            Kestane, kuş üzümü, fıstık ve bol baharat içeriği nedeniyle zengin ve gösterişlidir. Genellikle özel günlerde büyük et veya tavuk dolmalarının yanında sunulur.
            </p>
            <ul>
            <li>Yakışan Ana Yemekler: Fırında Bütün Hindi, Kuzu İncik, Haşlama.</li>
            </ul>

            <h4>4. Domatesli veya Salçalı Bulgur Pilavı</h4>
            <p>
            Domatesin ekşiliği ve bulgurun tok yapısı, ağır et yemeklerini dengeler. Kebap, köfte ve kavurma gibi mangal lezzetlerinin vazgeçilmezidir.
            </p>
            <ul>
            <li>Yakışan Ana Yemekler: Adana Kebap, Sac Kavurma, Izgara Köfte, Et Yahni.</li>
            </ul>

            <h4>5. Sebzeli Pilav (Havuçlu/Bezelyeli)</h4>
            <p>
            Sebzelerle zenginleştirildiği için, sade ızgara balık veya sade et (bonfile) yanına renk ve lezzet katar.
            </p>
            <ul>
            <li>Yakışan Ana Yemekler: Fırında Somon, Sade Biftek, Izgara Tavuk.</li>
            </ul>

            <h4>6. Meyhane Pilavı (Acılı Bulgur)</h4>
            <p>
            Soğan, biber ve domatesle kavrulmuş, acı biber salçası içeren bu pilav; bol baharatlı ve acılı ana yemeklerle uyum sağlar.
            </p>
            <ul>
            <li>Yakışan Ana Yemekler: Ciğer Kavurma, Acılı Güveç, Kokoreç.</li>
            </ul>

            <h4>7. Hamsili Pilav (Karadeniz Mutfağı)</h4>
            <p>
            Anadolu ve Karadeniz mutfağına özgü bu pilav, başlı başına bir ana yemektir. Yanına daha çok ferahlatıcı lezzetler yakışır.
            </p>
            <ul>
            <li>Yakışan Yan Lezzetler: Roka Salatası, Mısır Ekmeği, Turşu.</li>
            </ul>
            <p>
            <hr>
            </p>
            <p>
            Unutmayın: Pilav tercihi sadece lezzet değil, aynı zamanda kalori dengesi açısından da önemlidir. Tereyağlı pilavlar, zeytinyağlı yemeklerin yanında ağır kaçabilir.
            </p>

            <p>
            Pilavı tamamlayacak ana yemek arıyorsanız,
            <strong><a href="https://yanindanevar.com/?page=blog&post=etin-yanina-ne-gider">etin yanına ne gider</a></strong>
            rehberimiz size yardımcı olabilir.
            </p>

            <p>
            Daha hafif bir sofra kurmak isterseniz
            <strong><a href="https://yanindanevar.com/?page=blog&post=zeytinyagli-yanina-ne-gider">zeytinyağlı yemeklerin yanına ne gider</a></strong>
            yazımıza göz atabilirsiniz.
            </p>

            <p>
            Özel gün sofraları için ilham arayanlar,
            <strong><a href="https://yanindanevar.com/?page=blog&post=yilbasi-sofra-menu-onerileri">yılbaşı sofra menü önerileri</a></strong>
            yazısından çok faydalanacaktır.
            </p>
        `
    },
    {
        id: 5,
        category: "Mutfak Sırları",
        title: "🥣 Kış Çorbalarının Yanına Ne Gider? Ekmek Dışında 5 Pratik Eşlikçi",
        slug: "kis-corbasi-yanina-ne-gider",
        description: "Kış çorbalarının yanına ekmek dışında ne gider? Çorbaları daha doyurucu ve lezzetli hale getiren 5 pratik eşlikçi önerisini keşfedin.",
        content: ` 
            <p>
            Soğuk günlerde sıcacık bir kase çorba, tüm öğünün başlangıcı ve kurtarıcısıdır. Ancak her çorbanın yanında sürekli ekmek yemek isteyenler için hem doyuruculuğu artıran hem de lezzet katmanları ekleyen pratik alternatifler mevcuttur.
            </p>

            <h4>1. Kıtır Peynir Krotonları (Alternatif: Lor)</h4>
            <p>
            Ekmek yerine, sert bir peyniri (örneğin eski kaşar veya tulum) küp küp kesip zeytinyağında kızartarak çıtır krotonlar elde edebilirsiniz. Peynirin tuzlu ve yoğun tadı, sade domates veya mercimek çorbasıyla mükemmel uyum sağlar.
            </p>
            <ul>
            <li>Uyumlu Olduğu Çorbalar: Domates Çorbası, Sebze Çorbası.</li>
            </ul>

            <h4>2. Baharatlı Kızarmış Nohut</h4>
            <p>
            Tok tutan ve lif oranı yüksek bir alternatiftir. Nohutları haşladıktan sonra kekik, pul biber ve zeytinyağı ile fırınlayarak ya da tavada kızartarak çorbaya ekleyin.
            </p>
            <ul>
            <li>Uyumlu Olduğu Çorbalar: Mercimek Çorbası, Ezogelin Çorbası, Yoğurt Çorbası.</li>
            </ul>

            <h4>3. Mısır Ekmeği (Dilimlenmiş ve Kıtır)</h4>
            <p>
            Özellikle Karadeniz ve Ege mutfağındaki sebze ve ot çorbalarıyla müthiş bir uyum yakalar. Dilimlenmiş mısır ekmeğini fırında biraz ısıtıp kıtır hale getirdikten sonra servis edebilirsiniz.
            </p>
            <ul>
            <li>Uyumlu Olduğu Çorbalar: Karalahana Çorbası, Pırasa Çorbası, Sebze Çorbası.</li>
            </ul>

            <h4>4. Yoğurt/Sarımsaklı Yoğurt Topları (Yoğurt Bazlı Çorbalar Hariç)</h4>
            <p>
            Etli veya domates bazlı çorbalara (Tarhana, İşkembe) eklenen minik sarımsaklı yoğurt topları, çorbanın lezzetini katlar ve kremsi bir doku ekler. Yanına ayrıca nane yağı gezdirebilirsiniz.
            </p>
            <ul>
            <li>Uyumlu Olduğu Çorbalar: Tarhana Çorbası, İşkembe Çorbası, Ezogelin Çorbası.</li>
            </ul>

            <h4>5. Lor Peyniri &amp; Pul Biber</h4>
            <p>
            Özellikle yoğurt bazlı çorbalarda (Ayran Aşı, Yayla Çorbası) veya sade sebze çorbalarında, lor peyniri çorbanın besin değerini artırırken taze bir lezzet katar.
            </p>
            <ul>
            <li>Uyumlu Olduğu Çorbalar: Yayla Çorbası, Ayran Aşı, Sade Kabak Çorbası.</li>
            </ul>
            <p>
            <hr>
            </p>
            <p>
            Çorbanın hemen ardından ana yemeğe geçiş yapmadan önce bu eşlikçilerle doyuruculuğu artırmak, ana yemeğin porsiyonunu dengelemenize yardımcı olur.
            </p>

            <p>
            Çorbanın ardından etli bir yemek planlıyorsanız,
            <strong> <a href="https://yanindanevar.com/?page=blog&post=etin-yanina-ne-gider">etin yanına ne gider</a> </strong>
            rehberine bakabilirsiniz.
            </p>

            <p>
            Hafif seçenekler için
            <strong> <a href="https://yanindanevar.com/?page=blog&post=zeytinyagli-yanina-ne-gider">zeytinyağlı yemeklerin yanına ne gider</a> </strong>
            yazımızı inceleyin.
            </p>

            <p>
            Çorba + pilav dengesi arıyorsanız,
            <strong> <a href="https://yanindanevar.com/?page=blog&post=pilav-yanina-hangi-yemek-gider">pilav uyum rehberi</a> </strong>
            menü planlamasına yardımcı olur.
            </p>
        `
    },
    {
        id: 6,
        category: "Mutfak Sırları",
        title: "🍽️ Köftenin Yanına Ne Gider? En İyi 12 Köfte Yanı Önerisi",
        slug: "kofte-yanina-ne-gider",
        description: "Köftenin yanına en çok ne yakışır? Pilav, salata, meze ve geleneksel eşlikçilerle hazırlanan 12 farklı öneriyi keşfedin.",
        content: ` 
            <p>
            Köfte; ızgarası, fırını, sulu yemeği ve mangal versiyonlarıyla Türk mutfağının en sevilen ana yemeklerinden biridir. 
            Peki <strong>köftenin yanına ne gider?</strong> İşte sofranı tamamlayacak en iyi 12 eşlikçi önerisi!
            </p>

            <strong><h2>1) Pirinç Pilavı (Klasik Uyum)</h2></strong>
            <p>
            Tane tane tereyağlı pirinç pilavı, köfteyle en çok tercih edilen yardımcı yemektir. Hem doyurucu hem dengeli bir kombinasyon oluşturur.
            </p>

            <strong><h2>2) Piyaz (Antalya Usulü)</h2></strong>
            <p>
            Köftenin yanına en çok yakışan lezzetlerden biri de piyazdır. 
            Özellikle tahinli Antalya piyazı, ızgara köfteyle mükemmel bir uyum sağlar.
            </p>

            <strong><h2>3) Domatesli Bulgur Pilavı</h2></strong>
            <p>
            Daha hafif bir pilav alternatifi isterseniz bulgur pilavı ideal bir tercihtir. 
            Biber, soğan ve domates aroması köftenin lezzetini öne çıkarır.
            </p>

            <strong><h2>4) Közlenmiş Sebzeler</h2></strong>
            <p>
            Köz biber, köz patlıcan ve köz domates; köftenin yoğun aromasını dengeleyerek tabağa hafiflik katar.
            </p>

            <strong><h2>5) Patates Kızartması</h2></strong>
            <p>
            Özellikle ev yapımı hamburger köftesi veya ızgara köfteyle harika bir uyum yakalar.
            </p>

            <strong><h2>6) Fırında Patates (Baharatlı)</h2></strong>
            <p>
            Kızartma sevmeyenler için daha sağlıklı bir alternatiftir. Köftenin suyuyla birleştiğinde çok lezzetli olur.
            </p>

            <strong><h2>7) Mevsim Salatası</h2></strong>
            <p>
            Tazelik isteyenler için mevsim salatası hem ferahlık hem de renk dengesi sağlar. 
            Nar ekşisi, limon ve zeytinyağı sosu ile servisi önerilir.
            </p>

            <strong><h2>8) Acılı Ezme</h2></strong>
            <p>
            Baharatlı ve hafif acılı yapısıyla köftenin yanına güçlü bir aroma ekler.
            </p>

            <strong><h2>9) Haydari &amp; Yoğurtlu Mezeler</h2></strong>
            <p>
            Köfteyle yoğurt bazlı mezelerin uyumu tartışılmaz. Haydari, cacık ve yoğurtlu patlıcan mezesi en iyi seçeneklerdir.
            </p>

            <strong><h2>10) Köz Patlıcan Salatası</h2></strong>
            <p>
            Et yemekleriyle harika eşleşen köz patlıcan salatası, köfte için de mükemmel bir tamamlayıcıdır.
            </p>

            <strong><h2>11) Şakşuka</h2></strong>
            <p>
            Kızarmış patlıcan ve domates sosunun birleşimi, köfteye yan lezzet olarak nefis bir alternatif oluşturur.
            </p>

            <strong><h2>12) Ayran veya Şalgam Suyu</h2></strong>
            <p>
            Köftenin yanına içecek olarak en çok <strong>ayran</strong> tercih edilir. 
            Daha yoğun tat sevenler için <strong>şalgam suyu</strong> da güzel bir eşlikçidir.
            </p>

            <hr>

            <strong><h2>🍽️ Köfte Menü Önerisi (Pratik Tabak)</h2></strong>
            <ul>
                <li>Izgara Köfte</li>
                <li>Piyaz veya Mevsim Salatası</li>
                <li>Bulgur Pilavı</li>
                <li>Şalgam veya Ayran</li>
            </ul>

            <hr>

            <h2>🔗 Diğer Popüler Yazılar</h2>
            <p>
            Aşağıdaki içerikler de sofranızı planlarken işinize yarayabilir:
            </p>
            <ul>
                <li><a href="?page=blog&post=pilav-yanina-hangi-yemek-gider" class="text-primary-blue underline">Pilav Yanına Ne Gider?</a></li>
                <li><a href="?page=blog&post=etin-yanina-ne-gider" class="text-primary-blue underline">Etin Yanına Ne Gider?</a></li>
                <li><a href="?page=blog&post=zeytinyagli-yanina-ne-gider" class="text-primary-blue underline">Zeytinyağlı Yemeklerin Yanına Ne Gider?</a></li>
            </ul>
        `
    },
    {
        id: 7,
        slug: "pratik-menu-onerileri",
        title: "Pratik Menü Önerileri: 30 Dakikada Hazırlanan Menüler",
        metaTitle: "Pratik Menü Önerileri: 8 Hızlı, Ekonomik ve Lezzetli Menü Fikri (2025)",
        metaDescription: "Kolay hazırlanabilen, ekonomik ve hızlı pratik menü önerileri mi arıyorsun? 8 farklı günlük menü fikriyle sofranı dakikalar içinde planla! Tarif uyumu, yan lezzet önerileri ve düşük kalorili seçenekler.",
        excerpt: "Yoğun günler için 30 dakikada hazırlanabilen 8 farklı pratik menü.",
        category: "Pratik",
        tags: ["pratik menü", "hızlı yemek", "30 dakikada yemek"],
        date: "2025-12-06",
        content: `
            <article class="space-y-8">

            <header class="text-center max-w-3xl mx-auto space-y-4">
                <h1 class="text-2xl md:text-3xl font-extrabold text-orange-600">
                🥗 Pratik Menü Önerileri: 8 Hızlı, Ekonomik ve Lezzetli Menü Fikri
                </h1>
                <p class="text-base md:text-lg text-stone-600 leading-relaxed">
                "<strong>Akşam ne pişirsem?</strong>" derdine son. Zamanı kısıtlı olanlar, öğrenciler ve çalışanlar için 
                özel olarak hazırlanmış, maksimum 25 dakikada hazırlanan 
                <strong>8 hayat kurtarıcı pratik menü</strong>.
                </p>
                <div class="flex flex-wrap justify-center gap-3 mt-2">
                <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs md:text-sm font-semibold">⏱ Hızlı</span>
                <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs md:text-sm font-semibold">💸 Ekonomik</span>
                <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs md:text-sm font-semibold">😋 Lezzetli</span>
                </div>
            </header>

            <section class="space-y-4">
                <div class="bg-primary-light/40 border border-primary-blue/10 rounded-2xl p-4 md:p-5 space-y-2">
                <h2 class="text-base md:text-lg font-semibold text-stone-900">
                    Bu Pratik Menü Önerileri Kimler İçin İdeal?
                </h2>
                <ul class="list-disc list-inside text-sm text-stone-700 space-y-1">
                    <li>⏱ İşten geç çıkıp kısa sürede sofrayı kurmak isteyen çalışanlar</li>
                    <li>🎓 Kısıtlı bütçe ve malzemeyle lezzetli menü yapmak isteyen öğrenciler</li>
                    <li>👨‍👩‍👧 Hızlıca akşam yemeği hazırlamak isteyen aileler</li>
                    <li>💸 <strong>Ekonomik menü önerileri</strong> arayanlar</li>
                    <li>🍳 Tek tencerede, tek tavada pratik çözüm isteyenler</li>
                </ul>
                </div>

                <div>
                <h2 class="text-xl font-bold mb-2">Pratik Menü Hazırlamanın 5 Altın Kuralı</h2>
                <p class="text-xs text-stone-500 mb-2">
                    Aşağıdaki kartlar, mutfakta hız kazanmak için temel prensipleri özetler.
                </p>
                <div class="grid grid-cols-1 md:grid-cols-5 gap-4" id="rulesContainer-pratik"></div>
                </div>
            </section>

            <section class="space-y-4">
                <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                    <h2 class="text-xl md:text-2xl font-bold text-stone-900">8 Farklı Pratik Menü Önerisi</h2>
                    <p class="text-sm text-stone-600">
                    Aşağıdaki menüler <strong>pratik akşam yemeği menüleri</strong> olarak düşünülebilir. 
                    Elindeki malzemeye göre ufak değişikliklerle uyarlayabilirsin.
                    </p>
                </div>

                <div class="flex bg-white p-1 rounded-lg border border-stone-200 shadow-sm">
                    <button 
                    type="button"
                    onclick="filterPratikMenus('all')" 
                    id="btn-pratik-all"
                    class="px-4 py-2 text-xs md:text-sm font-medium rounded-md bg-orange-500 text-white transition-colors">
                    Tümü
                    </button>
                    <button 
                    type="button"
                    onclick="filterPratikMenus('fast')" 
                    id="btn-pratik-fast"
                    class="px-4 py-2 text-xs md:text-sm font-medium rounded-md text-stone-600 hover:bg-stone-100 transition-colors">
                    20 dk Altı
                    </button>
                </div>
                </div>

                <div id="menusGrid-pratik" class="grid grid-cols-1 md:grid-cols-2 gap-6">
                </div>
            </section>

            <section class="bg-stone-800 text-stone-300 rounded-2xl p-6 md:p-8 text-center space-y-4">
                <h3 class="text-lg md:text-xl font-semibold text-white">Ekstra Hız İpuçları</h3>
                <ul class="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm">
                <li class="flex items-center gap-2">
                    <span class="text-orange-400">●</span> Hafta başında 1–2 tencere temel yemek (mercimek, nohut, tavuk haşlama) hazırlayın.
                </li>
                <li class="flex items-center gap-2">
                    <span class="text-orange-400">●</span> Dolapta her zaman yıkanmış yeşillik ve 1–2 çeşit peynir bulundurun.
                </li>
                <li class="flex items-center gap-2">
                    <span class="text-orange-400">●</span> Tek tavada / tek tencerede pişen tariflere ağırlık verin.
                </li>
                </ul>
                <hr class="border-stone-700 max-w-xs mx-auto my-4">
                <p class="text-[11px] text-stone-500">
                Bu içerik, yanindanevar.com “Pratik Menü Önerileri” rehberi baz alınarak hazırlanmıştır.
                </p>
            </section>

            <section class="mt-6">
                <h2 class="text-lg font-semibold mb-2">İlgini Çekebilecek Diğer Menü Rehberleri</h2>
                <ul class="list-disc list-inside text-sm text-primary-blue space-y-1">
                <li>
                    <a href="?page=blog&post=glutensiz-menu-onerileri" class="underline">
                    Glutensiz Menü Önerileri: 7 Farklı Tam Menü
                    </a>
                </li>
                <li>
                    <a href="?page=blog&post=kis-corbasi-yanina-ne-gider" class="underline">
                    Kış Çorbalarının Yanına Ne Gider?
                    </a>
                </li>
                <li>
                    <a href="?page=blog&post=pilav-yanina-hangi-yemek-gider" class="underline">
                    Pilav Rehberi: Hangi Pilav Hangi Yemeğe?
                    </a>
                </li>
                <li>
                    <a href="?page=blog&post=etin-yanina-ne-gider" class="underline">
                    Etin Yanına Ne Gider?
                    </a>
                </li>
                <li>
                    <a href="?page=blog&post=zeytinyagli-yanina-ne-gider" class="underline">
                    Zeytinyağlı Yemeklerin Yanına Ne Gider?
                    </a>
                </li>
                </ul>
            </section>

            </article>
        `
    },
    {
        id: 8,
        slug: "glutensiz-menu-onerileri",
        title: "7 Günlük Glutensiz Menü Önerileri | Yanında Ne Yiyelim?",
        metaTitle: "7 Günlük Glutensiz Menü Önerileri | Yanında Ne Yiyelim?",
        metaDescription: "Glutensiz beslenenler için fırında tavuk, somon, mercimek köftesi ve kuzu güveçten oluşan 7 farklı tam menü. Yanında ne yesem diyenlere kalori hesaplı öneriler.",
        excerpt: "Glutensiz beslenenler için fırında tavuk, somon, mercimek köftesi ve kuzu güveç ile 7 pratik tam menü. Yanına ne gider sorusuna kalori hesaplı cevaplar.",
        category: "Beslenme",
        tags: ["glutensiz", "menü önerisi", "sağlıklı beslenme"],
        date: "2025-12-06",
        content: `
            <p>
            Glutensiz besleniyorsun ama “<strong>Bugün ne pişirsem?</strong>” ve 
            “<strong>Yanına ne gider?</strong>” soruları peşini bırakmıyor mu? 
            Bu yazıda senin için hazırlanmış 7 farklı glutensiz tam menünün detaylarını bulacaksın.
            </p>
            <p>
            Her menüde ana yemek, yan lezzet ve tatlı/meyve dengesi gözetildi. 
            Ayrıca kalori tahminleriyle, günlük toplamını kabaca planlaman da kolaylaşacak.
            </p>
        `
    },
    {
        id: 9,
        category: "Mutfak Sırları",
        title: "Pilav Yanına Ne Gider?",
        slug: "pilav-yanina-ne-gider",
        description: "Pilavın yanına en çok ne yakışır? Pilav, salata, meze ve geleneksel eşlikçilerle hazırlanan 12 farklı öneriyi keşfedin.",
        content: `Bu yazı içeriği, '🍚 Ana Yemeğe Göre İdeal Pilav Seçimi' yazısıyla aynıdır. Bu bir yönlendirmedir.` // Basit bir içerik olarak bırakıldı
    },
    {
        id: 10,
        category: "Mutfak Sırları",
        title: "Etin Yanına Ne Gider?",
        slug: "etin-yanina-ne-gider",
        description: "Etin yanına en çok ne yakışır? Pilav, salata, meze ve geleneksel eşlikçilerle hazırlanan 12 farklı öneriyi keşfedin.",
        content: `Bu yazı içeriği, 'Etin Yanına Ne Gider?' yazısıyla aynıdır. Bu bir yönlendirmedir.` // Basit bir içerik olarak bırakıldı
    },
    {
        id: 11,
        category: "Mutfak Sırları",
        title: "Zeytinyağlı Yemeklerin Yanına Ne Gider?",
        slug: "zeytinyagli-yanina-ne-gider",
        description: "Zeytinyağlı yemeklerin yanına en çok ne yakışır? Pilav, salata, meze ve geleneksel eşlikçilerle hazırlanan 12 farklı öneriyi keşfedin.",
        content: `Bu yazı içeriği, 'Zeytinyağlı Yemeklerin Yanına Ne Gider?' yazısıyla aynıdır. Bu bir yönlendirmedir.` // Basit bir içerik olarak bırakıldı
    }
];

// --- YEMEK ÖNERİLERİ VERİSİ ---
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
                main: 180,
                yanlar: 530,
                drink: 0,
                dessert: 330
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
                main: 220,
                yanlar: 525,
                drink: 0,
                dessert: 350
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
                main: 220,
                yanlar: 470,
                drink: 0,
                dessert: 420
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
                main: 180,
                yanlar: 535,
                drink: 0,
                dessert: 330
            },
            note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
        }
    },
    {
        main: "Yayla Çorbası",
        keywords: ["yayla çorbası", "yoğurt", "çorba", "pirinçli"],
        cuisine: "Türk Mutfağı",
        suggestions: {
            yanlar: ["Taze Fasulye (Zeytinyağlı)", "Tam Buğday Ekmek"],
            drink: [],
            dessert: ["Güllaç"]
        },
        calories: {
            total: 960,
            breakdown: {
                main: 200,
                yanlar: 460,
                drink: 0,
                dessert: 300
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
                main: 160,
                yanlar: 630,
                drink: 0,
                dessert: 420
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
                main: 170,
                yanlar: 480,
                drink: 0,
                dessert: 450
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
                main: 200,
                yanlar: 510,
                drink: 0,
                dessert: 510
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
                main: 350,
                yanlar: 650,
                drink: 40,
                dessert: 950
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
                main: 230,
                yanlar: 510,
                drink: 0,
                dessert: 550
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
                main: 200,
                yanlar: 600,
                drink: 0,
                dessert: 600
            },
            note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
        }
    },
    {
        main: "Ayran Aşı (Soğuk Çorba)",
        keywords: ["ayran aşı", "soğuk çorba"],
        cuisine: "Türk Mutfağı",
        suggestions: {
            yanlar: ["Mücver", "Kıymalı Börek", "Mevsim Salata"],
            drink: [],
            dessert: ["Meyve Tabağı"]
        },
        calories: {
            total: 1215,
            breakdown: {
                main: 220,
                yanlar: 580,
                drink: 0,
                dessert: 415
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
                main: 320,
                yanlar: 650,
                drink: 0,
                dessert: 1050
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
                main: 330,
                yanlar: 1000,
                drink: 0,
                dessert: 750
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
                main: 150,
                yanlar: 550,
                drink: 0,
                dessert: 320
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
                main: 200,
                yanlar: 650,
                drink: 0,
                dessert: 710
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
            drink: [],
            dessert: ["Güllaç"]
        },
        calories: {
            total: 1030,
            breakdown: {
                main: 200,
                yanlar: 480,
                drink: 0,
                dessert: 350
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
                main: 450,
                yanlar: 430,
                drink: 90,
                dessert: 840
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
                main: 400,
                yanlar: 610,
                drink: 90,
                dessert: 610
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
                main: 150,
                yanlar: 500,
                drink: 5,
                dessert: 455
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
            yanlar: ["Mercimek Çorbası", "Piyaz", "Pirinç Pilavı", "Izgara Biber"],
            drink: ["Ayran"],
            dessert: ["Kemalpaşa"]
        },
        calories: {
            total: 1610,
            breakdown: {
                main: 400,
                yanlar: 720,
                drink: 90,
                dessert: 400
            },
            note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
        }
    },
    {
        main: "Fırında Köfte",
        keywords: ["fırında köfte", "fırın", "köfte"],
        cuisine: "Türk Mutfağı",
        suggestions: {
            yanlar: ["Ezogelin Çorbası", "Domatesli Bulgur Pilavı", "Fırında Patates", "Avokadolu Humus"],
            drink: ["Ayran"],
            dessert: ["Sütlaç"]
        },
        calories: {
            total: 1640,
            breakdown: {
                main: 380,
                yanlar: 870,
                drink: 90,
                dessert: 300
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
                main: 320,
                yanlar: 340,
                drink: 90,
                dessert: 350
            },
            note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
        }
    },
    {
        main: "İnegöl Köfte",
        keywords: ["inegöl köfte", "köfte", "ızgara"],
        cuisine: "Türk Mutfağı",
        suggestions: {
            yanlar: ["Sebze Çorbası", "Piyaz", "Acı Sos", "Patates Kızartması"],
            drink: ["Şıra"],
            dessert: ["Sütlaç"]
        },
        calories: {
            total: 1640,
            breakdown: {
                main: 400,
                yanlar: 790,
                drink: 150,
                dessert: 300
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
                main: 420,
                yanlar: 730,
                drink: 90,
                dessert: 550
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
                main: 450,
                yanlar: 370,
                drink: 90,
                dessert: 350
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
                main: 450,
                yanlar: 220,
                drink: 90,
                dessert: 250
            },
            note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
        }
    },
    {
        main: "İçli Köfte",
        keywords: ["içli köfte", "kızartma", "haşlama"],
        cuisine: "Türk Mutfağı",
        suggestions: {
            yanlar: ["Beyran", "Gavurdağı Salatası", "Humus"],
            drink: ["Ayran"],
            dessert: ["Baklava"]
        },
        calories: {
            total: 1860,
            breakdown: {
                main: 600,
                yanlar: 750,
                drink: 90,
                dessert: 420
            },
            note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
        }
    },
    {
        main: "Patates Köfte",
        keywords: ["patates köfte", "sulu", "köfte"],
        cuisine: "Türk Mutfağı",
        suggestions: {
            yanlar: ["Kabak Çorbası", "Pirinç Pilavı", "Turşu"],
            drink: ["Ayran"],
            dessert: ["Sütlaç"]
        },
        calories: {
            total: 1380,
            breakdown: {
                main: 420,
                yanlar: 430,
                drink: 90,
                dessert: 440
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
                main: 380,
                yanlar: 550,
                drink: 90,
                dessert: 500
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
                main: 500,
                yanlar: 380,
                drink: 90,
                dessert: 480
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
            yanlar: ["Kremalı Mantar Çorbası", "Mevsim Salatası", "Yoğurt"],
            drink: ["Şalgam Suyu"],
            dessert: ["Kazandibi"]
        },
        calories: {
            total: 1700,
            breakdown: {
                main: 750,
                yanlar: 430,
                drink: 50,
                dessert: 470
            },
            note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
        }
    },
    {
        main: "Tas Kebabı",
        keywords: ["tas kebabı"],
        cuisine: "Türk Mutfağı",
        suggestions: {
            yanlar: ["Tarhana Çorbası", "Pirinç Pilavı", "Van Cacığı", "Turşu"],
            drink: ["Ayran"],
            dessert: ["Sütlaç"]
        },
        calories: {
            total: 1850,
            breakdown: {
                main: 650,
                yanlar: 620,
                drink: 90,
                dessert: 490
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
                main: 800,
                yanlar: 500,
                drink: 50,
                dessert: 750
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
                main: 1200,
                yanlar: 260,
                drink: 120,
                dessert: 670
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
                main: 850,
                yanlar: 550,
                drink: 90,
                dessert: 410
            },
            note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
        }
    },
    {
        main: "Antrikot",
        keywords: ["antrikot", "biftek", "et", "ızgara"],
        cuisine: "Türk Mutfağı",
        suggestions: {
            yanlar: ["Yayla Çorbası", "Mantar Sosu", "Patates Püresi", "Roka Salatası"],
            drink: ["Komposto"],
            dessert: ["Sufle"]
        },
        calories: {
            total: 2150,
            breakdown: {
                main: 900,
                yanlar: 600,
                drink: 190,
                dessert: 460
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
                main: 600,
                yanlar: 500,
                drink: 90,
                dessert: 570
            },
            note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
        }
    },
    {
        main: "Bonfile",
        keywords: ["bonfile", "et", "ızgara"],
        cuisine: "Uluslararası",
        suggestions: {
            yanlar: ["Domates Çorbası", "Kuşkonmaz", "Patates Püresi", "Zeytinyağlı Fasulye"],
            drink: ["Ayran"],
            dessert: ["Tiramisu"]
        },
        calories: {
            total: 1790,
            breakdown: {
                main: 550,
                yanlar: 530,
                drink: 90,
                dessert: 620
            },
            note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
        }
    },
    {
        main: "Et Sote",
        keywords: ["et sote", "kırmızı et", "sote"],
        cuisine: "Türk Mutfağı",
        suggestions: {
            yanlar: ["Ezogelin Çorbası", "Pirinç Pilavı", "Zeytinyağlı Barbunya", "Gavurdağı Salata"],
            drink: ["Ayran"],
            dessert: ["Kemalpaşa"]
        },
        calories: {
            total: 1840,
            breakdown: {
                main: 550,
                yanlar: 690,
                drink: 90,
                dessert: 510
            },
            note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
        }
    },
    {
        main: "Et Kavurma",
        keywords: ["et kavurma"],
        cuisine: "Türk Mutfağı",
        suggestions: {
            yanlar: ["Ayran Aşı Çorbası", "Bulgur Pilavı", "Zeytinyağlı Kereviz", "Turşu"],
            drink: ["Erik Komposto"],
            dessert: ["Un Helvası"]
        },
        calories: {
            total: 1970,
            breakdown: {
                main: 650,
                yanlar: 630,
                drink: 110,
                dessert: 580
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
                main: 700,
                yanlar: 420,
                drink: 90,
                dessert: 1020
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
                main: 480,
                yanlar: 740,
                drink: 120,
                dessert: 490
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
                main: 550,
                yanlar: 470,
                drink: 90,
                dessert: 510
            },
            note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
        }
    },
    {
        main: "Çökertme Kebabı",
        keywords: ["çökertme kebabı", "patates"],
        cuisine: "Türk Mutfağı",
        suggestions: {
            yanlar: ["Tarhana Çorbası", "Yoğurt", "Domates Sosu", "Kızarmış Patates"],
            drink: ["Ayran"],
            dessert: ["Sütlaç"]
        },
        calories: {
            total: 1870,
            breakdown: {
                main: 700,
                yanlar: 460,
                drink: 90,
                dessert: 620
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
                main: 700,
                yanlar: 330,
                drink: 90,
                dessert: 610
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
                main: 900,
                yanlar: 450,
                drink: 120,
                dessert: 750
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
                main: 520,
                yanlar: 660,
                drink: 90,
                dessert: 620
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
                main: 450,
                yanlar: 380,
                drink: 90,
                dessert: 590
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
                main: 900,
                yanlar: 60,
                drink: 40,
                dessert: 880
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
                main: 450,
                yanlar: 650,
                drink: 210,
                dessert: 520
            },
            note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
        }
    },
    {
        main: "Et Haşlama",
        keywords: ["et haşlama", "haşlama", "sebzeli"],
        cuisine: "Türk Mutfağı",
        suggestions: {
            yanlar: ["Şehriye Çorbası", "Zeytinyağlı Fasulye", "Pirinç Pilavı"],
            drink: ["Ayran", "Komposto"],
            dessert: ["Sütlaç"]
        },
        calories: {
            total: 1590,
            breakdown: {
                main: 350,
                yanlar: 610,
                drink: 210,
                dessert: 420
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
                main: 700,
                yanlar: 760,
                drink: 210,
                dessert: 380
            },
            note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
        }
    },
    {
        main: "Keşkek",
        keywords: ["keşkek", "buğday"],
        cuisine: "Türk Mutfağı",
        suggestions: {
            yanlar: ["Bamya Çorbası", "Turşu", "Salça Sosu"],
            drink: ["Ayran"],
            dessert: ["Höşmerim"]
        },
        calories: {
            total: 1520,
            breakdown: {
                main: 480,
                yanlar: 360,
                drink: 90,
                dessert: 590
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
                main: 350,
                yanlar: 490,
                drink: 90,
                dessert: 380
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
                main: 420,
                yanlar: 830,
                drink: 100,
                dessert: 560
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
                main: 500,
                yanlar: 610,
                drink: 90,
                dessert: 560
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
                main: 550,
                yanlar: 600,
                drink: 140,
                dessert: 450
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
                main: 450,
                yanlar: 410,
                drink: 160,
                dessert: 325
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
                main: 520,
                yanlar: 340,
                drink: 5,
                dessert: 480
            },
            note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
        }
    },
    {
        main: "Fırında Hindi",
        keywords: ["fırında hindi", "hindi", "yılbaşı"],
        cuisine: "Uluslararası",
        suggestions: {
            yanlar: ["Yoğurt Çorbası", "Kestaneli Pilav", "Kızılcık Sosu"],
            drink: ["Şıra"],
            dessert: ["Kabak Tatlısı"]
        },
        calories: {
            total: 1730,
            breakdown: {
                main: 400,
                yanlar: 610,
                drink: 160,
                dessert: 560
            },
            note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
        }
    },
    {
        main: "Şinitzel",
        keywords: ["şinitzel"],
        cuisine: "Uluslararası",
        suggestions: {
            yanlar: ["Kremalı Sebze Çorbası", "Maydonozlu Patates", "Roka Salatası", "Kırmızı Lahana (Rotkohl)"],
            drink: ["Kırmızı Şarap (İsteğe Bağlı)"],
            dessert: ["Limonlu Sorbe"]
        },
        calories: {
            total: 1470,
            breakdown: {
                main: 550,
                yanlar: 620,
                drink: 120,
                dessert: 180
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
                main: 350,
                yanlar: 480,
                drink: 0,
                dessert: 250
            },
            note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
        }
    },
    {
        main: "Karnıyarık",
        keywords: ["karnıyarık", "patlıcan", "kıyma"],
        cuisine: "Türk Mutfağı",
        suggestions: {
            yanlar: ["Ayran Aşı Çorbası", "Pirinç Pilavı", "Barbunya Pilaki"],
            drink: ["Komposto"],
            dessert: ["Sütlaç"]
        },
        calories: {
            total: 1120,
            breakdown: {
                main: 420,
                yanlar: 530,
                drink: 120,
                dessert: 250
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
                main: 290,
                yanlar: 340,
                drink: 90,
                dessert: 300
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
                main: 310,
                yanlar: 150,
                drink: 90,
                dessert: 320
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
                main: 330,
                yanlar: 350,
                drink: 90,
                dessert: 350
            },
            note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
        }
    },
    {
        main: "Lahana Dolması",
        keywords: ["lahana dolması"],
        cuisine: "Türk Mutfağı",
        suggestions: {
            yanlar: ["Bal Kabağı Çorbası", "Yoğurt", "Turşu"],
            drink: ["Ayran"],
            dessert: ["Sütlaç"]
        },
        calories: {
            total: 930,
            breakdown: {
                main: 280,
                yanlar: 310,
                drink: 90,
                dessert: 250
            },
            note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
        }
    },
    {
        main: "Zeytinyağlı Enginar",
        keywords: ["zeytinyağlı enginar", "enginar", "zeytinyağlı"],
        cuisine: "Akdeniz Mutfağı",
        suggestions: {
            yanlar: ["Domates Çorbası", "İç Bakla", "Dereotu", "Pirinç Pilavı"],
            drink: ["Maden Suyu"],
            dessert: ["Meyve"]
        },
        calories: {
            total: 830,
            breakdown: {
                main: 220,
                yanlar: 535,
                drink: 5,
                dessert: 70
            },
            note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
        }
    },
    {
        main: "Zeytinyağlı Börülce",
        keywords: ["zeytinyağlı börülce", "börülce", "taze börülce"],
        cuisine: "Akdeniz Mutfağı",
        suggestions: {
            yanlar: ["Ezogelin Çorbası", "Yoğurtlu Semizotu", "Domatesli Bulgur Pilavı"],
            drink: ["Maden Suyu"],
            dessert: ["Fırın Sütlaç"]
        },
        calories: {
            total: 895,
            breakdown: {
                main: 180,
                yanlar: 360,
                drink: 5,
                dessert: 350
            },
            note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
        }
    },
    {
        main: "Zeytinyağlı Kereviz",
        keywords: ["zeytinyağlı kereviz", "kereviz", "portakallı"],
        cuisine: "Akdeniz Mutfağı",
        suggestions: {
            yanlar: ["Mercimek Çorbası", "Havuç Tarator", "Fırında Levrek"],
            drink: [],
            dessert: ["Ispanaklı Pasta"]
        },
        calories: {
            total: 1100,
            breakdown: {
                main: 210,
                yanlar: 570,
                drink: 0,
                dessert: 320
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
                main: 210,
                yanlar: 180,
                drink: 5,
                dessert: 260
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
                main: 230,
                yanlar: 420,
                drink: 0,
                dessert: 60
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
                main: 220,
                yanlar: 125,
                drink: 5,
                dessert: 60
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
                main: 260,
                yanlar: 250,
                drink: 90,
                dessert: 320
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
                main: 200,
                yanlar: 420,
                drink: 0,
                dessert: 250
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
                main: 250,
                yanlar: 200,
                drink: 5,
                dessert: 0
            },
            note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
        }
    },
    {
        main: "Pırasa",
        keywords: ["pırasa", "zeytinyağlı", "pirinçli"],
        cuisine: "Türk Mutfağı",
        suggestions: {
            yanlar: ["Kereviz Çorbası", "Mantarlı Fırın Makarna", "Yoğurt"],
            drink: ["Su"],
            dessert: ["Revani"]
        },
        calories: {
            total: 1140,
            breakdown: {
                main: 200,
                yanlar: 640,
                drink: 0,
                dessert: 300
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
                main: 260,
                yanlar: 650,
                drink: 5,
                dessert: 220
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
                main: 220,
                yanlar: 160,
                drink: 90,
                dessert: 250
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
                main: 230,
                yanlar: 290,
                drink: 5,
                dessert: 350
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
                main: 230,
                yanlar: 420,
                drink: 140,
                dessert: 200
            },
            note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
        }
    },
    {
        main: "Mücver",
        keywords: ["mücver", "kabak mücveri"],
        cuisine: "Türk Mutfağı",
        suggestions: {
            yanlar: ["Kremalı Mantar Çorbası", "Sarımsaklı Yoğurt", "Kıymalı Börek", "Mevsim Salata"],
            drink: [],
            dessert: ["Meyve Tabağı"]
        },
        calories: {
            total: 870,
            breakdown: {
                main: 260,
                yanlar: 520,
                drink: 0,
                dessert: 90
            },
            note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
        }
    },
    {
        main: "Kabak",
        keywords: ["kabak", "kabak yemeği"],
        cuisine: "Türk Mutfağı",
        suggestions: {
            yanlar: ["Şehriye Çorbası", "Yoğurt", "Cevizli Erişte"],
            drink: [],
            dessert: ["Cennet Hurması"]
        },
        calories: {
            total: 860,
            breakdown: {
                main: 150,
                yanlar: 610,
                drink: 0,
                dessert: 100
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
                main: 210,
                yanlar: 420,
                drink: 0,
                dessert: 520
            },
            note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
        }
    },
    {
        main: "Kapuska",
        keywords: ["kapuska", "lahana",],
        cuisine: "Türk Mutfağı",
        suggestions: {
            yanlar: ["Tarhana Çorbası", "Bulgur Pilavı", "Turşu"],
            drink: ["Ayran"],
            dessert: ["Kabak Tatlısı"]
        },
        calories: {
            total: 1320,
            breakdown: {
                main: 190,
                yanlar: 480,
                drink: 90,
                dessert: 560
            },
            note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
        }
    },
    {
        main: "Lahana Çorbası",
        keywords: ["lahana çorbası", "karalahana çorbası"],
        cuisine: "Türk Mutfağı",
        suggestions: {
            yanlar: ["Hamsi Tava", "Mısır Ekmeği", "Roka Salatası", "Haydari"],
            drink: [],
            dessert: ["Laz Böreği"]
        },
        calories: {
            total: 1300,
            breakdown: {
                main: 70,
                yanlar: 1000,
                drink: 0,
                dessert: 230
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
                main: 330,
                yanlar: 350,
                drink: 90,
                dessert: 670
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
                main: 160,
                yanlar: 680,
                drink: 120,
                dessert: 560
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
                main: 180,
                yanlar: 510,
                drink: 90,
                dessert: 230
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
                main: 260,
                yanlar: 420,
                drink: 5,
                dessert: 405
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
                main: 380,
                yanlar: 310,
                drink: 90,
                dessert: 300
            },
            note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
        }
    },
    {
        main: "Patates Oturtma",
        keywords: ["patates oturtma", "patates", "kıyma"],
        cuisine: "Türk Mutfağı",
        suggestions: {
            yanlar: ["Mercimek Çorbası", "Pirinç Pilavı"],
            drink: ["Ayran"],
            dessert: ["Revani"]
        },
        calories: {
            total: 1450,
            breakdown: {
                main: 420,
                yanlar: 380,
                drink: 90,
                dessert: 560
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
            dessert: ["Fırın Sütlaç"]
        },
        calories: {
            total: 1020,
            breakdown: {
                main: 330,
                yanlar: 250,
                drink: 90,
                dessert: 350
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
                main: 290,
                yanlar: 790,
                drink: 140,
                dessert: 430
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
                main: 350,
                yanlar: 600,
                drink: 120,
                dessert: 630
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
                main: 900,
                yanlar: 380,
                drink: 90,
                dessert: 680
            },
            note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
        }
    },
    {
        main: "Kaşarlı Mantar",
        keywords: ["kaşarlı mantar", "fırın mantar"],
        cuisine: "Türk Mutfağı",
        suggestions: {
            yanlar: ["Domates Çorbası", "Et Yemekleri", "Roka Salatası"],
            drink: ["Şalgam Suyu"],
            dessert: ["Helva"]
        },
        calories: {
            total: 960,
            breakdown: {
                main: 180,
                yanlar: 450,
                drink: 40,
                dessert: 290
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
                main: 160,
                yanlar: 580,
                drink: 5,
                dessert: 325
            },
            note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
        }
    },
    {
        main: "Zeytinyağlı Semizotu",
        keywords: ["semizotu", "yoğurtlu semizotu"],
        cuisine: "Türk Mutfağı",
        suggestions: {
            yanlar: ["Karpuz", "Domatesli Pilav", "Peynir", "Domates"],
            drink: ["Maden Suyu"],
            dessert: ["Dondurma"]
        },
        calories: {
            total: 1025,
            breakdown: {
                main: 150,
                yanlar: 430,
                drink: 5,
                dessert: 440
            },
            note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
        }
    },
    {
        main: "Bamya",
        keywords: ["bamya", "zeytinyağlı bamya"],
        cuisine: "Türk Mutfağı",
        suggestions: {
            yanlar: ["Yayla Çorbası", "Domatesli Pilav", "Cacık"],
            drink: ["Maden Suyu"],
            dessert: ["Revani"]
        },
        calories: {
            total: 1390,
            breakdown: {
                main: 150,
                yanlar: 600,
                drink: 5,
                dessert: 635
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
            total: 1120,
            breakdown: {
                main: 400,
                yanlar: 350,
                drink: 100,
                dessert: 300
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
                main: 400,
                yanlar: 450,
                drink: 120,
                dessert: 530
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
                main: 450,
                yanlar: 850,
                drink: 150,
                dessert: 300
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
                main: 380,
                yanlar: 610,
                drink: 120,
                dessert: 450
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
                main: 380,
                yanlar: 170,
                drink: 120,
                dessert: 380
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
                main: 420,
                yanlar: 820,
                drink: 30,
                dessert: 730
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
                main: 750,
                yanlar: 250,
                drink: 120,
                dessert: 530
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
                main: 550,
                yanlar: 650,
                drink: 120,
                dessert: 630
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
            total: 1415,
            breakdown: {
                main: 600,
                yanlar: 400,
                drink: 125,
                dessert: 290
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
                main: 550,
                yanlar: 150,
                drink: 120,
                dessert: 430
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
                main: 750,
                yanlar: 420,
                drink: 120,
                dessert: 410
            },
            note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
        }
    },
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
            total: 1270,
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
                main: 650,
                yanlar: 350,
                drink: 140,
                dessert: 300
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
                main: 600,
                yanlar: 350,
                drink: 0,
                dessert: 385
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
                main: 700,
                yanlar: 250,
                drink: 120,
                dessert: 320
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
                main: 750,
                yanlar: 430,
                drink: 125,
                dessert: 385
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
                main: 550,
                yanlar: 520,
                drink: 130,
                dessert: 220
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
                main: 650,
                yanlar: 50,
                drink: 0,
                dessert: 250
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
                main: 750,
                yanlar: 250,
                drink: 140,
                dessert: 210
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
                main: 800,
                yanlar: 100,
                drink: 120,
                dessert: 230
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
                main: 900,
                yanlar: 500,
                drink: 140,
                dessert: 260
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
                main: 800,
                yanlar: 550,
                drink: 140,
                dessert: 410
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
                main: 900,
                yanlar: 200,
                drink: 120,
                dessert: 330
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
                main: 800,
                yanlar: 220,
                drink: 120,
                dessert: 310
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
                main: 650,
                yanlar: 150,
                drink: 0,
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
                main: 550,
                yanlar: 0,
                drink: 100,
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
                main: 480,
                yanlar: 50,
                drink: 70,
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
                main: 600,
                yanlar: 50,
                drink: 100,
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
                main: 480,
                yanlar: 0,
                drink: 70,
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
                main: 650,
                yanlar: 250,
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
                main: 600,
                yanlar: 150,
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
                main: 400,
                yanlar: 230,
                drink: 70,
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
                main: 450,
                yanlar: 220,
                drink: 80,
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
                main: 350,
                yanlar: 250,
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
                main: 300,
                yanlar: 600,
                drink: 0,
                dessert: 0
            },
            note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
        }
    },

    // BALIKLAR
    {
        main: "Balık (Genel)",
        keywords: ["balık", "ızgara balık"],
        cuisine: "Akdeniz Mutfağı",
        suggestions: {
            yanlar: ["Mercimek Çorbası", "Roka Salatası", "Fava", "Çıtır Nohutlu Humus", "Közlenmiş Patlıcan Salatası"],
            drink: ["Şalgam Suyu/Rakı (İsteğe Bağlı)"],
            dessert: ["İrmik Helvası"]
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
        keywords: ["lüfer", "çinekop"],
        cuisine: "Akdeniz Mutfağı",
        suggestions: {
            yanlar: ["Yeşil Salata", "Narlı Peynir Mezesi", "Şakşuka"],
            drink: ["Rakı (İsteğe Bağlı)/Şalgam Suyu"],
            dessert: ["Helva"]
        },
        calories: {
            total: 965,
            breakdown: {
                main: 400,
                yanlar: 295,
                drink: 90,
                dessert: 180
            },
            note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
        }
    },
    {
        main: "Fırında Somon",
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
                main: 400,
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
                main: 340,
                yanlar: 295,
                drink: 15,
                dessert: 180
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
                main: 250,
                yanlar: 490,
                drink: 120,
                dessert: 80
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
                main: 380,
                yanlar: 200,
                drink: 15,
                dessert: 260
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
                main: 550,
                yanlar: 230,
                drink: 0,
                dessert: 260
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
                main: 120,
                yanlar: 430,
                drink: 0,
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
                main: 110,
                yanlar: 630,
                drink: 90,
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
                main: 120,
                yanlar: 400,
                drink: 0,
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
                main: 200,
                yanlar: 600,
                drink: 40,
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
                main: 250,
                yanlar: 630,
                drink: 120,
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
                main: 350,
                yanlar: 500,
                drink: 5,
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
                main: 250,
                yanlar: 750,
                drink: 90,
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
                main: 350,
                yanlar: 900,
                drink: 140,
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
                main: 300,
                yanlar: 380,
                drink: 140,
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
                main: 220,
                yanlar: 1390,
                drink: 140,
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
                main: 350,
                yanlar: 480,
                drink: 30,
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
                main: 260,
                yanlar: 590,
                drink: 30,
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
                main: 120,
                yanlar: 670,
                drink: 40,
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
                main: 120,
                yanlar: 0,
                drink: 30,
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
                main: 180,
                yanlar: 390,
                drink: 30,
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
            drink: ["Ayran", "Çay"],
            dessert: []
        },
        calories: {
            total: 690,
            breakdown: {
                main: 450,
                yanlar: 50,
                drink: 190,
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
                main: 400,
                yanlar: 980,
                drink: 190,
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
            drink: ["Ayran", "Çay"],
            dessert: []
        },
        calories: {
            total: 740,
            breakdown: {
                main: 450,
                yanlar: 60,
                drink: 230,
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
                main: 350,
                yanlar: 1180,
                drink: 50,
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
                main: 250,
                yanlar: 1250,
                drink: 50,
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
                main: 220,
                yanlar: 620,
                drink: 100,
                dessert: 560
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
                main: 150,
                yanlar: 1370,
                drink: 190,
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
                main: 400,
                yanlar: 530,
                drink: 250,
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
                main: 280,
                yanlar: 450,
                drink: 100,
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
            yanlar: ["Dereotu", "Zeytinyağlı Enginar", "Fırında Somon"],
            drink: ["Rakı (İsteğe Bağlı)"],
            dessert: []
        },
        calories: {
            total: 960,
            breakdown: {
                main: 300,
                yanlar: 560,
                drink: 100,
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
                main: 350,
                yanlar: 540,
                drink: 20,
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
                main: 180,
                yanlar: 200,
                drink: 40,
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
                main: 70,
                yanlar: 130,
                drink: 30,
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
                main: 40,
                yanlar: 350,
                drink: 90,
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
                main: 250,
                yanlar: 800,
                drink: 30,
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
                main: 300,
                yanlar: 800,
                drink: 260,
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
                main: 300,
                yanlar: 0,
                drink: 50,
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
                main: 280,
                yanlar: 0,
                drink: 50,
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
                main: 300,
                yanlar: 350,
                drink: 70,
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
                main: 400,
                yanlar: 350,
                drink: 70,
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
                main: 90,
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
                main: 260,
                yanlar: 50,
                drink: 0,
                dessert: 0
            },
            note: "Kaloriler yaklaşık porsiyonlar baz alınarak hesaplanmıştır."
        }
    }
];

// --- KATEGORİLER VE KURALLAR VERİSİ ---
const suggestionCategories = [
    { key: 'yanlar', title: 'Yan Lezzetler (Pilav, Salata, Meze, Çorba)', icon: '🍽️', color: 'text-secondary-green' },
    { key: 'drink', title: 'İçecek Önerisi', icon: '🥤', color: 'text-primary-blue' },
    { key: 'dessert', title: 'Tatlı Önerisi', icon: '🍰', color: 'text-pink-500' }
];

const glutenRulesData = [
    { title: "Etiket Okuma", icon: "🏷️", desc: "Soslar, hazır karışımlar ve işlenmiş ürünler gizli gluten içerebilir. Daima etiketi kontrol edin." },
    { title: "Çapraz Bulaş", icon: "❌", desc: "Aynı yağda kızartma, aynı tencerede pişirme veya aynı kesme tahtasını kullanma riskine dikkat edin." },
    { title: "Çeşitlilik", icon: "🌾", desc: "Karabuğday, kinoa, mısır, pirinç, amarant gibi glutensiz tahılları menünüze yayın." },
    { title: "Ev Yapımı", icon: "🏡", desc: "İçeriğini bildiğiniz ev yapımı tarifleri tercih edin. Kontrol sizde olsun." }
];

// --- GLOBAL ATAMA BLOĞU ---

// Tarayıcı için global değişkenlere atama:
// Bu atama bloğu KRİTİKTİR ve verinin app.js'e ulaşmasını sağlar.
if (typeof window !== "undefined") {
    // Tüm verileri window nesnesine atayarak global erişimi garanti ediyoruz
    window.dishSuggestions = dishSuggestions;
    window.blogPostsData = blogPostsData; // <-- app.js'in aradığı değişken
    window.suggestionCategories = suggestionCategories;
    window.glutenRulesData = glutenRulesData;
}

// Node (CommonJS) için dışa aktarma (isteğe bağlı, ama tutarlılık için korundu):
if (typeof module !== "undefined") {
    module.exports = {
        blogPostsData,
        dishSuggestions,
        suggestionCategories,
        glutenRulesData,
        normalizeText,
        createListHtml
    };
}
