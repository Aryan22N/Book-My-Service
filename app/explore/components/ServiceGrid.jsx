"use client";

import { useState } from "react";

export default function ServiceGrid({ categories = [] }) {
    return (
        <>
            {/* Grid */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(5, 1fr)",
                    gap: "1.5rem",
                }}
                className="service-grid"
            >
                {categories.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>

            {/* View All button */}
            <div style={{ marginTop: "3rem", display: "flex", justifyContent: "center" }}>
                <button
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        borderRadius: "0.75rem",
                        border: "1px solid #f0f2f4",
                        background: "white",
                        padding: "0.75rem 2rem",
                        fontSize: "0.875rem",
                        fontWeight: 700,
                        color: "#111318",
                        cursor: "pointer",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                        transition: "all 0.15s ease",
                        fontFamily: "inherit",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "rgba(19,91,236,0.4)";
                        e.currentTarget.style.background = "#f6f6f8";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "#f0f2f4";
                        e.currentTarget.style.background = "white";
                    }}
                >
                    <span>View All Categories</span>
                    <span className="material-symbols-outlined" style={{ fontSize: "1.1rem" }}>
                        arrow_forward
                    </span>
                </button>
            </div>

            <style jsx>{`
        @media (max-width: 1280px) {
          .service-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (max-width: 1024px) {
          .service-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .service-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .service-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </>
    );
}

function ServiceCard({ service }) {
    const [hovered, setHovered] = useState(false);

    return (
        <a
            href="#"
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                borderRadius: "1rem",
                background: hovered ? "white" : "#f6f6f8",
                padding: "1rem",
                textDecoration: "none",
                transition: "all 0.25s ease",
                boxShadow: hovered ? "0 12px 40px rgba(19,91,236,0.08)" : "none",
                transform: hovered ? "translateY(-4px)" : "translateY(0)",
                position: "relative",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Image */}
            <div
                style={{
                    position: "relative",
                    aspectRatio: "4/3",
                    width: "100%",
                    overflow: "hidden",
                    borderRadius: "0.75rem",
                    background: "#f0f2f4",
                }}
            >
                <img
                    src={service.image}
                    alt={service.imageAlt}
                    style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s ease",
                        transform: hovered ? "scale(1.1)" : "scale(1)",
                    }}
                />
                {/* Icon badge */}
                <div
                    style={{
                        position: "absolute",
                        right: "0.75rem",
                        top: "0.75rem",
                        display: "flex",
                        height: "2rem",
                        width: "2rem",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "9999px",
                        background: "rgba(255,255,255,0.9)",
                        backdropFilter: "blur(4px)",
                        color: "#135bec",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                    }}
                >
                    <span className="material-symbols-outlined" style={{ fontSize: "1.1rem" }}>
                        {service.icon}
                    </span>
                </div>
            </div>

            {/* Info */}
            <div>
                {/* Title + rating */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                    <h3
                        style={{
                            fontSize: "1rem",
                            fontWeight: 700,
                            color: hovered ? "#135bec" : "#111318",
                            transition: "color 0.2s",
                        }}
                    >
                        {service.title}
                    </h3>
                    <div
                        style={{ display: "flex", alignItems: "center", gap: "0.25rem", fontSize: "0.75rem", fontWeight: 500, color: "#f59e0b" }}
                    >
                        <span className="material-symbols-outlined" style={{ fontSize: "0.875rem" }}>
                            star
                        </span>
                        <span>{service.rating}</span>
                    </div>
                </div>

                {/* Description */}
                <p
                    style={{
                        marginTop: "0.25rem",
                        fontSize: "0.8125rem",
                        color: "#616f89",
                        lineHeight: 1.5,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                    }}
                >
                    {service.description}
                </p>

                {/* Price row */}
                <div
                    style={{
                        marginTop: "0.75rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderTop: "1px solid #f0f2f4",
                        paddingTop: "0.75rem",
                    }}
                >
                    <span style={{ fontSize: "0.75rem", fontWeight: 500, color: "#9ca3af" }}>Starts from</span>
                    <span style={{ fontSize: "1rem", fontWeight: 700, color: "#111318" }}>{service.startPrice}</span>
                </div>
            </div>
        </a>
    );
}
