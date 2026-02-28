"use client";

import Link from "next/link";
import { footerLinks } from "../data";

export default function ProfileFooter() {
    return (
        <footer
            style={{
                borderTop: "1px solid #e2e8f0",
                background: "white",
                padding: "2rem 0",
                fontFamily: "'Inter', sans-serif",
            }}
        >
            <div
                style={{
                    padding: "0 2.5rem",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <div
                    style={{
                        maxWidth: "60rem",
                        flex: 1,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "1rem",
                        fontSize: "0.875rem",
                        color: "#64748b",
                        flexWrap: "wrap",
                    }}
                >
                    <p>© 2023 ServicePro Inc. All rights reserved.</p>
                    <div style={{ display: "flex", gap: "1.5rem" }}>
                        {footerLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                style={{ color: "#64748b", textDecoration: "none", transition: "color 0.15s" }}
                                onMouseEnter={(e) => (e.target.style.color = "#135bec")}
                                onMouseLeave={(e) => (e.target.style.color = "#64748b")}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
