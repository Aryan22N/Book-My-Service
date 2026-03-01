// ============================================================
// UI CONFIG — Explore / Browse page
// ============================================================

export const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "#" },
    { label: "Bookings", href: "#" },
    { label: "Profile", href: "/profile" },
];

// Tabs map to service_categories.slug from seed
export const quickTabs = [
    { label: "All Services", slug: null, active: true },
    { label: "Home Cleaning", slug: "home-cleaning", active: false },
    { label: "Plumbing", slug: "plumbing", active: false },
    { label: "Electrical", slug: "electrical", active: false },
    { label: "Painting", slug: "painting", active: false },
    { label: "AC Servicing", slug: "ac-servicing", active: false },
    { label: "Pest Control", slug: "pest-control", active: false },
    { label: "Appliance Repair", slug: "appliance-repair", active: false },
];

// Static UI metadata for service categories
export const CATEGORY_UI = {
    "plumbing": {
        icon: "plumbing",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoN17shasJSvGuuNUQrgqD32KNpbhegM7fs_c1bN3_i0zPBMDcyjBeEeGHzTbb3vF61Shr3K8Nz6Ze7Ms68Yrz7nNJGp1416EcCm5r6BWiTje5Vfyi_cU-2V-5T5WOxvFdXfJEleDml0bH6Rcew6hzDp6_0vWN_M4c88-37CHT8nhZyIlFElVdppWzMzLrAB9J1QOWtjo1rjFG00uSZJFfsBzwYT60HV0m2z59zrObnQ4Lm6oYy4s_0dhNGdIwv_OOQoYg6c9mPNw6",
        imageAlt: "Plumber fixing a sink pipe"
    },
    "electrical": {
        icon: "electrical_services",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTQgMUuqO3QnVqt4Yz1aimIPKynOkViDaPJbZs7eTTf9lIqW4tTMBOrYsOB9TIRTxLZIQAfo23N2sUtFsEnOlvfm2WUvn6AJcbZRDyFZc1NseIayk9LaZCtnruWWxTMiGWvRuBK9yaaBAqBo8kLA6Erqb_0Gg7YVN_ap5qQrvizoEa2eJYoQmfuG_UwWP40qL0SKEWFhwaxFWWWEYt7mFgw02pMC1JugPzFpTmjLdyooT9lzUz1zV-8ru4l1xerDxYi7QoTuev9UWp",
        imageAlt: "Electrician checking wires"
    },
    "home-cleaning": {
        icon: "cleaning_services",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDszzChKOfbD-5tzK_2RX5UxZGj6Gg1oWgY57CseovwkXaSES0GRtsuSuPDzOVl5ZDNv0o8cDfEE_G1Sg8Cz7GBZSdhrkn_aZOVvGX_D58PoVfeLk-BK37TpkxG0tawfnJ0qciKRAbMS_1MIWWs82tMSichdd7jQ1TcAr7W9BEK66AAUDmEGXdTdJ6FN3xuokkBEk0VmHPWHK9T9S5PwBcYZ3pCnY3UDtudEoEnopF-ryDcFEW-fs00HsgICx15RLUgGo20K0ZTiJto",
        imageAlt: "Professional home cleaning service"
    },
    "carpentry": {
        icon: "carpenter",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAV7fyY-FKIJF2BEm5gyUII-BLcPKYaLg5P4Ri7qDUzC7YPOX2CyH-vhv-Lc9stVG_28IXI8brj497mpqybM_EQgKfRbcZXBN4Po81JmS5QuuRnjajxRd-EZYxGxEgAATLA7u-NpazGUK-kXAmOrAuBZ_P2ebrXue2SHdZl-YhcDgVT14neWhIti5i9Eb8TvSEME8R9tRNFsYCuwYPS8Ih6NwuyUQfl96IiUJLzMEGVBcHyqbZDwJMoesq4ybon6iORcMAGLkPww3Nk",
        imageAlt: "Carpenter working on wooden furniture"
    },
    "painting": {
        icon: "format_paint",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-flykXRLrkcc2FDiZXxEdFU2dpGrjWNFAp0QMsQkPJxV7N8kCWsynKmPA3bk0xgFZkHK65hKn5r-Dr8fgPvd7ACJbN9eU92Wyi0fdlvD6h0N4tOci59h3JbXd6cINBC0tQ5zXOz9DYF2dVZr1vIinmAvSvG8ly3A9ju-xFzSl2WbQDuubvL36Vlz1jZumTvqsGbP9kCBFXejNU09UP9obllxjagZmOJhA11HgDyZEYvvpSXrdXtQ17Y0gHf5E8dXksUctiNqlKh4q",
        imageAlt: "Painter painting a wall"
    },
    "ac-servicing": {
        icon: "ac_unit",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLxphHENiQkHE_niZo-mFJRuXm_v13fakRd_TzxS-Ljnah9Y72jyVhZKKCqrhYUhwgzzst-BlrhHkTCcJgXCS80vCreqeqtfYeAdMuovu_81-MHgBWiGA8QC6pjJvBhLAmdbh8uoMq1qiEGxsYYQ4MM1an3xLdsBYXXuYBZ7RT_KWqeqh9UujChuLPuZmhdVQIj1s48TiEzurbOPRXD2ANbNo1jYcNXch6WzZRnWV10RHs_sZVoovYZHCdFq2PCOjrLvFbvwtc8OH-",
        imageAlt: "AC repair technician working on a unit"
    },
    "pest-control": {
        icon: "pest_control",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBynUf4z06qCwoiHY7bMFwGjLwiLqNkR2eK_fsfhqKT7sisV4RUWogUQox7e6ssrnCvtYQW3XppEuyfzYJHoaK1x4Flmhggx5WAN4KB1Si522EWLDW9lZ6LfPhCSe2-hGmv1eoubIsMWYX6a_enN9kP3qGlbrwg4eyqCYNcTzsSkSo0bF_geXtOBeJG1VNkKWr74Lflw6vg42AhyR_Xs_3Jp6pxx4dDp3ltC4xi9mhnt2-jxI28EuhmfJmxENkzeJJSzF3xyZKkAZ0r",
        imageAlt: "Pest control worker spraying"
    },
    "appliance-repair": {
        icon: "home_repair_service",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTQgMUuqO3QnVqt4Yz1aimIPKynOkViDaPJbZs7eTTf9lIqW4tTMBOrYsOB9TIRTxLZIQAfo23N2sUtFsEnOlvfm2WUvn6AJcbZRDyFZc1NseIayk9LaZCtnruWWxTMiGWvRuBK9yaaBAqBo8kLA6Erqb_0Gg7YVN_ap5qQrvizoEa2eJYoQmfuG_UwWP40qL0SKEWFhwaxFWWWEYt7mFgw02pMC1JugPzFpTmjLdyooT9lzUz1zV-8ru4l1xerDxYi7QoTuev9UWp",
        imageAlt: "Technician repairing home appliance"
    }
};

export const footerLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Support", href: "#" },
];
