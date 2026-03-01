import ProfileHeader from "./components/ProfileHeader";
import ProfileHeroCard from "./components/ProfileHeroCard";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ReviewsSection from "./components/ReviewsSection";
import BookingCard from "./components/BookingCard";
import ProfileFooter from "./components/ProfileFooter";
import ProfileLayout from "./components/ProfileLayout";
import { createClient } from "@/lib/supabase/server";

export const metadata = {
    title: "Priya Sharma – Certified Home Cleaning Expert | ServiceLink",
    description:
        "Book Priya Sharma, an approved home cleaning expert in Bangalore with 8+ years of experience.",
};

const DEFAULT_AVATAR = "https://lh3.googleusercontent.com/aida-public/AB6AXuDyWoeBgrtIOUpQ8F9NGTpAx61h8EdeJHhaYt-TF9Tt0e_Gkr4Aq3WyYz6GT04_DHYcr_4X82EqyqvpcdROdJp1vsrHbWvNBdOIoBu5cxpYuzsrzxfhsAwzTiP8cgfGBVBQbsR1pGxBS5K5XoPeLZZ_hbbZWF4rg29Du237Pjk4HNLUHNi78KFh4Rvsa4TPllDtk5EcymhZtJfeemgmSdHU1fKajJWC0b8wVYTUw4jIdfK77YmWF1iWsgHoc6xzLHfM0_U-qvhDmt3X";

export default async function ProfilePage() {
    const supabase = await createClient();

    // 1. Fetch provider profile mapping (Hardcoded to Priya Sharma for the dummy UI)
    const { data: profileRow } = await supabase
        .from("profiles")
        .select(`
            id, full_name, avatar_url,
            provider_profiles (
                business_name, bio, title, status, is_available, 
                years_experience, total_jobs_completed, avg_rating
            ),
            cities ( name )
        `)
        .eq("full_name", "Priya Sharma")
        .single();

    if (!profileRow) return <div>Profile not found</div>;

    const pp = profileRow.provider_profiles;

    // 2. Fetch Services offered by this provider
    const { data: servicesData } = await supabase
        .from("provider_services")
        .select(`
            id,
            custom_price,
            notes,
            services (
                name, description, base_price, price_unit, estimated_duration_mins,
                service_categories ( slug )
            )
        `)
        .eq("provider_id", profileRow.id);

    const formattedServices = (servicesData || []).map((ps, idx) => {
        const srv = ps.services;
        const finalPrice = ps.custom_price || srv.base_price;
        const pLabel = srv.price_unit?.replace("_", " ") || "per visit";

        // Pick an icon based on category slug (fallback to generic)
        const catSlug = srv.service_categories?.slug || "";
        const iconMap = {
            "plumbing": "plumbing", "electrical": "bolt", "home-cleaning": "cleaning_services",
            "ac-servicing": "ac_unit"
        };

        return {
            id: ps.id || idx,
            icon: iconMap[catSlug] || "home_repair_service",
            title: srv.name,
            description: ps.notes || srv.description,
            price: `₹${finalPrice.toLocaleString('en-IN')}`,
            priceUnit: srv.price_unit,
            priceLabel: pLabel,
            estimatedMins: srv.estimated_duration_mins,
        };
    });

    // Determine Starting Price
    const sortedPrices = formattedServices.map(s => Number(s.price.replace(/\D/g, ''))).sort((a, b) => a - b);
    const startPrice = sortedPrices.length > 0 ? `₹${sortedPrices[0].toLocaleString('en-IN')}` : "Contact for price";

    // 3. Construct professional object
    const professional = {
        full_name: profileRow.full_name,
        business_name: pp?.business_name || profileRow.full_name,
        title: pp?.title || "Professional Service Provider",
        bio: pp?.bio || "Experienced service professional.",
        location: `Koramangala, ${profileRow.cities?.name || "Bangalore"}`,
        status: pp?.status || "approved",
        is_available: pp?.is_available,
        verified: pp?.status === "approved",
        years_experience: pp?.years_experience || 0,
        avatar: profileRow.avatar_url || DEFAULT_AVATAR,
        tags: ["Deep Cleaning", "Eco-Friendly Products", "Post-Renovation"],
        stats: [
            { value: `${pp?.years_experience || 0}+`, label: "Years Exp." },
            { value: `${pp?.total_jobs_completed || 0}+`, label: "Jobs Done" },
            { value: `${(pp?.avg_rating || 0).toFixed(1)}★`, label: "Avg Rating" },
            { value: "2h", label: "Response" },
        ],
        startingPrice: startPrice,
        priceUnit: "/ visit",
        responseTime: "Usually responds within 2 hours",
    };

    // 4. Fetch Reviews
    const { data: reviewsData } = await supabase
        .from("reviews")
        .select(`
            id, rating, review_text, created_at,
            customer_profiles:customer_id ( full_name, avatar_url )
        `)
        .eq("provider_id", profileRow.id)
        .eq("status", "approved")
        .order("created_at", { ascending: false });

    const formattedReviews = (reviewsData || []).map(r => {
        return {
            id: r.id,
            name: r.customer_profiles?.full_name || "Unknown User",
            date: new Date(r.created_at).toLocaleDateString(),
            rating: r.rating,
            status: "approved",
            text: r.review_text,
            avatar: r.customer_profiles?.avatar_url || DEFAULT_AVATAR
        };
    });

    // 5. Calculate Rating Breakdown
    const totalReviews = formattedReviews.length;
    let distribution = [
        { star: 5, pct: 0 }, { star: 4, pct: 0 }, { star: 3, pct: 0 },
        { star: 2, pct: 0 }, { star: 1, pct: 0 },
    ];

    if (totalReviews > 0) {
        const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
        formattedReviews.forEach(r => counts[Math.floor(r.rating)]++);

        distribution = distribution.map(d => ({
            star: d.star,
            pct: Math.round((counts[d.star] / totalReviews) * 100)
        }));
    }

    const ratingBreakdown = {
        overall: Number(pp?.avg_rating || 0).toFixed(1),
        outOf: 5.0,
        totalReviews: pp?.total_jobs_completed || totalReviews, // Fallback to real count
        distribution
    };

    return (
        <ProfileLayout>
            <div
                style={{
                    position: "relative",
                    display: "flex",
                    minHeight: "100vh",
                    width: "100%",
                    flexDirection: "column",
                    overflowX: "hidden",
                    background: "#f6f6f8",
                    fontFamily: "'Inter', sans-serif",
                }}
            >
                <ProfileHeader />

                <main style={{ flexGrow: 1 }}>
                    <div
                        className="profile-main-pad"
                        style={{ padding: "2rem 2.5rem", display: "flex", justifyContent: "center" }}
                    >
                        <div
                            className="profile-content-row"
                            style={{
                                maxWidth: "75rem",
                                width: "100%",
                                display: "flex",
                                flexDirection: "row",
                                gap: "2rem",
                                alignItems: "flex-start",
                            }}
                        >
                            {/* Left column */}
                            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2rem" }}>
                                <ProfileHeroCard professional={professional} />
                                <AboutSection professional={professional} />
                                <ServicesSection services={formattedServices} />
                                <ReviewsSection reviews={formattedReviews} ratingBreakdown={ratingBreakdown} />
                            </div>

                            {/* Right column: sticky booking card (desktop only) */}
                            <div
                                className="profile-booking-col"
                                style={{ width: "22.5rem", flexShrink: 0 }}
                            >
                                <BookingCard professional={professional} />
                            </div>
                        </div>
                    </div>
                </main>

                <ProfileFooter />
            </div>
        </ProfileLayout>
    );
}
