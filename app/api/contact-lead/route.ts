import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://pqhxwnfgthuynadbbjvc.supabase.co";
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nama, email, nomorWA, detailKebutuhan } = body;

    // Validate required fields
    if (!nama || !email || !nomorWA || !detailKebutuhan) {
      return NextResponse.json(
        { error: "Semua field wajib diisi." },
        { status: 400 }
      );
    }

    // Save to Supabase
    const supabaseRes = await fetch(`${SUPABASE_URL}/rest/v1/enklaris_leads`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        nama,
        email,
        nomor_wa: nomorWA,
        detail_kebutuhan: detailKebutuhan,
        source: "enklaris_website",
        created_at: new Date().toISOString(),
      }),
    });

    if (!supabaseRes.ok) {
      const errText = await supabaseRes.text();
      console.error("Supabase error:", errText);
      // Don't block the user — still send email notification
    }

    // Send email notification via Resend
    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Enklaris <noreply@legal-kan.com>",
        to: ["wahyu@karyaselaksamakna.com"],
        subject: `🔔 Lead baru dari Enklaris — ${nama}`,
        html: `
          <h2 style="font-family: sans-serif; color: #1A1A2E;">Lead baru dari website Enklaris</h2>
          <table style="font-family: sans-serif; font-size: 14px; border-collapse: collapse;">
            <tr><td style="padding: 6px 16px 6px 0; color: #666;"><b>Nama:</b></td><td style="padding: 6px 0;">${nama}</td></tr>
            <tr><td style="padding: 6px 16px 6px 0; color: #666;"><b>Email:</b></td><td style="padding: 6px 0;">${email}</td></tr>
            <tr><td style="padding: 6px 16px 6px 0; color: #666;"><b>WhatsApp:</b></td><td style="padding: 6px 0;">${nomorWA}</td></tr>
            <tr><td style="padding: 6px 16px 6px 0; color: #666; vertical-align: top;"><b>Kebutuhan:</b></td><td style="padding: 6px 0;">${detailKebutuhan}</td></tr>
          </table>
        `,
      }),
    });

    if (!emailRes.ok) {
      const errText = await emailRes.text();
      console.error("Resend error:", errText);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("contact-lead error:", err);
    return NextResponse.json(
      { error: "Terjadi kesalahan server. Silakan coba lagi." },
      { status: 500 }
    );
  }
}
