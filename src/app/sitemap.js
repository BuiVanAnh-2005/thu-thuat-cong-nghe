// src/app/sitemap.js
export default async function sitemap() {
  const baseUrl = "https://techtips.icu";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(), // ⚠️ thêm .toISOString()
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date().toISOString(), // ⚠️ thêm .toISOString()
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // 👉 Thêm các trang khác ở đây nếu có
  ];
}
