"use client";

import { recentBookings } from "../data";

export default function BookingsTable() {
    return (
        <section style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {/* Section header */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#111318" }}>Recent Bookings</h3>
                <button
                    style={{
                        color: "#135bec",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontWeight: 500,
                        fontSize: "0.875rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.25rem",
                        fontFamily: "inherit",
                        transition: "color 0.15s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#0f4bc4")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#135bec")}
                >
                    View All
                    <span className="material-symbols-outlined" style={{ fontSize: "1rem" }}>
                        arrow_forward
                    </span>
                </button>
            </div>

            {/* Table */}
            <div
                style={{
                    overflow: "hidden",
                    borderRadius: "1rem",
                    border: "1px solid #dbdfe6",
                    background: "white",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                }}
            >
                <div style={{ overflowX: "auto" }}>
                    <table
                        style={{
                            width: "100%",
                            borderCollapse: "collapse",
                            textAlign: "left",
                        }}
                    >
                        {/* Header */}
                        <thead style={{ background: "#f6f6f8" }}>
                            <tr>
                                {["Service", "Provider", "Date", "Status", ""].map((col, i) => (
                                    <th
                                        key={i}
                                        style={{
                                            padding: "1rem 1.25rem",
                                            fontSize: "0.7rem",
                                            fontWeight: 600,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.08em",
                                            color: "#616f89",
                                            width: col === "" ? "2.5rem" : "25%",
                                        }}
                                    >
                                        {col}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        {/* Body */}
                        <tbody>
                            {recentBookings.map((booking, idx) => (
                                <BookingRow key={booking.id} booking={booking} isLast={idx === recentBookings.length - 1} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

function BookingRow({ booking, isLast }) {
    return (
        <tr
            style={{
                borderTop: "1px solid #dbdfe6",
                transition: "background 0.15s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#f9fafb")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
            {/* Service */}
            <td style={{ padding: "1.25rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div
                        style={{
                            height: "2.5rem",
                            width: "2.5rem",
                            borderRadius: "0.5rem",
                            background: booking.serviceIconBg,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: booking.serviceIconColor,
                            flexShrink: 0,
                        }}
                    >
                        <span className="material-symbols-outlined" style={{ fontSize: "1.1rem" }}>
                            {booking.serviceIcon}
                        </span>
                    </div>
                    <div>
                        <p style={{ fontWeight: 600, color: "#111318", fontSize: "0.875rem" }}>{booking.service}</p>
                        <p style={{ fontSize: "0.75rem", color: "#616f89" }}>{booking.serviceDetail}</p>
                    </div>
                </div>
            </td>

            {/* Provider */}
            <td style={{ padding: "1.25rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <div
                        style={{
                            height: "1.5rem",
                            width: "1.5rem",
                            borderRadius: "9999px",
                            background: `#e2e8f0 url("${booking.providerAvatar}") center/cover`,
                            flexShrink: 0,
                        }}
                    />
                    <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "#616f89" }}>{booking.provider}</span>
                </div>
            </td>

            {/* Date */}
            <td style={{ padding: "1.25rem", fontSize: "0.875rem", color: "#616f89", fontWeight: 500 }}>
                {booking.date}
            </td>

            {/* Status badge */}
            <td style={{ padding: "1.25rem" }}>
                <span
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.375rem",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "9999px",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        background: booking.statusBg,
                        color: booking.statusColor,
                        border: `1px solid ${booking.statusDot}33`,
                    }}
                >
                    <span
                        style={{
                            width: "0.375rem",
                            height: "0.375rem",
                            borderRadius: "9999px",
                            background: booking.statusDot,
                            animation: booking.pulse ? "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite" : "none",
                        }}
                    />
                    {booking.status}
                </span>
            </td>

            {/* Actions */}
            <td style={{ padding: "1.25rem", textAlign: "right" }}>
                <button
                    style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "#9ca3af",
                        display: "flex",
                        alignItems: "center",
                        transition: "color 0.15s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#111318")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
                >
                    <span className="material-symbols-outlined">more_vert</span>
                </button>
            </td>

            <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
        </tr>
    );
}
