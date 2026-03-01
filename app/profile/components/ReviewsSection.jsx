"use client";

import React from "react";
import { reviews, ratingBreakdown } from "../data";

function StarRow({ count, filled }) {
    return (
        <div style={{ display: "flex" }}>
            {Array.from({ length: 5 }).map((_, i) => (
                <span
                    key={i}
                    className="material-symbols-outlined"
                    style={{
                        fontSize: "1rem",
                        color: "#135bec",
                        fontVariationSettings: i < filled ? "'FILL' 1" : "'FILL' 0",
                    }}
                >
                    star
                </span>
            ))}
        </div>
    );
}

export default function ReviewsSection({ reviews = [], ratingBreakdown = null }) {
    const rb = ratingBreakdown;

    if (!rb) return null;

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
            {/* Rating summary */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "3rem",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                }}
            >
                {/* Left: overall score */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", flexShrink: 0 }}>
                    <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0f172a", letterSpacing: "-0.015em" }}>
                        Reviews
                    </h2>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
                        <span style={{ fontSize: "3rem", fontWeight: 900, color: "#0f172a", letterSpacing: "-0.033em" }}>
                            {rb.overall}
                        </span>
                        <span style={{ fontSize: "0.875rem", color: "#64748b" }}>/ {rb.outOf}</span>
                    </div>
                    <StarRow filled={Math.round(rb.overall)} />
                    <p style={{ fontSize: "0.875rem", color: "#64748b" }}>
                        Based on {rb.totalReviews} reviews
                    </p>
                </div>

                {/* Right: distribution bars */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1.2rem 1fr 2.5rem",
                        alignItems: "center",
                        gap: "0.4rem 0.75rem",
                        flex: 1,
                        minWidth: "12rem",
                        marginTop: "2.5rem",
                    }}
                >
                    {rb.distribution.map((row) => (
                        <React.Fragment key={row.star}>
                            <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "#475569" }}>
                                {row.star}
                            </p>
                            <div
                                style={{
                                    height: "0.375rem",
                                    borderRadius: "9999px",
                                    background: "#f1f5f9",
                                    overflow: "hidden",
                                }}
                            >
                                <div
                                    style={{
                                        height: "100%",
                                        width: `${row.pct}%`,
                                        borderRadius: "9999px",
                                        background: "#135bec",
                                    }}
                                />
                            </div>
                            <p style={{ fontSize: "0.75rem", color: "#94a3b8", textAlign: "right" }}>
                                {row.pct}%
                            </p>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* Individual reviews */}
            <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {reviews.map((review, idx) => (
                    <div
                        key={review.id}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.75rem",
                            borderBottom: idx === reviews.length - 1 ? "none" : "1px solid #f1f5f9",
                            paddingBottom: idx === reviews.length - 1 ? 0 : "1.5rem",
                        }}
                    >
                        {/* Header row */}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                                <div
                                    style={{
                                        height: "2.5rem",
                                        width: "2.5rem",
                                        borderRadius: "9999px",
                                        background: `#e2e8f0 url("${review.avatar}") center/cover`,
                                        flexShrink: 0,
                                    }}
                                />
                                <div>
                                    <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#0f172a" }}>{review.name}</p>
                                    <p style={{ fontSize: "0.75rem", color: "#64748b" }}>{review.date}</p>
                                </div>
                            </div>
                            <StarRow filled={review.rating} />
                        </div>
                        {/* Body */}
                        <p style={{ fontSize: "0.875rem", color: "#475569", lineHeight: 1.7 }}>{review.text}</p>
                    </div>
                ))}
            </div>

            {/* View all button */}
            <button
                style={{
                    marginTop: "1.5rem",
                    width: "100%",
                    padding: "0.625rem 0",
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    color: "#135bec",
                    border: "1px solid rgba(19,91,236,0.2)",
                    borderRadius: "0.75rem",
                    background: "transparent",
                    cursor: "pointer",
                    transition: "background 0.15s",
                    fontFamily: "inherit",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(19,91,236,0.04)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
                Read all {rb.totalReviews} reviews
            </button>
        </div>
    );
}
