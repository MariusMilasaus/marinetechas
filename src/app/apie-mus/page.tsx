import { ShieldCheck, Globe, Clock, Target, Eye, Settings, Anchor, Check } from "lucide-react"

export default function ApieMus() {
  return (
    <main className="w-full min-h-screen bg-white text-slate-900 pt-20">
      
      {/* 1. HERO SEKCIJA (Kaip Smedegaarden pavyzdyje) */}
      <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center">
        <img
          src="/marine-industry.png"
          className="absolute inset-0 w-full h-full object-cover grayscale"
          alt="Engineering"
        />
        <div className="absolute inset-0 bg-slate-900/60"></div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none">
            Patirtis. Tikslumas. <span className="text-[#16AFD1]">Kokybė.</span>
          </h1>
          <div className="w-24 h-1 bg-[#16AFD1] mx-auto mb-8"></div>
          <p className="text-slate-200 text-lg md:text-xl font-medium uppercase tracking-widest">
            Profesionalūs inžineriniai sprendimai laivynui ir pramonei
          </p>
        </div>
      </section>

      {/* 2. PAGRINDINIS TEKSTAS (Tavo tekstas + papildymas) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 grid lg:grid-cols-2 gap-20 items-start">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-sm font-black text-[#16AFD1] uppercase tracking-[0.3em]">Mūsų istorija</h2>
            <h3 className="text-3xl font-extrabold text-slate-900 uppercase italic leading-tight">
              UAB „Marinetechas“ – Stabilus partneris laivų remonto srityje.
            </h3>
          </div>
          
          <div className="text-slate-600 text-lg leading-relaxed space-y-6">
            <p>
              Įkurta 2015 m., įmonė per trumpą laiką užsitikrino patikimą vardą laivų remonto ir pramonės sektoriuose. 
              Sėkmingai dirbame jau daugybę metų, o nuo 2018-ųjų specializuojamės pramoninių šaldymo įrengimų 
              aptarnavimo ir remonto srityje. 
            </p>
            <p>
              Mūsų sėkmės pagrindas – gebėjimas prisitaikyti prie dinamiškos rinkos ir aukščiausių techninių standartų. 
              Per šį laikotarpį įgyvendinome sudėtingus projektus, kurie leido mums užmegzti ilgalaikes partnerystes 
              su didžiausiais regiono partneriais.
            </p>
            
            {/* BULLET POINTS */}
            <ul className="space-y-4 pt-4">
              {[
                "Operatyvus atvykimas į bet kurią pasaulio vietą.",
                "Sertifikuoti specialistai su ilgamete patirtimi.",
                "Garantinis ir pogarantinis techninis aptarnavimas.",
                "Konkurencinga kaina už aukščiausios klasės servisą."
              ].map((point, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-800 font-bold text-sm uppercase">
                  <div className="bg-[#16AFD1] p-1 rounded-md">
                    <Check size={14} className="text-white" />
                  </div>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 3. VERTYBIŲ KORTELĖS */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-8 rounded-xl border border-slate-100 bg-slate-50/50 flex flex-col items-start gap-4 hover:shadow-xl transition">
            <Settings className="text-[#16AFD1]" size={32} />
            <h4 className="font-black uppercase text-sm italic">Inžinerija</h4>
            <p className="text-xs text-slate-500 leading-relaxed uppercase tracking-wider">Pažangiausių technologijų naudojimas remonto procesuose.</p>
          </div>
          <div className="p-8 rounded-xl border border-slate-100 bg-slate-50/50 flex flex-col items-start gap-4 hover:shadow-xl transition">
            <Anchor className="text-[#16AFD1]" size={32} />
            <h4 className="font-black uppercase text-sm italic">Logistika</h4>
            <p className="text-xs text-slate-500 leading-relaxed uppercase tracking-wider">Sklandus detalių tiekimas ir servisas bet kuriame uoste.</p>
          </div>
          <div className="p-8 rounded-xl border border-slate-100 bg-slate-50/50 flex flex-col items-start gap-4 hover:shadow-xl transition">
            <ShieldCheck className="text-[#16AFD1]" size={32} />
            <h4 className="font-black uppercase text-sm italic">Saugumas</h4>
            <p className="text-xs text-slate-500 leading-relaxed uppercase tracking-wider">Aukščiausių darbų saugos standartų laikymasis.</p>
          </div>
          <div className="p-8 rounded-xl border border-slate-100 bg-slate-50/50 flex flex-col items-start gap-4 hover:shadow-xl transition">
            <Globe className="text-[#16AFD1]" size={32} />
            <h4 className="font-black uppercase text-sm italic">Pasiekiamumas</h4>
            <p className="text-xs text-slate-500 leading-relaxed uppercase tracking-wider">Mobilūs inžinieriai pasiekiami 24 valandas per parą.</p>
          </div>
        </div>
      </section>

      {/* 4. MISIJA IR VIZIJA (Skaidrus, modernus blokas) */}
      <section className="bg-[#0C5588] py-24 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 relative z-10">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Target className="text-[#16AFD1]" size={40} />
              <h3 className="text-3xl font-black uppercase italic">Misija</h3>
            </div>
            <p className="text-slate-300 text-xl font-light leading-relaxed">
              Siekti aukštos pozicijos pirmaujančių remonto paslaugų įmonių sąraše, teikiant savo užsakovams 
              <span className="text-white font-bold"> geriausią aptarnavimą kokybės ir kainos atžvilgiu.</span>
            </p>
          </div>
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Eye className="text-[#16AFD1]" size={40} />
              <h3 className="text-3xl font-black uppercase italic">Vizija</h3>
            </div>
            <p className="text-slate-300 text-xl font-light leading-relaxed">
              Tapti tarp lyderių remonto, tiekimo ir aptarnavimo srityje, naudojant <span className="text-white font-bold tracking-tight">pažangiausias ir efektyviausias technologijas.</span>
            </p>
          </div>
        </div>
        {/* Dekoracija fone */}
      </section>

    </main>
  )
}