"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { PackageSearch, Wrench, Snowflake, Zap, Anchor, Tag } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/language-context";

const categoryIcons = [<Wrench size={28} key="0" />, <Snowflake size={28} key="1" />, <Zap size={28} key="2" />, <Anchor size={28} key="3" />];

// Nuotraukos kiekvienam skelbimui (atitinka t.katalogas.listings tvarką).
// Naują skelbimą pridėkite ir t.katalogas.listings masyve (translations.ts), ir čia.
const listingImages: string[][] = [
  [
    "/skelbimai/sandwich-plokstes-1.webp",
    "/skelbimai/sandwich-plokstes-2.webp",
    "/skelbimai/sandwich-plokstes-3.webp",
    "/skelbimai/sandwich-plokstes-4.webp",
  ],
];

export default function KatalogasClient() {
  const { t } = useLanguage();
  const categories = t.katalogas.categories.map((title, i) => ({ icon: categoryIcons[i], title }));
  const listings = t.katalogas.listings;

  return (
    <main className="w-full min-h-screen bg-slate-50 pt-[120px] pb-20 font-sans">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border-b-4 border-[#0C5588] mb-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex p-4 bg-slate-50 rounded-full mb-6">
              <PackageSearch className="text-[#16AFD1]" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 mb-4">
              {t.katalogas.heroTitlePrefix} <span className="text-[#16AFD1]">{t.katalogas.heroTitleHighlight}</span>
            </h1>
            <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
              {t.katalogas.heroDesc}
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

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <Tag className="text-[#16AFD1]" size={22} />
            <h2 className="text-xl font-black uppercase tracking-tight text-slate-900">{t.katalogas.skelbimaiTitle}</h2>
          </div>
          <p className="text-slate-500 text-sm mb-6 max-w-xl">{t.katalogas.skelbimaiDesc}</p>

          {listings.length === 0 ? (
            <div className="bg-white border border-dashed border-slate-200 rounded-xl p-10 text-center text-slate-400 text-sm">
              {t.katalogas.skelbimaiEmptyText}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-6">
              {listings.map((item, idx) => {
                const images = listingImages[idx] ?? [];
                return (
                  <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                    {images.length > 0 && (
                      <div className="grid grid-cols-2 gap-0.5 h-56">
                        {images.slice(0, 4).map((src, i) => (
                          <div key={i} className="relative h-full w-full">
                            <Image
                              src={src}
                              alt={`${item.title} - ${i + 1}`}
                              fill
                              sizes="(max-width: 768px) 50vw, 25vw"
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="p-5">
                      <h3 className="font-black text-slate-800 mb-1">{item.title}</h3>
                      <p className="text-slate-500 text-sm mb-4">{item.description}</p>
                      <Link
                        href="/kontaktai"
                        className="inline-block bg-[#0C5588] text-white px-5 py-2 rounded-md text-xs font-black uppercase tracking-widest hover:bg-[#16AFD1] transition-colors"
                      >
                        {t.katalogas.skelbimaiContactButton}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="bg-[#0C5588] text-white p-10 rounded-xl shadow-xl text-center">
          <h2 className="text-xl font-black uppercase mb-3">{t.katalogas.ctaTitle}</h2>
          <p className="text-slate-200 text-sm leading-relaxed mb-6 max-w-md mx-auto">
            {t.katalogas.ctaDesc}
          </p>
          <Link
            href="/kontaktai"
            className="inline-block bg-white text-[#0C5588] px-8 py-3 rounded-md font-black uppercase tracking-widest text-sm hover:bg-[#16AFD1] hover:text-white transition-all"
          >
            {t.katalogas.ctaButton}
          </Link>
        </div>
      </div>
    </main>
  );
}
