"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { PackageSearch, Wrench, Snowflake, Zap, Anchor, Tag, X, ChevronLeft, ChevronRight } from "lucide-react";
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
  [
    "/skelbimai/telferis-kranas-1.webp",
    "/skelbimai/telferis-kranas-2.webp",
    "/skelbimai/telferis-kranas-3.webp",
    "/skelbimai/telferis-kranas-4.webp",
    "/skelbimai/telferis-kranas-5.webp",
    "/skelbimai/telferis-kranas-6.webp",
  ],
  ["/skelbimai/telferis-kranas-3t-1.webp"],
  [
    "/skelbimai/smirgelis-1.webp",
    "/skelbimai/smirgelis-2.webp",
    "/skelbimai/smirgelis-3.webp",
    "/skelbimai/smirgelis-4.webp",
    "/skelbimai/smirgelis-5.webp",
  ],
];

export default function KatalogasClient() {
  const { t } = useLanguage();
  const categories = t.katalogas.categories.map((title, i) => ({ icon: categoryIcons[i], title }));
  const listings = t.katalogas.listings;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const openListing = openIndex !== null ? listings[openIndex] : null;
  const openImages = openIndex !== null ? listingImages[openIndex] ?? [] : [];

  const showPrev = () => setLightboxIndex((i) => (i === null ? null : (i - 1 + openImages.length) % openImages.length));
  const showNext = () => setLightboxIndex((i) => (i === null ? null : (i + 1) % openImages.length));

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
                  <div
                    key={idx}
                    onClick={() => setOpenIndex(idx)}
                    className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden cursor-pointer hover:shadow-lg hover:border-[#16AFD1]/40 transition-all"
                  >
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
                      <p className="text-slate-500 text-sm mb-4 line-clamp-2">{item.description}</p>
                      <Link
                        href="/kontaktai"
                        onClick={(e) => e.stopPropagation()}
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

        <AnimatePresence>
          {openListing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenIndex(null)}
              className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.97 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(null)}
                  aria-label={t.nav.close}
                  className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-slate-800 rounded-full p-2 shadow-md"
                >
                  <X size={20} />
                </button>

                {openImages.length > 0 && (
                  <div className="grid grid-cols-2 gap-1 p-1">
                    {openImages.map((src, i) => (
                      <div
                        key={i}
                        onClick={() => setLightboxIndex(i)}
                        className="relative h-64 md:h-80 cursor-zoom-in"
                      >
                        <Image
                          src={src}
                          alt={`${openListing.title} - ${i + 1}`}
                          fill
                          sizes="(max-width: 768px) 50vw, 33vw"
                          className="object-cover rounded-lg hover:opacity-90 transition-opacity"
                        />
                      </div>
                    ))}
                  </div>
                )}

                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-black text-slate-900 mb-3">{openListing.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{openListing.description}</p>
                  <Link
                    href="/kontaktai"
                    className="inline-block bg-[#0C5588] text-white px-6 py-3 rounded-md text-sm font-black uppercase tracking-widest hover:bg-[#16AFD1] transition-colors"
                  >
                    {t.katalogas.skelbimaiContactButton}
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {lightboxIndex !== null && openImages[lightboxIndex] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="fixed inset-0 z-[80] bg-black/95 flex items-center justify-center p-4"
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label={t.nav.close}
                className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-2"
              >
                <X size={24} />
              </button>

              {openImages.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); showPrev(); }}
                    aria-label={t.nav.prev}
                    className="absolute left-2 md:left-6 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-2"
                  >
                    <ChevronLeft size={28} />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); showNext(); }}
                    aria-label={t.nav.next}
                    className="absolute right-2 md:right-6 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-2"
                  >
                    <ChevronRight size={28} />
                  </button>
                </>
              )}

              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-[92vw] h-[80vh] md:w-[85vw] md:h-[85vh]"
              >
                <Image
                  src={openImages[lightboxIndex]}
                  alt={`${openListing?.title ?? ""} - ${lightboxIndex + 1}`}
                  fill
                  sizes="92vw"
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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
