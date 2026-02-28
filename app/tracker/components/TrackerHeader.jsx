"use client";

import Link from "next/link";
import { navLinks, currentUser } from "../data";

export default function TrackerHeader() {
    return (
        <header
            style={{
                position: "sticky",
                top: 0,
                zIndex: 50,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #f0f2f4",
                background: "white",
                padding: "0.75rem 2.5rem",
                fontFamily: "'Inter', sans-serif",
            }}
        >
            {/* Brand */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: "2rem", height: "2rem", color: "#135bec" }}>
                    <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
                        <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" />
                    </svg>
                </div>
                <span style={{ fontSize: "1.2rem", fontWeight: 700, letterSpacing: "-0.015em", color: "#111318" }}>
                    ServiceTrack
                </span>
            </div>

            {/* Nav + actions */}
            <div style={{ display: "flex", flex: 1, justifyContent: "flex-end", gap: "2rem", alignItems: "center" }} className="tracker-header-nav">
                <nav style={{ display: "flex", alignItems: "center", gap: "2.25rem" }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            style={{
                                fontSize: "0.875rem",
                                fontWeight: link.active ? 700 : 500,
                                color: link.active ? "#135bec" : "#111318",
                                textDecoration: "none",
                                transition: "color 0.15s",
                            }}
                            onMouseEnter={(e) => { if (!link.active) e.target.style.color = "#135bec"; }}
                            onMouseLeave={(e) => { if (!link.active) e.target.style.color = "#111318"; }}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <button
                        style={{
                            display: "flex",
                            minWidth: "5.25rem",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "0.75rem",
                            height: "2.5rem",
                            padding: "0 1rem",
                            background: "#135bec",
                            color: "white",
                            fontSize: "0.875rem",
                            fontWeight: 700,
                            letterSpacing: "0.015em",
                            border: "none",
                            cursor: "pointer",
                            boxShadow: "0 2px 6px rgba(19,91,236,0.2)",
                            transition: "background 0.15s",
                            fontFamily: "inherit",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "#0b42b0")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "#135bec")}
                    >
                        Log Out
                    </button>
                    <div
                        style={{
                            width: "2.5rem",
                            height: "2.5rem",
                            borderRadius: "9999px",
                            background: `url("${currentUser.avatar}") center/cover`,
                            boxShadow: "0 0 0 2px rgba(19,91,236,0.15)",
                        }}
                    />
                </div>
            </div>

            {/* Mobile hamburger */}
            <button style={{ display: "none", color: "#111318", background: "none", border: "none", cursor: "pointer" }} className="tracker-mobile-menu">
                <span className="material-symbols-outlined">menu</span>
            </button>
        </header>
    );
}
