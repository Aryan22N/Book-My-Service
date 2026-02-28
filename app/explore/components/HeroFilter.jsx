"use client";

export default function HeroFilter() {
    return (
        <section
            style={{
                marginBottom: "2.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "1rem",
                }}
            >
                {/* Title */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <h1
                        style={{
                            fontSize: "clamp(1.875rem, 4vw, 2.5rem)",
                            fontWeight: 900,
                            letterSpacing: "-0.03em",
                            color: "#111318",
                        }}
                    >
                        Explore Categories
                    </h1>
                    <p style={{ fontSize: "0.9375rem", color: "#616f89" }}>
                        Find the right professional for your needs.
                    </p>
                </div>

                {/* Filters */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                    <FilterButton icon="location_on" label="New York, NY" hasChevron />
                    <FilterButton icon="filter_list" label="Filters" />
                </div>
            </div>
        </section>
    );
}

function FilterButton({ icon, label, hasChevron }) {
    return (
        <button
            style={{
                display: "flex",
                height: "2.5rem",
                alignItems: "center",
                gap: "0.5rem",
                borderRadius: "0.75rem",
                border: "1px solid #f0f2f4",
                background: "white",
                padding: "0 1rem",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "#111318",
                cursor: "pointer",
                transition: "all 0.15s ease",
                fontFamily: "inherit",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(19,91,236,0.4)";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#f0f2f4";
                e.currentTarget.style.boxShadow = "none";
            }}
        >
            <span className="material-symbols-outlined" style={{ fontSize: "1.1rem", color: "#616f89" }}>
                {icon}
            </span>
            <span>{label}</span>
            {hasChevron && (
                <span className="material-symbols-outlined" style={{ fontSize: "1.1rem", color: "#616f89" }}>
                    expand_more
                </span>
            )}
        </button>
    );
}
