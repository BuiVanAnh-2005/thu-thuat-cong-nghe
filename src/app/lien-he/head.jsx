export default function Head() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "url": "https://techtips.icu/lien-he",
    "name": "Liên hệ TechTips.icu",
    "description":
      "Liên hệ với TechTips.icu để hợp tác, quảng cáo hoặc đóng góp nội dung.",
    "publisher": {
      "@type": "Organization",
      "name": "TechTips.icu",
      "url": "https://techtips.icu",
      "logo": "https://techtips.icu/logo.png",
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "buivananh.dev@gmail.com",
      "contactType": "Customer Support",
      "availableLanguage": ["Vietnamese", "English"],
    },
  };

  return (
    <>
      <title>Liên hệ - TechTips.icu</title>
      <meta
        name="description"
        content="Liên hệ với TechTips.icu để hợp tác truyền thông, quảng cáo, hoặc góp ý phát triển nội dung. Chúng tôi luôn sẵn sàng lắng nghe bạn."
      />
      <meta
        name="keywords"
        content="Liên hệ TechTips.icu, Hợp tác quảng cáo, Góp ý website công nghệ, TechTips, Contact TechTips"
      />
      <meta property="og:title" content="Liên hệ với TechTips.icu" />
      <meta
        property="og:description"
        content="Liên hệ với TechTips.icu để hợp tác, quảng cáo hoặc chia sẻ thông tin công nghệ."
      />
      <meta property="og:image" content="https://techtips.icu/cover/contact-og.jpg" />
      <meta property="og:url" content="https://techtips.icu/lien-he" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="author" content="TechTips.icu Team" />
      <link rel="canonical" href="https://techtips.icu/lien-he" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
}
