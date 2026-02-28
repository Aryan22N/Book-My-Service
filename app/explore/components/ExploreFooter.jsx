"use client";

import Link from "next/link";
import { footerLinks } from "../data";

export default function ExploreFooter() {
    return (
        <footer
            style={{
                marginTop: "auto",
                borderTop: "1px solid #f0f2f4",
                background: "white",
                padding: "2rem 0",
                textAlign: "center",
                fontSize: "0.875rem",
                color: "#616f89",
            }}
        >
            {/* Footer links */}
            <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", marginBottom: "1rem" }}>
                {footerLinks.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        style={{
                            color: "#616f89",
                            textDecoration: "none",
                            transition: "color 0.15s",
                        }}
                        onMouseEnter={(e) => (e.target.style.color = "#135bec")}
                        onMouseLeave={(e) => (e.target.style.color = "#616f89")}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
            <p>© 2024 ServiceFinder. All rights reserved.</p>
        </footer>
    );
}
