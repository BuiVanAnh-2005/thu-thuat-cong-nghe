import "../styles/mobile.css";
import "../styles/desktop.css";
import ClientLayout from "./ClientLayout";
import Script from "next/script";


export const metadata = {
  title: "TechTips - Trang công nghệ hàng đầu",
  description: "Tin tức và bài viết công nghệ chất lượng.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
       <head>
    <link rel="icon" href="/vercel.svg" type="image/svg+xml" />
     {/* ✅ Google Analytics 4 */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8GJ4EQT6X3"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8GJ4EQT6X3', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        {/* Hoặc nếu bạn muốn dùng PNG (rõ hơn) */}
        {/* <link rel="icon" href="/favicon.png" sizes="512x512" type="image/png" /> */}
  </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
