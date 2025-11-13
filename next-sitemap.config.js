/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.techtips.icu', // 🌐 Domain chính (không có dấu / ở cuối)
  generateRobotsTxt: true,              // ✅ Tự tạo file robots.txt
  generateIndexSitemap: true,           // ✅ Tạo sitemap tổng hợp
  sitemapSize: 1000,                    // ✅ Mỗi file chứa 1000 URL (phù hợp site lớn)
  changefreq: 'daily',                  // ✅ Gợi ý Google crawl hàng ngày
  priority: 0.8,                        // ✅ Mức ưu tiên trung bình cao
  exclude: ['/404', '/admin', '/draft/*'], // 🚫 Loại bỏ trang không cần index
  autoLastmod: true,                    // ✅ Tự thêm ngày cập nhật cuối cùng

  // ✅ Tùy chỉnh từng URL
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: 'daily',
      priority: path === '/' ? 1.0 : 0.8, // Trang chủ ưu tiên cao nhất
      lastmod: new Date().toISOString(),
    };
  },

  // ✅ Cấu hình robots.txt
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' }, // Cho phép mọi bot truy cập
    ],
    additionalSitemaps: [
      'https://www.techtips.icu/sitemap-index.xml', // ✅ Sitemap tổng chính xác
    ],
  },
};
