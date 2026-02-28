// ============================================================
// DUMMY DATA — all explore page state lives here as plain objects
// ============================================================

export const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "#" },
    { label: "Bookings", href: "#" },
    { label: "Profile", href: "#" },
];

export const quickTabs = [
    { label: "All Services", active: true },
    { label: "Home Cleaning", active: false },
    { label: "Repairs & Fixes", active: false },
    { label: "Painting", active: false },
    { label: "Movers", active: false },
    { label: "Wellness", active: false },
];

export const serviceCategories = [
    {
        id: 1,
        title: "AC Repair",
        description: "Expert servicing, installation, and gas refilling.",
        icon: "ac_unit",
        rating: 4.8,
        startPrice: "$49",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDLxphHENiQkHE_niZo-mFJRuXm_v13fakRd_TzxS-Ljnah9Y72jyVhZKKCqrhYUhwgzzst-BlrhHkTCcJgXCS80vCreqeqtfYeAdMuovu_81-MHgBWiGA8QC6pjJvBhLAmdbh8uoMq1qiEGxsYYQ4MM1an3xLdsBYXXuYBZ7RT_KWqeqh9UujChuLPuZmhdVQIj1s48TiEzurbOPRXD2ANbNo1jYcNXch6WzZRnWV10RHs_sZVoovYZHCdFq2PCOjrLvFbvwtc8OH-",
        imageAlt: "AC repair technician working on a unit",
    },
    {
        id: 2,
        title: "Home Cleaning",
        description: "Deep cleaning for kitchen, bathroom and living room.",
        icon: "cleaning_services",
        rating: 4.9,
        startPrice: "$29",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDszzChKOfbD-5tzK_2RX5UxZGj6Gg1oWgY57CseovwkXaSES0GRtsuSuPDzOVl5ZDNv0o8cDfEE_G1Sg8Cz7GBZSdhrkn_aZOVvGX_D58PoVfeLk-BK37TpkxG0tawfnJ0qciKRAbMS_1MIWWs82tMSichdd7jQ1TcAr7W9BEK66AAUDmEGXdTdJ6FN3xuokkBEk0VmHPWHK9T9S5PwBcYZ3pCnY3UDtudEoEnopF-ryDcFEW-fs00HsgICx15RLUgGo20K0ZTiJto",
        imageAlt: "Professional home cleaning service",
    },
    {
        id: 3,
        title: "Plumbing",
        description: "Leak repairs, pipe fitting, and drain cleaning.",
        icon: "plumbing",
        rating: 4.7,
        startPrice: "$39",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBoN17shasJSvGuuNUQrgqD32KNpbhegM7fs_c1bN3_i0zPBMDcyjBeEeGHzTbb3vF61Shr3K8Nz6Ze7Ms68Yrz7nNJGp1416EcCm5r6BWiTje5Vfyi_cU-2V-5T5WOxvFdXfJEleDml0bH6Rcew6hzDp6_0vWN_M4c88-37CHT8nhZyIlFElVdppWzMzLrAB9J1QOWtjo1rjFG00uSZJFfsBzwYT60HV0m2z59zrObnQ4Lm6oYy4s_0dhNGdIwv_OOQoYg6c9mPNw6",
        imageAlt: "Plumber fixing a sink pipe",
    },
    {
        id: 4,
        title: "Painting",
        description: "Interior and exterior painting services.",
        icon: "format_paint",
        rating: 4.6,
        startPrice: "$99",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuD-flykXRLrkcc2FDiZXxEdFU2dpGrjWNFAp0QMsQkPJxV7N8kCWsynKmPA3bk0xgFZkHK65hKn5r-Dr8fgPvd7ACJbN9eU92Wyi0fdlvD6h0N4tOci59h3JbXd6cINBC0tQ5zXOz9DYF2dVZr1vIinmAvSvG8ly3A9ju-xFzSl2WbQDuubvL36Vlz1jZumTvqsGbP9kCBFXejNU09UP9obllxjagZmOJhA11HgDyZEYvvpSXrdXtQ17Y0gHf5E8dXksUctiNqlKh4q",
        imageAlt: "Painter painting a wall blue",
    },
    {
        id: 5,
        title: "Electrical",
        description: "Wiring, appliance installation, and repairs.",
        icon: "electrical_services",
        rating: 4.8,
        startPrice: "$35",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCTQgMUuqO3QnVqt4Yz1aimIPKynOkViDaPJbZs7eTTf9lIqW4tTMBOrYsOB9TIRTxLZIQAfo23N2sUtFsEnOlvfm2WUvn6AJcbZRDyFZc1NseIayk9LaZCtnruWWxTMiGWvRuBK9yaaBAqBo8kLA6Erqb_0Gg7YVN_ap5qQrvizoEa2eJYoQmfuG_UwWP40qL0SKEWFhwaxFWWWEYt7mFgw02pMC1JugPzFpTmjLdyooT9lzUz1zV-8ru4l1xerDxYi7QoTuev9UWp",
        imageAlt: "Electrician checking wires",
    },
    {
        id: 6,
        title: "Carpentry",
        description: "Custom furniture, repairs, and woodwork.",
        icon: "carpenter",
        rating: 4.5,
        startPrice: "$55",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAV7fyY-FKIJF2BEm5gyUII-BLcPKYaLg5P4Ri7qDUzC7YPOX2CyH-vhv-Lc9stVG_28IXI8brj497mpqybM_EQgKfRbcZXBN4Po81JmS5QuuRnjajxRd-EZYxGxEgAATLA7u-NpazGUK-kXAmOrAuBZ_P2ebrXue2SHdZl-YhcDgVT14neWhIti5i9Eb8TvSEME8R9tRNFsYCuwYPS8Ih6NwuyUQfl96IiUJLzMEGVBcHyqbZDwJMoesq4ybon6iORcMAGLkPww3Nk",
        imageAlt: "Modern kitchen interior",
    },
    {
        id: 7,
        title: "Moving",
        description: "Reliable house and office shifting services.",
        icon: "local_shipping",
        rating: 4.9,
        startPrice: "$120",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAzAVBoFJ_OEn1sZcsfsPV3-HMD5xmxFhQRtqGkjZ8qNUfTfBRK_DbfpG9-w-4En6DDKE7KnwS9dTwIexw6iJN-DdSWw7NR84FMhyfZwqfgoxGC1vTTco2BKrPCDMOW36kwP_DX5v9YlRQbNXMuL9tY_so3jbvS-my_Z2JZ8xlezpOuDGR5XVxqiceFh4L9sPf4nWXgADUBNILVkL89GgKT2MrN5G8iYg9k2xEmgsg3BhbCzS9Pr0DiF5mB0K-Q6EADMg9gIrX6oQTF",
        imageAlt: "Movers carrying boxes",
    },
    {
        id: 8,
        title: "Pest Control",
        description: "Protect your home from insects and termites.",
        icon: "pest_control",
        rating: 4.6,
        startPrice: "$45",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBynUf4z06qCwoiHY7bMFwGjLwiLqNkR2eK_fsfhqKT7sisV4RUWogUQox7e6ssrnCvtYQW3XppEuyfzYJHoaK1x4Flmhggx5WAN4KB1Si522EWLDW9lZ6LfPhCSe2-hGmv1eoubIsMWYX6a_enN9kP3qGlbrwg4eyqCYNcTzsSkSo0bF_geXtOBeJG1VNkKWr74Lflw6vg42AhyR_Xs_3Jp6pxx4dDp3ltC4xi9mhnt2-jxI28EuhmfJmxENkzeJJSzF3xyZKkAZ0r",
        imageAlt: "Pest control worker spraying",
    },
    {
        id: 9,
        title: "Salon & Spa",
        description: "Haircuts, facials, and grooming at home.",
        icon: "spa",
        rating: 4.9,
        startPrice: "$25",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAsrD_NICL5acFaufsayyS7OQij7GR4znEjxaWtyhYSlzE9tio7BKb-ILANO9_3KJPAikX3IvXcC08YCpFFV_Fe9Qmkui7a5Bg-PCoO_anjRoUqb_mSBlV2Dixyha58HV4MV96gFeuh_uo3rQRZ-bx4hnDUZWTJ49Ei-HHdvJNGjdH31eYGcQPM_Rva-e6Mu66-ERPYObSZph3h7zxs-uznUs1SdrQO-eex8qioCJbOTYDA4_UC20ZEk6LIh8BVgn2e0u0_LO_sjkEP",
        imageAlt: "Beauty salon setup with cosmetics",
    },
    {
        id: 10,
        title: "Landscaping",
        description: "Lawn mowing, pruning, and garden maintenance.",
        icon: "yard",
        rating: 4.7,
        startPrice: "$60",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDJnXeypjlCRwvDUbSX1mh45xqyHXICENZ67wZDwnYaP3jDWGaDB4WfUA6lcu90TZzYdjvD68b9IcnZxfphhNS8SSoEwIBSv-rkCHhC68N9nLt9WA-1vlxWnUcBdnurJrPMzrus2ERK7ry7qaq3OEKI9hMVWVZr0HE6h0phd4OYbjk7Yu3yrb9hciTNtVKWXVGtqPJaQgAqr4fBCuU2b4xX6-eaMKrUX60FuReKghrQZBrakThSMNKv-Qr2K25zQlk8rJPRoeXMnUJU",
        imageAlt: "Gardening tools in a garden",
    },
];

export const footerLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Support", href: "#" },
];
