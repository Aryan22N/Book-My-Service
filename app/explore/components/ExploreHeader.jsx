"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navLinks } from "../data";

export default function ExploreHeader() {
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
                borderBottom: "1px solid #f0f2f4",
                background: "white",
                padding: "1rem 2.5rem",
                boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.06)" : "none",
                transition: "box-shadow 0.2s ease",
            }}
        >
            {/* Left: brand + search */}
            <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
                {/* Brand */}
                <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
                    <div
                        style={{
                            display: "flex",
                            height: "2rem",
                            width: "2rem",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "0.5rem",
                            background: "rgba(19,91,236,0.08)",
                            color: "#135bec",
                        }}
                    >
                        <span className="material-symbols-outlined" style={{ fontSize: "1.25rem" }}>
                            handyman
                        </span>
                    </div>
                    <span style={{ fontSize: "1.2rem", fontWeight: 700, letterSpacing: "-0.02em", color: "#111318" }}>
                        ServiceFinder
                    </span>
                </Link>

                {/* Search bar */}
                <div
                    style={{
                        display: "flex",
                        minWidth: "20rem",
                        maxWidth: "30rem",
                    }}
                    className="search-hide-mobile"
                >
                    <div
                        style={{
                            display: "flex",
                            width: "100%",
                            alignItems: "center",
                            borderRadius: "0.75rem",
                            background: "#f6f6f8",
                            border: "1px solid transparent",
                            transition: "border-color 0.2s",
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(19,91,236,0.4)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "transparent")}
                    >
                        <div
                            style={{
                                display: "flex",
                                height: "2.5rem",
                                width: "2.5rem",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#616f89",
                                flexShrink: 0,
                            }}
                        >
                            <span className="material-symbols-outlined">search</span>
                        </div>
                        <input
                            style={{
                                height: "2.5rem",
                                width: "100%",
                                background: "transparent",
                                fontSize: "0.875rem",
                                color: "#111318",
                                border: "none",
                                outline: "none",
                            }}
                            placeholder="Search for services (e.g. cleaning, repair)"
                        />
                    </div>
                </div>
            </div>

            {/* Right: nav + buttons */}
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                <nav style={{ display: "flex", alignItems: "center", gap: "1.5rem" }} className="nav-hide-mobile">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            style={{
                                fontSize: "0.875rem",
                                fontWeight: 500,
                                color: "#111318",
                                textDecoration: "none",
                                transition: "color 0.15s",
                            }}
                            onMouseEnter={(e) => (e.target.style.color = "#135bec")}
                            onMouseLeave={(e) => (e.target.style.color = "#111318")}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <button
                        style={{
                            display: "flex",
                            height: "2.5rem",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "0.75rem",
                            padding: "0 1rem",
                            fontSize: "0.875rem",
                            fontWeight: 700,
                            color: "#111318",
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                            transition: "background 0.15s",
                            fontFamily: "inherit",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "#f6f6f8")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    >
                        Sign In
                    </button>
                    <button
                        style={{
                            display: "flex",
                            height: "2.5rem",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "0.75rem",
                            background: "#135bec",
                            padding: "0 1.25rem",
                            fontSize: "0.875rem",
                            fontWeight: 700,
                            color: "white",
                            border: "none",
                            cursor: "pointer",
                            boxShadow: "0 4px 14px rgba(19,91,236,0.2)",
                            transition: "background 0.15s",
                            fontFamily: "inherit",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "#0e46b9")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "#135bec")}
                    >
                        Get Started
                    </button>
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 768px) {
          .search-hide-mobile { display: none !important; }
          .nav-hide-mobile { display: none !important; }
        }
      `}</style>
        </header>
    );
}
