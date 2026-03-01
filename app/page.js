import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CategorySection from "./components/CategorySection";
import RecentProjectsSection from "./components/RecentProjectsSection";
import HowItWorksSection from "./components/HowItWorksSection";
import TopProfessionalsSection from "./components/TopProfessionalsSection";
import Footer from "./components/Footer";
import LandingPageStyles from "./components/LandingPageStyles";

export const metadata = {
  title: "ServiceLink – Turn Your Vision Into Reality",
  description:
    "Connect with top-tier local experts for your home and business projects. From concept to completion, ServiceLink ensures quality every step of the way.",
};

export default function Home() {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        minHeight: "100vh",
        width: "100%",
        flexDirection: "column",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <main style={{ flex: 1 }}>
        <HeroSection />
        <CategorySection />
        <RecentProjectsSection />
        <HowItWorksSection />
        <TopProfessionalsSection />
      </main>
      <Footer />
      <LandingPageStyles />
    </div>
  );
}
