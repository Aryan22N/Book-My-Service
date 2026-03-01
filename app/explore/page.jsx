import ExploreHeader from "./components/ExploreHeader";
import HeroFilter from "./components/HeroFilter";
import QuickTabs from "./components/QuickTabs";
import ServiceGrid from "./components/ServiceGrid";
import ExploreFooter from "./components/ExploreFooter";
import { createClient } from "@/lib/supabase/server";
import { CATEGORY_UI } from "./data";

export const metadata = {
    title: "Explore Categories – ServiceFinder",
    description:
        "Browse all home and business service categories. From cleaning and plumbing to moving and wellness — find the right professional for your needs.",
};

export default async function ExplorePage() {
    const supabase = await createClient();

    // Fetch categories with nested services to calculate start prices
    const { data: categoriesData } = await supabase
        .from("service_categories")
        .select(`
            id,
            slug,
            name,
            description,
            services ( base_price, price_unit )
        `)
        .order("display_order", { ascending: true });

    // Format categories 
    const categories = (categoriesData || []).map(cat => {
        // Calculate the lowest 'base_price' among this category's services
        let startPrice = 499; // Fallback default
        let priceUnit = "per visit";

        if (cat.services && cat.services.length > 0) {
            const prices = cat.services.map(s => Number(s.base_price) || Infinity);
            const minPrice = Math.min(...prices);
            if (minPrice !== Infinity) {
                startPrice = minPrice;
            }

            // Just inherit unit from the first service (they usually match within category)
            priceUnit = cat.services[0].price_unit?.replace("_", " ") || "per visit";
        }

        const uiInfo = CATEGORY_UI[cat.slug] || {
            icon: "business_center",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9s1_pVc6c9FveYCk_O2b2a8zqG0ztGMCscsiP5Cjag8k8d3F89pweW9iXmCnsEwY-e6gP6a4lGsz0F8I-43ZlsO8yVzH7yPnaL90nmb2Uu3-PZ8sPym6tO1P1A8t_lQfC63Kk-q6P8hC7rW09X1K8X5N1E_F5Rcw2-O86Z_R6z9E_LqW2E17wD4-1",
            imageAlt: "Service Category"
        };

        return {
            id: cat.id,
            slug: cat.slug,
            title: cat.name,
            description: cat.description,
            icon: uiInfo.icon,
            rating: 4.8, // Static rating placeholder
            startPrice: `₹${startPrice}`,
            priceUnit: priceUnit.toLowerCase(),
            image: uiInfo.image,
            imageAlt: uiInfo.imageAlt
        };
    });

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                background: "#f6f6f8",
                fontFamily: "'Inter', sans-serif",
            }}
        >
            <ExploreHeader />

            <main
                style={{
                    flex: 1,
                    width: "100%",
                    maxWidth: "87.5rem",
                    margin: "0 auto",
                    padding: "2.5rem 1rem",
                }}
            >
                <HeroFilter />
                <QuickTabs />
                <ServiceGrid categories={categories} />
            </main>

            <ExploreFooter />
        </div>
    );
}

