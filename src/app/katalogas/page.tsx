"use client";
import { motion } from "framer-motion";
import { PackageSearch, Wrench, Snowflake, Zap, Anchor } from "lucide-react";
import Link from "next/link";

export default function Katalogas() {
  const categories = [
    { icon: <Wrench size={28} />, title: "Variklių dalys" },
    { icon: <Snowflake size={28} />, title: "Šaldymo įranga" },
    { icon: <Zap size={28} />, title: "Elektros komponentai" },
    { icon: <Anchor size={28} />, title: "Korpuso ir denio dalys" },
  ];

  return (
    <main className="w-full min-h-screen bg-slate-50 pt-[120px] pb-20 font-sans">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border-b-4 border-[#0C5588] mb-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex p-4 bg-slate-50 rounded-full mb-6">
              <PackageSearch className="text-[#16AFD1]" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 mb-4">
              Dalių <span className="text-[#16AFD1]">katalogas</span>
            </h1>
            <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
              Šiuo metu ruošiame pilną variklių ir laivų dalių katalogą su tiesiogine paieška ir užsakymu internetu.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4"
            >
              <div className="p-3 bg-slate-50 rounded-lg text-[#16AFD1]">{cat.icon}</div>
              <h3 className="font-black uppercase text-sm tracking-tight text-slate-800">{cat.title}</h3>
            </motion.div>
          ))}
        </div>

        <div className="bg-[#0C5588] text-white p-10 rounded-xl shadow-xl text-center">
          <h2 className="text-xl font-black uppercase mb-3">Reikia konkrečios dalies dabar?</h2>
          <p className="text-slate-200 text-sm leading-relaxed mb-6 max-w-md mx-auto">
            Kol katalogas dar ruošiamas, susisiekite su mumis tiesiogiai — pateiksime kainą ir prieinamumą per 24 valandas.
          </p>
          <Link
            href="/kontaktai"
            className="inline-block bg-white text-[#0C5588] px-8 py-3 rounded-md font-black uppercase tracking-widest text-sm hover:bg-[#16AFD1] hover:text-white transition-all"
          >
            Susisiekite su mumis
          </Link>
        </div>
      </div>
    </main>
  );
}
