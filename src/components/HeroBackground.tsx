"use client";

export default function HeroBackground() {
  return (
    <>
      <style jsx>{`
        @keyframes hero-bg-drift {
          0%   { background-position: 30% 40%; transform: scale(1.05); }
          25%  { background-position: 70% 60%; transform: scale(1.02); }
          50%  { background-position: 40% 30%; transform: scale(1.06); }
          75%  { background-position: 60% 70%; transform: scale(1.03); }
          100% { background-position: 30% 40%; transform: scale(1.05); }
        }
        .hero-bg-animated {
          background-image: url(/images/hero-bg-gold.jpg);
          background-size: 150% 150%;
          background-position: 30% 40%;
          animation: hero-bg-drift 25s ease-in-out infinite;
        }
      `}</style>
      <div className="absolute inset-0 hero-bg-animated" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.75) 40%, rgba(255,255,255,0.2) 70%, rgba(255,255,255,0) 100%)",
        }}
      />
    </>
  );
}
