import TrackerHeader from "./components/TrackerHeader";
import ServiceCard from "./components/ServiceCard";
import BookingTimeline from "./components/BookingTimeline";
import RightPanel from "./components/RightPanel";
import TrackerLayout from "./components/TrackerLayout";
import ActionBtn from "./components/ActionBtn";
import { booking } from "./data";

export const metadata = {
    title: `Booking ${booking.id} – Live Tracker | ServiceTrack`,
    description: "Track the real-time progress of your booked service. View status, provider details, and location.",
};

export default function TrackerPage() {
    return (
        <TrackerLayout>
            <div
                style={{
                    position: "relative",
                    display: "flex",
                    minHeight: "100vh",
                    width: "100%",
                    flexDirection: "column",
                    overflowX: "hidden",
                    background: "#f6f6f8",
                    fontFamily: "'Inter', sans-serif",
                }}
            >
                <TrackerHeader />

                <main
                    className="tracker-main"
                    style={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "center",
                        padding: "2rem 1.5rem",
                    }}
                >
                    <div style={{ width: "100%", maxWidth: "64rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                        {/* Page title row */}
                        <div
                            className="tracker-title-row"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: "1rem",
                                paddingBottom: "1rem",
                                borderBottom: "1px solid #f0f2f4",
                            }}
                        >
                            {/* Left: title + badge */}
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                    <h1
                                        style={{
                                            fontSize: "clamp(1.875rem, 4vw, 2.5rem)",
                                            fontWeight: 900,
                                            letterSpacing: "-0.033em",
                                            color: "#111318",
                                        }}
                                    >
                                        Booking {booking.id}
                                    </h1>

                                    {/* Animated "In Progress" badge */}
                                    <span
                                        style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "0.375rem",
                                            padding: "0.25rem 0.75rem",
                                            borderRadius: "9999px",
                                            fontSize: "0.75rem",
                                            fontWeight: 700,
                                            background: "#dbeafe",
                                            color: "#1e40af",
                                        }}
                                    >
                                        {/* Ping dot */}
                                        <span style={{ position: "relative", display: "inline-flex", width: "0.5rem", height: "0.5rem" }}>
                                            <span
                                                style={{
                                                    position: "absolute",
                                                    inset: 0,
                                                    borderRadius: "9999px",
                                                    background: "#60a5fa",
                                                    opacity: 0.75,
                                                    animation: "ping 1.5s cubic-bezier(0,0,0.2,1) infinite",
                                                }}
                                            />
                                            <span
                                                style={{
                                                    position: "relative",
                                                    width: "100%",
                                                    height: "100%",
                                                    borderRadius: "9999px",
                                                    background: "#3b82f6",
                                                    display: "inline-flex",
                                                }}
                                            />
                                        </span>
                                        {booking.status}
                                    </span>
                                </div>
                                <p style={{ fontSize: "1rem", color: "#616f89" }}>{booking.description}</p>
                            </div>

                            {/* Right: CTA buttons */}
                            <div style={{ display: "flex", gap: "0.75rem", flexShrink: 0 }}>
                                <ActionBtn label="Reschedule" icon="calendar_month" primary={false} />
                                <ActionBtn label="Contact Provider" icon="chat" primary={true} />
                            </div>
                        </div>

                        {/* Main grid */}
                        <div className="tracker-grid">
                            {/* Left column */}
                            <div className="tracker-left-col" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                                <ServiceCard />
                                <BookingTimeline />
                            </div>

                            {/* Right column */}
                            <div>
                                <RightPanel />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </TrackerLayout>
    );
}

