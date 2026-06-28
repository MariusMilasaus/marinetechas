import type { Metadata } from "next";
import AtliktiDarbaiClient from "./atlikti-darbai-client";

export const metadata: Metadata = {
  title: "Atlikti darbai",
  description: "Realūs UAB „Marinetechas“ atlikti laivų variklių remonto, dalių gamybos ir techninės inspekcijos darbai su nuotraukomis. Laivų variklių kapitalinis remontas, vožtuvų šlifavimas, metalo gamyba.",
  keywords: ["atlikti darbai", "laivų variklių remontas", "variklio kapitalinis remontas", "vožtuvų šlifavimas", "metalo gamyba laivams", "ventiliacijos grotelės", "variklio inspekcija", "MarineTECH portfolio"],
  alternates: {
    canonical: "/atlikti-darbai",
  },
  openGraph: {
    title: "Atlikti darbai | MarineTECH",
    description: "Realūs UAB „Marinetechas“ atlikti laivų variklių remonto, dalių gamybos ir techninės inspekcijos darbai su nuotraukomis.",
  },
};

export default function Page() {
  return <AtliktiDarbaiClient />;
}
