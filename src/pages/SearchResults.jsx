"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import articles from "@/data/articles";
import Head from "next/head";

export default function SearchResultsPage() {
  const searchParams = useSearchParams();
  const q = searchParams.get("keyword")?.trim().toLowerCase() || "";
  const [results, setResults] = useState([]);
  const keyword = q;

  // ✅ Tạo hàm highlight
  const highlight = (text, keyword) => {
    if (!text) return "";
    if (!keyword) return text;
    const regex = new RegExp(`(${keyword})`, "gi");
    return text.replace(regex, "<mark>$1</mark>");
  };

  // ✅ Lọc bài viết
  useEffect(() => {
    if (!q) {
      setResults([]);
      return;
    }

    const filtered = articles.filter((a) => {
      return (
        a.title?.toLowerCase().includes(q) ||
        a.excerpt?.toLowerCase().includes(q) ||
        a.content?.toLowerCase().includes(q) ||
        a.category?.toLowerCase().includes(q) ||
        a.tags?.some((t) => t.toLowerCase().includes(q))
      );
    });

    setResults(filtered);
  }, [q]);

  return (
    <div style={{ padding: "16px", maxWidth: "1080px", margin: "0 auto" }}>
      <Head>
        <title>Kết quả tìm kiếm: {q} | Tech Tips</title>
        <meta
          name="description"
          content={`Kết quả tìm kiếm cho từ khóa "${q}" trên Tech Tips – Tổng hợp bài viết công nghệ, AI, bảo mật và lập trình mới nhất.`}
        />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="vi" />
        <meta name="author" content="Tech Tips" />
        <meta
          name="keywords"
          content="AI, bảo mật, lập trình, công nghệ, Tech Tips"
        />
        <meta property="og:title" content={`Kết quả tìm kiếm: ${q} | Tech Tips`} />
        <meta
          property="og:description"
          content={`Kết quả cho từ khóa "${q}" trên Tech Tips.`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="vi_VN" />
      </Head>

      <h2 style={{ color: "#4fc3f7", marginBottom: "16px" }}>
        Kết quả cho: “{q}”
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
              }}
            />

            <div>
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
                style={{ color: "#aaa", fontSize: "14px", margin: "4px 0" }}
                dangerouslySetInnerHTML={{
                  __html: highlight(r.excerpt, keyword),
                }}
              ></p>

              <p style={{ color: "#777", fontSize: "13px" }}>
                {new Date(r.date).toLocaleDateString("vi-VN")}
              </p>
            </div>
          </article>
        ))
      ) : (
        <p style={{ color: "#aaa" }}>Không tìm thấy kết quả nào.</p>
      )}
    </div>
  );
}
