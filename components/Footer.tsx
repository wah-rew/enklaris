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
            <div className="flex gap-3 mt-6">
              {/* Social icons as CSS shapes */}
              {["in", "tw", "ig"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 hover:scale-110"
                  style={{
                    background: "rgba(123,167,160,0.15)",
                    color: "#7BA7A0",
                    border: "1px solid rgba(123,167,160,0.2)",
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
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

          {/* Perusahaan & Kontak */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 mb-4 uppercase tracking-wider font-jakarta">
              Perusahaan
            </h4>
            <ul className="space-y-2.5 mb-8">
              {["Tentang Kami", "Blog", "Karir", "Press"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-white/40 hover:text-celadon transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="text-sm font-semibold text-white/80 mb-4 uppercase tracking-wider font-jakarta">
              Kontak
            </h4>
            <ul className="space-y-2.5">
              {["+62 21 XXXX XXXX"].map((item) => (
                <li key={item}>
                  <span className="text-sm text-white/40">{item}</span>
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
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#7BA7A0" }}
            />
            Jakarta, Indonesia
          </div>
        </div>
      </div>
    </footer>
  );
}
