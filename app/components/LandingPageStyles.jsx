"use client";

// Injects all landing page section responsive CSS.
// This is a thin client wrapper — no logic, just media queries.
// Imported once in app/page.js so Server Component sections stay server-only.
export default function LandingPageStyles() {
    return (
        <style>{`
      /* CategorySection */
      @media (max-width: 1024px) {
        .category-grid { grid-template-columns: repeat(2, 1fr) !important; }
      }
      @media (max-width: 640px) {
        .category-grid { grid-template-columns: 1fr !important; }
      }

      /* RecentProjectsSection */
      @media (max-width: 1024px) {
        .projects-grid { grid-template-columns: 1fr !important; }
      }
      .project-card:hover .project-img { transform: scale(1.05); }
      .project-card:hover { box-shadow: 0 20px 60px rgba(0,0,0,0.12); }

      /* TopProfessionalsSection */
      @media (max-width: 1024px) {
        .pros-grid { grid-template-columns: repeat(2, 1fr) !important; }
      }
      @media (max-width: 640px) {
        .pros-grid { grid-template-columns: 1fr !important; }
      }
      .pro-card:hover { box-shadow: 0 20px 60px rgba(0,0,0,0.12); transform: translateY(-4px); }
      .pro-card:hover .pro-img { transform: scale(1.05); }
    `}</style>
    );
}
