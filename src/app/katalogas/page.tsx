import type { Metadata } from "next";
import KatalogasClient from "./katalogas-client";

export const metadata: Metadata = {
  title: "Dalių katalogas",
  description: "Variklių dalys, šaldymo įranga, elektros komponentai ir korpuso dalys laivams. Susisiekite ir gausite kainą bei prieinamumą per 24 valandas.",
  alternates: {
    canonical: "/katalogas",
  },
  openGraph: {
    title: "Dalių katalogas | MarineTECH",
    description: "Variklių dalys, šaldymo įranga, elektros komponentai ir korpuso dalys laivams.",
  },
};

export default function Page() {
  return <KatalogasClient />;
}
