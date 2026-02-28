"use client";

import { professional } from "../data";

export default function BookingCard() {
    return (
        <div
            style={{
                position: "sticky",
                top: "6rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                borderRadius: "0.75rem",
                border: "1px solid #e2e8f0",
                background: "white",
                padding: "1.5rem",
                boxShadow: "0 8px 32px rgba(148,163,184,0.2)",
            }}
        >
            {/* Price header */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingBottom: "1rem",
                    borderBottom: "1px solid #f1f5f9",
                }}
            >
                <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "#64748b" }}>Starting at</span>
                <span style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0f172a" }}>
                    {professional.startingPrice}
                    <span style={{ fontSize: "0.875rem", fontWeight: 400, color: "#64748b" }}>
                        {professional.priceUnit}
                    </span>
                </span>
            </div>

            {/* Buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <BookingBtn label="Book Now" primary />
                <BookingBtn label="Contact Me" primary={false} />
            </div>

            {/* Verified badge */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    borderRadius: "0.5rem",
                    background: "#f8fafc",
                    padding: "0.75rem",
                }}
            >
                <span className="material-symbols-outlined" style={{ color: "#135bec" }}>safety_check</span>
                <div>
                    <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#0f172a" }}>Verified Pro</p>
                    <p style={{ fontSize: "0.75rem", color: "#64748b" }}>Background checked &amp; insured</p>
                </div>
            </div>

            {/* Response time */}
            <p style={{ textAlign: "center", fontSize: "0.75rem", color: "#94a3b8" }}>
                {professional.responseTime}
            </p>
        </div>
    );
}

function BookingBtn({ label, primary }) {
    return (
        <button
            style={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "0.75rem",
                height: "3rem",
                padding: "0 1.5rem",
                background: primary ? "#135bec" : "transparent",
                color: primary ? "white" : "#0f172a",
                border: primary ? "none" : "1px solid #e2e8f0",
                fontSize: "1rem",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: primary ? "0 4px 14px rgba(19,91,236,0.2)" : "none",
                transition: "all 0.15s",
                fontFamily: "inherit",
            }}
            onMouseEnter={(e) => {
                if (primary) {
                    e.currentTarget.style.background = "rgba(19,91,236,0.9)";
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(19,91,236,0.3)";
                } else {
                    e.currentTarget.style.background = "#f8fafc";
                }
            }}
            onMouseLeave={(e) => {
                if (primary) {
                    e.currentTarget.style.background = "#135bec";
                    e.currentTarget.style.boxShadow = "0 4px 14px rgba(19,91,236,0.2)";
                } else {
                    e.currentTarget.style.background = "transparent";
                }
            }}
        >
            {label}
        </button>
    );
}
