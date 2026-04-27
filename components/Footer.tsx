export default function Footer() {
  return (
    <footer style={{ background: "#1A1A2E" }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-jakarta font-extrabold" style={{ color: "#7BA7A0" }}>
                enk
              </span>
              <span className="text-2xl font-jakarta font-extrabold text-white">laris</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs font-mono-accent tracking-wide">
              Clarity through Connection
            </p>
            <p className="text-white/40 text-sm mt-3 leading-relaxed max-w-xs">
              Platform integrasi cerdas untuk bisnis modern Indonesia.
            </p>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 mb-4 uppercase tracking-wider font-jakarta">
              Layanan
            </h4>
            <ul className="space-y-2.5">
              {[
                "WhatsApp Business API",
                "AI Agent Development",
                "Database Management",
                "Geo Location Analysis",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#layanan"
                    className="text-sm text-white/40 hover:text-celadon transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 mb-4 uppercase tracking-wider font-jakarta">
              Perusahaan
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Tentang Kami", href: "/tentang" },
                { label: "Blog", href: "/blog" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-white/40 hover:text-celadon transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">
            © 2026 Enklaris. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-white/30">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#7BA7A0" }} />
            Jakarta Selatan, Indonesia
          </div>
        </div>
      </div>
    </footer>
  );
}
