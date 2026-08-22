"use client";
import { useState } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { useLang, LANGUAGES } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const current = LANGUAGES.find((l) => l.code === lang);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 font-montserrat text-[10px] tracking-[0.2em] uppercase text-black hover:text-gold transition-colors duration-300"
        aria-label="Change language"
      >
        <Globe size={13} className="text-gold" />
        <span>{current?.flag}</span>
        <ChevronDown size={11} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-3 bg-[#FCFAF7] shadow-lg border border-taupe/20 z-50 min-w-[160px] py-2">
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => { setLang(l.code); setOpen(false); }}
                className={`w-full text-left px-5 py-2.5 font-montserrat text-[10px] tracking-[0.15em] uppercase flex items-center gap-3 hover:bg-ivory hover:text-gold transition-colors duration-200 ${
                  lang === l.code ? "text-gold bg-ivory" : "text-black"
                }`}
              >
                <span className="font-semibold w-5 text-center">{l.flag}</span>
                <span>{l.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
