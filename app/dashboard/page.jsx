import Sidebar from "./components/Sidebar";
import StatCards from "./components/StatCards";
import BookingsTable from "./components/BookingsTable";
import { createClient } from "@/lib/supabase/server";
import { SERVICE_ICONS, STATUS_UI } from "./data";

export const metadata = {
    title: "Dashboard – ServiceLink",
    description: "Overview of your bookings, completed services, and spend on ServiceLink.",
};

const DEFAULT_AVATAR = "https://lh3.googleusercontent.com/aida-public/AB6AXuDyWoeBgrtIOUpQ8F9NGTpAx61h8EdeJHhaYt-TF9Tt0e_Gkr4Aq3WyYz6GT04_DHYcr_4X82EqyqvpcdROdJp1vsrHbWvNBdOIoBu5cxpYuzsrzxfhsAwzTiP8cgfGBVBQbsR1pGxBS5K5XoPeLZZ_hbbZWF4rg29Du237Pjk4HNLUHNi78KFh4Rvsa4TPllDtk5EcymhZtJfeemgmSdHU1fKajJWC0b8wVYTUw4jIdfK77YmWF1iWsgHoc6xzLHfM0_U-qvhDmt3X";

export default async function DashboardPage() {
    const supabase = await createClient();

    // 1. Fetch current user (Arjun Mehta) since we don't have real auth yet
    const { data: customerData } = await supabase
        .from("profiles")
        .select(`
            id, full_name, role, avatar_url,
            cities ( name )
        `)
        .eq("full_name", "Arjun Mehta")
        .single();

    const currentUser = customerData ? {
        name: customerData.full_name,
        role: customerData.role,
        city: customerData.cities?.name || "Bangalore",
        area: "Bandra West", // Display filler
        plan: "Free Plan",
        avatar: customerData.avatar_url || DEFAULT_AVATAR
    } : { name: "Guest", role: "customer", city: "", area: "", plan: "", avatar: DEFAULT_AVATAR };

    // 2. Fetch bookings for this customer
    const { data: bookingsData } = await supabase
        .from("bookings")
        .select(`
            id,
            booking_number,
            status,
            scheduled_at,
            quoted_price,
            final_price,
            provider_services (
                services (
                    name,
                    service_categories ( slug )
                )
            ),
            provider_profiles (
                profiles ( full_name, avatar_url )
            )
        `)
        .eq("customer_id", customerData?.id || null)
        .order("scheduled_at", { ascending: false });

    // 3. Format bookings for BookingsTable
    const recentBookings = (bookingsData || []).map(b => {
        const serviceName = b.provider_services?.services?.name || "Unknown Service";
        const catSlug = b.provider_services?.services?.service_categories?.slug || "default";

        const uiIcon = SERVICE_ICONS[catSlug] || SERVICE_ICONS.default;
        const uiStatus = STATUS_UI[b.status] || STATUS_UI.requested;

        const dateObj = new Date(b.scheduled_at);
        const dateStr = dateObj.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });

        return {
            id: b.booking_number || b.id,
            service: serviceName,
            serviceDetail: `${serviceName} — Scheduled`,
            serviceIcon: uiIcon.icon,
            serviceIconBg: uiIcon.bg,
            serviceIconColor: uiIcon.color,
            provider: b.provider_profiles?.profiles?.full_name || "Assigning...",
            providerAvatar: b.provider_profiles?.profiles?.avatar_url || "",
            date: dateStr,
            status: uiStatus.label,
            statusBg: uiStatus.bg,
            statusColor: uiStatus.color,
            statusDot: uiStatus.dot,
            pulse: uiStatus.pulse,
            quotedPrice: b.quoted_price
        };
    });

    // 4. Calculate StatCards
    const upcomingCount = (bookingsData || []).filter(b => ["requested", "confirmed", "in_progress"].includes(b.status)).length;
    const completedCount = (bookingsData || []).filter(b => b.status === "completed").length;

    const totalSpent = (bookingsData || [])
        .filter(b => b.status === "completed")
        .reduce((sum, b) => sum + Number(b.final_price || b.quoted_price || 0), 0);

    const statCards = [
        {
            id: "upcoming",
            label: "Upcoming Bookings",
            value: upcomingCount.toString(),
            icon: "upcoming",
            iconBg: "#135bec1a",
            iconColor: "#135bec",
            badge: upcomingCount > 0 ? `+${upcomingCount} this week` : null,
            badgeBg: "#dcfce7",
            badgeColor: "#15803d",
        },
        {
            id: "completed",
            label: "Completed Services",
            value: completedCount.toString(),
            icon: "check_circle",
            iconBg: "#f3e8ff",
            iconColor: "#9333ea",
            badge: null,
        },
        {
            id: "spent",
            label: "Total Spent",
            value: `₹${totalSpent.toLocaleString('en-IN')}`,
            icon: "payments",
            iconBg: "#fff7ed",
            iconColor: "#ea580c",
            badge: null,
        },
    ];

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                background: "#f6f6f8",
                fontFamily: "'Inter', sans-serif",
            }}
        >
            {/* Sidebar */}
            <Sidebar currentUser={currentUser} />

            {/* Main content */}
            <main
                style={{
                    flex: 1,
                    minWidth: 0,
                    overflowY: "auto",
                }}
            >
                <div
                    style={{
                        maxWidth: "75rem",
                        margin: "0 auto",
                        padding: "2.5rem 2rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "2rem",
                    }}
                >
                    {/* Page header */}
                    <header style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <h2
                            style={{
                                fontSize: "1.875rem",
                                fontWeight: 900,
                                color: "#111318",
                                letterSpacing: "-0.03em",
                            }}
                        >
                            Dashboard Overview
                        </h2>
                        <p style={{ color: "#616f89", fontSize: "1rem" }}>
                            Here is a summary of your recent service activity and upcoming schedules.
                        </p>
                    </header>

                    {/* Stat cards */}
                    <StatCards statCards={statCards} />

                    {/* Recent bookings table */}
                    <BookingsTable recentBookings={recentBookings} />
                </div>
            </main>
        </div>
    );
}
