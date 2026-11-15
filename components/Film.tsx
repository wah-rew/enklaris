"use client";

import { useEffect, useRef } from "react";

// Slow horizontal light streaks drawn at low resolution and softened by CSS blur.
const PALETTES: Record<string, [string, string[]]> = {
  hero: ["#120A18", ["#7A4FA3", "#B79BDA", "#4A2866", "#E6D9F5", "#D4E157"]],
  a: ["#1A0E23", ["#6B3F8F", "#C9B3E0", "#D4E157", "#3A1F4D"]],
  b: ["#150B1D", ["#8E6BB0", "#E6D9F5", "#55306F", "#B79BDA"]],
  c: ["#1D1126", ["#55306F", "#A98AD0", "#EDE4F7", "#D4E157", "#3A1F4D"]],
  d: ["#120A18", ["#B79BDA", "#6B3F8F", "#F2ECF8", "#4A2866"]],
  e: ["#170D1F", ["#3A1F4D", "#8E6BB0", "#D4E157", "#C9B3E0"]],
  f: ["#1A0E23", ["#7A4FA3", "#DCCBF0", "#4A2866", "#B79BDA"]],
  g: ["#150B1D", ["#55306F", "#8E6BB0", "#3A1F4D", "#B79BDA", "#D4E157"]],
};
const W = 200;
const H = 120;

function rgba(hex: string, a: number) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${n >> 16},${(n >> 8) & 255},${n & 255},${a})`;
}

export default function Film({ palette }: { palette: keyof typeof PALETTES }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    const cx = cv?.getContext("2d");
    if (!cv || !cx) return;
    const [base, cols] = PALETTES[palette];
    let seed = palette.charCodeAt(0) * 977 + 13;
    const rnd = () => {
      seed = (seed * 1664525 + 1013904223) % 4294967296;
      return seed / 4294967296;
    };
    const bands = Array.from({ length: 40 }, (_, i) => {
      const c = cols[i % cols.length];
      return { y: rnd() * H, h: 3 + rnd() * 22, x: rnd() * W * 2, w: 70 + rnd() * 190, v: 0.25 + rnd() * 1.1, c, a: c === "#D4E157" ? 0.18 + rnd() * 0.2 : 0.22 + rnd() * 0.5 };
    });
    const paint = (t: number) => {
      cx.globalCompositeOperation = "source-over";
      cx.fillStyle = base;
      cx.fillRect(0, 0, W, H);
      cx.globalCompositeOperation = "lighter";
      for (const b of bands) {
        const span = W + b.w;
        const x = ((((b.x + t * b.v * 0.012) % span) + span) % span) - b.w;
        const g = cx.createLinearGradient(x, 0, x + b.w, 0);
        g.addColorStop(0, rgba(b.c, 0));
        g.addColorStop(0.5, rgba(b.c, b.a));
        g.addColorStop(1, rgba(b.c, 0));
        cx.fillStyle = g;
        cx.fillRect(x, b.y, b.w, b.h);
      }
    };
    paint(4000 + seed % 9000);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let visible = true;
    let raf = 0;
    let last = 0;
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(cv);
    const loop = (ts: number) => {
      const paused = document.documentElement.dataset.motion === "paused";
      if (visible && !paused && ts - last > 33) {
        last = ts;
        paint(ts);
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [palette]);

  return <canvas ref={ref} width={W} height={H} aria-hidden="true" />;
}
