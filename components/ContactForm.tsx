"use client";

import { useState } from "react";

export default function ContactForm() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [nomorWA, setNomorWA] = useState("");
  const [detailKebutuhan, setDetailKebutuhan] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nama, email, nomorWA, detailKebutuhan }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Terjadi kesalahan. Silakan coba lagi.");
      }

      setSuccess(true);
      setNama("");
      setEmail("");
      setNomorWA("");
      setDetailKebutuhan("");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all duration-200 bg-white text-obsidian placeholder:text-obsidian/30 focus:border-celadon focus:ring-2 focus:ring-celadon/20";
  const labelClass = "block text-xs font-medium text-obsidian/60 mb-1.5 font-mono-accent tracking-wider uppercase";

  if (success) {
    return (
      <div
        className="rounded-2xl p-10 text-center"
        style={{
          background: "white",
          border: "1.5px solid rgba(123,167,160,0.3)",
          boxShadow: "0 4px 24px rgba(123,167,160,0.08)",
        }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-5"
          style={{ background: "rgba(123,167,160,0.12)", border: "1.5px solid rgba(123,167,160,0.3)" }}
        >
          ✅
        </div>
        <h3 className="text-xl font-jakarta font-bold text-obsidian mb-2">Terima kasih!</h3>
        <p className="text-muted text-sm">Kami akan menghubungi Anda segera.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl p-8 space-y-5"
      style={{
        background: "white",
        border: "1.5px solid rgba(123,167,160,0.15)",
        boxShadow: "0 4px 24px rgba(15,15,30,0.06)",
      }}
    >
      <div>
        <label className={labelClass}>Nama Lengkap</label>
        <input
          type="text"
          required
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="Nama lengkap Anda"
          className={inputClass}
          style={{ borderColor: "rgba(15,15,30,0.1)" }}
        />
      </div>

      <div>
        <label className={labelClass}>Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@perusahaan.com"
          className={inputClass}
          style={{ borderColor: "rgba(15,15,30,0.1)" }}
        />
      </div>

      <div>
        <label className={labelClass}>Nomor WhatsApp</label>
        <input
          type="tel"
          required
          value={nomorWA}
          onChange={(e) => setNomorWA(e.target.value)}
          placeholder="08xxxxxxxxxx"
          className={inputClass}
          style={{ borderColor: "rgba(15,15,30,0.1)" }}
        />
      </div>

      <div>
        <label className={labelClass}>Detail Kebutuhan</label>
        <textarea
          required
          value={detailKebutuhan}
          onChange={(e) => setDetailKebutuhan(e.target.value)}
          placeholder="Ceritakan kebutuhan bisnis Anda — jenis integrasi, skala, timeline, dll."
          rows={4}
          className={inputClass}
          style={{ borderColor: "rgba(15,15,30,0.1)", resize: "vertical" }}
        />
      </div>

      {error && (
        <p className="text-sm text-red-500 bg-red-50 rounded-lg px-4 py-3">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 rounded-xl font-bold text-white transition-all duration-200 hover:scale-[1.02] hover:shadow-glow disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
        style={{ background: "linear-gradient(135deg, #7BA7A0, #6d9b94)" }}
      >
        {loading ? (
          <>
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.3" />
              <path d="M12 2a10 10 0 0110 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
            Mengirim...
          </>
        ) : (
          "Kirim →"
        )}
      </button>
    </form>
  );
}
