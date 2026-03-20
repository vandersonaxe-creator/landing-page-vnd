export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div
      className="overflow-hidden py-4"
      style={{
        borderTop: "0.5px solid var(--color-border)",
        borderBottom: "0.5px solid var(--color-border)",
        background: "var(--color-surface)",
      }}
    >
      <div
        className="animate-marquee"
        style={{ display: "flex", gap: "48px", width: "max-content" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              fontSize: "11px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--color-muted)",
              whiteSpace: "nowrap",
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 500,
            }}
          >
            <span
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: "var(--color-accent)",
                flexShrink: 0,
                opacity: 0.8,
              }}
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
