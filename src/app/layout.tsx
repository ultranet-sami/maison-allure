import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { LanguageProvider } from "@/context/LanguageContext";

// -------------------------------------------------------------------
// GOOGLE ANALYTICS - CONFIGURATION
// 1. Aller sur analytics.google.com -> creer une propriete
// 2. Copier votre Measurement ID (format: G-XXXXXXXXXX)
// 3. Remplacer "G-XXXXXXXXXX" ci-dessous par votre vrai ID
// -------------------------------------------------------------------
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";

export const metadata: Metadata = {
  title: {
    default: "Maison Allure | Conseil en Image & Stylisme Personnel de Luxe",
    template: "%s | Maison Allure",
  },
  description:
    "Maison Allure est une maison de conseil en image et stylisme personnel inspiree de l'elegance francaise. Sublimez votre image avec notre expertise en analyse colorimetrique, coaching image et style personnel.",
  keywords: [
    "conseil en image",
    "styliste personnel",
    "analyse colorimetrique",
    "coaching image",
    "elegance francaise",
    "relooking",
    "image professionnelle",
    "shopping accompagne",
    "garde-robe capsule",
    "stylisme mariage",
    "image consulting",
    "personal stylist",
    "color analysis",
    "french elegance",
  ],
  authors: [{ name: "Maison Allure" }],
  creator: "Maison Allure",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.maison-allure.fr",
    siteName: "Maison Allure",
    title: "Maison Allure | Conseil en Image & Stylisme Personnel de Luxe",
    description:
      "Revelez votre style unique avec Maison Allure. Conseil en image, analyse colorimetrique et stylisme personnel inspires de l'elegance parisienne.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maison Allure | Conseil en Image de Luxe",
    description: "Sublimez votre image avec l'elegance francaise.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        {/* Google Analytics - activé seulement si GA_MEASUREMENT_ID est configure */}
        {GA_MEASUREMENT_ID !== "G-XXXXXXXXXX" && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_MEASUREMENT_ID}', { page_path: window.location.pathname });
                `,
              }}
            />
          </>
        )}
        {/* Calendly CSS - preload */}
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-black font-montserrat">
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Chatbot />
        </LanguageProvider>
        {/* Calendly JS */}
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        />
      </body>
    </html>
  );
}
