"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4"
      style={{ background: "rgba(26,26,46,0.92)", backdropFilter: "blur(16px)", borderBottom: scrolled ? "1px solid rgba(123,167,160,0.1)" : "none" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <span
            className="text-2xl font-jakarta font-extrabold tracking-tight"
            style={{ color: "#7BA7A0" }}
          >
            enk
          </span>
          <span
            className="text-2xl font-jakarta font-extrabold tracking-tight"
            style={{ color: "#FFFFFF" }}
          >
            laris
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {(["Layanan", "Tentang", "Kontak"] as string[]).map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-white/70 hover:text-celadon transition-colors duration-200"
            >
              {item}
            </a>
          ))}
          <a
            href="/blog"
            className="text-sm font-medium text-white/70 hover:text-celadon transition-colors duration-200"
          >
            Blog
          </a>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#kontak"
            className="px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-md"
            style={{ background: "linear-gradient(135deg, #C17F5A, #d4956f)" }}
          >
            Mulai Konsultasi
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-obsidian transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-obsidian transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-obsidian transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass px-6 py-4 flex flex-col gap-4 border-t border-celadon/10">
          {(["Layanan", "Tentang", "Kontak"] as string[]).map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-obsidian/80 hover:text-celadon transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="/blog"
            className="text-sm font-medium text-obsidian/80 hover:text-celadon transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </a>
          <a
            href="#kontak"
            className="px-5 py-2.5 rounded-full text-sm font-semibold text-white text-center transition-all duration-200"
            style={{ background: "linear-gradient(135deg, #C17F5A, #d4956f)" }}
            onClick={() => setMenuOpen(false)}
          >
            Mulai Konsultasi
          </a>
        </div>
      </div>
    </nav>
  );
}
