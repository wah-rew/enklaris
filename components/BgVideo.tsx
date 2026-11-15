"use client";

import { useEffect, useRef } from "react";

// Muted background loop. Loads and plays only while on screen, and honours the
// page's "Pause motion" control and the visitor's reduced-motion setting.
export default function BgVideo({ src, poster, eager = false }: { src: string; poster: string; eager?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let visible = false;
    const sync = () => {
      const paused = reduce || document.documentElement.dataset.motion === "paused";
      if (visible && !paused) {
        if (!v.getAttribute("src")) v.src = src;
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    };
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; sync(); }, { rootMargin: "200px" });
    io.observe(v);
    window.addEventListener("ek-motion", sync);
    return () => { io.disconnect(); window.removeEventListener("ek-motion", sync); };
  }, [src]);

  return <video ref={ref} className="bgv" muted loop playsInline preload={eager ? "auto" : "none"} poster={poster} aria-hidden="true" />;
}
