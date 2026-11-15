export default function Footer() {
  return (
    <footer style={{ background: "#2A1638" }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4 text-2xl font-medium text-white">
              <span className="w-2.5 h-2.5 rounded-full bg-citron" aria-hidden="true" />
              enklaris
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs font-mono-accent tracking-wide">
              Curated leads and AI agents
            </p>
            <p className="text-white/40 text-sm mt-3 leading-relaxed max-w-xs">
              Working with Kata.ai and Compnet.
            </p>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 mb-4 uppercase tracking-wider font-jakarta">
              Solutions
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Lead generation and database curation", href: "/layanan/akuisisi-consent" },
                { label: "AI agent implementation", href: "/layanan/ai-agent" },
                { label: "WhatsApp Business API", href: "/layanan/whatsapp-api" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-white/40 hover:text-citron transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 mb-4 uppercase tracking-wider font-jakarta">
              Company
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "About", href: "/tentang" },
                { label: "Blog", href: "/blog" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-white/40 hover:text-citron transition-colors duration-200"
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
        </div>
      </div>
    </footer>
  );
}
