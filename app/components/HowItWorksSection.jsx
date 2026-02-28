"use client";

const steps = [
    {
        icon: "edit_document",
        number: "1",
        title: "Define Scope",
        description: "Outline your project needs. Our smart system matches you with qualified experts.",
        active: true,
    },
    {
        icon: "handshake",
        number: "2",
        title: "Hire & Collaborate",
        description: "Review proposals, chat with professionals, and secure your booking instantly.",
        active: false,
        outlined: true,
    },
    {
        icon: "celebration",
        number: "3",
        title: "Project Success",
        description: "Milestones tracked, payment released upon satisfaction. Enjoy the results.",
        active: false,
        outlined: false,
    },
];

export default function HowItWorksSection() {
    return (
        <section style={{ padding: "6rem 0", background: "#f8fafc" }}>
            <div style={{ margin: "0 auto", maxWidth: "80rem", padding: "0 2rem" }}>
                {/* Header */}
                <div style={{ textAlign: "center", maxWidth: "48rem", margin: "0 auto 5rem" }}>
                    <h2
                        style={{
                            fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                            fontWeight: 700,
                            letterSpacing: "-0.03em",
                            color: "#0f172a",
                        }}
                    >
                        Streamlined Project Flow
                    </h2>
                    <p style={{ marginTop: "1rem", fontSize: "1.1rem", color: "#64748b" }}>
                        From idea to execution in three coherent steps.
                    </p>
                </div>

                {/* Steps */}
                <div style={{ position: "relative" }}>
                    {/* Connector line */}
                    <div
                        style={{
                            position: "absolute",
                            top: "2.5rem",
                            left: "16.67%",
                            right: "16.67%",
                            height: "2px",
                            background: "#e2e8f0",
                            zIndex: 0,
                        }}
                        className="connector-line"
                    />
                    {/* Active portion of connector */}
                    <div
                        style={{
                            position: "absolute",
                            top: "2.5rem",
                            left: "16.67%",
                            width: "33.33%",
                            height: "2px",
                            background: "#4338ca",
                            zIndex: 1,
                        }}
                        className="connector-line"
                    />

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "3rem",
                            position: "relative",
                            zIndex: 2,
                        }}
                        className="steps-grid"
                    >
                        {steps.map((step) => (
                            <StepCard key={step.number} {...step} />
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 768px) {
          .steps-grid {
            grid-template-columns: 1fr !important;
          }
          .connector-line {
            display: none;
          }
        }
      `}</style>
        </section>
    );
}

function StepCard({ icon, title, description, active, outlined }) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
            }}
            className="step-item"
        >
            {/* Icon circle */}
            <div
                style={{
                    marginBottom: "2rem",
                    display: "flex",
                    width: "5rem",
                    height: "5rem",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "1rem",
                    background: active ? "#4338ca" : outlined ? "white" : "white",
                    color: active ? "white" : outlined ? "#4338ca" : "#64748b",
                    border: active ? "none" : outlined ? "2px solid #4338ca" : "2px solid #e2e8f0",
                    boxShadow: active
                        ? "0 16px 40px rgba(67,56,202,0.3)"
                        : "0 8px 24px rgba(0,0,0,0.06)",
                    outline: "8px solid white",
                    outlineOffset: "-2px",
                    transition: "transform 0.3s ease",
                }}
                className="step-icon"
            >
                <span className="material-symbols-outlined" style={{ fontSize: "1.75rem" }}>
                    {icon}
                </span>
            </div>

            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0f172a", marginBottom: "0.75rem" }}>
                {title}
            </h3>
            <p style={{ color: "#64748b", lineHeight: 1.6, padding: "0 1rem" }}>
                {description}
            </p>

            <style jsx>{`
        .step-item:hover .step-icon {
          transform: scale(1.1);
        }
      `}</style>
        </div>
    );
}
