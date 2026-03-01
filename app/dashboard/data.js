// ============================================================
// UI CONFIG — Dashboard page
// ============================================================

export const navLinks = [
    { label: "Dashboard", icon: "dashboard", href: "/dashboard", active: true },
    { label: "My Bookings", icon: "calendar_month", href: "#", active: false },
    { label: "Explore", icon: "search", href: "/explore", active: false },
    { label: "Profile", icon: "person", href: "/profile", active: false },
    { label: "Settings", icon: "settings", href: "#", active: false, spacer: true },
];

export const SERVICE_ICONS = {
    "plumbing": { icon: "plumbing", bg: "#fffbeb", color: "#d97706" },
    "electrical": { icon: "bolt", bg: "#fefce8", color: "#ca8a04" },
    "home-cleaning": { icon: "cleaning_services", bg: "#eff6ff", color: "#135bec" },
    "ac-servicing": { icon: "ac_unit", bg: "#f0fdf4", color: "#16a34a" },
    "default": { icon: "home_repair_service", bg: "#f3f4f6", color: "#4b5563" }
};

export const STATUS_UI = {
    "requested": { label: "Requested", bg: "#fef3c7", color: "#b45309", dot: "#d97706", pulse: true },
    "confirmed": { label: "Confirmed", bg: "#dbeafe", color: "#1d4ed8", dot: "#2563eb", pulse: false },
    "in_progress": { label: "In Progress", bg: "#fef08a", color: "#a16207", dot: "#eab308", pulse: true },
    "completed": { label: "Completed", bg: "#dcfce7", color: "#15803d", dot: "#16a34a", pulse: false },
    "cancelled": { label: "Cancelled", bg: "#fee2e2", color: "#b91c1c", dot: "#ef4444", pulse: false },
    "rejected": { label: "Rejected", bg: "#f3f4f6", color: "#374151", dot: "#6b7280", pulse: false }
};
