"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import articles from "@/data/articles";
 // ✅ đường dẫn đúng tùy dự án bạn

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const router = useRouter(); // ✅ thay cho useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      // ✅ Chuyển hướng bằng router Next.js
      router.push(`/tim-kiem-ket-qua?keyword=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div
      style={{
        padding: "16px",
        maxWidth: "1080px",
        margin: "0 auto",
        position: "relative",
        overflow: "visible",
      }}
    >
      <Head>
        <title>Tìm kiếm bài viết | Tech Tips</title>
        <meta
          name="description"
          content="Tìm kiếm hàng nghìn bài viết về công nghệ, bảo mật, AI, lập trình và hơn thế nữa."
        />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="vi" />
        <meta name="author" content="Tech Tips" />
        <meta name="keywords" content="AI, bảo mật, lập trình, công nghệ, Tech Tips" />
        <meta property="og:title" content="Tìm kiếm bài viết | Tech Tips" />
        <meta
          property="og:description"
          content="Khám phá bài viết mới nhất về công nghệ, AI và bảo mật."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="vi_VN" />
      </Head>

      {/* FORM TÌM KIẾM */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          background: "#1e293b",
          padding: "8px 12px",
          borderRadius: "8px",
        }}
      >
        <input
          type="text"
          placeholder="Tìm kiếm bài viết..."
          value={query}
          onChange={(e) => {
            const value = e.target.value;
            setQuery(value);

            const keyword = value.trim().toLowerCase();
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
          }}
          autoFocus
          spellCheck="false"
          style={{
            flex: 1,
            background: "transparent",
            border: "none",
            outline: "none",
            color: "#fff",
            fontSize: "16px",
            padding: "6px 0",
          }}
        />

        <button
          type="submit"
          style={{
            background: "#4fc3f7",
            color: "#000",
            border: "none",
            padding: "8px 14px",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Tìm
        </button>
      </form>

      {/* GỢI Ý KHI GÕ */}
      {query && results.length > 0 && (
        <div
          style={{
            background: "#1e293b",
            borderRadius: "6px",
            marginTop: "4px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            position: "absolute",
            width: "calc(100% - 32px)",
            zIndex: 10,
            maxHeight: "280px",
            overflowY: "auto",
            scrollbarWidth: "thin",
          }}
        >
          {results.slice(0, 5).map((r) => (
            <a
              key={r.slug}
              href={`/bai-viet/${r.slug}`}
              style={{
                display: "block",
                padding: "8px 12px",
                color: "#fff",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.target.style.background = "#334155")}
              onMouseLeave={(e) => (e.target.style.background = "transparent")}
            >
              {r.title}
            </a>
          ))}
        </div>
      )}

      {/* KẾT QUẢ TÌM KIẾM */}
      <div style={{ marginTop: "20px", color: "#fff" }}>
        {results.length > 0 ? (
          results.map((r) => (
            <div
              key={r.slug}
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
                  style={{
                    color: "#4fc3f7",
                    fontWeight: 600,
                    fontSize: "17px",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.textDecoration = "underline")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.textDecoration = "none")
                  }
                >
                  {r.title}
                </a>
                <p style={{ color: "#aaa", fontSize: "14px", margin: "4px 0" }}>
                  {r.excerpt || "Không có mô tả ngắn..."}
                </p>
                <p style={{ color: "#777", fontSize: "13px" }}>
                  {new Date(r.date).toLocaleDateString("vi-VN")} — Tags:{" "}
                  {r.tags?.join(", ")}
                </p>
              </div>
            </div>
          ))
        ) : !query ? (
          <div>
            <h4 style={{ color: "#4fc3f7" }}>Từ khóa nổi bật:</h4>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {["AI", "Bảo mật", "Công nghệ xe", "Lập trình"].map((kw) => (
                <button
                  key={kw}
                  onClick={() => setQuery(kw)}
                  style={{
                    background: "#334155",
                    color: "#fff",
                    border: "none",
                    padding: "6px 12px",
                    borderRadius: "20px",
                    cursor: "pointer",
                  }}
                >
                  {kw}
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
