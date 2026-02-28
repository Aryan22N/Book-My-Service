"use client";

import { professional } from "../data";

export default function ProfileHeroCard() {
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
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                }}
            >
                {/* Top: avatar + info */}
                <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                    {/* Avatar */}
                    <div
                        style={{
                            width: "8rem",
                            height: "8rem",
                            borderRadius: "9999px",
                            backgroundImage: `url("${professional.avatar}")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            border: "4px solid #f8fafc",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                            flexShrink: 0,
                        }}
                    />

                    {/* Info */}
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        {/* Name + badge */}
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
                            <h1
                                style={{
                                    fontSize: "clamp(1.4rem, 3vw, 1.875rem)",
                                    fontWeight: 700,
                                    color: "#0f172a",
                                    letterSpacing: "-0.015em",
                                }}
                            >
                                {professional.name}
                            </h1>
                            {professional.verified && (
                                <span
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "0.25rem",
                                        borderRadius: "9999px",
                                        background: "#dbeafe",
                                        padding: "0.125rem 0.5rem",
                                        fontSize: "0.7rem",
                                        fontWeight: 600,
                                        color: "#135bec",
                                    }}
                                >
                                    <span className="material-symbols-outlined" style={{ fontSize: "0.875rem", fontVariationSettings: "'FILL' 1" }}>
                                        verified
                                    </span>
                                    Verified
                                </span>
                            )}
                        </div>

                        <p style={{ fontSize: "1rem", color: "#64748b", marginBottom: "0.25rem" }}>
                            {professional.title}
                        </p>

                        <div style={{ display: "flex", alignItems: "center", gap: "0.25rem", color: "#64748b", fontSize: "0.875rem", marginBottom: "1rem" }}>
                            <span className="material-symbols-outlined" style={{ fontSize: "1.1rem" }}>location_on</span>
                            {professional.location}
                        </div>

                        {/* Tags */}
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                            {professional.tags.map((tag) => (
                                <span
                                    key={tag}
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: "0.5rem",
                                        background: "#f1f5f9",
                                        padding: "0.25rem 0.75rem",
                                        fontSize: "0.875rem",
                                        fontWeight: 500,
                                        color: "#334155",
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile-only action buttons */}
                <div style={{ display: "flex", gap: "0.75rem" }} className="mobile-actions">
                    <ActionButton label="Book Now" primary />
                    <ActionButton label="Contact" primary={false} />
                </div>
            </div>

            <style jsx>{`
        .mobile-actions { display: none; }
        @media (max-width: 768px) {
          .mobile-actions { display: flex !important; }
        }
      `}</style>
        </div>
    );
}

function ActionButton({ label, primary }) {
    return (
        <button
            style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "0.75rem",
                background: primary ? "#135bec" : "white",
                padding: "0.75rem 1rem",
                fontSize: "0.875rem",
                fontWeight: 700,
                color: primary ? "white" : "#0f172a",
                border: primary ? "none" : "1px solid #e2e8f0",
                cursor: "pointer",
                boxShadow: primary ? "0 4px 14px rgba(19,91,236,0.2)" : "0 1px 3px rgba(0,0,0,0.04)",
                transition: "all 0.15s",
                fontFamily: "inherit",
            }}
        >
            {label}
        </button>
    );
}
