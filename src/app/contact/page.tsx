"use client";
import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Linkedin } from "lucide-react";

const metadata = {
  title: "Contact",
  description: "Contactez Maison Allure pour reserver votre consultation en conseil en image. Paris et visioconference disponibles pour la clientele internationale.",
};

const services = [
  "Conseil en Image Personnalise",
  "Analyse Colorimetrique",
  "Stylisme Personnel",
  "Image Professionnelle",
  "Stylisme Mariage",
  "Shopping Accompagne",
  "Garde-Robe Capsule",
  "Stylisme Voyage",
  "Planning Saisonnier",
  "Autre",
];

const budgets = [
  "Moins de 200€",
  "200€ - 500€",
  "500€ - 1000€",
  "1000€ - 2000€",
  "Plus de 2000€",
  "Je souhaite discuter",
];

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-40 pb-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-subtitle mb-4">Nous Contacter</p>
          <h1 className="section-title max-w-2xl mb-6">
            Commençons Votre<br />
            <em className="text-gold">Transformation Ensemble</em>
          </h1>
          <span className="block w-16 h-px bg-gold mb-8" />
          <p className="font-montserrat text-sm text-black/60 max-w-xl leading-relaxed">
            Prete a investir dans votre image ? Prenez rendez-vous pour une consultation
            decouverte et parlons de vos objectifs, vos besoins et la transformation
            que vous souhaitez accomplir.
          </p>
        </div>
      </section>

      {/* MAIN FORM */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div>
            <p className="section-subtitle mb-4">Informations</p>
            <h2 className="section-title mb-8">Parlons de Vous</h2>
            <p className="font-montserrat text-sm text-black/70 leading-relaxed mb-10">
              Chaque transformation commence par une conversation. Partagez vos aspirations,
              vos contraintes et vos objectifs. Nous vous proposerons l&apos;accompagnement
              le plus adapte a votre situation.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-gold/30 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-gold" />
                </div>
                <div>
                  <div className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-black/40 mb-1">Adresse</div>
                  <div className="font-montserrat text-sm text-black/70">Paris, France</div>
                  <div className="font-montserrat text-xs text-black/50">Consultations sur rendez-vous</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-gold/30 flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-gold" />
                </div>
                <div>
                  <div className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-black/40 mb-1">Telephone</div>
                  <a href="tel:+33600000000" className="font-montserrat text-sm text-black/70 hover:text-gold transition-colors">
                    +33 6 00 00 00 00
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-gold/30 flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-gold" />
                </div>
                <div>
                  <div className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-black/40 mb-1">Email</div>
                  <a href="mailto:contact@maison-allure.fr" className="font-montserrat text-sm text-black/70 hover:text-gold transition-colors">
                    contact@maison-allure.fr
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-gold/30 flex items-center justify-center shrink-0">
                  <Clock size={16} className="text-gold" />
                </div>
                <div>
                  <div className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-black/40 mb-1">Disponibilites</div>
                  <div className="font-montserrat text-sm text-black/70">Lundi - Samedi : 9h - 19h</div>
                  <div className="font-montserrat text-xs text-black/50">Visioconference pour clientele internationale</div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <div className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-black/40 mb-4">Reseaux Sociaux</div>
              <div className="flex gap-3">
                {[
                  { Icon: Instagram, label: "@maison.allure" },
                  { Icon: Facebook, label: "Maison Allure" },
                  { Icon: Linkedin, label: "Maison Allure" },
                ].map(({ Icon, label }) => (
                  <a key={label} href="#" className="flex items-center gap-2 border border-taupe/30 px-4 py-2 hover:border-gold transition-colors duration-300">
                    <Icon size={14} className="text-gold" />
                    <span className="font-montserrat text-[10px] text-black/60">{label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-10 bg-ivory aspect-[16/9] flex items-center justify-center border border-taupe/20">
              <div className="text-center">
                <MapPin size={24} className="text-gold mx-auto mb-2" />
                <div className="font-montserrat text-xs text-black/40">Paris, France</div>
                <div className="font-montserrat text-[10px] text-black/30">Integrer Google Maps ici</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-ivory p-10">
            <h3 className="font-playfair text-2xl mb-2">Demande de Consultation</h3>
            <p className="font-montserrat text-xs text-black/50 mb-8">
              Reponse garantie sous 24h ouvrables
            </p>
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-black/40 block mb-2">Prenom *</label>
                  <input type="text" className="w-full border border-taupe/40 bg-white px-4 py-3 font-montserrat text-sm focus:border-gold focus:outline-none" />
                </div>
                <div>
                  <label className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-black/40 block mb-2">Nom *</label>
                  <input type="text" className="w-full border border-taupe/40 bg-white px-4 py-3 font-montserrat text-sm focus:border-gold focus:outline-none" />
                </div>
              </div>
              <div>
                <label className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-black/40 block mb-2">Email *</label>
                <input type="email" className="w-full border border-taupe/40 bg-white px-4 py-3 font-montserrat text-sm focus:border-gold focus:outline-none" />
              </div>
              <div>
                <label className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-black/40 block mb-2">Telephone</label>
                <input type="tel" className="w-full border border-taupe/40 bg-white px-4 py-3 font-montserrat text-sm focus:border-gold focus:outline-none" />
              </div>
              <div>
                <label className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-black/40 block mb-2">Service Souhaite *</label>
                <select className="w-full border border-taupe/40 bg-white px-4 py-3 font-montserrat text-sm focus:border-gold focus:outline-none">
                  <option value="">Selectionnez un service</option>
                  {services.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-black/40 block mb-2">Budget Envisage</label>
                <select className="w-full border border-taupe/40 bg-white px-4 py-3 font-montserrat text-sm focus:border-gold focus:outline-none">
                  <option value="">Selectionnez une fourchette</option>
                  {budgets.map((b) => <option key={b}>{b}</option>)}
                </select>
              </div>
              <div>
                <label className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-black/40 block mb-2">Modalite Preferee</label>
                <div className="grid grid-cols-2 gap-3">
                  {["Presentiel (Paris)", "Visioconference", "Flexible"].map((m) => (
                    <label key={m} className="flex items-center gap-3 border border-taupe/40 bg-white px-4 py-3 cursor-pointer hover:border-gold transition-colors">
                      <input type="radio" name="modalite" className="accent-gold" />
                      <span className="font-montserrat text-xs">{m}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-black/40 block mb-2">Votre Message *</label>
                <textarea
                  rows={5}
                  placeholder="Parlez-nous de vous, de vos objectifs et de ce que vous souhaitez ameliorer dans votre image..."
                  className="w-full border border-taupe/40 bg-white px-4 py-3 font-montserrat text-sm focus:border-gold focus:outline-none resize-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Envoyer Ma Demande
              </button>
              <p className="font-montserrat text-[10px] text-black/40 text-center">
                En soumettant ce formulaire, vous acceptez notre politique de confidentialite.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-ivory">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-4">Questions Frequentes</p>
            <h2 className="section-title mb-4">Avant de Nous Contacter</h2>
            <span className="gold-divider" />
          </div>
          <div className="space-y-6">
            {[
              { q: "Combien coute une consultation ?", a: "Nos tarifs varient selon le service choisi. Nous proposons une consultation decouverte gratuite de 20 minutes pour evaluer vos besoins avant tout engagement." },
              { q: "Travaillez-vous en ligne ?", a: "Oui, nous proposons des consultations en visioconference pour notre clientele hors Paris et internationale. La plupart de nos services peuvent etre adaptes a distance." },
              { q: "Combien de temps dure une seance ?", a: "Les seances varient de 2h (analyse colorimetrique simple) a une journee complete (conseil en image global). Nous definissons la duree lors de notre premier echange." },
              { q: "Faut-il avoir un budget mode important ?", a: "Absolument pas. Notre expertise s'adapte a tous les budgets. Nous maximisons ce que vous avez deja et vous guidons vers des achats rentables et durables." },
              { q: "Combien de temps avant de voir des resultats ?", a: "Les premiers resultats sont visibles des la premiere seance. La transformation complete, avec une nouvelle garde-robe coherente, se fait sur 1 a 3 mois selon les services choisis." },
            ].map((faq) => (
              <div key={faq.q} className="bg-white p-6 border-l-2 border-gold">
                <h3 className="font-playfair text-base mb-3">{faq.q}</h3>
                <p className="font-montserrat text-sm text-black/60 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
