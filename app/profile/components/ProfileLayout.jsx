"use client";

export default function ProfileLayout({ children }) {
    return (
        <>
            {children}
            <style>{`
        @media (max-width: 1024px) {
          .profile-booking-col { display: none !important; }
        }
        @media (max-width: 768px) {
          .profile-main-pad { padding: 1rem !important; }
          .profile-content-row { flex-direction: column !important; }
        }
      `}</style>
        </>
    );
}
