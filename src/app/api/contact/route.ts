import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, service, message } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // --- OPTION A: Resend (recommended) ---
    // 1. Create free account at resend.com
    // 2. Get your API key
    // 3. Add RESEND_API_KEY in Vercel Settings > Environment Variables
    // 4. Uncomment the block below:

    /*
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Maison Allure <contact@maison-allure.fr>",
      to: ["votre@email.com"],   // <-- REMPLACER par votre email
      subject: `Nouvelle demande de ${name} - ${service || "Consultation"}`,
      html: `
        <h2>Nouvelle demande de consultation - Maison Allure</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Service :</strong> ${service || "Non specifie"}</p>
        <p><strong>Message :</strong> ${message || "Aucun message"}</p>
      `,
    });
    */

    // --- OPTION B: EmailJS (no backend needed) ---
    // Configure EmailJS at emailjs.com and use their client-side SDK instead

    // --- For now: log the submission (works without any API key) ---
    console.log("New contact form submission:", { name, email, service, message });

    return NextResponse.json({
      success: true,
      message: "Message recu. Nous vous recontacterons sous 24h.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue. Veuillez reessayer." },
      { status: 500 }
    );
  }
}
