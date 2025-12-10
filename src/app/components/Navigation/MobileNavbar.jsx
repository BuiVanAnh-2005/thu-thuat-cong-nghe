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

export default function MobileNavbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isActive = (path) => pathname === path;

  return (
    <>
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
            <Link href="/" className={isActive("/") ? "active" : ""}>
              {isActive("/") ? (
                <MdHomeFilled size={28} color="#4fc3f7" />
              ) : (
                <MdHome size={28} color="#fff" />
              )}
            </Link>

            <Link href="/bai-viet">
              <MdArticle
                size={27}
                color={isActive("/bai-viet") ? "#4fc3f7" : "#fff"}
              />
            </Link>

            <Link href="/tin-tuc">
              <MdNewspaper
                size={27}
                color={isActive("/tin-tuc") ? "#4fc3f7" : "#fff"}
              />
            </Link>

            <Link href="/tim-kiem">
              <MdSearch
                size={27}
                color={isActive("/tim-kiem") ? "#4fc3f7" : "#fff"}
              />
            </Link>
          </nav>
        </div>
      </header>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}
