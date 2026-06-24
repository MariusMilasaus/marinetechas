"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Database, Truck, UserCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";

const sectionIcons = [<Database className="text-[#16AFD1]" size={24} key="0" />, <Truck className="text-[#16AFD1]" size={24} key="1" />, <UserCircle className="text-[#16AFD1]" size={24} key="2" />];

export default function PrivatumasClient() {
  const { t } = useLanguage();
  const sections = t.privatumas.sections.map((s, i) => ({ ...s, icon: sectionIcons[i] }));

  return (
    <main className="w-full min-h-screen bg-slate-50 pt-[120px] pb-20 font-sans">
      <div className="max-w-4xl mx-auto px-6">
        {/* HEADER */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border-b-4 border-[#16AFD1] mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 mb-6">
              {t.privatumas.titlePrefix} <span className="text-[#16AFD1]">{t.privatumas.titleHighlight}</span>
            </h1>
            <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm font-bold text-slate-400 uppercase tracking-widest">
              <span>UAB „Marinetechas“</span>
              <span>Į.k: 304064996</span>
              <span>PVM: LT100010805312</span>
            </div>
            <p className="mt-4 text-slate-500 italic">{t.privatumas.address}</p>
          </motion.div>
        </div>

        {/* CONTENT SECTIONS */}
        <div className="grid gap-6">
          {sections.map((section, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-xl flex gap-6 items-start shadow-sm border-l-4 border-slate-200 hover:border-[#0C5588] transition-colors"
            >
              <div className="p-3 bg-slate-50 rounded-lg">{section.icon}</div>
              <div>
                <h2 className="text-xl font-black text-slate-800 uppercase mb-2 tracking-tight">{section.title}</h2>
                <p className="text-slate-600 leading-relaxed">{section.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <footer className="mt-12 text-center text-slate-400 text-xs uppercase tracking-[0.2em] font-bold">
          {t.privatumas.lastUpdated}
        </footer>
      </div>
    </main>
  );
}