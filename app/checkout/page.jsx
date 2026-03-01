import CheckoutHeader from "./components/CheckoutHeader";
import DateTimePicker from "./components/DateTimePicker";
import LocationForm from "./components/LocationForm";
import BookingSummary from "./components/BookingSummary";
import CheckoutLayout from "./components/CheckoutLayout";
import { progressStep } from "./data";
import { createClient } from "@/lib/supabase/server";

export const metadata = {
    title: "Book Your Service – ServiceBooking",
    description: "Select your date, time, and location to confirm your service booking.",
};

const FALLBACK_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuB-d4ISTuLs6u_8PIJSldbEWZy1NvY-lO3_f0S5Od-FPqu990ARArWvqQrEaVSp1YAy_Zv5qilfOJbfX2LGis9E1JYEv2r2DuhKfZrnZf6X5Q5tBrnf0gJBQlQs8cNjdwJR6nQdcRny51_49ElzRQA6KHT8MKdaAq92QRL3Mpw431E6nxSZOwPwTzCmjptOJXxfZ5r8cwKdHKGTCgfhU7vMceGId09nPmxOQVBmnvfTKdNfKk99ePiXFwRJTedHvpJwiZOD0hXOmUmF";

export default async function CheckoutPage() {
    const supabase = await createClient();
    const progressPct = (progressStep.current / progressStep.total) * 100;

    // ── Fetch the service being booked from services table ──────────────
    // Joins with service_categories to get the slug
    const { data: serviceRow } = await supabase
        .from("services")
        .select(`
            id,
            name,
            description,
            base_price,
            price_unit,
            estimated_duration_mins,
            service_categories ( slug, name )
        `)
        .eq("name", "Home Deep Clean")
        .single();

    // Build bookingService
    const bookingService = serviceRow
        ? {
            id: serviceRow.id,
            name: serviceRow.name,
            category: serviceRow.service_categories?.slug ?? "home-cleaning",
            description: serviceRow.description,
            price: Number(serviceRow.base_price),
            priceUnit: serviceRow.price_unit,
            duration: serviceRow.estimated_duration_mins
                ? `~${Math.round(serviceRow.estimated_duration_mins / 60)} Hours`
                : "~4 Hours",
            // Static display fields (will come from booking once checkout flow exists)
            date: "Nov 15, 2023",
            time: "10:00 AM",
            image: FALLBACK_IMAGE,   // stored in Supabase Storage in production
            imageAlt: "Professional home cleaning service",
        }
        : {
            name: "Home Deep Clean", price: 1499, priceUnit: "per_visit", image: FALLBACK_IMAGE, imageAlt: "Cleaning"
        };

    // ── Fetch areas from the areas table ────────────────────────────────
    const { data: areasRows } = await supabase
        .from("areas")
        .select("id, name, pincode")
        .order("name", { ascending: true });

    const areaOptions = areasRows && areasRows.length > 0
        ? ["Select Area", ...areasRows.map((a) => a.name)]
        : ["Select Area", "Koramangala"];

    // ── Fetch time slots from booking_time_slots ──────────────────────────
    const { data: slotsRows } = await supabase
        .from("booking_time_slots")
        .select("slot_id, label, is_default")
        .eq("is_active", true)
        .order("sort_order", { ascending: true });

    const timeSlots = slotsRows && slotsRows.length > 0
        ? slotsRows.map(s => ({ id: s.slot_id, label: s.label, defaultSelected: s.is_default }))
        : [];

    // Pricing derived from live service price
    const subtotal = bookingService.price;
    const serviceFee = 49;
    const taxRate = 0.18;
    const tax = Math.round(subtotal * taxRate);
    const total = subtotal + serviceFee + tax;

    const pricingBreakdown = { subtotal, serviceFee, taxRate, tax, total };

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
                            <DateTimePicker timeSlots={timeSlots} />
                            <LocationForm areaOptions={areaOptions} />
                        </div>

                        {/* Right: summary */}
                        <div className="summary-col" style={{ width: "23.75rem", flexShrink: 0 }}>
                            <BookingSummary
                                bookingService={bookingService}
                                pricingBreakdown={pricingBreakdown}
                            />
                        </div>
                    </div>
                </main>
            </div>
        </CheckoutLayout>
    );
}
