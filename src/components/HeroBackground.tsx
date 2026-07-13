"use client";

import { useRef, useEffect, useSyncExternalStore } from "react";

const MEDIA_QUERY = "(min-width: 768px)";

function subscribe(callback: () => void) {
  const mq = window.matchMedia(MEDIA_QUERY);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(MEDIA_QUERY).matches;
}

// Static export has no server, but generateStaticParams/prerender still runs
// this render path without `window` — keep it false there, same as the
// pre-hydration client value, so there is no hydration mismatch.
function getServerSnapshot() {
  return false;
}

export default function HeroBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  // False on server + first client render, then syncs to the real viewport
  // width after hydration — so mobile visitors never fetch or decode the
  // 1.2MB hero video at all.
  const isDesktop = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    if (isDesktop && videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, [isDesktop]);

  return (
    <>
      {/* Static poster — always rendered first, keeps mobile fast and gives
          desktop an instant background before the video mounts/plays. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center brightness-110 contrast-90 saturate-75"
        style={{ backgroundImage: "url(/images/hero-bg-gold.jpg)" }}
      />

      {/* Background video — desktop/tablet only (md+ / 768px+), mounted
          client-side after we confirm viewport width so phones never
          request the file. Mobile PageSpeed was the #1 technical issue
          (video autoplaying + decoding on every visit incl. mobile). */}
      {isDesktop && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/images/hero-bg-gold.jpg"
          className="absolute inset-0 w-full h-full object-cover brightness-110 contrast-90 saturate-75"
        >
          <source src="/images/hero-bg.mp4" type="video/mp4" />
        </video>
      )}
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
