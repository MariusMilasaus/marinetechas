"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
// Techninės ikonos be italic prieskonių
import { Clock, HardHat, ShieldCheck, Zap } from "lucide-react";

export default function Home() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const reasons = [
    { text: "Operatyvumas 24/7", icon: <Clock size={16} /> },
    { text: "Inžinerinė kompetencija", icon: <HardHat size={16} /> },
    { text: "Sertifikuota kokybė", icon: <ShieldCheck size={16} /> },
    { text: "Individualūs sprendimai", icon: <Zap size={16} /> }
  ];

  const brands = [
    "MAN", "WARTSILA", "CATERPILLAR", "VOLVO PENTA", "YANMAR", "MITSUBISHI", "CUMMINS", "DAIHATSU"
  ];

  return (
    <main className="w-full min-h-screen bg-white pt-[80px] overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative h-[450px] md:h-[500px] w-full overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src="/marine-industry.png" 
          className="w-full h-full object-cover" 
          alt="Marine Industry"
        />
        
        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 flex items-center z-20">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-10">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-xl text-left text-white"
            >
              <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tight md:tracking-wide leading-tight drop-shadow-lg">
                Patikimi inžineriniai sprendimai pramonei ir laivynui
              </h2>
            </motion.div>
          </div>
        </div>
      </section>

      {/* APIE MUS */}
      <section className="max-w-6xl mx-auto py-10 px-6 text-center text-slate-900">
        <h1 className="text-4xl font-black mb-8 uppercase tracking-tighter">
          Sveiki atvykę į <span className="text-[#0C5588]">Marine</span><span className="text-[#16AFD1]">TECH</span>
        </h1>
        <div className="max-w-4xl mx-auto text-slate-600 leading-relaxed space-y-6 text-lg font-medium">
          <p>UAB „Marinetechas“ įkurta 2015 m. Sėkmingai dirbame laivų remonto srityje ir pramonės sektoriuje, nuolat plėsdami savo paslaugų spektrą ir diegdami pažangiausias technologijas.</p>
          <p>Mūsų specialistai pasiruošę atvykti į bet kurią pasaulio vietą ir atlikti visus reikalingus remonto bei aptarnavimo darbus. Mums svarbus kiekvienas užsakovas, todėl garantuojame kokybę ir greitą darbų atlikimą.</p>
        </div>
      </section>

      {/* TRYS PAGRINDINĖS SRITYS */}
      <section className="max-w-7xl mx-auto pb-10 px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Laivų remontas", img: "/4.png", href: "/paslaugos" },
            { title: "Šaldymo įranga", img: "/3.png", href: "/paslaugos" },
            { title: "Variklių ir jų dalių tiekimas", img: "/2.png", href: "/paslaugos" }
          ].map((item, idx) => (
            <Link href={item.href} key={idx}>
              <motion.div whileHover={{ y: -10 }} className="group cursor-pointer">
                <div className="relative h-64 overflow-hidden mb-4 border-b-8 border-[#0C5588] shadow-xl">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt={item.title}/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-[#0C5588]/80 transition duration-500" />
                  <h3 className="absolute bottom-6 left-6 text-lg font-black text-white uppercase tracking-widest">{item.title}</h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* KODĖL RINKTIS MUS - Tikras skrolinimo efektas be italic */}
      <section ref={containerRef} className="bg- py-6 border- border-slate-100 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {reasons.map((item, i) => {
              const start = i * 0.07 + 0.3; 
              const end = start + 0.1;
              
              const y = useTransform(scrollYProgress, [start, end], [-100, 0]);
              const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

              return (
                <motion.div 
                  key={i}
                  style={{ y, opacity }}
                  className="flex flex-col items-center text-center p-2"
                >
                  <div className="bg-[#16AFD1] p-2.5 rounded-full mb-3 shadow-md text-white">
                    {item.icon}
                  </div>
                  <span className="text-slate-900 font-black uppercase tracking-tighter text-[10px] md:text-[11px]">
                    {item.text}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOOP JUOSTA */}
      <section className="py-8 bg-white overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="flex">
          <motion.div 
            className="flex gap-16 items-center whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          >
            {[...brands, ...brands].map((brand, i) => (
              <span key={i} className="text-2xl md:text-4xl font-black text-slate-300 hover:text-[#16AFD1] transition-colors uppercase tracking-tighter">
                {brand}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA PABAIGOJE */}
      <section className="max-w-7xl mx-auto px-6 py-10 pb-20">
        <div className="bg-[#0C5588] p-10 md:p-14 text-center relative overflow-hidden text-white">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-8">
            Pasiruošę pradėti <span className="text-[#16AFD1]">bendradarbiavimą?</span>
          </h2>
          <Link href="/kontaktai" className="bg-white text-[#0C5588] px-10 py-4 font-black uppercase tracking-widest text-sm hover:bg-[#16AFD1] hover:text-white transition-all">
            Gauti pasiūlymą
          </Link>
        </div>
      </section>
    </main>
  );
}