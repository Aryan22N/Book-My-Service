// ============================================================
// DUMMY DATA — all dashboard state lives here as plain objects
// ============================================================

export const currentUser = {
    name: "Alex Morgan",
    plan: "Free Plan",
    avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDyWoeBgrtIOUpQ8F9NGTpAx61h8EdeJHhaYt-TF9Tt0e_Gkr4Aq3WyYz6GT04_DHYcr_4X82EqyqvpcdROdJp1vsrHbWvNBdOIoBu5cxpYuzsrzxfhsAwzTiP8cgfGBVBQbsR1pGxBS5K5XoPeLZZ_hbbZWF4rg29Du237Pjk4HNLUHNi78KFh4Rvsa4TPllDtk5EcymhZtJfeemgmSdHU1fKajJWC0b8wVYTUw4jIdfK77YmWF1iWsgHoc6xzLHfM0_U-qvhDmt3X",
};

export const navLinks = [
    { label: "Dashboard", icon: "dashboard", href: "/dashboard", active: true },
    { label: "My Bookings", icon: "calendar_month", href: "#", active: false },
    { label: "Explore", icon: "search", href: "#", active: false },
    { label: "Profile", icon: "person", href: "#", active: false },
    { label: "Settings", icon: "settings", href: "#", active: false, spacer: true },
];

export const statCards = [
    {
        id: "upcoming",
        label: "Upcoming Jobs",
        value: "3",
        icon: "upcoming",
        iconBg: "#135bec1a",
        iconColor: "#135bec",
        badge: "+2 this week",
        badgeBg: "#dcfce7",
        badgeColor: "#15803d",
    },
    {
        id: "completed",
        label: "Completed Services",
        value: "12",
        icon: "check_circle",
        iconBg: "#f3e8ff",
        iconColor: "#9333ea",
        badge: null,
    },
    {
        id: "spent",
        label: "Total Spent",
        value: "$1,240",
        icon: "payments",
        iconBg: "#fff7ed",
        iconColor: "#ea580c",
        badge: null,
    },
];

export const recentBookings = [
    {
        id: 1,
        service: "House Cleaning",
        serviceDetail: "Standard clean - 2h",
        serviceIcon: "cleaning_services",
        serviceIconBg: "#eff6ff",
        serviceIconColor: "#135bec",
        provider: "Sparkle Cleaners",
        providerAvatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDsvvd59D3U98JhvKJxhJOacHaNgo8XfNwIuC3CXFyf2nJ8Lg49ajApZEwXrcDycDFWcB4BbaypqxFb0WU6VbrEU8lv7E9ltj71ePOFYDbRINWt1FOtRnGJiTU3rrPyIoHneMwewJHPuzfufqc6_GF8DTtqNauXn4qAypSyuYV8q8-16Opi2ca7mTDdb-dB3237MgHutZ2nAvgWb1JpF_cEhX0Yx222uhVu0ukHJCnH_7QHiHWz6HPmxpfI2L1iRUR_WtRafbEuqqiU",
        date: "Oct 24, 2023",
        status: "Confirmed",
        statusBg: "#dbeafe",
        statusColor: "#1d4ed8",
        statusDot: "#2563eb",
        pulse: false,
    },
    {
        id: 2,
        service: "Plumbing Repair",
        serviceDetail: "Kitchen sink leak",
        serviceIcon: "plumbing",
        serviceIconBg: "#fffbeb",
        serviceIconColor: "#d97706",
        provider: "Fix-It Felix",
        providerAvatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAaK7mJbGkqeEp0V422LNURpT9FqFgX-mo183v2jDecmMiJXbzn9JtDCbnaS136uBGZGVZscEJtWFIcObhMTU5LxlAolvXUaGypoVrjfMAVEiTP34g96Q2ZK0rV_HjqafxdAHZMMiiSJML_Y6vRLnHeSvL14hV9shb61vb5rsVVw3FeWGbj-Vv_sjwoNhqo4F6EJe0DlZ3szez3CvH-ZnPfCoZJ7HkN7ME5D_YHvixZEKevTF1yTdCq9k-OE_uHfFuiqct-1Uh0BjHP",
        date: "Oct 28, 2023",
        status: "Requested",
        statusBg: "#fef3c7",
        statusColor: "#b45309",
        statusDot: "#d97706",
        pulse: true,
    },
    {
        id: 3,
        service: "Lawn Mowing",
        serviceDetail: "Weekly maintenance",
        serviceIcon: "yard",
        serviceIconBg: "#f0fdf4",
        serviceIconColor: "#16a34a",
        provider: "Green Thumb",
        providerAvatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB-kKg6j6ygiT55nfTgKl2P08ztjf5sM4lYTSff6SC5FjAIgi1nHytZ_EVIeKHA790WVIZ_vR7wIrCcmFsrnLq1uf2XRyILeUHpSQWJU1PsDBJu87AehRh5DIi0TTTteoZy8eA5U0VdusoYx-RaxOp94wF7zrbydPcjvqCB2ifkadWnoJl8SzDpXkMkamX8Viot4qTkmrVcXJ5EzkYq-dV9Eo5DFw45w4qnJjyvqoDbB0Wcbvr1NSJbYq4uQrVMVdpqFke3vgIIQGbK",
        date: "Nov 02, 2023",
        status: "Confirmed",
        statusBg: "#dbeafe",
        statusColor: "#1d4ed8",
        statusDot: "#2563eb",
        pulse: false,
    },
    {
        id: 4,
        service: "Electrical Wiring",
        serviceDetail: "Panel upgrade",
        serviceIcon: "bolt",
        serviceIconBg: "#fefce8",
        serviceIconColor: "#ca8a04",
        provider: "Volt Masters",
        providerAvatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCf6iiH3WJPYzR10i_z3qc9YaLUDJHqAg5aENnTMRhLjvCvWYbsS32rLEvYjqGD0T6NU0vmjM1xOR0bMuRoNhbGsuRcD_x41Mm3o3Hu0Feyr8Ba3E-VDI4r_gKbGXdIi3TYj36w8uFQwV9Sxale7Awz59dgpxnPtq675L5PfLRxQg7SYHOXtmxhmpVV8d_pbmIEM1TtmxlOgrq24MHHw6Blc6wq7kvBhIMGzpFjwbrGYl2W-hJ1w6LUQRdm29l7ArpH2oz7ldlokYd4",
        date: "Nov 08, 2023",
        status: "Completed",
        statusBg: "#dcfce7",
        statusColor: "#15803d",
        statusDot: "#16a34a",
        pulse: false,
    },
];
