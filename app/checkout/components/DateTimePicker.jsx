"use client";

import { useState } from "react";
import { calendarData, timeSlots } from "../data";

export default function DateTimePicker() {
    const [selectedDay, setSelectedDay] = useState(calendarData.defaultSelectedDay);
    const [selectedSlot, setSelectedSlot] = useState(
        timeSlots.find((s) => s.defaultSelected)?.id || timeSlots[0].id
    );

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
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div
                        style={{
                            display: "flex",
                            width: "2rem",
                            height: "2rem",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "9999px",
                            background: "#135bec",
                            color: "white",
                            fontSize: "0.875rem",
                            fontWeight: 700,
                        }}
                    >
                        1
                    </div>
                    <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#111318" }}>Select Date &amp; Time</h3>
                </div>
                <span style={{ fontSize: "0.875rem", color: "#64748b" }}>{calendarData.month}</span>
            </div>

            {/* Body */}
            <div style={{ padding: "1.5rem" }}>
                <p style={{ fontSize: "0.875rem", color: "#64748b", marginBottom: "1.5rem" }}>
                    Choose a convenient slot for our team to arrive.
                </p>

                <div
                    style={{ display: "flex", flexDirection: "row", gap: "2rem", flexWrap: "wrap" }}
                >
                    {/* Calendar */}
                    <div style={{ width: "100%", maxWidth: "18rem" }}>
                        {/* Month nav */}
                        <div
                            style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem", padding: "0 0.5rem" }}
                        >
                            <NavBtn icon="chevron_left" />
                            <p style={{ fontSize: "1rem", fontWeight: 700, color: "#111318" }}>{calendarData.month}</p>
                            <NavBtn icon="chevron_right" />
                        </div>

                        {/* Grid */}
                        <div
                            style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "0.25rem 0" }}
                        >
                            {/* Weekday headers */}
                            {calendarData.weekDays.map((d, i) => (
                                <div
                                    key={i}
                                    style={{ textAlign: "center", fontSize: "0.75rem", fontWeight: 700, color: "#94a3b8", padding: "0.5rem 0" }}
                                >
                                    {d}
                                </div>
                            ))}

                            {/* Day cells */}
                            {calendarData.days.map((day, i) => {
                                if (day === 0) return <div key={`pad-${i}`} style={{ height: "2.5rem" }} />;
                                const isSelected = day === selectedDay;
                                return (
                                    <button
                                        key={day}
                                        onClick={() => setSelectedDay(day)}
                                        style={{
                                            height: "2.5rem",
                                            width: "100%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            borderRadius: "9999px",
                                            fontSize: "0.875rem",
                                            fontWeight: 500,
                                            cursor: "pointer",
                                            border: "none",
                                            background: isSelected ? "#135bec" : "transparent",
                                            color: isSelected ? "white" : "#111318",
                                            boxShadow: isSelected ? "0 4px 12px rgba(19,91,236,0.3)" : "none",
                                            transition: "all 0.15s",
                                            fontFamily: "inherit",
                                        }}
                                        onMouseEnter={(e) => { if (!isSelected) e.currentTarget.style.background = "#f1f5f9"; }}
                                        onMouseLeave={(e) => { if (!isSelected) e.currentTarget.style.background = "transparent"; }}
                                    >
                                        {day}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Time slots */}
                    <div style={{ flex: 1, minWidth: "12rem" }}>
                        <h4 style={{ fontSize: "0.875rem", fontWeight: 600, color: "#111318", marginBottom: "1rem" }}>
                            Available Slots for {calendarData.month.split(" ")[0]} {selectedDay}
                        </h4>
                        <div
                            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.75rem" }}
                        >
                            {timeSlots.map((slot) => {
                                const isActive = selectedSlot === slot.id;
                                return (
                                    <button
                                        key={slot.id}
                                        onClick={() => setSelectedSlot(slot.id)}
                                        style={{
                                            border: isActive ? "1px solid #135bec" : "1px solid #e5e7eb",
                                            borderRadius: "0.5rem",
                                            padding: "0.625rem 1rem",
                                            fontSize: "0.875rem",
                                            fontWeight: 500,
                                            color: isActive ? "#135bec" : "#111318",
                                            background: isActive ? "rgba(19,91,236,0.08)" : "white",
                                            outline: isActive ? "1px solid #135bec" : "none",
                                            cursor: "pointer",
                                            transition: "all 0.15s",
                                            fontFamily: "inherit",
                                        }}
                                        onMouseEnter={(e) => {
                                            if (!isActive) {
                                                e.currentTarget.style.borderColor = "#135bec";
                                                e.currentTarget.style.background = "rgba(19,91,236,0.04)";
                                                e.currentTarget.style.color = "#135bec";
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (!isActive) {
                                                e.currentTarget.style.borderColor = "#e5e7eb";
                                                e.currentTarget.style.background = "white";
                                                e.currentTarget.style.color = "#111318";
                                            }
                                        }}
                                    >
                                        {slot.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function NavBtn({ icon }) {
    return (
        <button
            style={{
                padding: "0.5rem",
                borderRadius: "9999px",
                border: "none",
                background: "transparent",
                cursor: "pointer",
                color: "#111318",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.15s",
                fontFamily: "inherit",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#f1f5f9")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
            <span className="material-symbols-outlined">{icon}</span>
        </button>
    );
}
