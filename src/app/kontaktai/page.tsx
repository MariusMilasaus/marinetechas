"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Kontaktai() {
  return (
    <main className="w-full min-h-screen bg-white pt-[60px] md:pt-[120px] pb-20 overflow-x-hidden">
  <div className="max-w-7xl mx-auto px-6">
    
    {/* ANTRAŠTĖ - Sumažintas mb-16 į mb-10 */}
    <header className="mb-10 mt-10">
      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900"
      >
        Susisiekite su <span className="text-[#16AFD1]">mumis</span>
      </motion.h1>
      <div className="w-20 h-2 bg-[#0C5588] mt-4"></div>
    </header>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* KONTAKTINĖ INFORMACIJA */}
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-12"
          >
            <p className="text-lg text-slate-600 leading-relaxed max-w-md">
              Turite klausimų ar norite pasitarti dėl būsimo projekto? Mūsų komanda pasiruošusi jums padėti 24/7.
            </p>

            <div className="space-y-8">
              {[
                {
                  icon: <Phone className="text-[#16AFD1]" />,
                  label: "Telefonas",
                  values: ["+370 677 67287", "+370 601 55938", "+370 615 47157"]
                },
                {
                  icon: <Mail className="text-[#16AFD1]" />,
                  label: "El. paštas",
                  values: ["office@marinetech.lt", "info@marinetech.lt"]
                },
                {
                  icon: <MapPin className="text-[#16AFD1]" />,
                  label: "Adresas",
                  values: ["Klauso Malūno g. 1, Klaipėda"]
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-6 group">
                  <div className="p-4 rounded-lg bg-slate-50 group-hover:bg-[#16AFD1] group-hover:text-white transition-colors duration-300 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">{item.label}</h3>
                    {item.values.map((v, i) => (
                      <p key={i} className="text-xl font-bold text-slate-800 leading-tight">{v}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold text-slate-400 uppercase tracking-widest pt-4 border-t border-slate-100">
              <span>Į.k: 304064996</span>
              <span>PVM: LT100010805312</span>
            </div>
          </motion.div>

          {/* FORMA */}
          {/* FORMA - Pridėtas neigiamas margin-top (md:-mt-20), kad pakiltų aukščiau */}
<motion.div 
  initial={{ x: 30, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ delay: 0.3 }}
  className="bg-slate-50 p-8 md:p-12 rounded-xl shadow-2xl border-t-8 border-[#0C5588] md:-mt-30 z-10 relative"
>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500">Vardas Pavardė</label>
                  <input 
                    type="text" 
                    placeholder="Jonas Jonaitis"
                    className="w-full p-4 rounded-md bg-white border border-slate-200 focus:border-[#16AFD1] focus:ring-1 focus:ring-[#16AFD1] outline-none transition-all font-medium text-slate-900"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500">El. paštas</label>
                  <input
                    type="email"
                    placeholder="jonas@imone.lt"
                    className="w-full p-4 rounded-md bg-white border border-slate-200 focus:border-[#16AFD1] focus:ring-1 focus:ring-[#16AFD1] outline-none transition-all font-medium text-slate-900"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500">Tema</label>
                <select className="w-full p-4 rounded-md bg-white border border-slate-200 focus:border-[#16AFD1] outline-none transition-all font-medium text-slate-900">
                  <option>Laivų remontas</option>
                  <option>Šaldymo įranga</option>
                  <option>Dalių tiekimas</option>
                  <option>Kita</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500">Jūsų žinutė</label>
                <textarea 
                  rows={5} 
                  placeholder="Aprašykite savo poreikį..."
                  className="w-full p-4 rounded-md bg-white border border-slate-200 focus:border-[#16AFD1] focus:ring-1 focus:ring-[#16AFD1] outline-none transition-all font-medium text-slate-900 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#0C5588] hover:bg-[#16AFD1] text-white py-5 px-10 rounded-md font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all duration-300 shadow-lg group"
              >
                <span>Siųsti užklausą</span>
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>

        {/* ŽEMĖLAPIS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 rounded-xl overflow-hidden shadow-xl border border-slate-100"
        >
          <iframe
            title="UAB Marinetechas žemėlapis"
            src="https://www.google.com/maps?q=Klauso+Mal%C5%ABno+g.+1,+Klaip%C4%97da&output=embed"
            className="w-full h-[400px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

      </div>
    </main>
  );
}