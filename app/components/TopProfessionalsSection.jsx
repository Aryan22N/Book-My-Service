// TopProfessionalsSection — Server Component
// Fetches from featured_professionals table in Supabase.
// Run 002_landing_page_tables.sql in the Supabase SQL Editor first.
import { createClient } from "@/lib/supabase/server";

export default async function TopProfessionalsSection() {
    const supabase = await createClient();

    const { data: professionals, error } = await supabase
        .from("featured_professionals")
        .select("id, name, role, avatar_url, avg_rating, rate, tags")
        .eq("is_active", true)
        .order("sort_order", { ascending: true })
        .limit(3);

    const items = error || !professionals ? [] : professionals;

    return (
        <section
            style={{
                padding: "5rem 0 7rem",
                background: "white",
                borderTop: "1px solid #e2e8f0",
            }}
        >
            <div style={{ margin: "0 auto", maxWidth: "80rem", padding: "0 2rem" }}>
                {/* Header */}
                <div
                    style={{
                        marginBottom: "3rem",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        flexWrap: "wrap",
                        gap: "1rem",
                    }}
                >
                    <div>
                        <h2
                            style={{
                                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                                fontWeight: 700,
                                letterSpacing: "-0.03em",
                                color: "#0f172a",
                            }}
                        >
                            Top Rated Professionals
                        </h2>
                        <p style={{ marginTop: "0.5rem", fontSize: "1.1rem", color: "#64748b" }}>
                            Vetted experts ready to tackle your next challenge.
                        </p>
                    </div>
                    <a
                        href="/explore"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            borderRadius: "0.75rem",
                            border: "1px solid #e2e8f0",
                            background: "#f8fafc",
                            padding: "0.625rem 1.25rem",
                            fontSize: "0.875rem",
                            fontWeight: 700,
                            color: "#0f172a",
                            textDecoration: "none",
                            transition: "all 0.2s ease",
                        }}
                    >
                        Browse all talent
                        <span className="material-symbols-outlined" style={{ fontSize: "1.1rem" }}>
                            arrow_forward
                        </span>
                    </a>
                </div>

                {/* Cards Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "2rem",
                    }}
                    className="pros-grid"
                >
                    {items.map((pro) => (
                        <ProfessionalCard
                            key={pro.id}
                            image={pro.avatar_url}
                            name={pro.name}
                            role={pro.role}
                            rating={pro.avg_rating}
                            rate={pro.rate}
                            tags={pro.tags ?? []}
                        />
                    ))}
                </div>
            </div>

        </section>
    );
}

function ProfessionalCard({ image, name, role, rating, rate, tags }) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                borderRadius: "1.5rem",
                border: "1px solid #e2e8f0",
                background: "white",
                boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                transition: "all 0.3s ease",
                position: "relative",
            }}
            className="pro-card"
        >
            {/* Image */}
            <div
                style={{
                    aspectRatio: "4/3",
                    overflow: "hidden",
                    background: "#f1f5f9",
                    position: "relative",
                }}
            >
                <img
                    src={image}
                    alt={name}
                    style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                        transition: "transform 0.7s ease",
                    }}
                    className="pro-img"
                />
                {/* Rating badge */}
                <div
                    style={{
                        position: "absolute",
                        top: "1rem",
                        right: "1rem",
                        background: "rgba(255,255,255,0.92)",
                        backdropFilter: "blur(8px)",
                        padding: "0.25rem 0.625rem",
                        borderRadius: "0.5rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.25rem",
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    }}
                >
                    <span
                        className="material-symbols-outlined"
                        style={{ fontSize: "0.875rem", color: "#eab308" }}
                    >
                        star
                    </span>
                    {Number(rating).toFixed(1)}
                </div>
            </div>

            {/* Content */}
            <div
                style={{
                    display: "flex",
                    flex: 1,
                    flexDirection: "column",
                    padding: "1.5rem",
                }}
            >
                <div style={{ marginBottom: "1rem" }}>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0f172a" }}>
                        {name}
                    </h3>
                    <p style={{ fontSize: "0.875rem", color: "#4338ca", fontWeight: 600 }}>
                        {role}
                    </p>
                </div>

                {/* Tags */}
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.5rem",
                        marginBottom: "1rem",
                    }}
                >
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            style={{
                                background: "#f8fafc",
                                padding: "0.25rem 0.625rem",
                                borderRadius: "0.25rem",
                                fontSize: "0.75rem",
                                color: "#64748b",
                                fontWeight: 500,
                                border: "1px solid #e2e8f0",
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Footer */}
                <div
                    style={{
                        marginTop: "auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderTop: "1px solid #e2e8f0",
                        paddingTop: "1rem",
                    }}
                >
                    <div>
                        <span style={{ display: "block", fontSize: "0.75rem", color: "#64748b" }}>
                            Rate
                        </span>
                        <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "#0f172a" }}>
                            {rate}
                        </span>
                    </div>
                    <a
                        href="/profile"
                        style={{
                            fontSize: "0.875rem",
                            fontWeight: 700,
                            color: "#4338ca",
                            textDecoration: "underline",
                            textUnderlineOffset: "3px",
                        }}
                    >
                        View Profile
                    </a>
                </div>
            </div>

        </div>
    );
}
