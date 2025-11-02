import "../styles/mobile.css";
import "../styles/desktop.css";
import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "TechTips - Trang công nghệ hàng đầu",
  description: "Tin tức và bài viết công nghệ chất lượng.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
       <head>
    <link rel="icon" href="/vercel.svg" type="image/svg+xml" />
        {/* Hoặc nếu bạn muốn dùng PNG (rõ hơn) */}
        {/* <link rel="icon" href="/favicon.png" sizes="512x512" type="image/png" /> */}
  </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
