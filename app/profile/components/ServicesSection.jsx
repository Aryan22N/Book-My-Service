"use client";

import { useState } from "react";

export default function ServicesSection({ services = [] }) {
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
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0f172a", marginBottom: "1.5rem", letterSpacing: "-0.015em" }}>
                Services Offered
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {services.map((service) => (
                    <ServiceItem key={service.id} service={service} />
                ))}
            </div>
        </div>
    );
}

function ServiceItem({ service }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: "0.75rem",
                border: hovered ? "1px solid rgba(19,91,236,0.25)" : "1px solid #f1f5f9",
                background: "#f8fafc",
                padding: "1rem",
                boxShadow: hovered ? "0 4px 16px rgba(0,0,0,0.06)" : "none",
                transition: "all 0.2s ease",
                gap: "1rem",
                flexWrap: "wrap",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Left: icon + text */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <div
                    style={{
                        display: "flex",
                        height: "3rem",
                        width: "3rem",
                        flexShrink: 0,
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "9999px",
                        background: "white",
                        color: "#135bec",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                    }}
                >
                    <span className="material-symbols-outlined">{service.icon}</span>
                </div>
                <div>
                    <h3
                        style={{
                            fontWeight: 700,
                            color: hovered ? "#135bec" : "#0f172a",
                            transition: "color 0.15s",
                            fontSize: "0.9375rem",
                        }}
                    >
                        {service.title}
                    </h3>
                    <p style={{ fontSize: "0.875rem", color: "#64748b", marginTop: "0.25rem" }}>
                        {service.description}
                    </p>
                </div>
            </div>

            {/* Right: price */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.25rem", flexShrink: 0 }}>
                <p style={{ fontSize: "1.125rem", fontWeight: 700, color: "#0f172a" }}>{service.price}</p>
                <p style={{ fontSize: "0.75rem", color: "#64748b" }}>{service.priceLabel}</p>
            </div>
        </div>
    );
}
