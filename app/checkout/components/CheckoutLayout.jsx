"use client";

export default function CheckoutLayout({ children }) {
    return (
        <>
            {children}
            <style>{`
        @media (max-width: 1024px) {
          .summary-col { display: none !important; }
        }
        @media (max-width: 768px) {
          .checkout-cols { flex-direction: column !important; }
          .checkout-main { padding: 1rem !important; }
        }
      `}</style>
        </>
    );
}
