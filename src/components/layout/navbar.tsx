"use client";

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Search, Menu, X } from "lucide-react"

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/apie-mus", label: "Apie mus" },
    { href: "/paslaugos", label: "Paslaugos" },
    { href: "/katalogas", label: "Katalogas" },
    { href: "/kontaktai", label: "Kontaktai" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="w-full px-6 md:px-12 h-20 flex items-center justify-between">
        
        {/* LOGO - Tikros spalvos */}
        <Link href="/" className="flex items-center transition-transform hover:scale-105">
          <Image 
            src="/marinetech.svg" 
            alt="MarineTECH Logo" 
            width={180} 
            height={40}
            priority
            className="object-contain" // Nuimtas invert filtras - dabar bus spalvotas
          />
        </Link>

        {/* PAGRINDINIS MENIU */}
        <nav className="hidden lg:flex items-center gap-10 text-[12px] font-black tracking-[0.2em] text-white uppercase">
          <Link href="/apie-mus" className="hover:text-[#16AFD1] transition-colors">Apie mus</Link>
          <Link href="/paslaugos" className="hover:text-[#16AFD1] transition-colors">Paslaugos</Link>
  <Link href="/katalogas" className="hover:text-[#16AFD1] transition-colors">Katalogas</Link>
  <Link href="/kontaktai" className="hover:text-[#16AFD1] transition-colors">Kontaktai</Link>
        </nav>

        {/* DEŠINĖ PUSĖ */}
        <div className="flex items-center gap-4 md:gap-6">
          
          {/* KALBŲ PASIRINKIMAS (LT, NO, EN) */}
          <div className="hidden sm:flex items-center gap-4 bg-white/10 border border-white/10 px-4 py-2 rounded-full">
            {/* LT */}
            <button className="flex items-center gap-1.5 hover:scale-110 transition-transform">
              <img src="https://flagcdn.com/w40/lt.png" className="w-5 h-3.5 object-cover rounded-sm" alt="LT" />
              <span className="text-[10px] font-black text-white">LT</span>
            </button>
            
            <div className="w-[1px] h-3 bg-white/20" />
            
            {/* NO */}
            <button className="flex items-center gap-1.5 hover:scale-110 transition-transform opacity-70 hover:opacity-100">
              <img src="https://flagcdn.com/w40/no.png" className="w-5 h-3.5 object-cover rounded-sm" alt="NO" />
              <span className="text-[10px] font-black text-white">NO</span>
            </button>

            <div className="w-[1px] h-3 bg-white/20" />

            {/* EN (Anglų kalba) */}
            <button className="flex items-center gap-1.5 hover:scale-110 transition-transform opacity-70 hover:opacity-100">
              <img src="https://flagcdn.com/w40/gb.png" className="w-5 h-3.5 object-cover rounded-sm" alt="EN" />
              <span className="text-[10px] font-black text-white">EN</span>
            </button>
          </div>

          {/* IKONOS */}
          <div className="flex items-center gap-1">
            <button className="p-2 text-white hover:text-[#16AFD1] transition-colors">
              <Search size={25} strokeWidth={2.5} />
            </button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-white"
            aria-label="Meniu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENIU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-[#06263d]/98 backdrop-blur-xl border-t border-white/10 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="grid grid-cols-2 gap-4 p-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-center text-center py-4 px-3 rounded-xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-xs hover:bg-[#16AFD1] hover:text-black transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}