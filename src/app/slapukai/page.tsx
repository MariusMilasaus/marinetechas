"use client";
import { motion } from "framer-motion";
import { Cookie, BarChart3, ShieldCheck, Settings } from "lucide-react";

export default function Slapukai() {
  const cookieTypes = [
    {
      title: "Būtinieji slapukai",
      desc: "Šie slapukai yra būtini, kad svetainė veiktų. Be jų negalėtumėte įsidėti prekių į krepšelį ar atlikti apmokėjimo.",
      cookies: ["session_id", "cart_hash", "cookie_consent"],
      duration: "Sesijos metu arba iki 1 metų",
      icon: <ShieldCheck className="text-[#0C5588]" />
    },
    {
      title: "Analitiniai slapukai",
      desc: "Padeda mums suprasti, kaip lankytojai naudojasi svetaine (pvz., kurios variklių dalys populiariausios).",
      cookies: ["_ga", "_gid", "_gat"],
      duration: "Nuo 1 min. iki 2 metų",
      icon: <BarChart3 className="text-[#16AFD1]" />
    }
  ];

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
                Slapukų <span className="text-[#16AFD1]">naudojimas</span>
              </h1>
              <p className="text-slate-400 font-bold text-xs uppercase tracking-[0.2em] mt-2">UAB „Marinetechas“</p>
            </div>
          </div>
        </div>

        {/* APRAŠYMAS */}
        <div className="bg-white p-8 rounded-xl shadow-sm mb-8 border-l-4 border-[#16AFD1]">
          <h2 className="text-lg font-black uppercase mb-4 flex items-center gap-2">
            <Settings size={18} /> Kas yra slapukai?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Slapukai yra nedideli tekstiniai failai, kuriuos svetainė įrašo į jūsų įrenginį. Mes naudojame slapukus, kad atpažintume jus kaip grįžtantį vartotoją, galėtume išsaugoti jūsų pirkinių krepšelį ir analizuoti srautą naudojant <strong>Google Analytics</strong>.
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
                    <span>Pavadinimas</span>
                    <span>Galiojimas</span>
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
          <h2 className="text-xl font-black uppercase mb-4">Kaip valdyti slapukus?</h2>
          <p className="text-blue-100 text-sm leading-relaxed mb-6">
            Dauguma naršyklių leidžia kontroliuoti slapukų nustatymus. Juos galite ištrinti arba blokuoti bet kuriuo metu. Tačiau atkreipiame dėmesį, kad išjungus būtinus slapukus, <strong>UAB „Marinetechas“</strong> elektroninės parduotuvės funkcijos (pvz., prekių užsakymas) gali nebeveikti.
          </p>
          <div className="text-[10px] font-bold uppercase tracking-widest opacity-50">
            Paskutinį kartą peržiūrėta: 2026-04-19
          </div>
        </div>

      </div>
    </main>
  );
}