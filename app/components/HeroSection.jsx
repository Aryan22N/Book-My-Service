"use client";

export default function HeroSection() {
    return (
        <section
            style={{
                position: "relative",
                overflow: "hidden",
                paddingTop: "5rem",
                paddingBottom: "7rem",
                background: "white",
            }}
        >
            {/* Background blobs */}
            <div
                style={{
                    position: "absolute",
                    top: "-6rem",
                    left: "-6rem",
                    width: "24rem",
                    height: "24rem",
                    borderRadius: "9999px",
                    background: "rgba(67,56,202,0.08)",
                    filter: "blur(64px)",
                    pointerEvents: "none",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    right: 0,
                    width: "24rem",
                    height: "24rem",
                    borderRadius: "9999px",
                    background: "rgba(99,102,241,0.08)",
                    filter: "blur(64px)",
                    pointerEvents: "none",
                }}
            />

            <div
                style={{
                    margin: "0 auto",
                    maxWidth: "80rem",
                    padding: "0 2rem",
                }}
            >
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "4rem",
                        alignItems: "center",
                    }}
                    className="hero-grid"
                >
                    {/* Left: Text + Search */}
                    <div style={{ position: "relative", zIndex: 10 }}>
                        {/* Badge */}
                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                padding: "0.25rem 0.875rem",
                                borderRadius: "9999px",
                                background: "#eef2ff",
                                border: "1px solid #c7d2fe",
                                color: "#4338ca",
                                fontWeight: 600,
                                fontSize: "0.75rem",
                                marginBottom: "1.5rem",
                            }}
                        >
                            <span style={{ position: "relative", display: "flex", height: "0.5rem", width: "0.5rem" }}>
                                <span
                                    style={{
                                        position: "absolute",
                                        display: "inline-flex",
                                        height: "100%",
                                        width: "100%",
                                        borderRadius: "9999px",
                                        backgroundColor: "#818cf8",
                                        opacity: 0.75,
                                        animation: "ping 1s cubic-bezier(0,0,0.2,1) infinite",
                                    }}
                                />
                                <span
                                    style={{
                                        position: "relative",
                                        display: "inline-flex",
                                        height: "0.5rem",
                                        width: "0.5rem",
                                        borderRadius: "9999px",
                                        backgroundColor: "#6366f1",
                                    }}
                                />
                            </span>
                            2,500+ Projects Completed This Week
                        </div>

                        {/* Heading */}
                        <h1
                            style={{
                                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                                fontWeight: 900,
                                letterSpacing: "-0.04em",
                                color: "#0f172a",
                                lineHeight: 1.1,
                                marginBottom: "2rem",
                            }}
                        >
                            Turn your{" "}
                            <span
                                style={{
                                    backgroundImage: "linear-gradient(135deg, #4338ca, #9333ea)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                vision
                            </span>
                            <br />
                            into reality.
                        </h1>

                        {/* Subtitle */}
                        <p
                            style={{
                                marginBottom: "2.5rem",
                                fontSize: "1.2rem",
                                color: "#64748b",
                                lineHeight: 1.7,
                                fontWeight: 500,
                            }}
                        >
                            Connect with top-tier local experts for your home and business projects. From concept to completion, we ensure quality every step of the way.
                        </p>

                        {/* Search Box */}
                        <div
                            style={{
                                width: "100%",
                                boxShadow: "0 20px 60px rgba(99,102,241,0.15)",
                                borderRadius: "1rem",
                                background: "white",
                                padding: "0.5rem",
                                border: "1px solid #e2e8f0",
                            }}
                        >
                            <form
                                style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}
                                className="search-form"
                                onSubmit={(e) => e.preventDefault()}
                            >
                                <div style={{ position: "relative", flex: 1 }}>
                                    <div
                                        style={{
                                            position: "absolute",
                                            inset: "0 auto 0 0",
                                            display: "flex",
                                            alignItems: "center",
                                            paddingLeft: "1rem",
                                            color: "#4338ca",
                                            pointerEvents: "none",
                                        }}
                                    >
                                        <span className="material-symbols-outlined">search</span>
                                    </div>
                                    <input
                                        aria-label="Start a project"
                                        style={{
                                            height: "3.5rem",
                                            width: "100%",
                                            borderRadius: "0.75rem",
                                            border: "none",
                                            background: "transparent",
                                            paddingLeft: "3rem",
                                            paddingRight: "1rem",
                                            fontSize: "1rem",
                                            fontWeight: 500,
                                            color: "#0f172a",
                                            outline: "none",
                                        }}
                                        placeholder="Start a project (e.g. Kitchen Renovation)"
                                        type="text"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    style={{
                                        height: "3.5rem",
                                        flexShrink: 0,
                                        borderRadius: "0.75rem",
                                        background: "#4338ca",
                                        padding: "0 2rem",
                                        fontSize: "0.95rem",
                                        fontWeight: 700,
                                        color: "white",
                                        border: "none",
                                        cursor: "pointer",
                                        boxShadow: "0 8px 20px rgba(67,56,202,0.25)",
                                        transition: "all 0.2s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = "#312e81";
                                        e.currentTarget.style.transform = "scale(1.02)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = "#4338ca";
                                        e.currentTarget.style.transform = "scale(1)";
                                    }}
                                >
                                    Get Started
                                </button>
                            </form>
                        </div>

                        {/* Social proof */}
                        <div
                            style={{
                                marginTop: "2rem",
                                display: "flex",
                                alignItems: "center",
                                gap: "1.5rem",
                                fontSize: "0.875rem",
                                fontWeight: 600,
                                color: "#64748b",
                            }}
                        >
                            <span>Trusted by homeowners in:</span>
                            <div style={{ display: "flex" }}>
                                {["#cbd5e1", "#94a3b8", "#64748b"].map((color, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            height: "2rem",
                                            width: "2rem",
                                            borderRadius: "9999px",
                                            border: "2px solid white",
                                            background: color,
                                            marginLeft: i > 0 ? "-0.75rem" : 0,
                                        }}
                                    />
                                ))}
                                <div
                                    style={{
                                        height: "2rem",
                                        width: "2rem",
                                        borderRadius: "9999px",
                                        border: "2px solid white",
                                        background: "#f1f5f9",
                                        marginLeft: "-0.75rem",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "0.7rem",
                                        color: "#475569",
                                    }}
                                >
                                    +2k
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Image Grid */}
                    <div style={{ position: "relative", height: "600px" }} className="hero-images">
                        {/* Decorative background */}
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                right: 0,
                                width: "75%",
                                height: "75%",
                                background: "linear-gradient(135deg, #e0e7ff, #faf5ff)",
                                borderRadius: "3rem",
                                zIndex: 0,
                                transform: "rotate(6deg)",
                            }}
                        />
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "1rem",
                                height: "100%",
                                position: "relative",
                                zIndex: 1,
                            }}
                        >
                            {/* Column 1 */}
                            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "3rem" }}>
                                <ImageCard src="https://lh3.googleusercontent.com/aida-public/AB6AXuCf6iiH3WJPYzR10i_z3qc9YaLUDJHqAg5aENnTMRhLjvCvWYbsS32rLEvYjqGD0T6NU0vmjM1xOR0bMuRoNhbGsuRcD_x41Mm3o3Hu0Feyr8Ba3E-VDI4r_gKbGXdIi3TYj36w8uFQwV9Sxale7Awz59dgpxnPtq675L5PfLRxQg7SYHOXtmxhmpVV8d_pbmIEM1TtmxlOgrq24MHHw6Blc6wq7kvBhIMGzpFjwbrGYl2W-hJ1w6LUQRdm29l7ArpH2oz7ldlokYd4" alt="Electrician" label="Electrical Repairs" height="16rem" />
                                <ImageCard src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsbn4peuVIHghpQMsFGROHzxM9kFCYXnWxDIXeoSvgd3Ow3SlUc033G78hxLDECC4KJwb7sEbgTmo5_T-JAcsEkXrYr2AnrWb5wsKLWzOkR6JLqv9cpvMuQf0o0xxWL2BZZAmyMp0Cz3HA74csplPqanJ0llydZZuFZOE7m0pOdVvMG7VUfu2AjM9F9cK1Coo0Ld9W-MAHMVkW8sOJDuJo-bAB2kDZP1SUyPSJ9w4Pa9Wjypgk2lRvm_B6-2kENTA5f7hWghrWdy2A" alt="Consultation" label="Consultation" height="12rem" />
                            </div>
                            {/* Column 2 */}
                            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                <ImageCard src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo7zTdhVacNbfmMq-fmN87mdYrMTJJH26m2XRmwYWQoYMbIHh995sTKPjM6-SrmJ4DfYXjSvdWCBwVxh84T0PJbeUoWHUakPSCjm1BAosqtZcngHgx1BTMJfk_wZ9SzCLPZjlUhvwL3yBZrN8pYu0vON_yJnXR3we6JDO72akWguxCOKgzVrynp_WrTTBfchYwcPu8caKQZIG2G8b87BOgNkpv23X9BybAqqKyP_rClsfTaM8fRbCLK-acwARKVix7yAhGtxZb_OC2" alt="Cleaner" label="Deep Cleaning" height="14rem" />
                                <ImageCard src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPLu8VIs47av9Gx4evGABFTweZvFe7zCJhhnriuvguGXgwl3npAub-T5C5kJZ198sClYGvaIP_SOi6q-k5D2ipMuIfBhJKhpXoCkUqGKGHmDL3N3VXgVzsKRC6Xxf-iPX6uOwX5vUbvj_zgvplkZBJ1cfYHst10tAnyNMyYPdK19WKiK3Axw7kaZ70HvgSV2R0yKJ6-ZiHa-M7YR5KVBxB1s6b877cm2aVk18MNxUU9ONph4xWYrnmj70iJf3bP5fRiAQZi0MJrn0m" alt="Plumber" label="Plumbing Install" height="16rem" />
                            </div>
                        </div>

                        {/* Floating status card */}
                        <div
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                background: "white",
                                padding: "1rem 1.25rem",
                                borderRadius: "1rem",
                                boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                                border: "1px solid #e2e8f0",
                                display: "flex",
                                alignItems: "center",
                                gap: "1rem",
                                animation: "float 3s ease-in-out infinite",
                                zIndex: 10,
                            }}
                        >
                            <div
                                style={{
                                    background: "#dcfce7",
                                    padding: "0.5rem",
                                    borderRadius: "9999px",
                                    color: "#16a34a",
                                }}
                            >
                                <span className="material-symbols-outlined">check_circle</span>
                            </div>
                            <div>
                                <p style={{ fontSize: "0.7rem", color: "#64748b", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                                    Project Status
                                </p>
                                <p style={{ fontWeight: 700, color: "#0f172a" }}>Completed on time</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%); }
          50% { transform: translate(-50%, calc(-50% - 12px)); }
        }
        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-images { display: none !important; }
        }
        @media (max-width: 640px) {
          .search-form { flex-direction: column !important; }
        }
      `}</style>
        </section>
    );
}

function ImageCard({ src, alt, label, height }) {
    return (
        <div
            style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "1rem",
                boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
                height,
                cursor: "pointer",
            }}
            className="img-card"
        >
            <img
                src={src}
                alt={alt}
                style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    transition: "transform 0.7s ease",
                }}
                className="img-card-img"
            />
            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "1rem",
                    background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                }}
            >
                <p style={{ color: "white", fontWeight: 700, fontSize: "0.875rem" }}>{label}</p>
            </div>
            <style jsx>{`
        .img-card:hover .img-card-img {
          transform: scale(1.1);
        }
      `}</style>
        </div>
    );
}
