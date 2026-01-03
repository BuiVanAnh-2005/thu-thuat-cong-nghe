"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,          // Trang chủ
  FileText,      // Bài viết
  Newspaper,     // Tin tức
  Lightbulb,     // Mẹo công nghệ
  Smartphone,    // Ứng dụng
  HardDrive,     // Phần cứng
  Code,          // Lập trình
  Shield,        // Bảo mật
  Car,           // Xe công nghệ
  Brain,         // Trí tuệ nhân tạo
  Compass,       // Khám phá
  Star,          // Đánh giá
  Watch,         // Thiết bị đeo
  Globe,         // Tin tức Công nghệ
  TrendingUp,
  CreditCard,
  Zap,
  Cpu,
  ShieldCheck,
  BarChart2,
  BookOpen,
  Info,          // Giới thiệu
  Mail,          // Liên hệ
  Cookie         // Hướng dẫn Cookie
} from "lucide-react";


export default function NavLinks({ onClose }) {

  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  const linkStyle = (path) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 5px",
    borderRadius: "10px",
    color: isActive(path) ? "#fff" : "#222",
    backgroundColor: isActive(path) ? "#2563eb" : "transparent",
    textDecoration: "none",
    fontWeight: 500,
    transition: "all 0.2s ease",
  });


  return (
    <ul>

      {/* Trang chủ */}
      <li>
        <Link
          href="/"
          onClick={() => onClose && onClose()}
          style={linkStyle("/")}
        >
          <Home size={20} />
          Trang chủ
        </Link>
      </li>

      {/* Bài viết */}
      <li>
        <Link
          href="/bai-viet"
          onClick={() => onClose && onClose()}
          style={linkStyle("/bai-viet")}
        >
          <FileText size={20} />
          Bài viết
        </Link>
      </li>

      {/* Tin tức */}
      <li>
        <Link
          href="/tin-tuc"
          onClick={() => onClose && onClose()}
          style={linkStyle("/tin-tuc")}
        >
          <Newspaper size={20} />
          Tin tức
        </Link>
      </li>

      {/* Đường kẻ chia nhóm */}
      <hr
        style={{
          border: "none",
          borderTop: "1px solid #e5e7eb",
          margin: "12px 0",
        }}
      />

      {/* Nhãn “Chuyên mục” */}
      <li
        style={{
          fontSize: "11px",
          fontWeight: 600,
          color: "#6B7280",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          padding: "6px 0 4px",
          userSelect: "none",
          cursor: "default",
        }}
      >
        CHUYÊN MỤC
      </li>

      {/* Mẹo công nghệ */}
      <li>
        <Link
          href="/chuyen-muc/Mẹo công nghệ"
          onClick={() => onClose && onClose()}
          style={linkStyle("/chuyen-muc/Mẹo công nghệ")}
        >
          <Lightbulb size={20} /> {/* icon cho mẹo công nghệ */}
          Mẹo công nghệ
        </Link>
      </li>

      {/* Ứng dụng */}
      <li>
        <Link
          href="/chuyen-muc/Ứng dụng"
          onClick={() => onClose && onClose()}
          style={linkStyle("/chuyen-muc/Ứng dụng")}
        >
          <Smartphone size={20} /> {/* Ứng dụng */}
          Ứng dụng
        </Link>
      </li>

      {/* Phần mềm */}
      <li>
        <Link
          href="/chuyen-muc/Phần mềm"
          onClick={() => onClose && onClose()}
          style={linkStyle("/chuyen-muc/Phần mềm")}
        >
          <HardDrive size={20} /> {/* Phần mềm */}
          Phần mềm
        </Link>
      </li>

      {/* Phần cứng */}
      <li>
        <Link
          href="/chuyen-muc/Phần cứng"
          onClick={() => onClose && onClose()}
          style={linkStyle("/chuyen-muc/Phần cứng")}
        >
          <HardDrive size={20} /> {/* Phần cứng */}
          Phần cứng
        </Link>
      </li>

      {/* Lập trình */}
      <li>
        <Link
          href="/chuyen-muc/Lập trình"
          onClick={() => onClose && onClose()}
          style={linkStyle("/chuyen-muc/Lập trình")}
        >
          <Code size={20} /> {/* Lập trình */}
          Lập trình
        </Link>
      </li>

      {/* Bảo mật */}
      <li>
        <Link
          href="/chuyen-muc/Bảo mật"
          onClick={() => onClose && onClose()}
          style={linkStyle("/chuyen-muc/Bảo mật")}
        >
          <Shield size={20} /> {/* Bảo mật */}
          Bảo mật
        </Link>
      </li>

      {/* Xe công nghệ */}
      <li>
        <Link
          href="/chuyen-muc/Xe công nghệ"
          onClick={() => onClose && onClose()}
          style={linkStyle("/chuyen-muc/Xe công nghệ")}
        >
          <Car size={20} /> {/* Xe công nghệ */}
          Xe công nghệ
        </Link>
      </li>

      {/* Trí tuệ nhân tạo */}
      <li>
        <Link
          href="/chuyen-muc/Trí tuệ nhân tạo"
          onClick={() => onClose && onClose()}
          style={linkStyle("/chuyen-muc/Trí tuệ nhân tạo")}
        >
          <Brain size={20} /> {/* Trí tuệ nhân tạo */}
          Trí tuệ nhân tạo
        </Link>
      </li>

      {/* Khám phá */}
      <li>
        <Link
          href="/chuyen-muc/Khám phá"
          onClick={() => onClose && onClose()}
          style={linkStyle("/chuyen-muc/Khám phá")}
        >
          <Compass size={20} /> {/* Khám phá */}
          Khám phá
        </Link>
      </li>

      {/* Đánh giá */}
      <li>
        <Link
          href="/chuyen-muc/Đánh giá"
          onClick={() => onClose && onClose()}
          style={linkStyle("/chuyen-muc/Đánh giá")}
        >
          <Star size={20} /> {/* Đánh giá */}
          Đánh giá
        </Link>
      </li>

      {/* Thiết bị đeo */}
      <li>
        <Link
          href="/chuyen-muc/Thiết bị đeo"
          onClick={() => onClose && onClose()}
          style={linkStyle("/chuyen-muc/Thiết bị đeo")}
        >
          <Watch size={20} /> {/* Thiết bị đeo */}
          Thiết bị đeo
        </Link>
      </li>

      {/* Tin tức Công Nghệ */}
      <li>
        <Link
          href="/chuyen-muc/Tin tức Công Nghệ"
          onClick={() => onClose && onClose()}
          style={linkStyle("/chuyen-muc/Tin tức Công Nghệ")}
        >
          <Globe size={20} /> {/* icon trái đất */}
          Tin tức Công Nghệ
        </Link>
      </li>

      {/* Đường kẻ chia nhóm */}
      <hr
        style={{
          border: "none",
          borderTop: "1px solid #e5e7eb",
          margin: "12px 0",
        }}
      />
      
      {/* Nhãn “Chuyên mục Tài Chính Công Nghệ” */}
<li
  style={{
    fontSize: "11px",
    fontWeight: 600,
    color: "#6B7280",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    padding: "6px 0 4px",
    userSelect: "none",
    cursor: "default",
  }}
>
CÔNG NGHỆ TÀI CHÍNH 
</li>

{/* 1. Đầu tư & Thị trường */}
<li>
    <Link
        href="/chuyen-muc/Đầu tư thị trường"
        onClick={() => onClose && onClose()}
        style={linkStyle("/chuyen-muc/Đầu tư thị trường")}
    >
        <TrendingUp size={20} />
        Đầu tư & Thị trường
    </Link>
</li>
{/* 2. Ngân hàng số & Ví điện tử */}
<li>
    <Link
        href="/chuyen-muc/Ngân hàng số"
        onClick={() => onClose && onClose()}
        style={linkStyle("/chuyen-muc/Ngân hàng số")}
    >
        <CreditCard size={20} />
        Ngân hàng số & Ví điện tử
    </Link>
</li>

{/* 3. FinTech & Startup */}
<li>
    <Link
        href="/chuyen-muc/fintech-startup"
        onClick={() => onClose && onClose()}
        style={linkStyle("/chuyen-muc/fintech-startup")}
    >
        <Zap size={20} />
        FinTech & Startup
    </Link>
</li>

{/* 4. AI & Công nghệ trong tài chính */}
<li>
    <Link
        href="/chuyen-muc/ai-trong-tai-chinh"
        onClick={() => onClose && onClose()}
        style={linkStyle("/chuyen-muc/ai-trong-tai-chinh")}
    >
        <Cpu size={20} />
        AI & Công nghệ trong Tài chính
    </Link>
</li>

{/* 5. An ninh & Bảo mật Tài chính */}
<li>
    <Link
        href="/chuyen-muc/an-ninh-bao-mat"
        onClick={() => onClose && onClose()}
        style={linkStyle("chuyen-muc/an-ninh-bao-mat")}
    >
        <ShieldCheck size={20} />
        An ninh & Bảo mật Tài chính
    </Link>
</li>

{/* 6. Công nghệ thanh toán & Blockchain */}
<li>
    <Link
        href="/chuyen-muc/cong-nghe-thanh-toan"
        onClick={() => onClose && onClose()}
        style={linkStyle("/chuyen-muc/cong-nghe-thanh-toan")}
    >
        <HardDrive size={20} />
        Công nghệ thanh toán & Blockchain
    </Link>
</li>

{/* 7. Xu hướng & Dự báo Tài chính Công nghệ */}
<li>
    <Link
        href="/chuyen-muc/xu-huong-du-bao"
        onClick={() => onClose && onClose()}
        style={linkStyle("/chuyen-muc/xu-huong-du-bao")}
    >
        <BarChart2 size={20} />
        Xu hướng & Dự báo
    </Link>
</li>

{/* 8. Hướng dẫn & Tips tài chính số */}
<li>
    <Link
        href="/chuyen-muc/huong-dan-tips"
        onClick={() => onClose && onClose()}
        style={linkStyle("/chuyen-muc/huong-dan-tips")}
    >
        <BookOpen size={20} />
        Hướng dẫn & Tips
    </Link>
</li>
{/* Đường kẻ chia nhóm */}
      <hr
        style={{
          border: "none",
          borderTop: "1px solid #e5e7eb",
          margin: "12px 0",
        }}
      />



      {/* Giới thiệu + Liên hệ */}
      <li>
        <Link
          href="/gioi-thieu"
          onClick={() => onClose && onClose()}
          style={linkStyle("/gioi-thieu")}
        >
          <Info size={20} />
          Giới thiệu
        </Link>
      </li>

      <li>
        <Link
          href="/lien-he"
          onClick={() => onClose && onClose()}
          style={linkStyle("/lien-he")}
        >
          <Mail size={20} />
          Liên hệ
        </Link>
      </li>

      <li>
        <Link
          href="/chinh-sach-bao-mat"
          onClick={() => onClose && onClose()}
          style={linkStyle("/chinh-sach-bao-mat")}
        >
          <Shield size={20} />
          Chính sách bảo mật
        </Link>

        <Link
          href="/chinh-sach-cookie"
          onClick={() => onClose && onClose()}
          style={linkStyle("/chinh-sach-cookie")}
        >
          <Cookie size={20} />
          Hướng dẫn Cookie
        </Link>
       
       

      </li>
     
       


    </ul>
  );
}
