import Link from "next/link";

export default function DesktopCategory({ scrolled }) {
  return (
    <div
      style={{
        width: "100%",
        height: "50px",
        background: "#1e293b",
        
        position: "fixed",
        top: scrolled ? 0 : 70,
        transition: "top 200ms ease",
        left: 0,
        zIndex: 60,
        display: "flex",
        alignItems: "center",
        padding: "0 40px",
        gap: "30px",
      }}
    >
      <Link href="/cong-nghe" style={{ color: "#fff", fontSize: "15px" }}>
        Trang chủ
      </Link>
      <Link href="/mobile" style={{ color: "#fff", fontSize: "15px" }}>
        CÔNG NGHỆ
      </Link>
      <Link href="/thu-thuat" style={{ color: "#fff", fontSize: "15px" }}>
        CÔNG NGHỆ TÀI CHÍNH
      </Link>
      <Link href="/pc-laptop" style={{ color: "#fff", fontSize: "15px" }}>
        PC / Laptop
      </Link>
    </div>
  );
}
