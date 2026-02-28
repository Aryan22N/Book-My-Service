"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navLinks } from "../data";

export default function ProfileHeader() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            style={{
                position: "sticky",
                top: 0,
                zIndex: 50,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #e2e8f0",
                background: "rgba(255,255,255,0.92)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                padding: "0.75rem 2.5rem",
                boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.06)" : "none",
                transition: "box-shadow 0.2s ease",
                fontFamily: "'Inter', sans-serif",
            }}
        >
            {/* Left: brand + nav */}
            <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
                {/* Brand */}
                <Link href="/" style={{ display: "flex", alignItems: "center", gap: "1rem", textDecoration: "none" }}>
                    <div
                        style={{
                            width: "2rem",
                            height: "2rem",
                            borderRadius: "0.5rem",
                            background: "rgba(19,91,236,0.08)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#135bec",
                        }}
                    >
                        <span className="material-symbols-outlined" style={{ fontSize: "1.2rem" }}>handyman</span>
                    </div>
                    <span style={{ fontSize: "1.1rem", fontWeight: 700, letterSpacing: "-0.015em", color: "#0f172a" }}>
                        ServicePro
                    </span>
                </Link>

                {/* Desktop nav */}
                <nav style={{ display: "flex", alignItems: "center", gap: "2.25rem" }} className="nav-hide-sm">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            style={{
                                fontSize: "0.875rem",
                                fontWeight: 500,
                                color: link.active ? "#0f172a" : "#64748b",
                                textDecoration: "none",
                                transition: "color 0.15s",
                            }}
                            onMouseEnter={(e) => { if (!link.active) e.target.style.color = "#135bec"; }}
                            onMouseLeave={(e) => { if (!link.active) e.target.style.color = "#64748b"; }}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Right: search + CTA */}
            <div style={{ display: "flex", flex: 1, justifyContent: "flex-end", alignItems: "center", gap: "1rem" }}>
                {/* Search */}
                <label
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        minWidth: "10rem",
                        maxWidth: "16rem",
                    }}
                    className="search-hide-sm"
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            borderRadius: "0.75rem",
                            height: "2.5rem",
                            border: "1px solid #e2e8f0",
                            background: "#f8fafc",
                            transition: "box-shadow 0.2s",
                        }}
                        onFocusCapture={(e) =>
                            (e.currentTarget.style.boxShadow = "0 0 0 2px rgba(19,91,236,0.3)")
                        }
                        onBlurCapture={(e) => (e.currentTarget.style.boxShadow = "none")}
                    >
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0 0.75rem", color: "#64748b" }}>
                            <span className="material-symbols-outlined" style={{ fontSize: "1.1rem" }}>search</span>
                        </div>
                        <input
                            style={{
                                flex: 1,
                                background: "transparent",
                                border: "none",
                                outline: "none",
                                fontSize: "0.875rem",
                                color: "#0f172a",
                            }}
                            placeholder="Search services..."
                        />
                    </div>
                </label>

                {/* Sign Up */}
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
                        boxShadow: "0 4px 14px rgba(19,91,236,0.2)",
                        transition: "background 0.15s",
                        fontFamily: "inherit",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(19,91,236,0.88)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#135bec")}
                >
                    Sign Up
                </button>
            </div>

            <style jsx>{`
        @media (max-width: 768px) {
          .nav-hide-sm { display: none !important; }
          .search-hide-sm { display: none !important; }
        }
      `}</style>
        </header>
    );
}
