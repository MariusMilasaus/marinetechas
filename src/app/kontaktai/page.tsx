import type { Metadata } from "next";
import KontaktaiClient from "./kontaktai-client";

export const metadata: Metadata = {
  title: "Kontaktai",
  description: "Susisiekite su UAB „Marinetechas“: +370 677 67287, office@marinetech.lt. Adresas: Klauso Malūno g. 1, Klaipėda. Komanda pasiruošusi padėti 24/7.",
  alternates: {
    canonical: "/kontaktai",
  },
  openGraph: {
    title: "Kontaktai | MarineTECH",
    description: "Susisiekite su UAB „Marinetechas“ – komanda pasiruošusi padėti 24/7.",
  },
};

export default function Page() {
  return <KontaktaiClient />;
}
