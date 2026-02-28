"use client";

import Link from "next/link";
import { navLinks, currentUser } from "../data";

export default function CheckoutHeader() {
    return (
        <header
            style={{
                position: "sticky",
                top: 0,
                zIndex: 50,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #e5e7eb",
                background: "white",
                padding: "1rem 2.5rem",
                fontFamily: "'Inter', sans-serif",
            }}
        >
            {/* Brand */}
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "1rem", textDecoration: "none" }}>
                <div
                    style={{
                        width: "2rem",
                        height: "2rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "0.5rem",
                        background: "rgba(19,91,236,0.08)",
                        color: "#135bec",
                    }}
                >
                    <span className="material-symbols-outlined" style={{ fontSize: "1.2rem" }}>design_services</span>
                </div>
                <span style={{ fontSize: "1.2rem", fontWeight: 700, letterSpacing: "-0.02em", color: "#111318" }}>
                    ServiceBooking
                </span>
            </Link>

            {/* Right: nav + user */}
            <div style={{ display: "flex", flex: 1, justifyContent: "flex-end", alignItems: "center", gap: "2rem" }} className="header-right">
                {/* Nav links */}
                <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="nav-hide-sm">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            style={{ fontSize: "0.875rem", fontWeight: 500, color: "#64748b", textDecoration: "none", transition: "color 0.15s" }}
                            onMouseEnter={(e) => (e.target.style.color = "#135bec")}
                            onMouseLeave={(e) => (e.target.style.color = "#64748b")}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* User avatar */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        borderLeft: "1px solid #e5e7eb",
                        paddingLeft: "2rem",
                    }}
                    className="nav-hide-sm"
                >
                    <div
                        style={{
                            width: "2.5rem",
                            height: "2.5rem",
                            borderRadius: "9999px",
                            background: `url("${currentUser.avatar}") center/cover`,
                            boxShadow: "0 0 0 2px white, 0 0 0 3px #e2e8f0",
                        }}
                    />
                    <div className="user-name-hide-lg">
                        <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "#111318" }}>{currentUser.name}</p>
                        <p style={{ fontSize: "0.75rem", color: "#64748b" }}>{currentUser.role}</p>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 768px) {
          .nav-hide-sm { display: none !important; }
        }
        @media (max-width: 1024px) {
          .user-name-hide-lg { display: none !important; }
        }
      `}</style>
        </header>
    );
}
