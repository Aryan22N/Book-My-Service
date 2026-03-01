import TrackerHeader from "./components/TrackerHeader";
import ServiceCard from "./components/ServiceCard";
import BookingTimeline from "./components/BookingTimeline";
import RightPanel from "./components/RightPanel";
import TrackerLayout from "./components/TrackerLayout";
import ActionBtn from "./components/ActionBtn";
import { createClient } from "@/lib/supabase/server";

export const metadata = {
    title: `Live Tracker | ServiceTrack`,
    description: "Track the real-time progress of your booked service. View status, provider details, and location.",
};

const DEFAULT_AVATAR = "https://lh3.googleusercontent.com/aida-public/AB6AXuDyWoeBgrtIOUpQ8F9NGTpAx61h8EdeJHhaYt-TF9Tt0e_Gkr4Aq3WyYz6GT04_DHYcr_4X82EqyqvpcdROdJp1vsrHbWvNBdOIoBu5cxpYuzsrzxfhsAwzTiP8cgfGBVBQbsR1pGxBS5K5XoPeLZZ_hbbZWF4rg29Du237Pjk4HNLUHNi78KFh4Rvsa4TPllDtk5EcymhZtJfeemgmSdHU1fKajJWC0b8wVYTUw4jIdfK77YmWF1iWsgHoc6xzLHfM0_U-qvhDmt3X";
const MAP_PLACEHOLDER = "https://lh3.googleusercontent.com/aida-public/AB6AXuDfHSRagx3aNhIQkom5ZnuhuFCGfp-NEHLP3e_ri7dxcvZ84uux8gMVyBxsIXdv6rWqpOtjfad_RoA1It-AZhe2vXk7Kf3CIOjWnLxfCd1ZEBxKq4tszWLwvSOLdpM9KmZV7DXXFzjHi7VEY434aMFo-Q1T1ZL0l4sK0O1CcGwJsfDhkrzJnqU4P5qLixohifF3YnxbRf-JItyxqhYXoPywQz0izSwMZinUHJ32I3kgSsFghiPVyPRJdkzca5z2fWvpaAARuGGr2HF1";

export default async function TrackerPage() {
    const supabase = await createClient();

    // 1. Fetch deep clean booking BK-20231024-0012
    const { data: bData } = await supabase
        .from("bookings")
        .select(`
            id, booking_number, status, scheduled_at, quoted_price, address_line, started_at, completed_at,
            services ( 
                name, description, base_price, price_unit, estimated_duration_mins,
                service_categories ( slug, name )
            ),
            provider_profiles:provider_id (
                business_name, avg_rating, total_jobs_completed, status,
                profiles:id ( full_name, avatar_url )
            ),
            customer_profiles:customer_id ( full_name, avatar_url ),
            areas ( name, pincode, cities ( name ) ),
            booking_status_history ( from_status, to_status, created_at, notes )
        `)
        .eq("booking_number", "BK-20231024-0012")
        .single();

    if (!bData) return <div>Booking not found</div>;

    // 2. format high-level booking details
    const labelMap = {
        requested: "Requested",
        confirmed: "Confirmed",
        in_progress: "In Progress",
        completed: "Completed"
    };

    const booking = {
        id: bData.booking_number,
        status: bData.status,
        statusLabel: labelMap[bData.status] || "Unknown",
        description: `Track the real-time progress of your ${bData.services?.name?.toLowerCase() || 'service'} service.`,
        service: {
            name: bData.services?.name,
            category: bData.services?.service_categories?.slug,
            description: bData.services?.description,
            price: `₹${bData.quoted_price?.toLocaleString('en-IN')}`,
            priceUnit: bData.services?.price_unit,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDurUd34E4h_-_0xUWvlddIHKsdi5kyp6f4yYqEDn_Fre3sGx73Itop67hYgcNF37ndWJMonGOnnn9_j0wPjd_5MrrScIgi1UxijSxyJNqYmtSM4YC1_g49A5z6NcsyMNiaswsWSvbqe0Fkmh4ORFKVuUT21-mPHl6uDoWjzWYOhhUy6o6X8zerWAK3v7Q2MF6t2CUw0lHv9q-0mRDWYbe__egJKvar5x4Ds7NwAU9-a4UfLZuaxDO8RqE_n_H-2rVpmVJzgF5ofLv", // static
            imageAlt: "Service in progress"
        },
        provider: {
            name: bData.provider_profiles?.profiles?.full_name,
            business_name: bData.provider_profiles?.business_name,
            rating: bData.provider_profiles?.avg_rating?.toFixed(1) || "4.9",
            reviewCount: bData.provider_profiles?.total_jobs_completed || 0,
            avatar: bData.provider_profiles?.profiles?.avatar_url || DEFAULT_AVATAR
        }
    };

    const currentUser = {
        name: bData.customer_profiles?.full_name,
        role: "customer",
        avatar: bData.customer_profiles?.avatar_url || DEFAULT_AVATAR
    };

    // 3. Format timeline steps using booking_status_history
    const history = bData.booking_status_history || [];
    // Sort oldest to newest
    history.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

    // We build the expected ui format timeline
    const allStates = ["requested", "confirmed", "in_progress", "completed"];
    let currentStateIdx = allStates.indexOf(bData.status);
    if (currentStateIdx < 0) currentStateIdx = 0;

    const timelineSteps = allStates.map((s, idx) => {
        // Find if this state exists in history
        const histEntry = history.find(h => h.to_status === s);

        // determine if done, active, or pending
        let stateIndicator = "pending";
        let timeLabel = "Pending";
        if (idx < currentStateIdx) stateIndicator = "done";
        if (idx === currentStateIdx) stateIndicator = "active";

        if (histEntry || (s === "requested" && history.length > 0)) {
            // For requested we might use the oldest entry date if specific 'requested' doesn't exist depending on triggers
            const match = histEntry || history[0];
            const d = new Date(match.created_at);
            timeLabel = d.toLocaleString('en-IN', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' });
        } else if (stateIndicator === "active") {
            // If it's active but no exact history trigger yet, use started_at or scheduled_at
            const d = bData.started_at ? new Date(bData.started_at) : new Date(bData.scheduled_at);
            timeLabel = `Started: ${d.toLocaleString('en-IN', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' })}`;
        }

        const labels = { "requested": "Booking Requested", "confirmed": "Provider Confirmed", "in_progress": "Service In-progress", "completed": "Completion" };

        return {
            id: idx + 1,
            dbStatus: s,
            label: labels[s],
            time: timeLabel,
            state: stateIndicator,
            note: histEntry?.notes || (s === "requested" ? `Booking ID: ${bData.booking_number}` : ""),
            noteType: s === "requested" ? "tag" : (histEntry?.notes ? "text" : null),
            badge: s === "in_progress" && stateIndicator === "active" ? "On Track" : null,
            badgeNote: s === "in_progress" && stateIndicator === "active" ? `Est. duration: ${bData.services?.estimated_duration_mins}m` : null,
        }
    });

    // 4. Format right panel details
    const d = new Date(bData.scheduled_at);
    const dateStr = d.toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' });
    const timeStr = d.toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit' });

    // approximate end time
    const end_d = new Date(d.getTime() + (bData.services?.estimated_duration_mins || 60) * 60000);
    const timeWindow = `${timeStr} – ${end_d.toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit' })}`;

    const bookingDetails = [
        { icon: "cleaning_services", label: "Service Type", value: bData.services?.service_categories?.name || "Service" },
        { icon: "calendar_today", label: "Date", value: dateStr },
        { icon: "schedule", label: "Time Window", value: timeWindow },
        { icon: "location_on", label: "Area", value: `${bData.areas?.name}, ${bData.areas?.cities?.name}` },
        { icon: "payments", label: "Quoted Price", value: `₹${bData.quoted_price?.toLocaleString('en-IN')}`, bold: true }
    ];

    const locationInfo = {
        address: `${bData.address_line}, ${bData.areas?.name}, ${bData.areas?.cities?.name} – ${bData.areas?.pincode}`,
        area: bData.areas?.name,
        pincode: bData.areas?.pincode,
        city: bData.areas?.cities?.name,
        mapImage: MAP_PLACEHOLDER
    };

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
                <TrackerHeader currentUser={currentUser} />

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

                                    {/* Animated badge for Active state */}
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
                                        {booking.statusLabel}
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
                                <ServiceCard booking={booking} />
                                <BookingTimeline timelineSteps={timelineSteps} />
                            </div>

                            {/* Right column */}
                            <div>
                                <RightPanel bookingDetails={bookingDetails} locationInfo={locationInfo} />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </TrackerLayout>
    );
}

