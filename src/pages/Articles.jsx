"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import Sidebar from "@/app/components/Navigation/Sidebar";
// ✅ Đã thêm dòng import đúng
import articles from "@/data/articles"; // ✅ xuất mặc định dạng array

export default function Articles() {
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(10);
  const [filterTag, setFilterTag] = useState("all");
  const loadMoreRef = useRef(null);

  // ✅ 12 chuyên mục cố định
  const tags = [
    "all",
    "Công nghệ",
    "Thủ thuật",
    "AI",
    "Lập trình",
    "Mobile",
    "Web",
    "Tin tức",
    "Game",
    "Phần mềm",
    "Bảo mật",
    "Học tập",
    "Đời sống",
  ];

  // ✅ Lọc bài viết theo từ khóa + tag
  const filteredArticles = useMemo(() => {
    const q = search.toLowerCase();
    return articles.filter((a) => {
      const title = a?.title?.toLowerCase() || "";
      const excerpt = a?.excerpt?.toLowerCase() || "";
      const tagsText = Array.isArray(a?.tags)
        ? a.tags.join(" ").toLowerCase()
        : "";
      const matchTag = filterTag === "all" || a.tags?.includes(filterTag);
      return (
        (title.includes(q) || excerpt.includes(q) || tagsText.includes(q)) &&
        matchTag
      );
    });
  }, [search, filterTag]);

  // ✅ Tự động load thêm khi scroll đến cuối
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => prev + 10);
        }
      },
      { threshold: 1.0 }
    );

    const target = loadMoreRef.current;
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "2rem",
        alignItems: "flex-start",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "1rem",
      }}
    >
      {/* ✅ Cột trái: danh sách bài viết */}
      <div style={{ flex: 1 }}>
        <h1
          style={{
            color: "#222",
            marginBottom: "1rem",
            fontSize: "1.8rem",
            fontWeight: "bold",
          }}
        >
          📰 Tất cả bài viết
        </h1>

        {/* ✅ Ô tìm kiếm */}
        <input
          type="text"
          placeholder="🔍 Tìm bài viết..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            margin: "12px 0",
            border: "1px solid #ccc",
            borderRadius: "6px",
            fontSize: "1rem",
          }}
        />

        {/* ✅ Nút chọn chuyên mục */}
        <div
          style={{
            margin: "12px 0",
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
          }}
        >
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilterTag(tag)}
              style={{
                padding: "6px 12px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                background: filterTag === tag ? "#0070f3" : "#f9f9f9",
                color: filterTag === tag ? "#fff" : "#333",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* ✅ Danh sách bài viết */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginTop: "20px",
          }}
        >
          {filteredArticles.slice(0, visibleCount).map((a, index) => (
            <div
              key={a.slug || `article-${index}`}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                gap: "16px",
                borderBottom: "1px solid rgba(0,0,0,0.1)",
                paddingBottom: "16px",
                marginBottom: "16px",
              }}
              title={a.excerpt}
            >
              {a.cover && (
                <Link href={`/bai-viet/${a.slug}`}>
                  <img
                    src={a.cover}
                    alt={a.title}
                    style={{
                      width: "150px",
                      height: "100px",
                      objectFit: "cover",
                      borderRadius: "6px",
                      flexShrink: 0,
                    }}
                  />
                </Link>
              )}

              <div style={{ flex: 1 }}>
                <Link
                  href={`/bai-viet/${a.slug}`}
                  style={{
                    color: "#0070f3",
                    fontWeight: 600,
                    textDecoration: "none",
                    fontSize: "1rem",
                    lineHeight: 1.4,
                    display: "block",
                    marginBottom: "6px",
                  }}
                >
                  {a.title}
                </Link>

                <p
                  style={{
                    color: "#555",
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                    margin: "0 0 6px 0",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {a.excerpt}
                </p>

                <p style={{ color: "#888", fontSize: "0.8rem" }}>
                  📅 {a.date} — 🏷️{" "}
                  {Array.isArray(a.tags) ? a.tags.join(", ") : ""}
                </p>
              </div>
            </div>
          ))}

          {/* ✅ Nếu không có bài */}
          {filteredArticles.length === 0 && (
            <p style={{ color: "#666", fontStyle: "italic" }}>
              Không tìm thấy bài viết nào phù hợp.
            </p>
          )}
        </div>

        {/* ✅ Tải thêm khi cuộn */}
        <div ref={loadMoreRef} style={{ height: "40px" }}></div>
      </div>

      {/* ✅ Sidebar bên phải */}
      <Sidebar articles={articles} />
    </div>
  );
}
