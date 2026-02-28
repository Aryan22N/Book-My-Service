"use client";

import { timelineSteps } from "../data";

export default function BookingTimeline() {
    return (
        <div
            style={{
                background: "white",
                borderRadius: "0.75rem",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                padding: "1.5rem",
            }}
        >
            <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#111318", marginBottom: "1.5rem" }}>
                Booking Status
            </h3>

            <div style={{ position: "relative", paddingLeft: "0.5rem" }}>
                {timelineSteps.map((step, idx) => {
                    const isLast = idx === timelineSteps.length - 1;
                    return (
                        <div key={step.id} style={{ display: "flex", gap: "1rem", paddingBottom: isLast ? 0 : "2rem", position: "relative" }}>
                            {/* Connector line */}
                            {!isLast && (
                                <div
                                    style={{
                                        position: "absolute",
                                        left: "0.6875rem",
                                        top: "2rem",
                                        bottom: 0,
                                        width: "2px",
                                        background: step.state === "done" ? "#135bec" : "transparent",
                                        borderLeft: step.state !== "done" ? "2px dashed rgba(45,55,72,0.2)" : "none",
                                    }}
                                />
                            )}

                            {/* Icon node */}
                            <div style={{ position: "relative", zIndex: 10, flexShrink: 0 }}>
                                {step.state === "done" && (
                                    <div
                                        style={{
                                            width: "1.5rem",
                                            height: "1.5rem",
                                            borderRadius: "9999px",
                                            background: "#135bec",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "white",
                                        }}
                                    >
                                        <span className="material-symbols-outlined" style={{ fontSize: "1rem" }}>check</span>
                                    </div>
                                )}
                                {step.state === "active" && (
                                    <div
                                        style={{
                                            width: "1.5rem",
                                            height: "1.5rem",
                                            borderRadius: "9999px",
                                            background: "white",
                                            border: "2px solid #135bec",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        {/* Pulse dot */}
                                        <div style={{ position: "relative", width: "0.625rem", height: "0.625rem" }}>
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    inset: 0,
                                                    borderRadius: "9999px",
                                                    background: "rgba(19,91,236,0.4)",
                                                    animation: "ping 1.5s cubic-bezier(0,0,0.2,1) infinite",
                                                }}
                                            />
                                            <div
                                                style={{
                                                    position: "relative",
                                                    width: "100%",
                                                    height: "100%",
                                                    borderRadius: "9999px",
                                                    background: "#135bec",
                                                }}
                                            />
                                        </div>
                                    </div>
                                )}
                                {step.state === "pending" && (
                                    <div
                                        style={{
                                            width: "1.5rem",
                                            height: "1.5rem",
                                            borderRadius: "9999px",
                                            background: "#f6f6f8",
                                            border: "2px solid #f0f2f4",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <div style={{ width: "0.5rem", height: "0.5rem", borderRadius: "9999px", background: "rgba(45,55,72,0.2)" }} />
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <p
                                    style={{
                                        fontSize: "0.875rem",
                                        fontWeight: 700,
                                        color: step.state === "active" ? "#135bec" : step.state === "pending" ? "#616f89" : "#111318",
                                    }}
                                >
                                    {step.label}
                                </p>
                                <p style={{ fontSize: "0.75rem", color: "#616f89", marginTop: "0.125rem" }}>{step.time}</p>

                                {/* Tag note */}
                                {step.noteType === "tag" && step.note && (
                                    <div
                                        style={{
                                            marginTop: "0.5rem",
                                            display: "inline-block",
                                            fontSize: "0.875rem",
                                            color: "#616f89",
                                            background: "#f6f6f8",
                                            border: "1px solid #f0f2f4",
                                            borderRadius: "0.375rem",
                                            padding: "0.25rem 0.5rem",
                                        }}
                                    >
                                        {step.note}
                                    </div>
                                )}

                                {/* Text note */}
                                {step.noteType === "text" && step.note && (
                                    <p style={{ fontSize: "0.875rem", color: "#616f89", marginTop: "0.25rem" }}>{step.note}</p>
                                )}

                                {/* Active badge row */}
                                {step.state === "active" && step.badge && (
                                    <div style={{ marginTop: "0.75rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                        <span
                                            style={{
                                                padding: "0.25rem 0.75rem",
                                                borderRadius: "0.25rem",
                                                background: "#eff6ff",
                                                color: "#1d4ed8",
                                                fontSize: "0.75rem",
                                                fontWeight: 600,
                                            }}
                                        >
                                            {step.badge}
                                        </span>
                                        <span style={{ fontSize: "0.75rem", color: "#616f89" }}>{step.badgeNote}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
