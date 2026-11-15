"use client";

import { useState } from "react";

export default function MotionToggle() {
  const [paused, setPaused] = useState(false);
  const toggle = () => {
    const next = !paused;
    setPaused(next);
    document.documentElement.dataset.motion = next ? "paused" : "running";
    window.dispatchEvent(new Event("ek-motion"));
  };
  return (
    <button className="motion" type="button" aria-pressed={paused} onClick={toggle}>
      {paused ? "Play motion" : "Pause motion"}
    </button>
  );
}
