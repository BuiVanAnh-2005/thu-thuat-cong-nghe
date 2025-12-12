"use client";

import Link from "next/link";

export default function DesktopHeader({
  isActive,
  scrolled,
  showSearch,
  setShowSearch,
}) {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "70px",
        padding: "0 10px",
        background: "#0f172a",
        
        position: "fixed",
        top: scrolled ? "-70px" : "0px",
        transition: "top 200ms ease",
        zIndex: 50,
        left: 0,
        width: "100%",
        boxSizing: "border-box",
      }}
      className="desktop-navbar"
    >
      {/* HAMBURGER */}
      <button
        onClick={() => console.log("Open menu")}
        style={{
          fontSize: "26px",
          marginRight: "0px",
          background: "none",
          border: "none",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        ☰
      </button>

      {/* LOGO */}
      <Link
        href="/"
        style={{
          color: "#fff",
          fontSize: "24px",
          fontWeight: "700",
          textDecoration: "none",
        }}
      >
        TechTips
      </Link>

     

      {/* SEARCH BUTTON */}
      <button
        onClick={() => setShowSearch(!showSearch)}
        style={{
          fontSize: "20px",
          color: "#fff",
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>
    </header>
  );
}
