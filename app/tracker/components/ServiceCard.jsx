"use client";

export default function ServiceCard({ booking }) {
    if (!booking) return null;

    return (
        <div
            style={{
                background: "white",
                borderRadius: "0.75rem",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                overflow: "hidden",
            }}
        >
            <div className="service-card-inner" style={{ display: "flex", flexDirection: "row" }}>
                {/* Image */}
                <div
                    className="service-card-img"
                    style={{
                        width: "12rem",
                        flexShrink: 0,
                        backgroundImage: `url("${booking.service.image}")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        minHeight: "12rem",
                    }}
                />

                {/* Content */}
                <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", justifyContent: "center", gap: "0.5rem", flex: 1 }}>
                    {/* Title + price */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#111318" }}>{booking.service.title}</h3>
                        <span style={{ fontSize: "1.125rem", fontWeight: 700, color: "#135bec" }}>{booking.service.price}</span>
                    </div>

                    {/* Description */}
                    <p style={{ fontSize: "0.875rem", color: "#616f89", marginBottom: "0.5rem" }}>
                        {booking.service.description}
                    </p>

                    {/* Provider row */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.75rem",
                            paddingTop: "1rem",
                            marginTop: "auto",
                            borderTop: "1px solid #f0f2f4",
                        }}
                    >
                        <div
                            style={{
                                width: "2.5rem",
                                height: "2.5rem",
                                borderRadius: "9999px",
                                backgroundImage: `url("${booking.provider.avatar}")`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                flexShrink: 0,
                                boxShadow: "0 0 0 2px #f6f6f8",
                            }}
                        />
                        <div>
                            <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#111318" }}>{booking.provider.name}</p>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                                <span className="material-symbols-outlined" style={{ fontSize: "0.875rem", color: "#f59e0b", fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span style={{ fontSize: "0.75rem", fontWeight: 500, color: "#616f89" }}>
                                    {booking.provider.rating} ({booking.provider.reviewCount} reviews)
                                </span>
                            </div>
                        </div>
                        <a
                            href="#"
                            style={{ marginLeft: "auto", fontSize: "0.875rem", fontWeight: 700, color: "#135bec", textDecoration: "none" }}
                            onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
                            onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
                        >
                            View Profile
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
