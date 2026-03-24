"use client";
import React from "react";

interface CredentialCard {
  title: string;
  description: string;
}

const rotations = [
  "-rotate-1",
  "rotate-[1.5deg]",
  "-rotate-[0.8deg]",
  "rotate-[1.2deg]",
  "-rotate-[1.5deg]",
];

export function CredentialScrollCards({ data }: { data: CredentialCard[] }) {
  const lastIndex = data.length - 1;

  return (
    <div>
      {data.map((card, i) => (
        <div
          key={i}
          className={`flex justify-center ${i < lastIndex ? "h-[60vh]" : ""}`}
        >
          <div
            className={`flex justify-center w-full ${i < lastIndex ? "sticky" : ""}`}
            style={i < lastIndex ? {
              top: `calc(50vh - 100px + ${i * 10}px)`,
              height: "fit-content",
            } : undefined}
          >
            <article
              className={`${rotations[i % rotations.length]} w-full max-w-md rounded-2xl px-7 pt-6 pb-10 sm:px-8 sm:pt-7 sm:pb-12 transition-all duration-300`}
              style={{
                background: "linear-gradient(135deg, #e6b800 0%, #d4a017 50%, #c49a2e 100%)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.15), 0 8px 20px rgba(0,0,0,0.1), 0 2px 6px rgba(0,0,0,0.08)",
              }}
            >
              <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center mb-3">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <h3 className="font-sans text-xl sm:text-2xl font-semibold text-white mb-2">
                {card.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {card.description}
              </p>
            </article>
          </div>
        </div>
      ))}
    </div>
  );
}
