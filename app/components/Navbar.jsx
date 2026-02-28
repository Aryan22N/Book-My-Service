"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
        borderBottom: "1px solid #e2e8f0",
        backgroundColor: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.9)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        transition: "all 0.3s ease",
        boxShadow: scrolled ? "0 1px 24px 0 rgba(67,56,202,0.07)" : "none",
      }}
    >
      <div
        style={{
          margin: "0 auto",
          maxWidth: "80rem",
          display: "flex",
          height: "5rem",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 2rem",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
          <div
            style={{
              display: "flex",
              width: "2.5rem",
              height: "2.5rem",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "0.75rem",
              background: "#4338ca",
              boxShadow: "0 8px 24px rgba(67,56,202,0.3)",
            }}
          >
            <span className="material-symbols-outlined" style={{ color: "white", fontSize: "1.5rem" }}>
              handyman
            </span>
          </div>
          <span
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#0f172a",
            }}
          >
            ServiceLink
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2.5rem" }} className="hidden-mobile">
          {["Find Talent", "Project Gallery", "Enterprise"].map((item) => (
            <Link
              key={item}
              href="#"
              style={{
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "#64748b",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#4338ca")}
              onMouseLeave={(e) => (e.target.style.color = "#64748b")}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Link
            href="#"
            style={{
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "#0f172a",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            className="hidden-mobile"
          >
            Log In
          </Link>
          <button
            style={{
              display: "flex",
              height: "2.75rem",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "0.75rem",
              background: "#0f172a",
              padding: "0 1.5rem",
              fontSize: "0.875rem",
              fontWeight: 700,
              color: "white",
              border: "none",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#4338ca";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(67,56,202,0.35)";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#0f172a";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Join Network
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: "none",
              padding: "0.5rem",
              borderRadius: "0.5rem",
              border: "1px solid #e2e8f0",
              background: "transparent",
              cursor: "pointer",
              color: "#64748b",
            }}
            className="show-mobile"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">{mobileOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            borderTop: "1px solid #e2e8f0",
            padding: "1rem 2rem",
            background: "white",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {["Find Talent", "Project Gallery", "Enterprise", "Log In"].map((item) => (
            <Link
              key={item}
              href="#"
              style={{
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "#64748b",
                textDecoration: "none",
                padding: "0.5rem 0",
                borderBottom: "1px solid #f1f5f9",
              }}
            >
              {item}
            </Link>
          ))}
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .hidden-mobile {
            display: none !important;
          }
          .show-mobile {
            display: flex !important;
          }
        }
        @media (min-width: 769px) {
          .show-mobile {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
