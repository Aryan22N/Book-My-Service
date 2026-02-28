"use client";

const projects = [
    {
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPLu8VIs47av9Gx4evGABFTweZvFe7zCJhhnriuvguGXgwl3npAub-T5C5kJZ198sClYGvaIP_SOi6q-k5D2ipMuIfBhJKhpXoCkUqGKGHmDL3N3VXgVzsKRC6Xxf-iPX6uOwX5vUbvj_zgvplkZBJ1cfYHst10tAnyNMyYPdK19WKiK3Axw7kaZ70HvgSV2R0yKJ6-ZiHa-M7YR5KVBxB1s6b877cm2aVk18MNxUU9ONph4xWYrnmj70iJf3bP5fRiAQZi0MJrn0m",
        badge: "After",
        badgeColor: "#000000b3",
        title: "Modern Kitchen Renovation",
        subtitle: "Completed by David Rossi • 3 weeks duration",
        budget: "$15k – $20k",
        location: "Portland, OR",
    },
    {
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCf6iiH3WJPYzR10i_z3qc9YaLUDJHqAg5aENnTMRhLjvCvWYbsS32rLEvYjqGD0T6NU0vmjM1xOR0bMuRoNhbGsuRcD_x41Mm3o3Hu0Feyr8Ba3E-VDI4r_gKbGXdIi3TYj36w8uFQwV9Sxale7Awz59dgpxnPtq675L5PfLRxQg7SYHOXtmxhmpVV8d_pbmIEM1TtmxlOgrq24MHHw6Blc6wq7kvBhIMGzpFjwbrGYl2W-hJ1w6LUQRdm29l7ArpH2oz7ldlokYd4",
        badge: "In Progress",
        badgeColor: "#000000b3",
        title: "Commercial Wiring Upgrade",
        subtitle: "Led by Michael Chen • 1 week remaining",
        budget: "$8k – $12k",
        location: "Seattle, WA",
    },
];

export default function RecentProjectsSection() {
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
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
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
                    <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "white", marginBottom: "0.25rem" }}>
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
                    <p style={{ fontSize: "0.7rem", fontWeight: 600, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.25rem" }}>
                        Budget
                    </p>
                    <p style={{ fontWeight: 700, color: "#0f172a" }}>{budget}</p>
                </div>
                <div>
                    <p style={{ fontSize: "0.7rem", fontWeight: 600, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.25rem" }}>
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
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#4338ca";
                        e.currentTarget.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = "#f8fafc";
                        e.currentTarget.style.color = "#4338ca";
                    }}
                >
                    <span className="material-symbols-outlined" style={{ fontSize: "1.1rem" }}>
                        arrow_outward
                    </span>
                </button>
            </div>

            <style jsx>{`
        .project-card:hover .project-img {
          transform: scale(1.05);
        }
        .project-card:hover {
          box-shadow: 0 20px 60px rgba(0,0,0,0.12);
        }
      `}</style>
        </div>
    );
}
