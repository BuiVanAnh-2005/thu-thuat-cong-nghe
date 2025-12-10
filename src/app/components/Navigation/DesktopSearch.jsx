export default function DesktopSearch({
  scrolled,
  showSearch,
  query,
  setQuery,
}) {
  return (
    <div
      style={{
        position: "fixed",
        top: scrolled ? 0 : 70,
        right: 0,
        height: "50px",
        transform: showSearch ? "translateX(0)" : "translateX(100%)",
        background: "#0f172a",
        borderLeft: "1px solid #334155",
        
        opacity: showSearch ? 1 : 0,
        display: "flex",
        alignItems: "center",
        transition: "transform 260ms ease, opacity 200ms ease, top 200ms ease",
        zIndex: 70,
      }}
    >
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            window.location.href = `/tim-kiem?q=${encodeURIComponent(query)}`;
          }
        }}
        placeholder="Tìm kiếm..."
        style={{
          width: "100%",
          height: "32px",
          background: "#1e293b",
          color: "#fff",
          border: "none",
          padding: "0 10px",
          outline: "none",
          borderRadius: "4px",
        }}
      />
    </div>
  );
}
