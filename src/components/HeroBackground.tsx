"use client";

import { useRef, useEffect } from "react";

export default function HeroBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <>
      {/* Background video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-110 contrast-90 saturate-75"
      >
        <source src="/images/hero-bg.mp4" type="video/mp4" />
      </video>
      {/* White overlay to keep text readable — lighter and softer */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 35%, rgba(255,255,255,0.45) 60%, rgba(255,255,255,0.2) 100%)",
        }}
      />
    </>
  );
}
