"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import DesktopHeader from "./DesktopHeader";
import DesktopSearch from "./DesktopSearch";
import DesktopCategory from "./DesktopCategory";

export default function DesktopNavbar() {
  const pathname = usePathname();

  const [openCategory, setOpenCategory] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path) => pathname === path;

  return (
    <>
      <DesktopHeader
        isActive={isActive}
        scrolled={scrolled}
        showSearch={showSearch}
        setShowSearch={setShowSearch}
      />

      <DesktopSearch
        scrolled={scrolled}
        showSearch={showSearch}
        query={query}
        setQuery={setQuery}
      />

      <DesktopCategory scrolled={scrolled} />

      <div style={{ height: "120px" }}></div>
    </>
  );
}
