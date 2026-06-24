"use client";

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Search, Menu, X, Building2, Wrench, PackageSearch, Phone, Mail, MapPin, ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import type { Locale } from "@/lib/i18n/translations"

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  const links = [
    { href: "/apie-mus", label: t.nav.apieMus, icon: <Building2 size={20} /> },
    { href: "/paslaugos", label: t.nav.paslaugos, icon: <Wrench size={20} /> },
    { href: "/katalogas", label: t.nav.katalogas, icon: <PackageSearch size={20} /> },
    { href: "/kontaktai", label: t.nav.kontaktai, icon: <Phone size={20} /> },
  ];

  const languages: { code: Locale; flag: string; label: string }[] = [
    { code: "lt", flag: "https://flagcdn.com/w40/lt.png", label: "LT" },
    { code: "no", flag: "https://flagcdn.com/w40/no.png", label: "NO" },
    { code: "en", flag: "https://flagcdn.com/w40/gb.png", label: "EN" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="w-full px-6 md:px-12 h-20 flex items-center justify-between">
        
        {/* LOGO - Tikros spalvos */}
        <Link href="/" className="flex items-center transition-transform hover:scale-105">
          <Image 
            src="/marinetech.svg" 
            alt="MarineTECH Logo" 
            width={180} 
            height={40}
            priority
            className="object-contain" // Nuimtas invert filtras - dabar bus spalvotas
          />
        </Link>

        {/* PAGRINDINIS MENIU */}
        <nav className="hidden lg:flex items-center gap-10 text-[12px] font-black tracking-[0.2em] text-white uppercase">
          <Link href="/apie-mus" className="hover:text-[#16AFD1] transition-colors">{t.nav.apieMus}</Link>
          <Link href="/paslaugos" className="hover:text-[#16AFD1] transition-colors">{t.nav.paslaugos}</Link>
          <Link href="/katalogas" className="hover:text-[#16AFD1] transition-colors">{t.nav.katalogas}</Link>
          <Link href="/kontaktai" className="hover:text-[#16AFD1] transition-colors">{t.nav.kontaktai}</Link>
        </nav>

        {/* DEŠINĖ PUSĖ */}
        <div className="flex items-center gap-4 md:gap-6">
          
          {/* KALBŲ PASIRINKIMAS (LT, NO, EN) */}
          <div className="hidden sm:flex items-center gap-4 bg-white/10 border border-white/10 px-4 py-2 rounded-full">
            {languages.map((lang, i) => (
              <div key={lang.code} className="flex items-center gap-4">
                {i > 0 && <div className="w-[1px] h-3 bg-white/20" />}
                <button
                  onClick={() => setLocale(lang.code)}
                  className={`flex items-center gap-1.5 hover:scale-110 transition-transform ${
                    locale === lang.code ? "opacity-100" : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={lang.flag} className="w-5 h-3.5 object-cover rounded-sm" alt={lang.label} />
                  <span className="text-[10px] font-black text-white">{lang.label}</span>
                </button>
              </div>
            ))}
          </div>

          {/* IKONOS */}
          <div className="flex items-center gap-1">
            <button
              className="p-2 text-white hover:text-[#16AFD1] transition-colors"
              aria-label={t.nav.search}
            >
              <Search size={25} strokeWidth={2.5} />
            </button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-white"
            aria-label={t.nav.meniu}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENIU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-[#06263d]/98 backdrop-blur-xl border-t border-white/10 ${
          open ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2 p-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-4 py-4 px-4 rounded-xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-xs hover:bg-[#16AFD1] hover:text-black transition-colors group"
            >
              <span className="text-[#16AFD1] group-hover:text-black transition-colors">{link.icon}</span>
              <span className="flex-1">{link.label}</span>
              <ChevronRight size={16} className="opacity-50" />
            </Link>
          ))}
        </div>

        {/* KALBOS (mobile, kai paslėpta viršuje) */}
        <div className="sm:hidden px-6 pb-2 flex items-center justify-center gap-4 bg-white/5 mx-6 rounded-full border border-white/10 py-2 w-fit">
          {languages.map((lang, i) => (
            <div key={lang.code} className="flex items-center gap-4">
              {i > 0 && <div className="w-[1px] h-3 bg-white/20" />}
              <button
                onClick={() => setLocale(lang.code)}
                className={`flex items-center gap-1.5 ${locale === lang.code ? "opacity-100" : "opacity-60"}`}
              >
                <img src={lang.flag} className="w-5 h-3.5 object-cover rounded-sm" alt={lang.label} />
                <span className="text-[10px] font-black text-white">{lang.label}</span>
              </button>
            </div>
          ))}
        </div>

        {/* NAUDINGA INFORMACIJA */}
        <div className="px-6 pb-6 pt-4">
          <div className="border-t border-white/10 pt-5 flex flex-col gap-3">
            <span className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">
              {t.nav.susisiekite}
            </span>
            <a href="tel:+37067767287" className="flex items-center gap-3 text-white/90 hover:text-[#16AFD1] transition-colors">
              <Phone size={16} className="text-[#16AFD1]" />
              <span className="text-sm font-bold">+370 677 67287</span>
            </a>
            <a href="mailto:office@marinetech.lt" className="flex items-center gap-3 text-white/90 hover:text-[#16AFD1] transition-colors">
              <Mail size={16} className="text-[#16AFD1]" />
              <span className="text-sm font-bold">office@marinetech.lt</span>
            </a>
            <div className="flex items-center gap-3 text-white/90">
              <MapPin size={16} className="text-[#16AFD1]" />
              <span className="text-sm font-bold">Klauso Malūno g. 1, Klaipėda</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}