"use client";
import { motion } from "framer-motion";
import { RotateCcw, AlertOctagon, ClipboardCheck, Ban, Truck } from "lucide-react";

export default function Grazinimas() {
  const steps = [
    {
      icon: <ClipboardCheck className="text-[#16AFD1]" />,
      title: "1. Patikra",
      text: "Grąžinama prekė privalo būti originalioje, švarioje pakuotėje. Mes nepriimame detalių su montavimo žymėmis, tepalų pėdsakais ar pažeistais korpusais."
    },
    {
      icon: <Truck className="text-[#16AFD1]" />,
      title: "2. Siuntimas",
      text: "Už prekių grąžinimo transporto išlaidas atsakingas Pirkėjas. Rekomenduojame siuntas drausti, nes mes neatsakome už tranzito metu prarastas prekes."
    },
    {
      icon: <RotateCcw className="text-[#16AFD1]" />,
      title: "3. Pinigų grąžinimas",
      text: "Pinigai grąžinami per 14 dienų po to, kai mūsų techninis skyrius patvirtina, kad detalė yra tinkama pakartotiniam pardavimui."
    }
  ];

  return (
    <main className="w-full min-h-screen bg-slate-50 pt-[120px] pb-20 font-sans">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* HEADER BLOCK */}
        <div className="bg-white p-8 md:p-12 shadow-sm border-b-4 border-orange-600 mb-8 relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 mb-4">
              Prekių <span className="text-orange-600">Grąžinimas</span>
            </h1>
            <p className="text-slate-500 font-bold text-xs uppercase tracking-[0.2em]">UAB „Marinetechas“ • Kokybės kontrolė</p>
          </div>
          <RotateCcw className="absolute right-[-20px] bottom-[-20px] text-slate-50 opacity-[0.05]" size={200} />
        </div>

        {/* CRITICAL ALERT SECTION */}
        <div className="bg-orange-50 border-2 border-orange-200 p-8 mb-12 flex flex-col md:flex-row gap-6 items-center">
          <div className="bg-orange-600 p-4 rounded-full text-white">
            <Ban size={32} />
          </div>
          <div>
            <h2 className="text-xl font-black uppercase text-orange-900 mb-2 italic">Negrąžinamos prekės</h2>
            <p className="text-orange-800 text-sm leading-relaxed">
              Pagal LR įstatymus ir <strong>UAB „Marinetechas“</strong> taisykles, detalės, kurios buvo užsakytos specialiai pagal pirkėjo pateiktą laivo variklio serijos numerį (užsakomosios prekės), <strong>nėra grąžinamos ir nekeičiamos.</strong>
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
              className="bg-white p-8 shadow-sm border-t-4 border-slate-100 flex flex-col items-center text-center group hover:border-[#16AFD1] transition-all"
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
        <div className="bg-slate-900 text-white p-10 shadow-2xl relative">
          <div className="flex items-start gap-6">
            <AlertOctagon className="text-orange-500 shrink-0" size={32} />
            <div className="space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tight">Esminiai reikalavimai</h2>
              <ul className="space-y-4 text-slate-300 text-sm">
                <li className="flex gap-3 items-start italic">
                  <span className="text-orange-500 font-bold">•</span>
                  Prekė privalo būti nepraradusi prekinės išvaizdos (nepažeistos etiketės, nenuplėštos apsauginės plėvelės).
                </li>
                <li className="flex gap-3 items-start italic">
                  <span className="text-orange-500 font-bold">•</span>
                  Elektronikos dalys (valdymo blokai, davikliai) grąžinimui nepriimamos, jei buvo atidaryta gamyklinė pakuotė.
                </li>
                <li className="flex gap-3 items-start italic">
                  <span className="text-orange-500 font-bold">•</span>
                  Kartu su preke privaloma pateikti pirkimo sąskaitą-faktūrą.
                </li>
              </ul>
              <div className="pt-6 border-t border-slate-700">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 italic">
                  Turite klausimų? info@marinetech.lt
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}