"use client";
import { useEffect, useState } from "react";

import { notFound } from "next/navigation";
import Head from "next/head";
import Link from "next/link";
import articles from "@/data/articles";
import ReactMarkdown from "react-markdown"; // ✅ thêm dòng này

export default function ArticleDetail({ params }) {
const [slug, setSlug] = useState(null);
const [article, setArticle] = useState(null);

useEffect(() => {
  const pathSlug = window.location.pathname.split("/").pop();
  setSlug(pathSlug);

  const found = articles.find((a) => a.slug === pathSlug);
  setArticle(found || null);
}, []);

const related = slug
  ? articles.filter((a) => a.slug !== slug).slice(0, 4)
  : [];



  
 if (!article) return <p style={{ color: "#ccc", textAlign: "center" }}>Đang tải dữ liệu...</p>;


  return (
    <div style={{ padding: "1rem", maxWidth: "800px", margin: "0 auto" }}>
      <Head>
        <title>{article.title} | Thủ Thuật Công Nghệ</title>
        <meta name="description" content={article.excerpt} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:image" content={article.cover} />
        {/* ✅ sửa lỗi cú pháp: thêm dấu backtick ` */}
        <meta property="og:url" content={`https://techtips.icu/bai-viet/${article.slug}`} />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={`https://techtips.icu/bai-viet/${article.slug}`} />
      </Head>

      <article>
        <h1 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>
          {article.title}
        </h1>

        <p
          style={{
            color: "#888",
            fontSize: "0.9rem",
            marginBottom: "1.5rem",
          }}
        >
          {article.date} — Tags:{" "}
          {Array.isArray(article.tags) ? article.tags.join(", ") : ""}
        </p>

        {article.cover && (
          <img
            src={article.cover}
            alt={article.title}
            style={{
              width: "100%",
              borderRadius: "8px",
              marginBottom: "1.5rem",
            }}
          />
        )}

        {/* ✅ DÙNG REACT MARKDOWN để hiển thị nội dung đẹp */}
        <div
          style={{
            lineHeight: 1.8,
            color: "#DDD",
            fontSize: "1rem",
            marginBottom: "2rem",
          }}
        >
          <ReactMarkdown
            components={{
              h1: ({ node, ...props }) => (
                <h1
                  style={{
                    fontSize: "1.6rem",
                    color: "#fff",
                    margin: "1.2rem 0 1rem",
                  }}
                  {...props}
                />
              ),
              h2: ({ node, ...props }) => (
                <h2
                  style={{
                    fontSize: "1.3rem",
                    color: "#9CDCFE",
                    margin: "1rem 0 0.8rem",
                  }}
                  {...props}
                />
              ),
              h3: ({ node, ...props }) => (
                <h3
                  style={{
                    fontSize: "1.1rem",
                    color: "#7FDBCA",
                    margin: "0.8rem 0 0.6rem",
                  }}
                  {...props}
                />
              ),
              p: ({ node, ...props }) => (
                <p
                  style={{
                    marginBottom: "1rem",
                    lineHeight: 1.8,
                    color: "#DDD",
                  }}
                  {...props}
                />
              ),
              strong: ({ node, ...props }) => (
                <strong style={{ color: "#FFD700" }} {...props} />
              ),
              em: ({ node, ...props }) => (
                <em style={{ color: "#e0e0e0" }} {...props} />
              ),
              ul: ({ node, ...props }) => (
                <ul
                  style={{
                    marginLeft: "1.2rem",
                    marginBottom: "1rem",
                  }}
                  {...props}
                />
              ),
              li: ({ node, ...props }) => (
                <li style={{ marginBottom: "0.5rem" }} {...props} />
              ),
              code: ({ node, inline, className, children, ...props }) => (
                <code
                  style={{
                    background: "#111",
                    padding: "2px 6px",
                    borderRadius: "6px",
                    color: "#58a6ff",
                    fontSize: "0.95em",
                  }}
                  {...props}
                >
                  {children}
                </code>
              ),
              a: ({ node, ...props }) => (
                <a
                  style={{
                    color: "#58a6ff",
                    textDecoration: "underline",
                  }}
                  {...props}
                />
              ),
              img: ({ node, ...props }) => (
                <img
                  style={{
                    maxWidth: "100%",
                    borderRadius: "8px",
                    margin: "1rem 0",
                  }}
                  {...props}
                />
              ),
            }}
          >
            {article.content || "Đang cập nhật nội dung..."}
          </ReactMarkdown>
        </div>

{/* 🔗 Bài viết liên quan (hiển thị đẹp) */}
{related.length > 0 && (
  <div style={{ marginTop: "2rem" }}>
    <h2
      style={{
        fontSize: "1.4rem",
        fontWeight: "bold",
        marginBottom: "1.5rem",
        color: "#fff",
      }}
    >
      Bài viết liên quan
    </h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "1.5rem",
      }}
    >
      {related.slice(0, 4).map((item) => (
        <Link
          key={item.id}
          href={`/bai-viet/${item.slug}`}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "1rem",
            textDecoration: "none",
            background: "#0d1117",
            border: "1px solid #222",
            borderRadius: "12px",
            padding: "1rem",
            transition: "all 0.2s ease",
          }}
        >
          <img
            src={item.cover}
            alt={item.title}
            style={{
              width: "120px",
              height: "80px",
              objectFit: "cover",
              borderRadius: "8px",
              flexShrink: 0,
            }}
          />

          <div style={{ flex: 1 }}>
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: "600",
                color: "#58a6ff",
                marginBottom: "0.3rem",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: "#aaa",
                fontSize: "0.9rem",
                marginBottom: "0.3rem",
              }}
            >
              {item.excerpt?.slice(0, 90)}...
            </p>

            <p
              style={{
                fontSize: "0.8rem",
                color: "#777",
              }}
            >
              {item.date} —{" "}
              {Array.isArray(item.tags) ? item.tags.slice(0, 3).join(", ") : ""}
            </p>
          </div>
        </Link>
      ))}
    </div>
  </div>
)}


      </article>
    </div>
  );
}
