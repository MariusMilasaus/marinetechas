import type { Metadata } from "next";
import GrazinimasClient from "./grazinimas-client";

export const metadata: Metadata = {
  title: "Grąžinimo taisyklės",
  description: "UAB „Marinetechas“ prekių ir paslaugų grąžinimo sąlygos ir tvarka.",
  alternates: {
    canonical: "/grazinimas",
  },
};

export default function Page() {
  return <GrazinimasClient />;
}
