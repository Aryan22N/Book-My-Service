"use client";

const categories = [
    {
        icon: "cleaning_services",
        title: "Cleaning",
        subtitle: "Residential & Commercial",
        color: "#2563eb",
        bgColor: "#dbeafe",
        hoverBg: "rgba(219,234,254,0.5)",
        count: "120+ Pros",
    },
    {
        icon: "plumbing",
        title: "Plumbing",
        subtitle: "Installation & Repair",
        color: "#0891b2",
        bgColor: "#cffafe",
        hoverBg: "rgba(207,250,254,0.5)",
        count: "85+ Pros",
    },
    {
        icon: "bolt",
        title: "Electrical",
        subtitle: "Certified Electricians",
        color: "#d97706",
        bgColor: "#fef3c7",
        hoverBg: "rgba(254,243,199,0.5)",
        count: "90+ Pros",
    },
    {
        icon: "spa",
        title: "Wellness",
        subtitle: "Personal Care Services",
        color: "#db2777",
        bgColor: "#fce7f3",
        hoverBg: "rgba(252,231,243,0.5)",
        count: "60+ Pros",
    },
];

export default function CategorySection() {
    return (
        <section
            style={{
                padding: "5rem 0",
                background: "#f8fafc",
            }}
        >
            <div style={{ margin: "0 auto", maxWidth: "80rem", padding: "0 2rem" }}>
                {/* Header */}
                <div
                    style={{
                        marginBottom: "3rem",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-end",
                        justifyContent: "space-between",
                        gap: "1.5rem",
                        flexWrap: "wrap",
                    }}
                >
                    <div style={{ maxWidth: "32rem" }}>
                        <h2
                            style={{
                                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                                fontWeight: 700,
                                letterSpacing: "-0.03em",
                                color: "#0f172a",
                            }}
                        >
                            Expertise by Category
                        </h2>
                        <p style={{ marginTop: "1rem", fontSize: "1.1rem", color: "#64748b" }}>
                            Specialized professionals for every scale of project.
                        </p>
                    </div>
                    <a
                        href="#"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            fontSize: "0.875rem",
                            fontWeight: 700,
                            color: "#4338ca",
                            textDecoration: "none",
                            transition: "color 0.2s",
                        }}
                    >
                        Explore all services{" "}
                        <span className="material-symbols-outlined" style={{ fontSize: "1.1rem" }}>
                            arrow_forward
                        </span>
                    </a>
                </div>

                {/* Cards Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "1.5rem",
                    }}
                    className="category-grid"
                >
                    {categories.map((cat) => (
                        <CategoryCard key={cat.title} {...cat} />
                    ))}
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 1024px) {
          .category-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .category-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
}

function CategoryCard({ icon, title, subtitle, color, bgColor, hoverBg, count }) {
    return (
        <a
            href="#"
            style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                overflow: "hidden",
                borderRadius: "1rem",
                background: "white",
                padding: "2rem",
                boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                textDecoration: "none",
                transition: "all 0.3s ease",
                border: "1px solid #f1f5f9",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.12)";
                e.currentTarget.style.borderColor = "#e0e7ff";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.06)";
                e.currentTarget.style.borderColor = "#f1f5f9";
            }}
        >
            <div>
                {/* Icon */}
                <div
                    style={{
                        marginBottom: "1.5rem",
                        display: "inline-flex",
                        width: "3.5rem",
                        height: "3.5rem",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "0.875rem",
                        background: bgColor,
                        color: color,
                        transition: "transform 0.3s ease",
                    }}
                >
                    <span className="material-symbols-outlined" style={{ fontSize: "1.75rem" }}>
                        {icon}
                    </span>
                </div>

                <h3 style={{ marginBottom: "0.5rem", fontSize: "1.25rem", fontWeight: 700, color: "#0f172a" }}>
                    {title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "#64748b" }}>{subtitle}</p>
            </div>

            <div style={{ marginTop: "1rem" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: color }}>{count}</span>
            </div>
        </a>
    );
}
