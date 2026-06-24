import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Search, Menu } from "lucide-react"

export const Navbar = () => {
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
            <button className="p-2 text-white hover:text-[#16AFD1] transition-colors relative">
              <ShoppingCart size={25} strokeWidth={2.5} />
              <span className="absolute top-1 right-1 h-3.5 w-3.5 bg-[#16AFD1] text-[9px] text-black rounded-full flex items-center justify-center font-[900]">0</span>
            </button>
          </div>

          {/* MYGTUKAS */}
          <Button className="hidden md:flex bg-[#16AFD1] hover:bg-white text-black font-[900] uppercase italic text-[11px] tracking-widest px-8 rounded-10px transition-all border-none">
            <span className="skew-x-[15deg]">E-Parduotuvė
            </span>
          </Button>

          <button className="lg:hidden p-2 text-white">
            <Menu size={28} />
          </button>
        </div>
      </div>
    </header>
  )
}