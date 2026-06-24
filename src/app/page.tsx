"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
// Techninės ikonos be italic prieskonių
import { Clock, HardHat, Globe, Zap } from "lucide-react";

export default function Home() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const reasons = [
    { value: "10+", text: "Metų patirties", icon: <Clock size={18} /> },
    { value: "500+", text: "Atliktų projektų", icon: <HardHat size={18} /> },
    { value: "20+", text: "Aptarnaujamų šalių", icon: <Globe size={18} /> },
    { value: "24/7", text: "Pasiekiamumas", icon: <Zap size={18} /> }
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
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#06263d]/95 via-[#0C5588]/70 to-transparent md:from-[#06263d]/90 md:via-[#0C5588]/60" />

        <div
          className="absolute inset-y-0 left-0 w-3/4 backdrop-blur-sm hidden md:block"
          style={{
            maskImage: "linear-gradient(to right, black 40%, transparent 90%)",
            WebkitMaskImage: "linear-gradient(to right, black 40%, transparent 90%)",
          }}
        />

        <div className="absolute inset-0 flex items-center z-20">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-10">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-xl text-left text-white"
            >
              <span className="block text-[#16AFD1] font-bold uppercase tracking-widest text-xs md:text-sm mb-3 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                UAB Marinetechas · Nuo 2015 m.
              </span>
              <h1 className="text-2xl md:text-4xl font-semibold leading-snug drop-shadow-lg mb-3">
                Patikimi inžineriniai sprendimai pramonei ir laivynui
              </h1>
              <p className="text-base md:text-xl text-white/80 font-medium mb-6">
                Greitai. Patikimai. Visame pasaulyje.
              </p>
              <Link
                href="/kontaktai"
                className="inline-block bg-white text-[#0C5588] px-8 py-3 rounded-md font-black uppercase tracking-widest text-sm hover:bg-[#16AFD1] hover:text-white transition-all"
              >
                Gauti pasiūlymą
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* APIE MUS + KODĖL RINKTIS MUS */}
      <section ref={containerRef} className="max-w-6xl mx-auto py-16 px-6 text-slate-900 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter">
              Sveiki atvykę į <span className="text-[#0C5588]">Marine</span><span className="text-[#16AFD1]">TECH</span>
            </h2>
            <div className="text-slate-600 leading-relaxed space-y-6 text-lg font-medium">
              <p>UAB „Marinetechas“ įkurta 2015 m. Sėkmingai dirbame laivų remonto srityje ir pramonės sektoriuje, nuolat plėsdami savo paslaugų spektrą ir diegdami pažangiausias technologijas.</p>
              <p>Mūsų specialistai pasiruošę atvykti į bet kurią pasaulio vietą ir atlikti visus reikalingus remonto bei aptarnavimo darbus. Mums svarbus kiekvienas užsakovas, todėl garantuojame kokybę ir greitą darbų atlikimą.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {reasons.map((item, i) => {
              const start = i * 0.07 + 0.3;
              const end = start + 0.1;

              const y = useTransform(scrollYProgress, [start, end], [-100, 0]);
              const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

              return (
                <motion.div
                  key={i}
                  style={{ y, opacity }}
                  className="flex flex-col items-center text-center p-4 bg-slate-50 rounded-lg"
                >
                  <div className="bg-[#16AFD1] p-2.5 rounded-full mb-3 shadow-md text-white">
                    {item.icon}
                  </div>
                  <span className="text-2xl font-black text-[#0C5588] leading-none">
                    {item.value}
                  </span>
                  <span className="text-slate-500 font-semibold uppercase tracking-tight text-[10px] md:text-[11px] mt-1">
                    {item.text}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRYS PAGRINDINĖS SRITYS */}
      <section className="max-w-7xl mx-auto pb-10 px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Laivų remontas", desc: "Korpuso, variklių ir denio įrangos remontas bei techninis aptarnavimas visame pasaulyje.", img: "/4.png", href: "/paslaugos" },
            { title: "Šaldymo įranga", desc: "Laivų šaldymo sistemų montavimas, remontas ir periodinė priežiūra.", img: "/3.png", href: "/paslaugos" },
            { title: "Variklių ir jų dalių tiekimas", desc: "Originalių ir suderinamų variklio dalių paieška bei greitas tiekimas.", img: "/2.png", href: "/paslaugos" }
          ].map((item, idx) => (
            <Link href={item.href} key={idx}>
              <motion.div whileHover={{ y: -10 }} className="group cursor-pointer">
                <div className="relative h-64 overflow-hidden mb-4 rounded-xl border-b-8 border-[#0C5588] group-hover:border-[#16AFD1] shadow-xl group-hover:shadow-2xl transition-all duration-500">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt={item.title}/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-[#0C5588]/90 transition duration-500" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-lg font-black text-white uppercase tracking-widest mb-2">{item.title}</h3>
                    <p className="text-white/90 text-sm leading-snug max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 overflow-hidden transition-all duration-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* LOOP JUOSTA */}
      <section className="py-4 bg-white overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="flex">
          <motion.div
            className="flex gap-10 items-center whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          >
            {[...brands, ...brands].map((brand, i) => (
              <span key={i} className="text-base md:text-xl font-black text-slate-300 hover:text-[#16AFD1] transition-colors uppercase tracking-tighter">
                {brand}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA PABAIGOJE */}
      <section className="max-w-7xl mx-auto px-6 py-10 pb-20">
        <div className="bg-[#0C5588] rounded-xl p-10 md:p-14 text-center relative overflow-hidden text-white">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-8">
            Pasiruošę pradėti <span className="text-[#16AFD1]">bendradarbiavimą?</span>
          </h2>
          <Link href="/kontaktai" className="inline-block bg-white text-[#0C5588] px-10 py-4 rounded-md font-black uppercase tracking-widest text-sm hover:bg-[#16AFD1] hover:text-white transition-all">
            Gauti pasiūlymą
          </Link>
        </div>
      </section>
    </main>
  );
}