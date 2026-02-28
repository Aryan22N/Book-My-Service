"use client";

import { useState } from "react";
import { locationFields, stateOptions } from "../data";

export default function LocationForm() {
    const [values, setValues] = useState({});

    const handleChange = (id, val) =>
        setValues((prev) => ({ ...prev, [id]: val }));

    return (
        <section
            style={{
                borderRadius: "0.75rem",
                border: "1px solid #e5e7eb",
                background: "white",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                overflow: "hidden",
            }}
        >
            {/* Section header */}
            <div
                style={{
                    borderBottom: "1px solid #e5e7eb",
                    background: "#f8fafc",
                    padding: "1.25rem 1.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        width: "2rem",
                        height: "2rem",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "9999px",
                        background: "#111318",
                        color: "white",
                        fontSize: "0.875rem",
                        fontWeight: 700,
                    }}
                >
                    2
                </div>
                <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#111318" }}>Service Location</h3>
            </div>

            {/* Form body */}
            <div style={{ padding: "1.5rem" }}>
                <div
                    style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }}
                    className="form-grid"
                >
                    {/* Static fields from data */}
                    {locationFields.map((field) => (
                        <div
                            key={field.id}
                            style={{ gridColumn: field.colSpan === 2 ? "1 / -1" : "auto" }}
                            className={field.colSpan === 2 ? "full-col" : ""}
                        >
                            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "#111318", marginBottom: "0.5rem" }}>
                                {field.label}
                            </label>
                            <div style={{ position: "relative" }}>
                                {field.icon && (
                                    <div
                                        style={{
                                            position: "absolute",
                                            inset: "0 auto 0 0",
                                            paddingLeft: "0.75rem",
                                            display: "flex",
                                            alignItems: "center",
                                            pointerEvents: "none",
                                            color: "#94a3b8",
                                        }}
                                    >
                                        <span className="material-symbols-outlined" style={{ fontSize: "1.1rem" }}>
                                            {field.icon}
                                        </span>
                                    </div>
                                )}
                                <input
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    value={values[field.id] || ""}
                                    onChange={(e) => handleChange(field.id, e.target.value)}
                                    style={{
                                        display: "block",
                                        width: "100%",
                                        boxSizing: "border-box",
                                        paddingLeft: field.icon ? "2.5rem" : "0.75rem",
                                        paddingRight: "0.75rem",
                                        paddingTop: "0.625rem",
                                        paddingBottom: "0.625rem",
                                        borderRadius: "0.5rem",
                                        border: "1px solid #cbd5e1",
                                        fontSize: "0.875rem",
                                        fontFamily: "inherit",
                                        outline: "none",
                                        transition: "border-color 0.15s, box-shadow 0.15s",
                                    }}
                                    onFocus={(e) => {
                                        e.currentTarget.style.borderColor = "#135bec";
                                        e.currentTarget.style.boxShadow = "0 0 0 2px rgba(19,91,236,0.2)";
                                    }}
                                    onBlur={(e) => {
                                        e.currentTarget.style.borderColor = "#cbd5e1";
                                        e.currentTarget.style.boxShadow = "none";
                                    }}
                                />
                            </div>
                        </div>
                    ))}

                    {/* State select (special — not easily abstracted) */}
                    <div>
                        <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "#111318", marginBottom: "0.5rem" }}>
                            State
                        </label>
                        <select
                            style={{
                                display: "block",
                                width: "100%",
                                boxSizing: "border-box",
                                padding: "0.625rem 0.75rem",
                                borderRadius: "0.5rem",
                                border: "1px solid #cbd5e1",
                                fontSize: "0.875rem",
                                fontFamily: "inherit",
                                background: "white",
                                outline: "none",
                                transition: "border-color 0.15s, box-shadow 0.15s",
                            }}
                            onFocus={(e) => {
                                e.currentTarget.style.borderColor = "#135bec";
                                e.currentTarget.style.boxShadow = "0 0 0 2px rgba(19,91,236,0.2)";
                            }}
                            onBlur={(e) => {
                                e.currentTarget.style.borderColor = "#cbd5e1";
                                e.currentTarget.style.boxShadow = "none";
                            }}
                        >
                            {stateOptions.map((opt) => (
                                <option key={opt}>{opt}</option>
                            ))}
                        </select>
                    </div>

                    {/* Notes textarea (full-width) */}
                    <div style={{ gridColumn: "1 / -1" }}>
                        <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "#111318", marginBottom: "0.5rem" }}>
                            Access Instructions (Optional)
                        </label>
                        <textarea
                            rows={3}
                            placeholder="Gate code, key location, etc."
                            style={{
                                display: "block",
                                width: "100%",
                                boxSizing: "border-box",
                                padding: "0.75rem",
                                borderRadius: "0.5rem",
                                border: "1px solid #cbd5e1",
                                fontSize: "0.875rem",
                                fontFamily: "inherit",
                                resize: "vertical",
                                outline: "none",
                                transition: "border-color 0.15s, box-shadow 0.15s",
                            }}
                            onFocus={(e) => {
                                e.currentTarget.style.borderColor = "#135bec";
                                e.currentTarget.style.boxShadow = "0 0 0 2px rgba(19,91,236,0.2)";
                            }}
                            onBlur={(e) => {
                                e.currentTarget.style.borderColor = "#cbd5e1";
                                e.currentTarget.style.boxShadow = "none";
                            }}
                        />
                    </div>
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 640px) {
          .form-grid { grid-template-columns: 1fr !important; }
          .full-col { grid-column: auto !important; }
        }
      `}</style>
        </section>
    );
}
