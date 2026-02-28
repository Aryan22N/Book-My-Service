"use client";

import { professional } from "../data";

export default function AboutSection() {
    return (
        <div
            style={{
                borderRadius: "0.75rem",
                border: "1px solid #e2e8f0",
                background: "white",
                padding: "1.5rem",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            }}
        >
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0f172a", marginBottom: "1rem", letterSpacing: "-0.015em" }}>
                About Me
            </h2>
            <p style={{ fontSize: "1rem", color: "#475569", lineHeight: 1.75 }}>
                {professional.bio}
            </p>

            {/* Stats grid */}
            <div
                style={{
                    marginTop: "1.5rem",
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "1rem",
                }}
                className="stats-grid"
            >
                {professional.stats.map((stat) => (
                    <div
                        key={stat.label}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.25rem",
                            borderRadius: "0.5rem",
                            background: "#f8fafc",
                            padding: "1rem",
                        }}
                    >
                        <p style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0f172a" }}>{stat.value}</p>
                        <p
                            style={{
                                fontSize: "0.7rem",
                                color: "#64748b",
                                fontWeight: 500,
                                textTransform: "uppercase",
                                letterSpacing: "0.06em",
                            }}
                        >
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>

            <style jsx>{`
        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
        </div>
    );
}
