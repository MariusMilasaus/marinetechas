import type { Metadata } from "next";
import PaslaugosClient from "./paslaugos-client";

export const metadata: Metadata = {
  title: "Paslaugos",
  description: "Variklių ir mechanizmų remontas, šaldymo ir inžinerinės sistemos, elektra ir automatika, korpuso priežiūra ir tiekimas. RMRS sertifikuotos paslaugos laivynui ir pramonei.",
  alternates: {
    canonical: "/paslaugos",
  },
  openGraph: {
    title: "Paslaugos | MarineTECH",
    description: "Kompleksinis laivų ir pramonės įrenginių remontas, šaldymo sistemos, elektra ir automatika, RMRS sertifikuotos paslaugos.",
  },
};

export default function Page() {
  return <PaslaugosClient />;
}
