import Sidebar from "./components/Sidebar";
import StatCards from "./components/StatCards";
import BookingsTable from "./components/BookingsTable";

export const metadata = {
    title: "Dashboard – ServiceLink",
    description: "Overview of your bookings, completed services, and spend on ServiceLink.",
};

export default function DashboardPage() {
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
            <Sidebar />

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
                    <StatCards />

                    {/* Recent bookings table */}
                    <BookingsTable />
                </div>
            </main>
        </div>
    );
}
