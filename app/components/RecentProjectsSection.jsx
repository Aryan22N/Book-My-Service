// RecentProjectsSection — Server Component
// Fetches from featured_projects table in Supabase.
// Run 002_landing_page_tables.sql in the Supabase SQL Editor first.
import { createClient } from "@/lib/supabase/server";

export default async function RecentProjectsSection() {
    const supabase = await createClient();

    const { data: projects, error } = await supabase
        .from("featured_projects")
        .select("id, title, subtitle, badge, image_url, budget, location")
        .eq("is_active", true)
        .order("sort_order", { ascending: true })
        .limit(2);

    const items = error || !projects ? [] : projects;

    return (
        <section
            style={{
                padding: "5rem 0",
                background: "white",
                overflow: "hidden",
            }}
        >
            <div style={{ margin: "0 auto", maxWidth: "80rem", padding: "0 2rem" }}>
                {/* Header */}
                <div style={{ marginBottom: "3rem" }}>
                    <span
                        style={{
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "#4338ca",
                        }}
                    >
                        Real Results
                    </span>
                    <h2
                        style={{
                            fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                            fontWeight: 700,
                            letterSpacing: "-0.03em",
                            color: "#0f172a",
                            marginTop: "0.5rem",
                        }}
                    >
                        Recent Successful Projects
                    </h2>
                </div>

                {/* Cards Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: "2rem",
                    }}
                    className="projects-grid"
                >
                    {items.map((project) => (
                        <ProjectCard
                            key={project.id}
                            image={project.image_url}
                            badge={project.badge}
                            title={project.title}
                            subtitle={project.subtitle}
                            budget={project.budget}
                            location={project.location}
                        />
                    ))}
                </div>
            </div>

        </section>
    );
}

function ProjectCard({ image, badge, title, subtitle, budget, location }) {
    return (
        <div
            style={{
                borderRadius: "1.5rem",
                overflow: "hidden",
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                border: "1px solid #e2e8f0",
                background: "#f8fafc",
                transition: "box-shadow 0.3s ease",
            }}
            className="project-card"
        >
            {/* Image */}
            <div style={{ position: "relative", height: "20rem", overflow: "hidden" }}>
                <img
                    src={image}
                    alt={title}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.7s ease",
                    }}
                    className="project-img"
                />
                {/* Badge */}
                <div
                    style={{
                        position: "absolute",
                        top: "1rem",
                        left: "1rem",
                        background: "rgba(0,0,0,0.65)",
                        backdropFilter: "blur(8px)",
                        color: "white",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        padding: "0.25rem 0.75rem",
                        borderRadius: "9999px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                    }}
                >
                    {badge}
                </div>
                {/* Gradient overlay */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                    }}
                />
                {/* Title overlay */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "1.5rem",
                        left: "1.5rem",
                        right: "1.5rem",
                    }}
                >
                    <h3
                        style={{
                            fontSize: "1.5rem",
                            fontWeight: 700,
                            color: "white",
                            marginBottom: "0.25rem",
                        }}
                    >
                        {title}
                    </h3>
                    <p style={{ fontSize: "0.875rem", color: "#cbd5e1" }}>{subtitle}</p>
                </div>
            </div>

            {/* Footer */}
            <div
                style={{
                    padding: "1.5rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <div>
                    <p
                        style={{
                            fontSize: "0.7rem",
                            fontWeight: 600,
                            color: "#64748b",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                            marginBottom: "0.25rem",
                        }}
                    >
                        Budget
                    </p>
                    <p style={{ fontWeight: 700, color: "#0f172a" }}>{budget}</p>
                </div>
                <div>
                    <p
                        style={{
                            fontSize: "0.7rem",
                            fontWeight: 600,
                            color: "#64748b",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                            marginBottom: "0.25rem",
                        }}
                    >
                        Location
                    </p>
                    <p style={{ fontWeight: 700, color: "#0f172a" }}>{location}</p>
                </div>
                <button
                    style={{
                        borderRadius: "9999px",
                        height: "2.5rem",
                        width: "2.5rem",
                        background: "#f8fafc",
                        border: "1px solid #e2e8f0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#4338ca",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                    }}
                >
                    <span className="material-symbols-outlined" style={{ fontSize: "1.1rem" }}>
                        arrow_outward
                    </span>
                </button>
            </div>

        </div>
    );
}
