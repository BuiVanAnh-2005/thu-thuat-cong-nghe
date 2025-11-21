/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.techtips.icu",
  generateRobotsTxt: true,
  autoLastmod: true,
  changefreq: "daily",
  priority: 0.8,

  sitemapSize: 10000, // Chuẩn Google

  generateIndexSitemap: true, // sitemap.xml trở thành index sitemap

  // Loại bỏ các page rác / trùng
  exclude: [
    "/404",
    "/admin",
    "/draft/*",

    // Các URL không hoạt động hoặc trùng
    "/ArticleDetail",
    "/CategoryPage",
    "/GioiThieu",
    "/ChinhSachBaoMat",
    "/Home",
    "/LienHe",
    "/SearchPage",
    "/SearchResults",
    "/TinTuc",
    "/TinTucDetail"
  ],

  // Tự động sinh lastmod hiện tại
  transform: async (_, path) => ({
    loc: path,
    changefreq: "daily",
    priority: path === "/" ? 1.0 : 0.8,
    lastmod: new Date().toISOString(),
  }),

  // Robots.txt chuẩn SEO
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
