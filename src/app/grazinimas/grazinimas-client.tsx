"use client";
import { motion } from "framer-motion";
import { RotateCcw, AlertOctagon, ClipboardCheck, Ban, Truck } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";

const stepIcons = [<ClipboardCheck className="text-[#16AFD1]" key="0" />, <Truck className="text-[#16AFD1]" key="1" />, <RotateCcw className="text-[#16AFD1]" key="2" />];

export default function GrazinimasClient() {
  const { t } = useLanguage();
  const steps = t.grazinimas.steps.map((s, i) => ({ ...s, icon: stepIcons[i] }));

  return (
    <main className="w-full min-h-screen bg-slate-50 pt-[120px] pb-20 font-sans">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* HEADER BLOCK */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border-b-4 border-orange-600 mb-8 relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 mb-4">
              {t.grazinimas.titlePrefix} <span className="text-orange-600">{t.grazinimas.titleHighlight}</span>
            </h1>
            <p className="text-slate-500 font-bold text-xs uppercase tracking-[0.2em]">{t.grazinimas.subtitle}</p>
          </div>
          <RotateCcw className="absolute right-[-20px] bottom-[-20px] text-slate-50 opacity-[0.05]" size={200} />
        </div>

        {/* CRITICAL ALERT SECTION */}
        <div className="bg-orange-50 border-2 border-orange-200 p-8 mb-12 rounded-xl flex flex-col md:flex-row gap-6 items-center">
          <div className="bg-orange-600 p-4 rounded-full text-white">
            <Ban size={32} />
          </div>
          <div>
            <h2 className="text-xl font-black uppercase text-orange-900 mb-2 italic">{t.grazinimas.alertTitle}</h2>
            <p className="text-orange-800 text-sm leading-relaxed">
              {t.grazinimas.alertTextBefore} <strong>{t.grazinimas.alertTextCompanyBold}</strong> {t.grazinimas.alertTextMiddle} <strong>{t.grazinimas.alertTextBold2}</strong>
            </p>
          </div>
        </div>

        {/* STEP BY STEP PROCESS */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-slate-100 flex flex-col items-center text-center group hover:border-[#16AFD1] transition-all"
            >
              <div className="mb-6 p-4 bg-slate-50 rounded-full group-hover:bg-[#16AFD1]/10 transition-colors">
                {step.icon}
              </div>
              <h3 className="font-black uppercase text-sm tracking-widest mb-4 text-slate-800">{step.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{step.text}</p>
            </motion.div>
          ))}
        </div>

        {/* FORMAL REQUIREMENTS */}
        <div className="bg-[#0C5588] text-white p-10 rounded-xl shadow-2xl relative">
          <div className="flex items-start gap-6">
            <AlertOctagon className="text-orange-500 shrink-0" size={32} />
            <div className="space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tight">{t.grazinimas.requirementsTitle}</h2>
              <ul className="space-y-4 text-slate-300 text-sm">
                {t.grazinimas.requirementsList.map((req, i) => (
                  <li key={i} className="flex gap-3 items-start italic">
                    <span className="text-orange-500 font-bold">•</span>
                    {req}
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-slate-700">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 italic">
                  {t.grazinimas.contactLine}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}