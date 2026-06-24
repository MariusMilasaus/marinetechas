"use client";

import { Wrench, Snowflake, Zap, Anchor, Check } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/language-context"

const groupIcons = [<Wrench size={40} key="0" />, <Snowflake size={40} key="1" />, <Zap size={40} key="2" />, <Anchor size={40} key="3" />];
const groupImages = ["/5.png", "/3.png", "/6.png", "/7.png"];

export default function Paslaugos() {
  const { t } = useLanguage();
  const serviceGroups = t.paslaugos.serviceGroups.map((group, i) => ({
    ...group,
    icon: groupIcons[i],
    image: groupImages[i],
  }));

  return (
    <main className="w-full min-h-screen bg-white text-slate-900 pt-20">
      
      {/* HERO SEKCIJA */}
      <section className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center">
        <img
          src="/marine-industry.png"
          className="absolute inset-0 w-full h-full object-cover grayscale"
          alt="Technical Services"
        />
        <div className="absolute inset-0 bg-slate-900/75"></div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <h4 className="text-[#16AFD1] font-black uppercase tracking-[0.4em] mb-4 text-sm">{t.paslaugos.heroLabel}</h4>
          <h1 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none">
            {t.paslaugos.heroTitlePrefix} <span className="text-[#16AFD1]">{t.paslaugos.heroTitleHighlight}</span>
          </h1>
          <div className="w-24 h-1 bg-[#16AFD1] mx-auto"></div>
        </div>
      </section>

      {/* PASLAUGŲ GRUPĖS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="grid lg:grid-cols-2 gap-12">
          {serviceGroups.map((group, index) => (
            <div 
              key={index} 
              className="group relative p-8 md:p-12 rounded-xl border border-slate-100 overflow-hidden min-h-[400px] flex flex-col justify-end transition-all duration-500"
            >
              {/* NUOTRAUKOS FONAS */}
              <img 
                src={group.image}
                alt={group.title}
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-10 group-hover:opacity-40 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-6">
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-100 group-hover:bg-[#16AFD1] group-hover:text-white transition-colors duration-500">
                    {/* Ikona dabar prisitaiko prie fono spalvos hover metu */}
                    <div className="text-[#16AFD1] group-hover:text-white transition-colors">
                      {group.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-black uppercase italic tracking-tight text-slate-900 leading-none">
                    {group.title}
                  </h3>
                </div>
                
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest border-b border-slate-200 pb-4">
                  {group.description}
                </p>

                <ul className="grid sm:grid-cols-1 gap-3">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-800 font-bold text-[11px] uppercase tracking-wide">
                      <Check size={14} className="text-[#16AFD1] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* KONTAKTAI / CTA */}
      <section className="bg-[#0C5588] py-20 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-8">
          <h2 className="text-3xl md:text-4xl font-black uppercase italic">
            {t.paslaugos.ctaTitle}
          </h2>
          <p className="text-slate-300 text-lg font-light tracking-wide uppercase">
            {t.paslaugos.ctaSubtitle}
          </p>
          <div className="pt-4">
            <Link
              href="/kontaktai"
              className="bg-[#16AFD1] text-white px-10 py-4 rounded-md font-black uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-[#0C5588] transition-all inline-block"
            >
              {t.paslaugos.ctaButton}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}