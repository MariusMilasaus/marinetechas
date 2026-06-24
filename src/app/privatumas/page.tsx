import type { Metadata } from "next";
import PrivatumasClient from "./privatumas-client";

export const metadata: Metadata = {
  title: "Privatumo politika",
  description: "UAB „Marinetechas“ privatumo politika – kaip renkame, naudojame ir saugome jūsų asmens duomenis.",
  alternates: {
    canonical: "/privatumas",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <PrivatumasClient />;
}
