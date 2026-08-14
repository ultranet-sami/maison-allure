"use client";
import Link from "next/link";
import { ArrowRight, Star, Check } from "lucide-react";

const services = [
  { title: "Analyse Colorimetrique", desc: "Decouvrez la palette de couleurs qui sublime votre teint et votre personnalite.", href: "/color-analysis" },
  { title: "Stylisme Personnel", desc: "Construisez un style authentique et elegant en harmonie avec qui vous etes.", href: "/personal-styling" },
  { title: "Image Professionnelle", desc: "Affirmez votre leadership avec une image forte et une presence executive.", href: "/professional-image" },
  { title: "Stylisme Mariage", desc: "Vivez le plus beau jour de votre vie avec un style parfaitement orchestre.", href: "/wedding-styling" },
  { title: "Shopping Accompagne", desc: "Des selections personnalisees pour une garde-robe qui vous ressemble.", href: "/services" },
  { title: "Garde-Robe Capsule", desc: "Une garde-robe essentielle, coherente et eternellement chic.", href: "/services" },
];

const values = [
  { num: "01", title: "Elegance", desc: "L'elegance n'est pas une question de prix, mais d'harmonie et de justesse." },
  { num: "02", title: "Authenticite", desc: "Votre style doit refleter votre personnalite profonde, pas une tendance." },
  { num: "03", title: "Transformation", desc: "Un changement d'image peut transformer votre confiance et votre vie." },
  { num: "04", title: "Excellence", desc: "Chaque detail compte. Nous accompagnons avec rigueur et bienveillance." },
];

const testimonials = [
  {
    name: "Sophie M.",
    role: "Directrice Marketing",
    text: "Maison Allure a litteralement transforme ma facon de m'habiller et de me presenter. Mon image professionnelle a gagne en impact et en coherence. Je me sens enfin alignee avec qui je suis vraiment.",
    rating: 5,
  },
  {
    name: "Laurent D.",
    role: "Entrepreneur",
    text: "En tant qu'homme, je n'aurais jamais imagine faire appel a un conseil en image. C'etait la meilleure decision de ma carriere. Mon image est maintenant un atout majeur dans mes negociations.",
    rating: 5,
  },
  {
    name: "Isabelle R.",
    role: "Avocate",
    text: "L'analyse colorimetrique a ete une revelation. Je porte maintenant les couleurs qui me mettent en valeur et je recois des compliments chaque jour. Un investissement inestimable.",
    rating: 5,
  },
];

const steps = [
  { step: "01", title: "Consultation Initiale", desc: "Un entretien approfondi pour comprendre votre personnalite, vos objectifs et votre mode de vie." },
  { step: "02", title: "Analyse & Diagnostic", desc: "Analyse colorimetrique, morphologique et de style pour un portrait complet de votre identite." },
  { step: "03", title: "Strategie Stylistique", desc: "Creation de votre guide personnalise : couleurs, coupes, matieres et styles adaptés." },
  { step: "04", title: "Transformation", desc: "Mise en oeuvre concrète avec accompagnement shopping et optimisation de votre garde-robe." },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen bg-[#1F1F1F] flex items-center overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: "repeating-linear-gradient(45deg, #C6A46A 0, #C6A46A 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px"
          }} />
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#C6A46A]/10 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
          <div className="max-w-3xl">
            <p className="section-subtitle mb-6 text-gold">Maison de Conseil en Image</p>
            <h1 className="font-playfair text-5xl md:text-7xl font-normal text-[#FCFAF7] leading-[1.1] mb-8">
              L&apos;Art de Reveler{" "}
              <em className="text-gold not-italic">Votre Elegance</em>{" "}
              Naturelle
            </h1>
            <p className="font-montserrat text-base text-[#C8B8A6] leading-relaxed mb-12 max-w-xl">
              Inspiree de l&apos;elegance francaise intemporelle, Maison Allure vous accompagne
              dans la revelation de votre style unique — en parfaite harmonie avec votre personnalite,
              votre morphologie et vos aspirations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-gold">
                Prendre Rendez-vous
              </Link>
              <Link href="/services" className="btn-outline border-[#FCFAF7] text-[#FCFAF7] hover:bg-[#FCFAF7] hover:text-black">
                Decouvrir Nos Services
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-32 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="section-subtitle mb-4">Notre Histoire</p>
            <h2 className="section-title mb-6">
              L&apos;Elegance Francaise<br />
              <em className="text-gold">Sublimee par l&apos;Expertise</em>
            </h2>
            <span className="block w-16 h-px bg-gold mb-8" />
            <p className="font-montserrat text-sm text-black/70 leading-relaxed mb-6">
              Maison Allure est nee d&apos;une conviction profonde : chaque individu porte en lui une
              elegance unique qui ne demande qu&apos;a etre revelee. Inspiree par l&apos;art de vivre
              a la francaise, notre maison de conseil en image accompagne femmes et hommes dans la
              construction d&apos;une image authentique, coherente et raffinee.
            </p>
            <p className="font-montserrat text-sm text-black/70 leading-relaxed mb-10">
              Notre approche allie rigueur professionnelle et bienveillance personnelle, pour que
              chaque transformation soit un voyage vers la meilleure version de vous-meme.
            </p>
            <Link href="/about" className="btn-primary">
              Notre Histoire
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { num: "500+", label: "Clients Transformes" },
              { num: "10+", label: "Annees d'Experience" },
              { num: "98%", label: "Satisfaction Client" },
              { num: "13", label: "Services Sur Mesure" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white p-8 border border-taupe/20 text-center">
                <div className="font-playfair text-4xl text-gold mb-2">{stat.num}</div>
                <div className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-black/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-4">Notre Expertise</p>
            <h2 className="section-title mb-4">Services de Conseil en Image</h2>
            <span className="gold-divider" />
            <p className="font-montserrat text-sm text-black/60 max-w-xl mx-auto mt-4">
              Un accompagnement complet et personnalise pour chaque facette de votre image personnelle et professionnelle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-taupe/20">
            {services.map((s) => (
              <div key={s.title} className="bg-white p-10 group hover:bg-ivory transition-colors duration-300">
                <div className="w-8 h-px bg-gold mb-6 group-hover:w-16 transition-all duration-300" />
                <h3 className="font-playfair text-xl mb-3">{s.title}</h3>
                <p className="font-montserrat text-sm text-black/60 leading-relaxed mb-6">{s.desc}</p>
                <Link href={s.href} className="inline-flex items-center gap-2 font-montserrat text-[10px] tracking-[0.2em] uppercase text-gold hover:gap-4 transition-all duration-300">
                  Decouvrir <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="btn-outline">
              Tous Nos Services
            </Link>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-4 text-gold">Nos Valeurs</p>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#FCFAF7] mb-4">
              Pourquoi Choisir<br /><em className="text-gold">Maison Allure</em>
            </h2>
            <span className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.num} className="border border-gold/20 p-8 hover:border-gold transition-colors duration-300">
                <div className="font-playfair text-5xl text-gold/20 mb-4">{v.num}</div>
                <h3 className="font-playfair text-xl text-[#FCFAF7] mb-3">{v.title}</h3>
                <p className="font-montserrat text-xs text-[#C8B8A6] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFORMATION JOURNEY */}
      <section className="py-32 bg-ivory">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-4">Notre Methode</p>
            <h2 className="section-title mb-4">Votre Parcours de Transformation</h2>
            <span className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="relative">
                <div className="font-playfair text-6xl text-gold/15 mb-4">{s.step}</div>
                <div className="w-8 h-px bg-gold mb-4" />
                <h3 className="font-playfair text-xl mb-3">{s.title}</h3>
                <p className="font-montserrat text-xs text-black/60 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-4">Temoignages</p>
            <h2 className="section-title mb-4">Ce Que Disent Nos Clients</h2>
            <span className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-ivory p-10 border-b-2 border-gold">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={12} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-montserrat text-sm text-black/70 leading-relaxed mb-8 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <div className="font-playfair text-base">{t.name}</div>
                  <div className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-gold">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/testimonials" className="btn-outline">
              Tous les Temoignages
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-24 bg-gold">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl text-[#1F1F1F] mb-6">
            Prete a Reveler Votre Style ?
          </h2>
          <p className="font-montserrat text-sm text-[#1F1F1F]/70 mb-10 max-w-xl mx-auto">
            Commencez votre transformation avec une consultation personnalisee.
            Ensemble, construisons l&apos;image qui vous ressemble vraiment.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Reserver Ma Consultation
            </Link>
            <Link href="/services" className="btn-outline">
              Voir Nos Formules
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT PREVIEW */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-subtitle mb-4">Nous Contacter</p>
            <h2 className="section-title mb-6">Votre Transformation<br />Commence Ici</h2>
            <span className="block w-16 h-px bg-gold mb-8" />
            <ul className="space-y-4">
              {[
                "Consultation disponible en presentiel a Paris",
                "Sessions en visioconference pour la clientele internationale",
                "Accompagnement shopping sur Paris et grandes villes",
                "Disponible 6 jours sur 7",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={14} className="text-gold mt-0.5 shrink-0" />
                  <span className="font-montserrat text-sm text-black/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-10 shadow-sm">
            <h3 className="font-playfair text-2xl mb-6">Demande de Consultation</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Prenom" className="w-full border border-taupe/40 px-4 py-3 font-montserrat text-sm focus:border-gold focus:outline-none bg-transparent" />
                <input type="text" placeholder="Nom" className="w-full border border-taupe/40 px-4 py-3 font-montserrat text-sm focus:border-gold focus:outline-none bg-transparent" />
              </div>
              <input type="email" placeholder="Email" className="w-full border border-taupe/40 px-4 py-3 font-montserrat text-sm focus:border-gold focus:outline-none bg-transparent" />
              <select className="w-full border border-taupe/40 px-4 py-3 font-montserrat text-sm focus:border-gold focus:outline-none bg-transparent text-black/50">
                <option value="">Service souhaite</option>
                <option>Conseil en Image</option>
                <option>Analyse Colorimetrique</option>
                <option>Stylisme Personnel</option>
                <option>Image Professionnelle</option>
                <option>Stylisme Mariage</option>
              </select>
              <button type="submit" className="btn-primary w-full text-center">
                Envoyer Ma Demande
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
