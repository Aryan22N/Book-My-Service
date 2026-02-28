"use client";

// Client wrapper that injects responsive CSS without polluting server components
export default function TrackerLayout({ children }) {
    return (
        <>
            {children}
            <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .tracker-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1.5rem; }
        .tracker-left-col { grid-column: span 2; }
        @media (max-width: 1024px) {
          .tracker-grid { grid-template-columns: 1fr; }
          .tracker-left-col { grid-column: span 1; }
        }
        @media (max-width: 768px) {
          .tracker-header-nav { display: none !important; }
          .tracker-main { padding: 1.5rem 1rem !important; }
          .tracker-title-row { flex-direction: column !important; align-items: flex-start !important; }
        }
        @media (max-width: 640px) {
          .service-card-inner { flex-direction: column !important; }
          .service-card-img { width: 100% !important; height: 12rem !important; }
        }
      `}</style>
        </>
    );
}
