// ============================================================
// DUMMY DATA — all checkout page state lives here as plain objects
// ============================================================

export const currentUser = {
    name: "Alex Morgan",
    role: "Member",
    avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD9s1_pVc6c9FveYCk_O2b2a8zqG0ztGMCscsiP5CjagI1Sf0QuGOo0zwsoTKVAQYHkLGthJb8VvupOEQ8D1NwZJ_zHt0cWfUdKaX86NhpBATrME1DB3Z4NHzGApZisCbsZUbYSG9lI8wgAjQDlnvlQnjioBtR_y_AVRdA33BRq8EBkQ4f27QSJVakgCVFUjDjqn94p0JXkbh82oUUGpsWSwVjfBDgptTfBA-AbiA9yY1UY_d0czcvA3nRizXjZ3hZlF1ALMfMK6Qdt",
};

export const navLinks = [
    { label: "Services", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
];

export const calendarData = {
    month: "October 2023",
    // 0 = empty padding cell, number = day of month, "selected" marks the default selected
    days: [
        0, 0, 0,
        1, 2, 3, 4, 5, 6, 7,
        8, 9, 10, 11, 12, 13, 14,
        15, 16, 17, 18, 19, 20, 21,
        22, 23, 24, 25, 26, 27, 28,
        29, 30,
    ],
    defaultSelectedDay: 5,
    weekDays: ["S", "M", "T", "W", "T", "F", "S"],
};

export const timeSlots = [
    { id: "09am", label: "09:00 AM" },
    { id: "10am", label: "10:00 AM", defaultSelected: true },
    { id: "11am", label: "11:00 AM" },
    { id: "01pm", label: "01:00 PM" },
    { id: "0230pm", label: "02:30 PM" },
    { id: "04pm", label: "04:00 PM" },
];

export const locationFields = [
    { id: "street", label: "Street Address", placeholder: "123 Main St", type: "text", icon: "location_on", colSpan: 2 },
    { id: "apt", label: "Apartment / Suite", placeholder: "Apt 4B", type: "text", colSpan: 1 },
    { id: "city", label: "City", placeholder: "New York", type: "text", colSpan: 1 },
    { id: "zip", label: "ZIP Code", placeholder: "10001", type: "text", colSpan: 1 },
];

export const stateOptions = [
    "Select State",
    "New York",
    "California",
    "Texas",
    "Florida",
    "Illinois",
];

export const bookingService = {
    name: "Deep Home Cleaning",
    description: "Standard 2 Bedroom",
    price: 120.0,
    image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB-d4ISTuLs6u_8PIJSldbEWZy1NvY-lO3_f0S5Od-FPqu990ARArWvqQrEaVSp1YAy_Zv5qilfOJbfX2LGis9E1JYEv2r2DuhKfZrnZf6X5Q5tBrnf0gJBQlQs8cNjdwJR6nQdcRny51_49ElzRQA6KHT8MKdaAq92QRL3Mpw431E6nxSZOwPwTzCmjptOJXxfZ5r8cwKdHKGTCgfhU7vMceGId09nPmxOQVBmnvfTKdNfKk99ePiXFwRJTedHvpJwiZOD0hXOmUmF",
    imageAlt: "House cleaning service tools",
    date: "Oct 5, 2023",
    time: "10:00 AM",
    duration: "~3 Hours",
};

export const pricingBreakdown = {
    subtotal: 120.0,
    serviceFee: 5.0,
    taxRate: 0.08,
    get tax() { return this.subtotal * this.taxRate; },
    get total() { return this.subtotal + this.serviceFee + this.tax; },
};

export const progressStep = { current: 2, total: 4 };
