import CheckoutHeader from "./components/CheckoutHeader";
import DateTimePicker from "./components/DateTimePicker";
import LocationForm from "./components/LocationForm";
import BookingSummary from "./components/BookingSummary";
import CheckoutLayout from "./components/CheckoutLayout";
import { progressStep } from "./data";

export const metadata = {
    title: "Book Your Service – ServiceBooking",
    description: "Select your date, time, and location to confirm your service booking.",
};

export default function CheckoutPage() {
    const progressPct = (progressStep.current / progressStep.total) * 100;

    return (
        <CheckoutLayout>
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
                <CheckoutHeader />

                <main
                    className="checkout-main"
                    style={{
                        flex: 1,
                        width: "100%",
                        maxWidth: "80rem",
                        margin: "0 auto",
                        padding: "1.5rem 1.5rem 3rem",
                    }}
                >
                    {/* Progress bar */}
                    <div style={{ marginBottom: "2rem" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                            <h1 style={{ fontSize: "1.875rem", fontWeight: 700, letterSpacing: "-0.02em", color: "#111318" }}>
                                Book Your Service
                            </h1>
                            <span style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#135bec" }}>
                                Step {progressStep.current} of {progressStep.total}
                            </span>
                        </div>
                        <div
                            style={{
                                height: "0.5rem",
                                width: "100%",
                                borderRadius: "9999px",
                                background: "#e2e8f0",
                                overflow: "hidden",
                            }}
                        >
                            <div
                                style={{
                                    height: "100%",
                                    width: `${progressPct}%`,
                                    borderRadius: "9999px",
                                    background: "#135bec",
                                    transition: "width 0.5s ease-out",
                                }}
                            />
                        </div>
                    </div>

                    {/* Two-column layout */}
                    <div
                        className="checkout-cols"
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "2rem",
                            alignItems: "flex-start",
                        }}
                    >
                        {/* Left: steps */}
                        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2rem" }}>
                            <DateTimePicker />
                            <LocationForm />
                        </div>

                        {/* Right: summary (hidden on tablet/mobile via CSS class) */}
                        <div className="summary-col" style={{ width: "23.75rem", flexShrink: 0 }}>
                            <BookingSummary />
                        </div>
                    </div>
                </main>
            </div>
        </CheckoutLayout>
    );
}
