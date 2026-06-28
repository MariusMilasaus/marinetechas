"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Hammer, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";

// Nuotraukos kiekvienam projektui (atitinka t.atliktiDarbai.projects tvarką).
const projectImages: string[][] = [
  ["/atlikti-darbai/01-pe-pipes.jpg", "/atlikti-darbai/02-pe-pipes.jpg"],
  ["/atlikti-darbai/03-marine-engines-overhaul.jpg"],
  ["/atlikti-darbai/04-collectors.jpg"],
  ["/atlikti-darbai/05-recondition.jpg"],
  ["/atlikti-darbai/06-nimonic-valves.jpg"],
  ["/atlikti-darbai/07-ventilation-grating.jpg"],
  ["/atlikti-darbai/08-euro-grating.jpg"],
  ["/atlikti-darbai/09-aux-engine.jpg"],
  ["/atlikti-darbai/10-inspection-me.jpg", "/atlikti-darbai/11-inspection-me.jpg"],
  ["/atlikti-darbai/12.jpg", "/atlikti-darbai/13.jpg", "/atlikti-darbai/14.jpg"],
];

export default function AtliktiDarbaiClient() {
  const { t } = useLanguage();
  const projects = t.atliktiDarbai.projects;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const openProject = openIndex !== null ? projects[openIndex] : null;
  const openImages = openIndex !== null ? projectImages[openIndex] ?? [] : [];

  const showPrev = () => setLightboxIndex((i) => (i === null ? null : (i - 1 + openImages.length) % openImages.length));
  const showNext = () => setLightboxIndex((i) => (i === null ? null : (i + 1) % openImages.length));

  return (
    <main className="w-full min-h-screen bg-slate-50 pt-[120px] pb-20 font-sans">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border-b-4 border-[#0C5588] mb-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex p-4 bg-slate-50 rounded-full mb-6">
              <Hammer className="text-[#16AFD1]" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 mb-4">
              {t.atliktiDarbai.heroTitlePrefix} <span className="text-[#16AFD1]">{t.atliktiDarbai.heroTitleHighlight}</span>
            </h1>
            <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
              {t.atliktiDarbai.heroDesc}
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, idx) => {
            const images = projectImages[idx] ?? [];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setOpenIndex(idx)}
                className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden cursor-pointer hover:shadow-lg hover:border-[#16AFD1]/40 transition-all"
              >
                {images.length > 0 && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={images[0]}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    {images.length > 1 && (
                      <span className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] font-black px-2 py-1 rounded-full">
                        +{images.length - 1}
                      </span>
                    )}
                  </div>
                )}
                <div className="p-5">
                  <h3 className="font-black text-slate-800 mb-1 leading-snug">{project.title}</h3>
                  <p className="text-slate-500 text-sm line-clamp-2">{project.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <AnimatePresence>
          {openProject && (
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
                          alt={`${openProject.title} - ${i + 1}`}
                          fill
                          sizes="(max-width: 768px) 50vw, 33vw"
                          className="object-cover rounded-lg hover:opacity-90 transition-opacity"
                        />
                      </div>
                    ))}
                  </div>
                )}

                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-black text-slate-900 mb-3">{openProject.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{openProject.description}</p>
                  <Link
                    href="/kontaktai"
                    className="inline-block bg-[#0C5588] text-white px-6 py-3 rounded-md text-sm font-black uppercase tracking-widest hover:bg-[#16AFD1] transition-colors"
                  >
                    {t.atliktiDarbai.ctaButton}
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
                  alt={`${openProject?.title ?? ""} - ${lightboxIndex + 1}`}
                  fill
                  sizes="92vw"
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="bg-[#0C5588] text-white p-10 rounded-xl shadow-xl text-center">
          <h2 className="text-xl font-black uppercase mb-3">{t.atliktiDarbai.ctaTitle}</h2>
          <p className="text-slate-200 text-sm leading-relaxed mb-6 max-w-md mx-auto">
            {t.atliktiDarbai.ctaDesc}
          </p>
          <Link
            href="/kontaktai"
            className="inline-block bg-white text-[#0C5588] px-8 py-3 rounded-md font-black uppercase tracking-widest text-sm hover:bg-[#16AFD1] hover:text-white transition-all"
          >
            {t.atliktiDarbai.ctaButton}
          </Link>
        </div>
      </div>
    </main>
  );
}
