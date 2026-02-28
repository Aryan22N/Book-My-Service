// ============================================================
// DUMMY DATA — all profile page state lives here as plain objects
// ============================================================

export const professional = {
    name: "Sarah Jenkins",
    title: "Certified Interior Designer",
    location: "San Francisco, CA",
    verified: true,
    avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuClMIXkSjCPssUonI7mqjsaEIy90Ns9ZE85CA9Z0ollv2JBndgDc49Vhnq5sQl7bGRXnt03rHVl3vGWIYZT-v3ba9rZoYl6_dOvTKUaH-GKaqGg3j_p8mtBj27ymOJannghLtd7L-Ixnn3Nhzlbv0_SzVgnXw5vWBIeGoy8v0Xx4yBTYmpfUt2F4z_BiPZprC_NxJ7QmHXzFTXuLl7_lG7Hp3pYOoOU4NNQdDCyubnGOq0nPuvh2DmDHS1Qbf5BAA0p2l_fctxlKiAs",
    tags: ["Modern Design", "Space Planning", "Sustainability"],
    bio: "I have over 10 years of experience transforming spaces into functional and beautiful environments. I specialize in modern residential design and sustainable living spaces. My approach combines aesthetic elegance with practical functionality, ensuring your home not only looks great but works perfectly for your lifestyle.",
    stats: [
        { value: "10+", label: "Years Exp." },
        { value: "150+", label: "Projects" },
        { value: "100%", label: "Satisfaction" },
        { value: "24h", label: "Response" },
    ],
    startingPrice: "$150",
    priceUnit: "/hr",
    responseTime: "Usually responds within 24 hours",
};

export const services = [
    {
        id: 1,
        icon: "design_services",
        title: "Full Room Redesign",
        description: "Complete makeover including furniture selection and layout.",
        price: "$1,200",
        priceLabel: "Starting price",
    },
    {
        id: 2,
        icon: "palette",
        title: "Color Consultation",
        description: "Professional advice on paint colors and palettes.",
        price: "$150",
        priceLabel: "Per hour",
    },
    {
        id: 3,
        icon: "floor",
        title: "3D Rendering",
        description: "Photo-realistic 3D visualization of your new space.",
        price: "$350",
        priceLabel: "Per room",
    },
];

export const ratingBreakdown = {
    overall: 4.8,
    outOf: 5.0,
    totalReviews: 124,
    distribution: [
        { star: 5, pct: 75 },
        { star: 4, pct: 15 },
        { star: 3, pct: 5 },
        { star: 2, pct: 3 },
        { star: 1, pct: 2 },
    ],
};

export const reviews = [
    {
        id: 1,
        name: "Michael T.",
        date: "2 days ago",
        rating: 5,
        text: "Sarah was absolutely fantastic to work with. She understood exactly what we wanted for our living room and delivered a design that exceeded our expectations. Highly recommended!",
        avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAnZQA6w3Gh-3rs-oB_0SFi584IGPzDfzX4K4-g1dWuux9i4DDf4qkXVn0NbFikAOqy7XhoRsPZIR0SebIq8sBTmvbV_Ha3oHAyKsdpRPUbmikPPxClGkBAgimvsFQuivTHkbE3Q46Me0AewYeaPUkxjfKWlry7s-ba0WeroW_hT7sC0TPgIGjzj3TRx4P59ti5o3LFLI4GbOhrtotOuGpGsqUNBQWGpORuRR-f6AZtC_ZFoQFJnQAAJU10_ZAv_WtpM00-TgDppWVJ",
    },
    {
        id: 2,
        name: "Emily R.",
        date: "1 week ago",
        rating: 4,
        text: "Great consultation session. She gave us some really actionable advice on paint colors that transformed our kitchen.",
        avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCBQPtEsx8GGovU7u-6--pDCQE3UwMTrfuupK4phofKMI-vgaymMeCifSxd1CN1Bwi6K0Vt2akKJTnn9989ea00AgHjXX-DkOemR8qPLRSev5g0pU2GQh-usnMg6zwiBzJU-W1N3WGarBgai4revLtu-p3ssJnXs0JP8ZI-DaHUMicGV3vO-MK9D9rMb1Msk_2cEQFxQOESP4gqnW5WGpssVEb8nzMA3CCQ7yXIQ2SOrrQWIcJxOuUVAEp3Vxfz15V0d61tXCe9_mma",
    },
];

export const navLinks = [
    { label: "Home", href: "/", active: false },
    { label: "Services", href: "#", active: true },
    { label: "Near Me", href: "#", active: false },
    { label: "Log In", href: "#", active: false },
];

export const footerLinks = [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Support", href: "#" },
];
