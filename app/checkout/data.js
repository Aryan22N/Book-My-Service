// ============================================================
// UI CONFIG — Checkout page
// Cleaned up dummy data — logic is now driven by Supabase.
// Only pure UI constants are kept here.
// ============================================================

export const currentUser = {
    name: "Arjun Mehta",                      // profiles.full_name
    role: "customer",                         // user_role enum
    city: "Bangalore",                        // cities.name (seed)
    area: "Koramangala",                      // areas.name (seed)
    avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD9s1_pVc6c9FveYCk_O2b2a8zqG0ztGMCscsiP5CjagI1Sf0QuGOo0zwsoTKVAQYHkLGthJb8VvupOEQ8D1NwZJ_zHt0cWfUdKaX86NhpBATrME1DB3Z4NHzGApZisCbsZUbYSG9lI8wgAjQDlnvlQnjioBtR_y_AVRdA33BRq8EBkQ4f27QSJVakgCVFUjDjqn94p0JXkbh82oUUGpsWSwVjfBDgptTfBA-AbiA9yY1UY_d0czcvA3nRizXjZ3hZlF1ALMfMK6Qdt",
};

export const navLinks = [
    { label: "Services", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
];

export const calendarData = {
    month: "November 2023",
    // 0 = empty padding cell, number = day of month
    // November 2023 starts on Wednesday → 3 padding cells (Sun-Mon-Tue)
    days: [
        0, 0, 0,
        1, 2, 3, 4, 5, 6, 7,
        8, 9, 10, 11, 12, 13, 14,
        15, 16, 17, 18, 19, 20, 21,
        22, 23, 24, 25, 26, 27, 28,
        29, 30,
    ],
    defaultSelectedDay: 15,              // bookings.scheduled_at date
    weekDays: ["S", "M", "T", "W", "T", "F", "S"],
};

// Address form fields — bookings.address_line + area_id
export const locationFields = [
    { id: "street", label: "Street Address", placeholder: "e.g. 45 CMH Road", type: "text", icon: "location_on", colSpan: 2 },
    { id: "apt", label: "Apartment / Flat", placeholder: "Flat 3B, Tower A", type: "text", colSpan: 1 },
    { id: "city", label: "City", placeholder: "Bangalore", type: "text", colSpan: 1 },
    { id: "pin", label: "PIN Code", placeholder: "560034", type: "text", colSpan: 1 },
];

export const progressStep = { current: 2, total: 4 };
