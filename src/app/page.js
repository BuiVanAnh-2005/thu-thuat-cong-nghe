"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// 🧠 Lazy load từng trang — chỉ tải khi cần
const Home = dynamic(() => import("../pages/Home"), { ssr: false });
const Articles = dynamic(() => import("../pages/Articles"), { ssr: false });
const ArticleDetail = dynamic(() => import("../pages/ArticleDetail"), { ssr: false });
const GioiThieu = dynamic(() => import("../pages/GioiThieu"), { ssr: false });
const LienHe = dynamic(() => import("../pages/LienHe"), { ssr: false });
const CategoryPage = dynamic(() => import("../pages/CategoryPage"), { ssr: false });
const TinTuc = dynamic(() => import("../pages/TinTuc"), { ssr: false });
const TinTucDetail = dynamic(() => import("../pages/TinTucDetail"), { ssr: false });
const SearchPage = dynamic(() => import("../pages/SearchPage"), { ssr: false });
const SearchResults = dynamic(() => import("../pages/SearchResults"), { ssr: false });
const ChinhSachBaoMat = dynamic(() => import("../pages/ChinhSachBaoMat"), { ssr: false });
const ChinhSachCookie = dynamic(() => import("../pages/ChinhSachCookie"), { ssr: false });

// 🗺️ Định nghĩa route tĩnh
const routes = {
  "/": <Home />,
  "/bai-viet": <Articles />,
  "/bai-viet/chi-tiet": <ArticleDetail />,
  "/gioi-thieu": <GioiThieu />,
  "/lien-he": <LienHe />,
  "/chuyen-muc": <CategoryPage />,
  "/tin-tuc": <TinTuc />,
  "/tin-tuc/chi-tiet": <TinTucDetail />,
  "/tim-kiem": <SearchPage />,
  "/tim-kiem-ket-qua": <SearchResults />,
  "/chinh-sach-bao-mat": <ChinhSachBaoMat />,
  "/chinh-sach-cookie": <ChinhSachCookie />,
};

export default function Page() {
  const [path, setPath] = useState("/");
  const [slug, setSlug] = useState("");

  useEffect(() => {
    const onPopState = () => handlePath(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    handlePath(window.location.pathname);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const handlePath = (pathname) => {
    setPath(pathname);

    // ✅ Nếu là bài viết chi tiết kiểu /bai-viet/[slug]
    if (pathname.startsWith("/bai-viet/") && pathname.split("/").length > 2) {
      const slugPart = pathname.replace("/bai-viet/", "");
      setSlug(slugPart);
    } else {
      setSlug("");
    }
  };

  const handleNavigate = (newPath) => {
    window.history.pushState({}, "", newPath);
    handlePath(newPath);
  };

  let PageComponent = routes[path];

  // ✅ Nếu là bài viết động → hiển thị ArticleDetail
  if (!PageComponent && path.startsWith("/bai-viet/") && slug) {
    PageComponent = <ArticleDetail params={{ slug }} />;
  }

  // ✅ Nếu không có route hợp lệ → về trang chủ
  if (!PageComponent) {
    PageComponent = <Home />;
  }

  return (
    <div>
      {/* ⚡ Hiển thị nội dung */}
      <div className="animate-fadeIn">{PageComponent}</div>
    </div>
  );
}
