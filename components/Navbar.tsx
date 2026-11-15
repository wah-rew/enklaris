"use client";

import { useState, useEffect } from "react";

const LINKS = [
  { label: "Use cases", href: "/#use-cases" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Industries", href: "/#industries" },
  { label: "Blog", href: "/blog" },
];

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
      style={{ background: "rgba(42,22,56,0.92)", backdropFilter: "blur(16px)", borderBottom: scrolled ? "1px solid rgba(142,107,176,0.1)" : "none" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 text-2xl font-medium tracking-tight text-white">
          <span className="w-2.5 h-2.5 rounded-full bg-citron" aria-hidden="true" />
          enklaris
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-white/70 hover:text-citron transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/#contact"
            className="px-5 py-2.5 rounded-full text-sm font-semibold text-obsidian bg-white transition-all duration-200 hover:scale-105"
          >
            Talk to us
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
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
          {LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-obsidian/80 hover:text-aubergine transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/#contact"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white text-center bg-aubergine transition-all duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Talk to us
          </a>
        </div>
      </div>
    </nav>
  );
}
