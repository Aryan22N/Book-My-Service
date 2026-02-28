"use client";

import { useState } from "react";
import { quickTabs } from "../data";

export default function QuickTabs() {
    const [activeTab, setActiveTab] = useState(quickTabs[0].label);

    return (
        <section
            style={{
                marginBottom: "2rem",
                overflowX: "auto",
                paddingBottom: "0.5rem",
                // hide scrollbar
                scrollbarWidth: "none",
                msOverflowStyle: "none",
            }}
        >
            <div style={{ display: "flex", gap: "0.5rem", width: "max-content" }}>
                {quickTabs.map((tab) => {
                    const isActive = activeTab === tab.label;
                    return (
                        <button
                            key={tab.label}
                            onClick={() => setActiveTab(tab.label)}
                            style={{
                                whiteSpace: "nowrap",
                                borderRadius: "9999px",
                                background: isActive ? "#135bec" : "white",
                                border: isActive ? "none" : "1px solid #f0f2f4",
                                padding: "0.5rem 1.25rem",
                                fontSize: "0.875rem",
                                fontWeight: 500,
                                color: isActive ? "white" : "#111318",
                                cursor: "pointer",
                                boxShadow: isActive ? "0 4px 12px rgba(19,91,236,0.25)" : "none",
                                transform: "scale(1)",
                                transition: "all 0.15s ease",
                                fontFamily: "inherit",
                            }}
                            onMouseEnter={(e) => {
                                if (!isActive) e.currentTarget.style.background = "#f6f6f8";
                                else e.currentTarget.style.transform = "scale(1.05)";
                            }}
                            onMouseLeave={(e) => {
                                if (!isActive) e.currentTarget.style.background = "white";
                                else e.currentTarget.style.transform = "scale(1)";
                            }}
                        >
                            {tab.label}
                        </button>
                    );
                })}
            </div>

            <style jsx>{`
        section::-webkit-scrollbar { display: none; }
      `}</style>
        </section>
    );
}
