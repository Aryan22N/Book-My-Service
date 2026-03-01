// CategorySection — Server Component
// Fetches service_categories from Supabase (already seeded with 8 rows).
// UI color/icon properties are mapped from slug on the frontend
// since those are display-only constants that don't belong in the DB.
import { createClient } from "@/lib/supabase/server";

// Map: service_categories.slug → landing page UI colours + icon name
const CATEGORY_UI = {
    "home-cleaning": {
        icon: "cleaning_services",
        color: "#2563eb",
        bgColor: "#dbeafe",
    },
    plumbing: {
        icon: "plumbing",
        color: "#0891b2",
        bgColor: "#cffafe",
    },
    electrical: {
        icon: "bolt",
        color: "#d97706",
        bgColor: "#fef3c7",
    },
    "ac-servicing": {
        icon: "ac_unit",
        color: "#16a34a",
        bgColor: "#dcfce7",
    },
    painting: {
        icon: "format_paint",
        color: "#9333ea",
        bgColor: "#f3e8ff",
    },
    carpentry: {
        icon: "carpenter",
        color: "#c026d3",
        bgColor: "#fae8ff",
    },
    "pest-control": {
        icon: "pest_control",
        color: "#dc2626",
        bgColor: "#fee2e2",
    },
    "appliance-repair": {
        icon: "home_repair_service",
        color: "#ca8a04",
        bgColor: "#fef9c3",
    },
};

export default async function CategorySection() {
    const supabase = await createClient();

    // Fetch top 4 active categories ordered by display_order
    const { data: categories, error } = await supabase
        .from("service_categories")
        .select("id, name, slug, description")
        .eq("is_active", true)
        .order("display_order", { ascending: true })
        .limit(4);

    // Graceful fallback on error
    const items = error || !categories ? [] : categories;

    return (
        <section style={{ padding: "5rem 0", background: "#f8fafc" }}>
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
                        href="/explore"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            fontSize: "0.875rem",
                            fontWeight: 700,
                            color: "#4338ca",
                            textDecoration: "none",
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
                    {items.map((cat) => {
                        const ui = CATEGORY_UI[cat.slug] ?? {
                            icon: "home_repair_service",
                            color: "#4338ca",
                            bgColor: "#e0e7ff",
                        };
                        return (
                            <CategoryCard
                                key={cat.id}
                                icon={ui.icon}
                                title={cat.name}
                                subtitle={cat.description}
                                color={ui.color}
                                bgColor={ui.bgColor}
                            />
                        );
                    })}
                </div>
            </div>

        </section>
    );
}

function CategoryCard({ icon, title, subtitle, color, bgColor }) {
    return (
        <a
            href="/explore"
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
        >
            <div>
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
                    }}
                >
                    <span className="material-symbols-outlined" style={{ fontSize: "1.75rem" }}>
                        {icon}
                    </span>
                </div>
                <h3
                    style={{
                        marginBottom: "0.5rem",
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        color: "#0f172a",
                    }}
                >
                    {title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "#64748b" }}>{subtitle}</p>
            </div>
        </a>
    );
}
