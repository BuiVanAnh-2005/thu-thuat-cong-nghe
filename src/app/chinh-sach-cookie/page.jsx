"use client";

import Link from "next/link";
import Script from "next/script";

export default function ChinhSachCookie() {
  return (
    <div
      style={{
        padding: "2rem 1rem",
        maxWidth: "900px",
        margin: "0 auto",
        lineHeight: 1.7,
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* ✅ JSON-LD Schema */}
      <Script
        id="ld-json-cookie"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Hướng Dẫn Cookie",
            url: "https://yourwebsite.com/chinh-sach-cookie",
            description:
              "Trang hướng dẫn cookie của Thủ Thuật Công Nghệ, giải thích mục đích, quyền người dùng và cách quản lý cookie tuân thủ GDPR & CCPA.",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Trang chủ",
                  item: "https://yourwebsite.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Hướng Dẫn Cookie",
                  item: "https://yourwebsite.com/chinh-sach-cookie",
                },
              ],
            },
          }),
        }}
      />

      <h1>Hướng Dẫn Cookie</h1>

      <img
        src="https://cdn-icons-png.flaticon.com/512/3077/3077473.png"
        alt="Hướng dẫn Cookie"
        style={{
          width: "120px",
          display: "block",
          margin: "1rem auto",
        }}
      />

      <p>
        Cookie là các tệp nhỏ được lưu trên trình duyệt khi bạn truy cập website.
        Chúng giúp website ghi nhớ thông tin, cải thiện trải nghiệm và phân tích
        hiệu suất. Việc sử dụng cookie trên{" "}
        <strong>Thủ Thuật Công Nghệ</strong> tuân thủ các quy định quốc tế như{" "}
        <strong>GDPR</strong> và <strong>CCPA</strong>.
      </p>

      <h2 id="loai-cookie">1. Các loại cookie chúng tôi sử dụng</h2>
      <ul>
        <li>
          <strong>Cookie cần thiết:</strong> giúp website hoạt động ổn định (ví dụ:
          đăng nhập, bảo mật, điều hướng).
        </li>
        <li>
          <strong>Cookie phân tích:</strong> thu thập dữ liệu truy cập giúp cải thiện
          trải nghiệm và hiệu suất website.
        </li>
        <li>
          <strong>Cookie quảng cáo:</strong> hiển thị nội dung và quảng cáo phù hợp
          với sở thích người dùng.
        </li>
      </ul>

      <img
        src="https://cdn-icons-png.flaticon.com/512/2910/2910767.png"
        alt="Phân loại cookie"
        style={{
          width: "100%",
          borderRadius: "8px",
          margin: "1rem 0",
        }}
      />

      <h2 id="muc-dich-cookie">2. Mục đích sử dụng cookie</h2>
      <ul>
        <li>Ghi nhớ lựa chọn, ngôn ngữ và thông tin đăng nhập của bạn.</li>
        <li>Phân tích hành vi người dùng để tối ưu website.</li>
        <li>Tùy chỉnh nội dung và quảng cáo cho phù hợp với sở thích.</li>
      </ul>

      <h2 id="quan-ly-cookie">3. Cách quản lý hoặc tắt cookie</h2>
      <p>
        Bạn có thể kiểm soát cookie thông qua trình duyệt hoặc công cụ bên thứ ba.
        Tuy nhiên, việc tắt cookie có thể khiến một số tính năng không hoạt động
        chính xác.
      </p>

      <h3>3.1. Trình duyệt Chrome</h3>
      <ol>
        <li>Chọn biểu tượng ba chấm → Cài đặt → Quyền riêng tư & bảo mật.</li>
        <li>Chọn “Cookie và dữ liệu trang web” → Bật/tắt cookie.</li>
      </ol>

      <h3>3.2. Trình duyệt Firefox</h3>
      <ol>
        <li>Menu → Cài đặt → Quyền riêng tư & bảo mật → Cookie và dữ liệu.</li>
      </ol>

      <h3>3.3. Trình duyệt Edge</h3>
      <ol>
        <li>Cài đặt → Cookie và quyền trang web → Tùy chọn quản lý cookie.</li>
      </ol>

      <h3>3.4. Trình duyệt Safari</h3>
      <ol>
        <li>Cài đặt → Safari → Quyền riêng tư → Cookie và dữ liệu trang web.</li>
      </ol>

      <h2 id="quyen-nguoi-dung">4. Quyền của bạn (theo GDPR & CCPA)</h2>
      <ul>
        <li>Xem cookie được lưu và biết mục đích của chúng.</li>
        <li>Từ chối hoặc xóa cookie bất kỳ lúc nào.</li>
        <li>Yêu cầu xóa dữ liệu thu thập từ cookie.</li>
        <li>
          Liên hệ với chúng tôi để được hỗ trợ các vấn đề về cookie & quyền riêng tư.
        </li>
      </ul>

      <h2 id="faq">5. FAQ - Câu hỏi thường gặp</h2>
      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            margin: "1rem 0",
            minWidth: "500px",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f3f4f6" }}>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Câu hỏi</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Trả lời</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                Cookie là gì?
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                Là tệp nhỏ lưu trên trình duyệt, giúp website ghi nhớ thông tin và
                cải thiện trải nghiệm.
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                Cookie có an toàn không?
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                Cookie không chứa thông tin cá nhân trừ khi bạn cung cấp; chúng chỉ
                lưu thông tin kỹ thuật.
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                Làm sao để xóa cookie?
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                Bạn có thể xóa cookie trong phần cài đặt của trình duyệt hoặc sử dụng
                công cụ bảo mật bên thứ ba.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="lien-ket">6. Liên kết nội bộ liên quan</h2>
      <ul>
        <li>
          <Link href="/chinh-sach-bao-mat">Chính Sách Bảo Mật</Link> – thông tin về dữ
          liệu cá nhân và quyền riêng tư.
        </li>
        <li>
          <Link href="/lien-he">Liên Hệ</Link> – gửi yêu cầu hỗ trợ về cookie & dữ
          liệu.
        </li>
      </ul>

      <p style={{ marginTop: "1rem" }}>
        <strong>Ngày hiệu lực:</strong> 26/10/2025
      </p>
    </div>
  );
}
