import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, service, message } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // ----------------------------------------------------------------
    // RESEND EMAIL CONFIGURATION
    // 1. Creer un compte sur resend.com (se connecter avec GitHub)
    // 2. Aller dans "Domains" → ajouter maison-oleria.com → suivre les instructions DNS
    // 3. Aller dans "API Keys" → creer une cle → copier
    // 4. Dans Vercel Settings → Environment Variables → ajouter :
    //    RESEND_API_KEY = re_xxxxxxxxxxxxx
    // 5. Decommenter le bloc ci-dessous
    // ----------------------------------------------------------------

    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "Maison Oleria <info.oleria@maison-oleria.com>",
        to: ["info.oleria@maison-oleria.com"],
        subject: `Nouvelle demande de ${name} - ${service || "Consultation"}`,
        html: `
          <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; padding: 40px; background: #FCFAF7;">
            <div style="text-align: center; margin-bottom: 40px;">
              <h1 style="font-family: 'Georgia', serif; color: #1F1F1F; letter-spacing: 0.3em; font-size: 24px;">MAISON OLERIA</h1>
              <div style="width: 40px; height: 1px; background: #C6A46A; margin: 10px auto;"></div>
              <p style="color: #C6A46A; font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase;">Nouvelle Demande de Consultation</p>
            </div>
            <div style="background: white; padding: 30px; border-left: 3px solid #C6A46A;">
              <p style="margin: 10px 0;"><strong>Nom :</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
              <p style="margin: 10px 0;"><strong>Service :</strong> ${service || "Non specifie"}</p>
              <p style="margin: 10px 0;"><strong>Message :</strong></p>
              <p style="margin: 10px 0; color: #555;">${message || "Aucun message"}</p>
            </div>
            <p style="color: #999; font-size: 11px; text-align: center; margin-top: 30px;">
              Maison Oleria — maison-oleria.com
            </p>
          </div>
        `,
      });
    }

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
