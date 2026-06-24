"use client";
import { motion } from "framer-motion";
import { Cookie, BarChart3, ShieldCheck, Settings } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";

const cookieIcons = [<ShieldCheck className="text-[#0C5588]" key="0" />, <BarChart3 className="text-[#16AFD1]" key="1" />];

export default function Slapukai() {
  const { t } = useLanguage();
  const cookieTypes = t.slapukai.cookieTypes.map((c, i) => ({ ...c, icon: cookieIcons[i] }));

  return (
    <main className="w-full min-h-screen bg-slate-50 pt-[120px] pb-20 font-sans">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border-b-4 border-slate-900 mb-12">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-slate-50 rounded-full">
              <Cookie size={40} className="text-[#0C5588]" />
            </div>
            <div>
              <h1 className="text-4xl font-black uppercase tracking-tighter text-slate-900">
                {t.slapukai.titlePrefix} <span className="text-[#16AFD1]">{t.slapukai.titleHighlight}</span>
              </h1>
              <p className="text-slate-400 font-bold text-xs uppercase tracking-[0.2em] mt-2">UAB „Marinetechas“</p>
            </div>
          </div>
        </div>

        {/* APRAŠYMAS */}
        <div className="bg-white p-8 rounded-xl shadow-sm mb-8 border-l-4 border-[#16AFD1]">
          <h2 className="text-lg font-black uppercase mb-4 flex items-center gap-2">
            <Settings size={18} /> {t.slapukai.whatAreCookiesTitle}
          </h2>
          <p className="text-slate-600 leading-relaxed">
            {t.slapukai.whatAreCookiesTextBefore} <strong>{t.slapukai.whatAreCookiesBold}</strong>{t.slapukai.whatAreCookiesAfter}
          </p>
        </div>

        {/* LENTELĖ / KORTELĖS */}
        <div className="space-y-6">
          {cookieTypes.map((type, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white shadow-sm overflow-hidden rounded-xl border border-slate-100"
            >
              <div className="p-6 border-b border-slate-50 bg-slate-50/50 flex items-center gap-4">
                {type.icon}
                <h3 className="font-black uppercase tracking-tight text-slate-800">{type.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-slate-600 text-sm mb-6">{type.desc}</p>
                
                <div className="bg-white border border-slate-100 rounded-lg overflow-hidden">
                  <div className="grid grid-cols-2 bg-slate-50 p-2 text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100">
                    <span>{t.slapukai.tableHeaderName}</span>
                    <span>{t.slapukai.tableHeaderDuration}</span>
                  </div>
                  {type.cookies.map((c, i) => (
                    <div key={i} className="grid grid-cols-2 p-3 text-sm font-mono text-slate-700 border-b border-slate-50 last:border-0">
                      <span>{c}</span>
                      <span className="text-slate-400 font-sans italic">{type.duration}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* VALDYMAS */}
        <div className="mt-12 p-8 rounded-xl bg-[#0C5588] text-white shadow-xl">
          <h2 className="text-xl font-black uppercase mb-4">{t.slapukai.howToManageTitle}</h2>
          <p className="text-blue-100 text-sm leading-relaxed mb-6">
            {t.slapukai.howToManageTextBefore} <strong>{t.slapukai.howToManageBold}</strong> {t.slapukai.howToManageAfter}
          </p>
          <div className="text-[10px] font-bold uppercase tracking-widest opacity-50">
            {t.slapukai.lastReviewed}
          </div>
        </div>

      </div>
    </main>
  );
}