import Link from "next/link";
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-[#FCFAF7]">
      {/* Top band */}
      <div className="border-b border-gold/20 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <div className="font-playfair text-2xl tracking-widest text-white">MAISON</div>
              <div className="font-montserrat text-[10px] tracking-[0.4em] text-gold uppercase">ALLURE</div>
            </div>
            <p className="font-montserrat text-sm text-taupe leading-relaxed mb-6">
              L&apos;art de reveler votre style unique a travers l&apos;elegance francaise et
              l&apos;expertise en conseil en image.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, href: "#" },
                { Icon: Facebook, href: "#" },
                { Icon: Linkedin, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 border border-gold/30 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-gold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                ["Conseil en Image", "/services"],
                ["Analyse Colorimetrique", "/color-analysis"],
                ["Stylisme Personnel", "/personal-styling"],
                ["Image Professionnelle", "/professional-image"],
                ["Stylisme Mariage", "/wedding-styling"],
                ["Shopping Accompagne", "/services"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-montserrat text-xs text-taupe hover:text-gold transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-gold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {[
                ["A Propos", "/about"],
                ["Temoignages", "/testimonials"],
                ["Blog", "/blog"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-montserrat text-xs text-taupe hover:text-gold transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-gold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-gold mt-0.5 shrink-0" />
                <span className="font-montserrat text-xs text-taupe">Paris, France</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-gold shrink-0" />
                <a href="tel:+33600000000" className="font-montserrat text-xs text-taupe hover:text-gold transition-colors">
                  +33 6 00 00 00 00
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-gold shrink-0" />
                <a href="mailto:contact@maison-allure.fr" className="font-montserrat text-xs text-taupe hover:text-gold transition-colors">
                  contact@maison-allure.fr
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-montserrat text-[10px] tracking-widest text-taupe">
            &copy; {new Date().getFullYear()} Maison Allure. Tous droits reserves.
          </p>
          <div className="flex gap-6">
            {["Mentions legales", "Politique de confidentialite", "CGV"].map((item) => (
              <a key={item} href="#" className="font-montserrat text-[10px] text-taupe hover:text-gold transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
