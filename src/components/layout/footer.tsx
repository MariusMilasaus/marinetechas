"use client";

import Image from "next/image";
import Link from "next/link"; // Pridėtas Link importas
import { useLanguage } from "@/lib/i18n/language-context";

export function Footer() {
  const { t } = useLanguage();

  const infoLinks = ["/privatumas", "/taisykles", "/grazinimas", "/slapukai"];

  return (
    <footer className="w-full bg-black/20 backdrop-blur-xl text-slate-800 pt-12 pb-6 border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-slate-900/10 pb-8">

          {/* 1. Logotipas */}
<div className="col-span-2 md:col-span-1 space-y-3">
  <Link href="/" className="relative h-8 w-36 block">
    <Image
  src="/marinetech.svg"
  alt="MarineTECH Logo"
  width={144}
  height={32}
  style={{ height: 'auto' }} // Tai nurodo, kad aukštis prisitaikys prie pločio
  priority
/>
  </Link>
  <p className="text-slate-700 text-[12px] leading-relaxed max-w-[200px]">
    {t.footer.description}
  </p>
</div>

          {/* 2. Paslaugos */}
          <div className="space-y-3">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#0C5588]">{t.footer.paslaugosTitle}</p>
            <ul className="space-y-1.5 text-xs text-slate-700">
              {t.footer.paslaugosItems.map((item, i) => (
                <li key={i}><Link href="/paslaugos" className="inline-block py-1.5 hover:text-[#0C5588] transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* 3. Teisinė informacija */}
          <div className="space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#0C5588]">{t.footer.infoTitle}</p>
            <ul className="space-y-1.5 text-xs text-slate-700">
              {t.footer.infoItems.map((item, i) => (
                <li key={i}><Link href={infoLinks[i]} className="inline-block py-1.5 hover:text-[#0C5588] transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* 4. Kontaktai */}
          <div className="space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#0C5588]">{t.footer.contactTitle}</p>
            <div className="space-y-3">
              <div className="flex flex-col">
                <span className="text-slate-900 text-[10px] uppercase font-black tracking-tighter">{t.footer.phoneLabel}</span>
                <a href="tel:+37067767287" className="text-sm font-bold text-slate-800 hover:text-[#0C5588] transition-colors tracking-tight">
                  +370 677 67287
                </a>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-900 text-[10px] uppercase font-black tracking-tighter">{t.footer.emailLabel}</span>
                <a href="mailto:info@marinetech.lt" className="text-xs font-medium text-slate-700 hover:text-[#0C5588] transition-colors">
                  info@marinetech.lt
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Apatinė juosta */}
        <div className="pt-6 flex justify-center items-center">
          <p className="text-[10px] font-bold text-slate-700 uppercase tracking-[0.3em] text-center">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
