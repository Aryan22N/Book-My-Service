import ExploreHeader from "./components/ExploreHeader";
import HeroFilter from "./components/HeroFilter";
import QuickTabs from "./components/QuickTabs";
import ServiceGrid from "./components/ServiceGrid";
import ExploreFooter from "./components/ExploreFooter";

export const metadata = {
    title: "Explore Categories – ServiceFinder",
    description:
        "Browse all home and business service categories. From cleaning and plumbing to moving and wellness — find the right professional for your needs.",
};

export default function ExplorePage() {
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
                <ServiceGrid />
            </main>

            <ExploreFooter />
        </div>
    );
}
