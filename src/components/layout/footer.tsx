import Image from "next/image";
import Link from "next/link"; // Pridėtas Link importas

export function Footer() {
  return (
    <footer className="w-full bg-black/20 backdrop-blur-xl text-slate-800 pt-12 pb-6 border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-slate-900/10 pb-8">

          {/* 1. Logotipas */}
<div className="col-span-2 md:col-span-1 space-y-3">
  <Link href="/" className="relative h-8 w-36 block">
    <Image
  src="/marinetech.svg"
  alt="MarineTECH Logo"
  width={144}
  height={32}
  style={{ height: 'auto' }} // Tai nurodo, kad aukštis prisitaikys prie pločio
  priority
/>
  </Link>
  <p className="text-slate-700 text-[12px] leading-relaxed max-w-[200px]">
    Profesionalūs inžineriniai sprendimai ir operatyvus aptarnavimas visame pasaulyje.
  </p>
</div>

          {/* 2. Paslaugos */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#0C5588]">Paslaugos</h4>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li><Link href="/paslaugos" className="hover:text-[#0C5588] transition-colors">Laivų remontas</Link></li>
              <li><Link href="/paslaugos" className="hover:text-[#0C5588] transition-colors">Šaldymo įranga</Link></li>
              <li><Link href="/paslaugos" className="hover:text-[#0C5588] transition-colors">Dalių tiekimas</Link></li>
            </ul>
          </div>

          {/* 3. Teisinė informacija */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#0C5588]">Informacija</h4>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li><Link href="/privatumas" className="hover:text-[#0C5588] transition-colors">Privatumo politika</Link></li>
              <li><Link href="/taisykles" className="hover:text-[#0C5588] transition-colors">Naudojimosi taisyklės</Link></li>
              <li><Link href="/grazinimas" className="hover:text-[#0C5588] transition-colors">Grąžinimas</Link></li>
              <li><Link href="/slapukai" className="hover:text-[#0C5588] transition-colors">Slapukai</Link></li>
            </ul>
          </div>

          {/* 4. Kontaktai */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#0C5588]">Susisiekite</h4>
            <div className="space-y-3">
              <div className="flex flex-col">
                <span className="text-slate-900 text-[10px] uppercase font-black tracking-tighter">Telefonas</span>
                <a href="tel:+37067767287" className="text-sm font-bold text-slate-800 hover:text-[#0C5588] transition-colors tracking-tight">
                  +370 677 67287
                </a>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-900 text-[10px] uppercase font-black tracking-tighter">El. paštas</span>
                <a href="mailto:info@marinetech.lt" className="text-xs font-medium text-slate-700 hover:text-[#0C5588] transition-colors">
                  info@marinetech.lt
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Apatinė juosta */}
        <div className="pt-6 flex justify-center items-center">
          <p className="text-[10px] font-bold text-slate-700 uppercase tracking-[0.3em] text-center">
            © 2026 UAB „Marinetechas“ Visos teisės saugomos.
          </p>
        </div>
      </div>
    </footer>
  );
}
