// ============================================================
// DUMMY DATA — all tracker page state as plain JS objects
// ============================================================

export const booking = {
    id: "#8821",
    status: "In Progress",
    description: "Track the real-time progress of your premium deep clean service.",
    service: {
        title: "Deep Home Cleaning",
        description: "Detailed cleaning for living room, kitchen, and 2 bathrooms.",
        price: "$120.00",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDDurUd34E4h_-_0xUWvlddIHKsdi5kyp6f4yYqEDn_Fre3sGx73Itop67hYgcNF37ndWJMonGOnnn9_j0wPjd_5MrrScIgi1UxijSxyJNqYmtSM4YC1_g49A5z6NcsyMNiaswsWSvbqe0Fkmh4ORFKVuUT21-mPHl6uDoWjzWYOhhUy6o6X8zerWAK3v7Q2MF6t2CUw0lHv9q-0mRDWYbe__egJKvar5x4Ds7NwAU9-a4UfLZuaxDO8RqE_n_H-2rVpmVJzgF5ofLv",
        imageAlt: "Modern living room interior being cleaned",
    },
    provider: {
        name: "Sarah Jenkins",
        rating: 4.9,
        reviewCount: 124,
        avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAyWSQNqhUd9Oejeb7KiFVCxrkRwmLNH8uOn3QR8_pNMpblo9F0BxZFthTsJIBLEaH50XGf6xNfkWNW-VIospI9_ZwSUtonfUuSrUAMGUzBnLJnM2qlD0oFHocPNJ0oQRDd5pE0mIB3nrzV0BXa_UFVyivWIKsHhJRaDcr8ocHhJgHDqSDjFqQFCIbVCB6gpwbQ4Y26xlO5ac4tdn4Fzvm6jfymub3zd_oQa0zVZFbZa_-sy3-hwy_JVVnN1eu2sf3Fp1vD4mCHMufK",
    },
};

export const timelineSteps = [
    {
        id: 1,
        label: "Service Requested",
        time: "Oct 20, 2023 at 9:00 AM",
        state: "done",
        note: "Request ID: #Req-8821-A",
        noteType: "tag",
    },
    {
        id: 2,
        label: "Provider Confirmed",
        time: "Oct 21, 2023 at 2:30 PM",
        state: "done",
        note: "Sarah accepted the request.",
        noteType: "text",
    },
    {
        id: 3,
        label: "Service In-progress",
        time: "Started: Oct 24, 2023 at 10:00 AM",
        state: "active",
        badge: "On Track",
        badgeNote: "Est. completion: 2:00 PM",
    },
    {
        id: 4,
        label: "Completion",
        time: "Pending",
        state: "pending",
    },
];

export const bookingDetails = [
    { icon: "cleaning_services", label: "Service Type", value: "Deep Clean" },
    { icon: "calendar_today", label: "Date", value: "Oct 24, 2023" },
    { icon: "schedule", label: "Time Window", value: "10:00 AM - 2:00 PM" },
    { icon: "payments", label: "Total Cost", value: "$120.00", bold: true },
];

export const locationInfo = {
    address: "123 Maple Ave, Apt 4B",
    mapImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDfHSRagx3aNhIQkom5ZnuhuFCGfp-NEHLP3e_ri7dxcvZ84uux8gMVyBxsIXdv6rWqpOtjfad_RoA1It-AZhe2vXk7Kf3CIOjWnLxfCd1ZEBxKq4tszWLwvSOLdpM9KmZV7DXXFzjHi7VEY434aMFo-Q1T1ZL0l4sK0O1CcGwJsfDhkrzJnqU4P5qLixohifF3YnxbRf-JItyxqhYXoPywQz0izSwMZinUHJ32I3kgSsFghiPVyPRJdkzca5z2fWvpaAARuGGr2HF1",
};

export const navLinks = [
    { label: "Dashboard", href: "#", active: false },
    { label: "Bookings", href: "#", active: true },
    { label: "Profile", href: "#", active: false },
    { label: "Help", href: "#", active: false },
];

export const currentUser = {
    avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCbCLD03Zpx3gfKJmoV3ppl34Xx8dcMYS-4S975HscP077sHyF-TvPgtH1Gh-dXosWBKMC8i1jqJFsv5MaOGuCpWFPOC7cmfUsyqnDCYradHWKrxLrnrqTD8TFX9cgfscU8h8IHAPszHZ12Ug_CL7d2nk7jk2Xznc05f79-oijbSsmrdrJKObNZwIwvqt6u_41ZjXHccwrGMMqkdW6z-FqoT6P1-t2z28_lRo2mm-Sp1qf1ah0whwJehbaB-9-F9gEHTfAij_gn7kq-",
};
