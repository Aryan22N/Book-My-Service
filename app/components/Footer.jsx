"use client";

import Link from "next/link";

const services = ["Home Cleaning", "Plumbing Repair", "Electrical Wiring", "Landscaping", "HVAC & Cooling"];
const company = ["About Us", "Careers", "Press", "Contact", "Partners"];
const resources = ["Help Center", "Safety Guidelines", "Terms of Service", "Privacy Policy", "Blog"];

const socialLinks = [
    {
        name: "Twitter",
        href: "#",
        icon: (
            <svg fill="currentColor" viewBox="0 0 24 24" style={{ height: "1.25rem", width: "1.25rem" }}>
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
        ),
    },
    {
        name: "Facebook",
        href: "#",
        icon: (
            <svg fill="currentColor" viewBox="0 0 24 24" style={{ height: "1.25rem", width: "1.25rem" }}>
                <path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd" />
            </svg>
        ),
    },
    {
        name: "LinkedIn",
        href: "#",
        icon: (
            <svg fill="currentColor" viewBox="0 0 24 24" style={{ height: "1.25rem", width: "1.25rem" }}>
                <path clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fillRule="evenodd" />
            </svg>
        ),
    },
];

function FooterColumn({ title, items }) {
    return (
        <div>
            <h3
                style={{
                    marginBottom: "1.5rem",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#0f172a",
                }}
            >
                {title}
            </h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem", listStyle: "none", padding: 0, margin: 0 }}>
                {items.map((item) => (
                    <li key={item}>
                        <Link
                            href="#"
                            style={{
                                fontSize: "0.875rem",
                                fontWeight: 500,
                                color: "#64748b",
                                textDecoration: "none",
                                transition: "color 0.2s",
                            }}
                            onMouseEnter={(e) => (e.target.style.color = "#4338ca")}
                            onMouseLeave={(e) => (e.target.style.color = "#64748b")}
                        >
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function Footer() {
    return (
        <footer
            style={{
                background: "#f8fafc",
                paddingTop: "5rem",
                paddingBottom: "2.5rem",
                borderTop: "1px solid #e2e8f0",
            }}
        >
            <div style={{ margin: "0 auto", maxWidth: "80rem", padding: "0 2rem" }}>
                {/* Top grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
                        gap: "3rem",
                    }}
                    className="footer-grid"
                >
                    {/* Brand */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
                            <div
                                style={{
                                    display: "flex",
                                    width: "2rem",
                                    height: "2rem",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "0.5rem",
                                    background: "#4338ca",
                                    color: "white",
                                }}
                            >
                                <span className="material-symbols-outlined" style={{ fontSize: "1.25rem" }}>handyman</span>
                            </div>
                            <span style={{ fontSize: "1.25rem", fontWeight: 700, letterSpacing: "-0.02em", color: "#0f172a" }}>
                                ServiceLink
                            </span>
                        </Link>
                        <p
                            style={{
                                fontSize: "0.875rem",
                                lineHeight: 1.7,
                                color: "#64748b",
                                maxWidth: "18rem",
                            }}
                        >
                            The modern way to manage home services and renovation projects. Trusted, transparent, and timely.
                        </p>
                        <div style={{ display: "flex", gap: "1rem" }}>
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    aria-label={social.name}
                                    style={{
                                        color: "#64748b",
                                        textDecoration: "none",
                                        transition: "color 0.2s",
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = "#4338ca")}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <FooterColumn title="Services" items={services} />
                    <FooterColumn title="Company" items={company} />
                    <FooterColumn title="Resources" items={resources} />
                </div>

                {/* Divider */}
                <div
                    style={{
                        marginTop: "4rem",
                        borderTop: "1px solid #e2e8f0",
                        paddingTop: "2rem",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "1rem",
                    }}
                >
                    <p style={{ fontSize: "0.875rem", color: "#94a3b8" }}>
                        © 2024 ServiceLink Inc. All rights reserved.
                    </p>
                    <select
                        style={{
                            background: "transparent",
                            fontSize: "0.875rem",
                            color: "#64748b",
                            border: "none",
                            cursor: "pointer",
                            outline: "none",
                        }}
                    >
                        <option>English (US)</option>
                        <option>Español</option>
                        <option>Français</option>
                    </select>
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </footer>
    );
}
