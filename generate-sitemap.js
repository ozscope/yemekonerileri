// generate-sitemap.js

const fs = require("fs");
const path = require("path");

// data.js içindeki blog verilerini içe aktar
const { blogPostsData } = require("./data.js");

// === AYARLAR ===
const BASE_URL = "https://yanindanevar.com";
const SITEMAP_PATH = path.join(__dirname, "sitemap.xml");

// Tarih formatlayıcı
function formatDate(date) {
    return date.toISOString().split("T")[0];
}

// Bugünün tarihi (istersen elle de verebilirsin)
const today = formatDate(new Date());

// Ana URL’ler (statik olanlar)
const staticUrls = [
    {
        loc: `${BASE_URL}/`,
        lastmod: today,
        changefreq: "daily",
        priority: "1.0",
    },
    {
        loc: `${BASE_URL}/?page=blog`,
        lastmod: today,
        changefreq: "weekly",
        priority: "0.8",
    },
];

// Blog yazılarından URL üret
const blogUrls = blogPostsData.map((post) => ({
    loc: `${BASE_URL}/?page=blog&post=${post.slug}`,
    lastmod: today, // dilersen post içine lastmod ekleyip oradan da çekebilirsin
    changefreq: "monthly",
    priority: "0.7",
}));

// Hepsini birleştir
const allUrls = [...staticUrls, ...blogUrls];

// XML’i oluştur
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
    .map((u) => {
        return `
  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`;
    })
    .join("\n")}
</urlset>
`;

// Dosyaya yaz
fs.writeFileSync(SITEMAP_PATH, xml.trim() + "\n", "utf8");

console.log("✅ sitemap.xml başarıyla üretildi:", SITEMAP_PATH);
