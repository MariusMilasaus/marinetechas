"use client";

import Image from "next/image";
import { ShieldCheck, Globe, Target, Eye, Settings, Anchor, Check } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export default function ApieMusClient() {
  const { t } = useLanguage();
  const valueIcons = [Settings, Anchor, ShieldCheck, Globe];

  return (
    <main className="w-full min-h-screen bg-white text-slate-900 pt-20">

      {/* 1. HERO SEKCIJA (Kaip Smedegaarden pavyzdyje) */}
      <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center">
        <Image
          src="/marine-industry.png"
          fill
          priority
          sizes="100vw"
          className="object-cover grayscale"
          alt="Engineering"
        />
        <div className="absolute inset-0 bg-slate-900/60"></div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none">
            {t.apieMus.heroTitlePrefix} <span className="text-[#16AFD1]">{t.apieMus.heroTitleHighlight}</span>
          </h1>
          <div className="w-24 h-1 bg-[#16AFD1] mx-auto mb-8"></div>
          <p className="text-slate-200 text-lg md:text-xl font-medium uppercase tracking-widest">
            {t.apieMus.heroSubtitle}
          </p>
        </div>
      </section>

      {/* 2. PAGRINDINIS TEKSTAS (Tavo tekstas + papildymas) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 grid lg:grid-cols-2 gap-20 items-start">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-sm font-black text-[#16AFD1] uppercase tracking-[0.3em]">{t.apieMus.historyLabel}</h2>
            <h3 className="text-3xl font-extrabold text-slate-900 uppercase italic leading-tight">
              {t.apieMus.historyTitle}
            </h3>
          </div>

          <div className="text-slate-600 text-lg leading-relaxed space-y-6">
            <p>
              {t.apieMus.paragraph1}
            </p>
            <p>
              {t.apieMus.paragraph2}
            </p>

            {/* BULLET POINTS */}
            <ul className="space-y-4 pt-4">
              {t.apieMus.bullets.map((point, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-800 font-bold text-sm uppercase">
                  <div className="bg-[#16AFD1] p-1 rounded-md">
                    <Check size={14} className="text-white" />
                  </div>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 3. VERTYBIŲ KORTELĖS */}
        <div className="grid sm:grid-cols-2 gap-6">
          {t.apieMus.valueCards.map((card, i) => {
            const Icon = valueIcons[i];
            return (
              <div key={i} className="p-8 rounded-xl border border-slate-100 bg-slate-50/50 flex flex-col items-start gap-4 hover:shadow-xl transition">
                <Icon className="text-[#16AFD1]" size={32} />
                <h4 className="font-black uppercase text-sm italic">{card.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed uppercase tracking-wider">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. MISIJA IR VIZIJA (Skaidrus, modernus blokas) */}
      <section className="bg-[#0C5588] py-24 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 relative z-10">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Target className="text-[#16AFD1]" size={40} />
              <h3 className="text-3xl font-black uppercase italic">{t.apieMus.missionTitle}</h3>
            </div>
            <p className="text-slate-300 text-xl font-light leading-relaxed">
              {t.apieMus.missionTextBefore}
              <span className="text-white font-bold"> {t.apieMus.missionTextHighlight}</span>
            </p>
          </div>
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Eye className="text-[#16AFD1]" size={40} />
              <h3 className="text-3xl font-black uppercase italic">{t.apieMus.visionTitle}</h3>
            </div>
            <p className="text-slate-300 text-xl font-light leading-relaxed">
              {t.apieMus.visionTextBefore} <span className="text-white font-bold tracking-tight">{t.apieMus.visionTextHighlight}</span>
            </p>
          </div>
        </div>
        {/* Dekoracija fone */}
      </section>

    </main>
  )
}
