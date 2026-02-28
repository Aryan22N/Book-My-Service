"use client";

export default function ActionBtn({ label, icon, primary }) {
    return (
        <button
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                padding: "0 1.25rem",
                height: "2.5rem",
                borderRadius: "0.75rem",
                background: primary ? "#135bec" : "white",
                color: primary ? "white" : "#111318",
                border: primary ? "none" : "1px solid #f0f2f4",
                fontSize: "0.875rem",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: primary ? "0 2px 6px rgba(19,91,236,0.2)" : "0 1px 3px rgba(0,0,0,0.04)",
                transition: "all 0.15s",
                fontFamily: "inherit",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.background = primary ? "#0b42b0" : "#f8fafc";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.background = primary ? "#135bec" : "white";
            }}
        >
            <span className="material-symbols-outlined" style={{ fontSize: "1.1rem" }}>{icon}</span>
            {label}
        </button>
    );
}
