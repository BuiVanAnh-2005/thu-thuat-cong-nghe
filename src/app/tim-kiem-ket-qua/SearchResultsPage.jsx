"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Head from "next/head";
import articles from "@/data/articles"; // ✅ Đường dẫn đúng

export default function SearchResultsPage() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword")?.trim().toLowerCase() || "";
  const [results, setResults] = useState([]);

  // ✅ Tô đậm từ khóa khi hiển thị
  const highlight = (text, keyword) => {
    if (!text || !keyword) return text;
    const regex = new RegExp(`(${keyword})`, "gi");
    return text.replace(regex, "<mark>$1</mark>");
  };

  // ✅ Lọc bài viết khớp từ khóa
  useEffect(() => {
    if (!keyword) {
      setResults([]);
      return;
    }

    const filtered = articles
      .map((a) => {
        let score = 0;
        if (a.title?.toLowerCase().includes(keyword)) score += 3;
        if (a.excerpt?.toLowerCase().includes(keyword)) score += 2;
        if (a.content?.toLowerCase().includes(keyword)) score += 1;
        if (a.category?.toLowerCase().includes(keyword)) score += 2;
        if (a.tags?.some((t) => t.toLowerCase().includes(keyword))) score += 2;
        return { ...a, score };
      })
      .filter((a) => a.score > 0)
      .sort((a, b) => b.score - a.score);

    setResults(filtered);
  }, [keyword]);

  return (
    <div style={{ padding: "16px", maxWidth: "1080px", margin: "0 auto" }}>
      <Head>
        <title>Kết quả tìm kiếm: {keyword} | Tech Tips</title>
        <meta
          name="description"
          content={`Kết quả tìm kiếm cho từ khóa "${keyword}" trên Tech Tips – Tổng hợp bài viết công nghệ, AI, bảo mật và lập trình mới nhất.`}
        />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="vi" />
        <meta name="author" content="Tech Tips" />
        <meta
          name="keywords"
          content="AI, bảo mật, lập trình, công nghệ, Tech Tips"
        />
        <meta
          property="og:title"
          content={`Kết quả tìm kiếm: ${keyword} | Tech Tips`}
        />
        <meta
          property="og:description"
          content={`Kết quả cho từ khóa "${keyword}" trên Tech Tips.`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="vi_VN" />
      </Head>

      <h2 style={{ color: "#4fc3f7", marginBottom: "16px" }}>
        Kết quả cho: “{keyword}”
      </h2>

      {results.length > 0 ? (
        results.map((r) => (
          <article
            key={r.slug}
            role="article"
            aria-label={`Kết quả: ${r.title}`}
            style={{
              display: "flex",
              gap: "12px",
              marginBottom: "20px",
              paddingBottom: "12px",
              borderBottom: "1px solid #334155",
              alignItems: "flex-start",
            }}
          >
            <img
              src={r.cover || "/default-thumbnail.jpg"}
              alt={r.title}
              style={{
                width: "120px",
                height: "80px",
                objectFit: "cover",
                borderRadius: "6px",
                flexShrink: 0,
              }}
            />

            <div style={{ flex: 1 }}>
              <a
                href={`/bai-viet/${r.slug}`}
                dangerouslySetInnerHTML={{
                  __html: highlight(r.title, keyword),
                }}
                style={{
                  color: "#4fc3f7",
                  fontWeight: 600,
                  fontSize: "17px",
                  textDecoration: "none",
                }}
              ></a>

              <p
                style={{
                  color: "#aaa",
                  fontSize: "14px",
                  margin: "4px 0",
                }}
                dangerouslySetInnerHTML={{
                  __html: highlight(r.excerpt, keyword),
                }}
              ></p>

              <p style={{ color: "#777", fontSize: "13px" }}>
                {new Date(r.date).toLocaleDateString("vi-VN")} — Tags:{" "}
                {r.tags?.join(", ")}
              </p>
            </div>
          </article>
        ))
      ) : (
        <p style={{ color: "#aaa" }}>Không tìm thấy kết quả nào phù hợp.</p>
      )}
    </div>
  );
}
