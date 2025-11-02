"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

import Sidebar from "./Sidebar";

import "../../../styles/mobile.css";
import {
  MdHome,
  MdHomeFilled,
  MdArticle,
  MdNewspaper,
  MdSearch,
} from "react-icons/md";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isActive = (path) => pathname === path;
  const handleClick = (path) => {
  router.push(path);
};


  return (
    <>
      {/* Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: "rgba(18,26,43,0.9)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid #444",
        }}
      >
        <div
          style={{
            maxWidth: "1080px",
            padding: "12px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          {/* Nút menu 3 gạch */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            style={{
              fontSize: "22px",
              color: "#fff",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            ☰
          </button>

          {/* Logo */}
          <Link
            href="/"
            style={{
              fontWeight: 800,
              fontSize: "18px",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            TechTips
          </Link>

          {/* Header links */}
          <nav style={{ marginLeft: "auto", display: "flex", gap: "16px" }}>
            {/* Trang chủ */}
            <Link href="/"className={isActive("/") ? "active" : ""}>
              {isActive("/") ? (
                <MdHomeFilled size={28} color="#4fc3f7" title="Trang chủ" />
              ) : (
                <MdHome size={28} color="#fff" title="Trang chủ" />
              )}
            </Link>

            {/* Bài viết */}
            <Link href="/bai-viet"className={isActive("/bai-viet") ? "active" : ""}>
              <MdArticle
                size={27}
                color={isActive("/bai-viet") ? "#4fc3f7" : "#fff"}
                title="Bài viết"
              />
            </Link>

            {/* Tin tức */}
            <Link href="/tin-tuc"className={isActive("/tin-tuc") ? "active" : ""}>
              <MdNewspaper
                size={27}
                color={isActive("/tin-tuc") ? "#4fc3f7" : "#fff"}
                title="Tin tức"
              />
            </Link>

            {/* Tìm kiếm */}
            <Link href="/tim-kiem"className={isActive("/tim-kiem") ? "active" : ""}>
              <MdSearch
                size={27}
                color={isActive("/tim-kiem") ? "#4fc3f7" : "#fff"}
                title="Tìm kiếm"
                style={{ transition: "transform 0.15s ease" }}
              />
            </Link>
          </nav>
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}
