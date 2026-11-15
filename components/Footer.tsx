export default function Footer() {
  return (
    <footer style={{ background: "#2A1638" }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4 text-2xl font-medium text-white">
              <span className="w-2.5 h-2.5 rounded-full bg-citron" aria-hidden="true" />
              enklaris
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs font-mono-accent tracking-wide">
              Curated leads and AI agents
            </p>
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
