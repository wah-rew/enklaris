import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://pqhxwnfgthuynadbbjvc.supabase.co";
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const TICKET_TO = process.env.ENQUIRY_TO || "business@enklaris.com";
const TICKET_FROM = process.env.ENQUIRY_FROM || "Enklaris <noreply@legal-kan.com>";

const esc = (v: unknown) =>
  String(v ?? "").slice(0, 500).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string));

// Receives the homepage enquiry flow, stores the lead and emails it to the business inbox as a ticket.
export async function POST(req: NextRequest) {
  try {
    const b = await req.json();
    const name = String(b.name ?? "").trim();
    const company = String(b.company ?? "").trim();
    const email = String(b.email ?? "").trim();
    if (!name || !company || !/^\S+@\S+\.\S+$/.test(email) || !b.goal) {
      return NextResponse.json({ error: "Name, company, a valid email and a goal are required." }, { status: 400 });
    }
    const channels = Array.isArray(b.channels) ? b.channels.map(String).join(", ") : "";
    const rows: [string, string][] = [
      ["Goal", String(b.goal)],
      ["Industry", String(b.industry ?? "")],
      ["Monthly reach", String(b.volume ?? "")],
      ["Agent scope", channels],
      ["Start", String(b.start ?? "")],
      ["Budget", String(b.budget || "Not stated")],
      ["Contact", `${name}, ${company}`],
      ["Email", email],
      ["WhatsApp", String(b.wa ?? "")],
    ].filter(([, v]) => v) as [string, string][];
    const summary = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

    const [dbRes, mailRes] = await Promise.all([
      fetch(`${SUPABASE_URL}/rest/v1/enklaris_leads`, {
        method: "POST",
        headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}`, "Content-Type": "application/json", Prefer: "return=minimal" },
        body: JSON.stringify({ nama: `${name} (${company})`.slice(0, 200), email, nomor_wa: String(b.wa ?? "").slice(0, 40), detail_kebutuhan: summary.slice(0, 4000), source: "enklaris_website_flow", created_at: new Date().toISOString() }),
      }).catch(() => null),
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: TICKET_FROM,
          to: [TICKET_TO],
          reply_to: email,
          subject: `New enquiry: ${name}, ${company}`.slice(0, 150),
          html: `<h2 style="font-family:sans-serif;color:#2A1638">New enquiry from enklaris.com</h2><table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">${rows
            .map(([k, v]) => `<tr><td style="padding:6px 16px 6px 0;color:#666"><b>${esc(k)}</b></td><td style="padding:6px 0">${esc(v)}</td></tr>`)
            .join("")}</table>`,
        }),
      }).catch(() => null),
    ]);

    if (!dbRes?.ok) console.error("enquiry: lead not stored", dbRes ? await dbRes.text() : "network error");
    if (!mailRes?.ok) console.error("enquiry: ticket email not sent", mailRes ? await mailRes.text() : "network error");
    // The visitor only sees success if the request reached at least one of the two places.
    if (!dbRes?.ok && !mailRes?.ok) return NextResponse.json({ error: "Could not record the request." }, { status: 502 });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("enquiry error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
