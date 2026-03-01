"use client";

export default function BookingSummary({ bookingService, pricingBreakdown }) {
    const p = pricingBreakdown;

    return (
        <div
            style={{
                position: "sticky",
                top: "7rem",
                borderRadius: "0.75rem",
                border: "1px solid #e5e7eb",
                background: "white",
                boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                overflow: "hidden",
            }}
        >
            {/* Header */}
            <div style={{ padding: "1.5rem", borderBottom: "1px solid #e5e7eb" }}>
                <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#111318" }}>Booking Summary</h3>
            </div>

            {/* Body */}
            <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {/* Service item */}
                <div style={{ display: "flex", gap: "1rem" }}>
                    <div
                        style={{
                            height: "4rem",
                            width: "4rem",
                            flexShrink: 0,
                            overflow: "hidden",
                            borderRadius: "0.5rem",
                            background: "#f1f5f9",
                        }}
                    >
                        <img
                            src={bookingService.image}
                            alt={bookingService.imageAlt}
                            style={{ height: "100%", width: "100%", objectFit: "cover" }}
                        />
                    </div>
                    <div>
                        <h4 style={{ fontWeight: 600, color: "#111318", fontSize: "0.9375rem" }}>{bookingService.name}</h4>
                        <p style={{ fontSize: "0.875rem", color: "#64748b" }}>{bookingService.description}</p>
                        <p style={{ fontSize: "0.875rem", fontWeight: 500, color: "#135bec", marginTop: "0.25rem" }}>
                            ₹{bookingService.price.toLocaleString("en-IN")}
                        </p>
                    </div>
                </div>

                <hr style={{ borderColor: "#f1f5f9", margin: 0 }} />

                {/* Booking details */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    <DetailRow label="Date" value={bookingService.date} />
                    <DetailRow label="Time" value={bookingService.time} />
                    <DetailRow label="Duration" value={bookingService.duration} />
                </div>

                {/* Price breakdown */}
                <div
                    style={{
                        background: "#f8fafc",
                        borderRadius: "0.5rem",
                        padding: "1rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.75rem",
                    }}
                >
                    <PriceRow label="Subtotal" value={`₹${p.subtotal.toLocaleString("en-IN")}`} />
                    <PriceRow label="Service Fee" value={`₹${p.serviceFee.toLocaleString("en-IN")}`} />
                    <PriceRow label={`GST (${(p.taxRate * 100).toFixed(0)}%)`} value={`₹${p.tax.toLocaleString("en-IN")}`} />

                    <div
                        style={{
                            borderTop: "1px solid #e2e8f0",
                            paddingTop: "0.75rem",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <span style={{ fontSize: "1rem", fontWeight: 700, color: "#111318" }}>Total</span>
                        <span style={{ fontSize: "1.25rem", fontWeight: 700, color: "#135bec" }}>
                            ₹{p.total.toLocaleString("en-IN")}
                        </span>
                    </div>
                </div>

                {/* CTA */}
                <ConfirmButton />

                <p style={{ fontSize: "0.75rem", textAlign: "center", color: "#94a3b8" }}>
                    By confirming, you agree to our{" "}
                    <a href="#" style={{ textDecoration: "underline", color: "inherit", transition: "color 0.15s" }}>
                        Terms of Service
                    </a>
                    .
                </p>
            </div>
        </div>
    );
}

function DetailRow({ label, value }) {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.875rem" }}>
            <span style={{ color: "#64748b" }}>{label}</span>
            <span style={{ fontWeight: 500, color: "#111318" }}>{value}</span>
        </div>
    );
}

function PriceRow({ label, value }) {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.875rem" }}>
            <span style={{ color: "#64748b" }}>{label}</span>
            <span style={{ fontWeight: 500, color: "#111318" }}>{value}</span>
        </div>
    );
}

function ConfirmButton() {
    return (
        <button
            style={{
                width: "100%",
                background: "#135bec",
                color: "white",
                fontWeight: 700,
                padding: "0.875rem 1rem",
                borderRadius: "0.75rem",
                boxShadow: "0 4px 16px rgba(19,91,236,0.3)",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                fontSize: "1rem",
                fontFamily: "inherit",
                transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.background = "#0f4bc2";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(19,91,236,0.4)";
                // shift the arrow icon
                const arrow = e.currentTarget.querySelector(".confirm-arrow");
                if (arrow) arrow.style.transform = "translateX(4px)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.background = "#135bec";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(19,91,236,0.3)";
                const arrow = e.currentTarget.querySelector(".confirm-arrow");
                if (arrow) arrow.style.transform = "translateX(0)";
            }}
        >
            <span>Confirm Booking</span>
            <span className="material-symbols-outlined confirm-arrow" style={{ fontSize: "1.1rem", transition: "transform 0.2s" }}>
                arrow_forward
            </span>
        </button>
    );
}
