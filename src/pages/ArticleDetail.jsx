"use client";

import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { notFound } from "next/navigation";
import articles from "@/data/articles"; // alias @ trỏ tới src/
import { Helmet } from "react-helmet-async";

export default function ArticleDetail({ params }) {
  const { slug } = params;
  const article = articles.find((a) => a.slug === slug);

  // ❌ Nếu không có bài viết → 404
  if (!article) {
    notFound();
  }

  // ✅ Cuộn lên đầu khi đổi slug
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  // ✅ Bài viết liên quan
  const related = articles.filter(
    (a) =>
      a.id !== article.id &&
      (a.tags || []).some((tag) => (article.tags || []).includes(tag))
  );

  return (
    <div style={{ padding: "1rem", maxWidth: "800px", margin: "0 auto" }}>
      <Helmet>
        <title>{article.title} | TechTips</title>
        <meta
          name="description"
          content={
            article.content
              ? article.content.substring(0, 150).replace(/\n/g, " ") + "..."
              : "Bài viết chia sẻ thủ thuật công nghệ, mẹo máy tính, điện thoại và phần mềm hữu ích."
          }
        />
      </Helmet>

      {/* 📝 Tiêu đề */}
      <h1
        style={{
          fontSize: "1.8rem",
          fontWeight: 700,
          marginBottom: "0.5rem",
          lineHeight: 1.3,
          color: "#FFFFFF",
        }}
      >
        {article.title}
      </h1>

      <p style={{ color: "#CCCCCC", fontSize: "0.9rem", marginBottom: "1rem" }}>
        {article.date} — Tags:{" "}
        {Array.isArray(article.tags) ? article.tags.join(", ") : ""}
      </p>

      {/* 🖼 Ảnh cover */}
      {article.cover && (
        <img
          src={article.cover}
          alt={article.title}
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
            borderRadius: "8px",
            marginBottom: "1.5rem",
          }}
        />
      )}

      {/* 📄 Nội dung */}
      <div
        style={{
          lineHeight: "1.7",
          fontSize: "1rem",
          color: "#FFFFFF",
          marginBottom: "2rem",
        }}
      >
        <ReactMarkdown
          components={{
            hr: () => (
              <hr
                style={{
                  border: "none",
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                  margin: "1.5rem 0",
                }}
              />
            ),
          }}
        >
          {article.content}
        </ReactMarkdown>
      </div>

      {/* 🔗 Bài viết liên quan */}
      {related.length > 0 && (
        <div>
          <h3 style={{ marginBottom: "1rem", color: "#fff" }}>
            Bài viết liên quan
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {related.slice(0, 4).map((r) => (
              <div
                key={r.id}
                style={{
                  display: "flex",
                  gap: "16px",
                  borderBottom: "1px solid rgba(150,130,90,0.25)",
                  paddingBottom: "16px",
                  marginBottom: "16px",
                }}
                title={r.excerpt}
              >
                {r.cover && (
                  <Link href={`/bai-viet/${r.slug}`}>
                    <img
                      src={r.cover}
                      alt={r.title}
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
                    href={`/bai-viet/${r.slug}`}
                    style={{
                      color: "#EAEAEA",
                      fontWeight: 600,
                      textDecoration: "none",
                      fontSize: "1rem",
                      lineHeight: 1.4,
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
                    {r.title}
                  </Link>

                  <p
                    style={{
                      color: "#999",
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                      margin: "0 0 6px 0",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {r.excerpt}
                  </p>

                  <p style={{ color: "#888", fontSize: "0.8rem" }}>
                    {r.date} — Tags:{" "}
                    {Array.isArray(r.tags) ? r.tags.join(", ") : ""}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
