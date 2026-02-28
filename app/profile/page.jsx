import ProfileHeader from "./components/ProfileHeader";
import ProfileHeroCard from "./components/ProfileHeroCard";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ReviewsSection from "./components/ReviewsSection";
import BookingCard from "./components/BookingCard";
import ProfileFooter from "./components/ProfileFooter";
import ProfileLayout from "./components/ProfileLayout";

export const metadata = {
    title: "Sarah Jenkins – Certified Interior Designer | ServicePro",
    description:
        "Book Sarah Jenkins, a verified interior designer in San Francisco with 10+ years of experience. Specializes in modern design, space planning, and sustainability.",
};

export default function ProfilePage() {
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
                                <ProfileHeroCard />
                                <AboutSection />
                                <ServicesSection />
                                <ReviewsSection />
                            </div>

                            {/* Right column: sticky booking card (desktop only) */}
                            <div
                                className="profile-booking-col"
                                style={{ width: "22.5rem", flexShrink: 0 }}
                            >
                                <BookingCard />
                            </div>
                        </div>
                    </div>
                </main>

                <ProfileFooter />
            </div>
        </ProfileLayout>
    );
}
