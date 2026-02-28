"use client";

const professionals = [
    {
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCo7zTdhVacNbfmMq-fmN87mdYrMTJJH26m2XRmwYWQoYMbIHh995sTKPjM6-SrmJ4DfYXjSvdWCBwVxh84T0PJbeUoWHUakPSCjm1BAosqtZcngHgx1BTMJfk_wZ9SzCLPZjlUhvwL3yBZrN8pYu0vON_yJnXR3we6JDO72akWguxCOKgzVrynp_WrTTBfchYwcPu8caKQZIG2G8b87BOgNkpv23X9BybAqqKyP_rClsfTaM8fRbCLK-acwARKVix7yAhGtxZb_OC2",
        name: "Sarah Jenkins",
        role: "Cleaning Specialist",
        rating: "4.9",
        rate: "$35/hr",
        tags: ["Deep Clean", "Eco-Friendly"],
    },
    {
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsbn4peuVIHghpQMsFGROHzxM9kFCYXnWxDIXeoSvgd3Ow3SlUc033G78hxLDECC4KJwb7sEbgTmo5_T-JAcsEkXrYr2AnrWb5wsKLWzOkR6JLqv9cpvMuQf0o0xxWL2BZZAmyMp0Cz3HA74csplPqanJ0llydZZuFZOE7m0pOdVvMG7VUfu2AjM9F9cK1Coo0Ld9W-MAHMVkW8sOJDuJo-bAB2kDZP1SUyPSJ9w4Pa9Wjypgk2lRvm_B6-2kENTA5f7hWghrWdy2A",
        name: "Michael Chen",
        role: "Master Electrician",
        rating: "5.0",
        rate: "$85/hr",
        tags: ["Rewiring", "Commercial"],
    },
    {
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPLu8VIs47av9Gx4evGABFTweZvFe7zCJhhnriuvguGXgwl3npAub-T5C5kJZ198sClYGvaIP_SOi6q-k5D2ipMuIfBhJKhpXoCkUqGKGHmDL3N3VXgVzsKRC6Xxf-iPX6uOwX5vUbvj_zgvplkZBJ1cfYHst10tAnyNMyYPdK19WKiK3Axw7kaZ70HvgSV2R0yKJ6-ZiHa-M7YR5KVBxB1s6b877cm2aVk18MNxUU9ONph4xWYrnmj70iJf3bP5fRiAQZi0MJrn0m",
        name: "David Rossi",
        role: "Plumbing Expert",
        rating: "4.8",
        rate: "$70/hr",
        tags: ["Pipe Repair", "Emergency"],
    },
];

export default function TopProfessionalsSection() {
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
                        href="#"
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
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "#4338ca";
                            e.currentTarget.style.color = "#4338ca";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "#e2e8f0";
                            e.currentTarget.style.color = "#0f172a";
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
                    {professionals.map((pro) => (
                        <ProfessionalCard key={pro.name} {...pro} />
                    ))}
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 1024px) {
          .pros-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .pros-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
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
            <div style={{ aspectRatio: "4/3", overflow: "hidden", background: "#f1f5f9", position: "relative" }}>
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
                    <span className="material-symbols-outlined" style={{ fontSize: "0.875rem", color: "#eab308" }}>
                        star
                    </span>
                    {rating}
                </div>
            </div>

            {/* Content */}
            <div style={{ display: "flex", flex: 1, flexDirection: "column", padding: "1.5rem" }}>
                <div style={{ marginBottom: "1rem" }}>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0f172a" }}>{name}</h3>
                    <p style={{ fontSize: "0.875rem", color: "#4338ca", fontWeight: 600 }}>{role}</p>
                </div>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
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
                        <span style={{ display: "block", fontSize: "0.75rem", color: "#64748b" }}>Rate</span>
                        <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "#0f172a" }}>{rate}</span>
                    </div>
                    <button
                        style={{
                            fontSize: "0.875rem",
                            fontWeight: 700,
                            color: "#4338ca",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            textDecoration: "underline",
                            textUnderlineOffset: "3px",
                        }}
                    >
                        View Profile
                    </button>
                </div>
            </div>

            <style jsx>{`
        .pro-card:hover {
          box-shadow: 0 20px 60px rgba(0,0,0,0.12);
          transform: translateY(-4px);
        }
        .pro-card:hover .pro-img {
          transform: scale(1.05);
        }
      `}</style>
        </div>
    );
}
