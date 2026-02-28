"use client";

import { useState } from "react";
import { bookingDetails, locationInfo } from "../data";

export default function RightPanel() {
    const [mapHovered, setMapHovered] = useState(false);

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Map preview */}
            <div
                style={{
                    background: "white",
                    borderRadius: "0.75rem",
                    overflow: "hidden",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                    height: "12rem",
                    position: "relative",
                    cursor: "pointer",
                }}
                onMouseEnter={() => setMapHovered(true)}
                onMouseLeave={() => setMapHovered(false)}
            >
                {/* Map image */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url("${locationInfo.mapImage}")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
                {/* Overlay */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: mapHovered ? "rgba(0,0,0,0.18)" : "rgba(0,0,0,0.08)",
                        transition: "background 0.2s",
                    }}
                />
                {/* Address pill */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "0.75rem",
                        left: "0.75rem",
                        right: "0.75rem",
                        background: "rgba(255,255,255,0.92)",
                        backdropFilter: "blur(6px)",
                        WebkitBackdropFilter: "blur(6px)",
                        borderRadius: "0.5rem",
                        border: "1px solid #f0f2f4",
                        padding: "0.75rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                    }}
                >
                    <div
                        style={{
                            background: "rgba(19,91,236,0.08)",
                            padding: "0.5rem",
                            borderRadius: "9999px",
                            color: "#135bec",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <span className="material-symbols-outlined" style={{ fontSize: "1.1rem" }}>location_on</span>
                    </div>
                    <div style={{ overflow: "hidden" }}>
                        <span style={{ fontSize: "0.6875rem", fontWeight: 700, color: "#616f89", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                            Service Location
                        </span>
                        <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#111318", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                            {locationInfo.address}
                        </p>
                    </div>
                </div>
            </div>

            {/* Booking details card */}
            <div
                style={{
                    background: "white",
                    borderRadius: "0.75rem",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        padding: "1rem 1rem 1rem 1rem",
                        borderBottom: "1px solid #f0f2f4",
                        background: "rgba(246,246,248,0.5)",
                    }}
                >
                    <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#111318" }}>Booking Details</h4>
                </div>

                <div>
                    {bookingDetails.map((row, idx) => (
                        <DetailRow key={row.label} row={row} isLast={idx === bookingDetails.length - 1} />
                    ))}
                </div>

                <div style={{ padding: "1rem", background: "rgba(246,246,248,0.3)" }}>
                    <button
                        style={{
                            width: "100%",
                            padding: "0.625rem 0",
                            fontSize: "0.875rem",
                            fontWeight: 700,
                            color: "#135bec",
                            border: "1px solid rgba(19,91,236,0.2)",
                            borderRadius: "0.5rem",
                            background: "transparent",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.5rem",
                            fontFamily: "inherit",
                            transition: "all 0.15s",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "rgba(19,91,236,0.5)";
                            e.currentTarget.style.color = "#0b42b0";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "rgba(19,91,236,0.2)";
                            e.currentTarget.style.color = "#135bec";
                        }}
                    >
                        <span className="material-symbols-outlined" style={{ fontSize: "1.1rem" }}>receipt_long</span>
                        View Receipt
                    </button>
                </div>
            </div>

            {/* Help card */}
            <div
                style={{
                    background: "rgba(19,91,236,0.04)",
                    borderRadius: "0.75rem",
                    padding: "1rem",
                    border: "1px solid rgba(19,91,236,0.1)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                }}
            >
                <div
                    style={{
                        background: "white",
                        padding: "0.5rem",
                        borderRadius: "0.5rem",
                        color: "#135bec",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                    }}
                >
                    <span className="material-symbols-outlined">support_agent</span>
                </div>
                <div>
                    <h5 style={{ fontSize: "0.875rem", fontWeight: 700, color: "#111318", marginBottom: "0.25rem" }}>
                        Need assistance?
                    </h5>
                    <p style={{ fontSize: "0.75rem", color: "#616f89", marginBottom: "0.75rem" }}>
                        Our support team is available 24/7 to help with your booking.
                    </p>
                    <a
                        href="#"
                        style={{ fontSize: "0.75rem", fontWeight: 700, color: "#135bec", textDecoration: "none" }}
                        onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
                        onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
                    >
                        Visit Help Center
                    </a>
                </div>
            </div>
        </div>
    );
}

function DetailRow({ row, isLast }) {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "1rem",
                borderBottom: isLast ? "none" : "1px solid #f0f2f4",
                background: hovered ? "#f6f6f8" : "transparent",
                transition: "background 0.15s",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span className="material-symbols-outlined" style={{ color: "#616f89", fontSize: "1.2rem" }}>{row.icon}</span>
                <span style={{ fontSize: "0.875rem", color: "#616f89" }}>{row.label}</span>
            </div>
            <span style={{ fontSize: "0.875rem", fontWeight: row.bold ? 700 : 500, color: "#111318" }}>{row.value}</span>
        </div>
    );
}
