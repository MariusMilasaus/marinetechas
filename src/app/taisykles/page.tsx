"use client";
import { motion } from "framer-motion";
import { Gavel, CreditCard, Box, ShieldCheck, HelpCircle } from "lucide-react";

export default function PirkimoTaisykles() {
  const sections = [
    {
      icon: <Gavel className="text-[#16AFD1]" size={24} />,
      title: "Sutarties sudarymas",
      text: "Sutartis tarp Pirkėjo ir UAB „Marinetechas“ laikoma sudaryta nuo momento, kai Pirkėjas apmoka suformuotą krepšelį. Visos kainos nurodomos su PVM."
    },
    {
      icon: <CreditCard className="text-[#16AFD1]" size={24} />,
      title: "Atsiskaitymo tvarka",
      text: "Atsiskaityti galima per integruotus mokėjimo vartus (kortelėmis, banko pavedimu). Prekės pradedamos ruošti siuntimui tik gavus pilną apmokėjimą."
    },
    {
      icon: <Box className="text-[#16AFD1]" size={24} />,
      title: "Pristatymo sąlygos",
      text: "Standartinis detalių pristatymas Lietuvoje trunka 2–5 d.d. Pirkėjas privalo patikrinti pakuotės vientisumą kurjerio akivaizdoje."
    },
    {
      icon: <ShieldCheck className="text-[#16AFD1]" size={24} />,
      title: "Garantiniai įsipareigojimai",
      text: "Laivų variklių detalėms garantija galioja tik pateikus dokumentus, įrodančius, kad montavimo darbus atliko sertifikuotas specialistas."
    }
  ];

  return (
    <main className="w-full min-h-screen bg-slate-50 pt-[120px] pb-20 font-sans">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border-b-4 border-[#0C5588] mb-12">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 mb-4">
            Pirkimo <span className="text-[#16AFD1]">taisyklės</span>
          </motion.h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">UAB „Marinetechas“ • Klaipėda</p>
        </div>

        <div className="grid gap-6">
          {sections.map((section, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-xl flex gap-6 items-start shadow-sm border-l-4 border-slate-200 hover:border-[#16AFD1] transition-all">
              <div className="p-3 bg-slate-50 rounded-lg">{section.icon}</div>
              <div>
                <h2 className="text-xl font-black text-slate-800 uppercase mb-2 tracking-tight">{section.title}</h2>
                <p className="text-slate-600 leading-relaxed">{section.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}