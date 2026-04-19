import { Wrench, Snowflake, Zap, Anchor, Check } from "lucide-react"
import Link from "next/link"

export default function Paslaugos() {
  const serviceGroups = [
    {
      title: "Variklių ir Mechanizmų Remontas",
      icon: <Wrench size={40} />,
      // Čia galėsite įsikelti savo nuotraukas
      image: "/5.png",
      description: "Kompleksinis laivo jėgainės ir pagalbinių mechanizmų aptarnavimas.",
      items: [
        "Pagrindinių ir pagalbinių variklių kapitalinis remontas",
        "Alkūninių velenų poliravimas ir šlifavimas",
        "Velenų centravimas ir guolių liejimas",
        "Cilindrų įdėklų šlifavimas",
        "Kuro įrangos (aukšto slėgio siurblių) remontas"
      ]
    },
    {
      title: "Šaldymo ir Inžinerinės Sistemos",
      icon: <Snowflake size={40} />,
      image: "/3.png",
      description: "Specializuoti sprendimai pramoniniam ir laivų šaldymui.",
      items: [
        "Šaldymo sistemų projektavimas ir montavimas",
        "Vėdinimo ir oro kondicionavimo sistemų gamyba",
        "Vamzdynų sistemų ir armatūros montavimas",
        "Šilumokaičių ir slėginių indų remontas",
        "Vairo mechanizmo ir hidraulikos darbai"
      ]
    },
    {
      title: "Elektra ir Automatika",
      icon: <Zap size={40} />,
      image: "/6.png",
      description: "Energijos skirstymo ir valdymo sistemų priežiūra.",
      items: [
        "Energijos paskirstymo sistemų remontas",
        "Signalizacijos ir automatikos sistemų diagnostika",
        "Elektros variklių ir generatorių remontas",
        "Valdymo skydų gamyba ir modernizavimas"
      ]
    },
    {
      title: "Korpusas ir Tiekimas",
      icon: <Anchor size={40} />,
      image: "/7.png",
      description: "Laivo konstrukcijų priežiūra ir operatyvi logistika.",
      items: [
        "Laivo korpuso remontas ir atnaujinimas",
        "Metalo konstrukcijų gamyba",
        "Keltuvų, gervių ir denio mechanizmų remontas",
        "Medžiagų, detalių ir įrenginių tiekimas 24/7"
      ]
    }
  ];

  return (
    <main className="w-full min-h-screen bg-white text-slate-900 pt-20">
      
      {/* HERO SEKCIJA */}
      <section className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000" 
          className="absolute inset-0 w-full h-full object-cover grayscale"
          alt="Technical Services"
        />
        <div className="absolute inset-0 bg-slate-900/75"></div>
        
        <div className="relative z-10 text-center max-w-4xl px-6">
          <h4 className="text-[#3BB8D1] font-black uppercase tracking-[0.4em] mb-4 text-sm">Profesionalus Servisas</h4>
          <h1 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none">
            Mūsų <span className="text-[#3BB8D1]">Ekspertizė</span>
          </h1>
          <div className="w-24 h-1 bg-[#3BB8D1] mx-auto"></div>
        </div>
      </section>

      {/* PASLAUGŲ GRUPĖS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="grid lg:grid-cols-2 gap-12">
          {serviceGroups.map((group, index) => (
            <div 
              key={index} 
              className="group relative p-8 md:p-12 border border-slate-100 overflow-hidden min-h-[400px] flex flex-col justify-end transition-all duration-500"
            >
              {/* NUOTRAUKOS FONAS */}
              <img 
                src={group.image}
                alt={group.title}
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-10 group-hover:opacity-40 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-6">
                  <div className="bg-white p-5 shadow-sm border border-slate-100 group-hover:bg-[#3BB8D1] group-hover:text-white transition-colors duration-500">
                    {/* Ikona dabar prisitaiko prie fono spalvos hover metu */}
                    <div className="text-[#3BB8D1] group-hover:text-white transition-colors">
                      {group.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-black uppercase italic tracking-tight text-slate-900 leading-none">
                    {group.title}
                  </h3>
                </div>
                
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest border-b border-slate-200 pb-4">
                  {group.description}
                </p>

                <ul className="grid sm:grid-cols-1 gap-3">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-800 font-bold text-[11px] uppercase tracking-wide">
                      <Check size={14} className="text-[#3BB8D1] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* KONTAKTAI / CTA */}
      <section className="bg-[#0C5588] py-20 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-8">
          <h2 className="text-3xl md:text-4xl font-black uppercase italic">
            Reikia techninės konsultacijos?
          </h2>
          <p className="text-slate-300 text-lg font-light tracking-wide uppercase">
            Mūsų inžinieriai pakonsultuos ir pateiks optimaliausią remonto sprendimą.
          </p>
          <div className="pt-4">
            <Link 
              href="/kontaktai" 
              className="bg-[#3BB8D1] text-white px-10 py-4 font-black uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-[#0C5588] transition-all inline-block"
            >
              Susisiekite su mumis
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}