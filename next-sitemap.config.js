/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.techtips.icu',     // 🔹 Domain chính (không có dấu / ở cuối)
  generateRobotsTxt: true,                 // 🔹 Tự tạo file robots.txt
  generateIndexSitemap: true,              // 🔹 Tạo sitemap tổng hợp
  sitemapSize: 500,                        // 🔹 Mỗi file con chứa 500 URL (tốt cho >1000 bài)
  changefreq: 'weekly',                    // 🔹 Gợi ý Google thu thập hàng tuần
  priority: 0.8,                           // 🔹 Ưu tiên crawl trung bình cao
  exclude: ['/404', '/admin', '/draft/*'], // 🔹 Loại trừ trang không cần index
  autoLastmod: true,                       // 🔹 Tự thêm thẻ <lastmod> (Google rất thích)
  transform: async (config, path) => {
    // 🔹 Cho phép tùy chỉnh thông tin từng URL
    return {
      loc: path,
      changefreq: 'weekly',
      priority: path === '/' ? 1.0 : 0.8, // Trang chủ ưu tiên cao hơn
      lastmod: new Date().toISOString(),
    };
  },
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },     // Cho phép mọi bot truy cập
      { userAgent: 'GPTBot', disallow: ['/'] }, // (tuỳ chọn) chặn bot AI nếu muốn
    ],
    additionalSitemaps: [
      'https://www.techtips.icu/sitemap.xml', // Sitemap tổng
    ],
  },
};
