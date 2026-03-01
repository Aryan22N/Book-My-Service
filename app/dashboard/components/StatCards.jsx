"use client";

export default function StatCards({ statCards = [] }) {
    return (
        <section
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1.5rem",
            }}
            className="stat-grid"
        >
            {statCards.map((card) => (
                <StatCard key={card.id} card={card} />
            ))}

            <style jsx>{`
        @media (max-width: 1024px) {
          .stat-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .stat-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
}

function StatCard({ card }) {
    return (
        <div
            style={{
                background: "white",
                padding: "1.5rem",
                borderRadius: "1rem",
                border: "1px solid #dbdfe6",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                transition: "border-color 0.2s ease",
                cursor: "default",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(19,91,236,0.4)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#dbdfe6")}
        >
            {/* Top row: icon + optional badge */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div
                    style={{
                        padding: "0.75rem",
                        borderRadius: "0.75rem",
                        background: card.iconBg,
                        color: card.iconColor,
                        display: "inline-flex",
                    }}
                >
                    <span
                        className="material-symbols-outlined"
                        style={{ fontSize: "1.25rem", fontVariationSettings: "'FILL' 1" }}
                    >
                        {card.icon}
                    </span>
                </div>

                {card.badge && (
                    <span
                        style={{
                            background: card.badgeBg,
                            color: card.badgeColor,
                            fontSize: "0.7rem",
                            fontWeight: 700,
                            padding: "0.25rem 0.625rem",
                            borderRadius: "9999px",
                        }}
                    >
                        {card.badge}
                    </span>
                )}
            </div>

            {/* Value */}
            <div>
                <p style={{ fontSize: "0.875rem", fontWeight: 500, color: "#616f89", marginBottom: "0.25rem" }}>
                    {card.label}
                </p>
                <h3 style={{ fontSize: "2rem", fontWeight: 700, color: "#111318", letterSpacing: "-0.02em" }}>
                    {card.value}
                </h3>
            </div>
        </div>
    );
}
