"use client";

import Link from "next/link";
import { navLinks } from "../data";

export default function Sidebar({ currentUser }) {
    return (
        <aside
            style={{
                width: "16rem",
                height: "100vh",
                position: "sticky",
                top: 0,
                background: "white",
                borderRight: "1px solid #dbdfe6",
                display: "flex",
                flexDirection: "column",
                flexShrink: 0,
            }}
        >
            <div
                style={{
                    padding: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "space-between",
                }}
            >
                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                    {/* User profile */}
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                        <div
                            style={{
                                width: "3rem",
                                height: "3rem",
                                borderRadius: "9999px",
                                backgroundImage: `url("${currentUser.avatar}")`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                border: "2px solid #f6f6f8",
                                boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
                                flexShrink: 0,
                            }}
                        />
                        <div>
                            <h1 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#111318", lineHeight: 1.3 }}>
                                {currentUser.name}
                            </h1>
                            <p style={{ fontSize: "0.75rem", fontWeight: 500, color: "#616f89" }}>{currentUser.plan}</p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                    padding: "0.625rem 0.75rem",
                                    borderRadius: "0.75rem",
                                    textDecoration: "none",
                                    fontSize: "0.875rem",
                                    fontWeight: link.active ? 600 : 500,
                                    color: link.active ? "#135bec" : "#616f89",
                                    background: link.active ? "rgba(19,91,236,0.08)" : "transparent",
                                    marginTop: link.spacer ? "1rem" : 0,
                                    transition: "all 0.15s ease",
                                }}
                                onMouseEnter={(e) => {
                                    if (!link.active) {
                                        e.currentTarget.style.background = "#f6f6f8";
                                        e.currentTarget.style.color = "#111318";
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!link.active) {
                                        e.currentTarget.style.background = "transparent";
                                        e.currentTarget.style.color = "#616f89";
                                    }
                                }}
                            >
                                <span
                                    className="material-symbols-outlined"
                                    style={{
                                        fontSize: "1.25rem",
                                        fontVariationSettings: link.active ? "'FILL' 1" : "'FILL' 0",
                                    }}
                                >
                                    {link.icon}
                                </span>
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* New Booking CTA */}
                <button
                    style={{
                        display: "flex",
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                        borderRadius: "0.75rem",
                        height: "2.75rem",
                        padding: "0 1rem",
                        background: "#135bec",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "0.875rem",
                        fontWeight: 700,
                        letterSpacing: "0.02em",
                        boxShadow: "0 4px 16px rgba(19,91,236,0.3)",
                        transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#0f4bc4")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#135bec")}
                >
                    <span className="material-symbols-outlined" style={{ fontSize: "1.1rem" }}>
                        add
                    </span>
                    New Booking
                </button>
            </div>
        </aside>
    );
}
