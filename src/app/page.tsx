import type { Metadata } from "next";
import HomeClient from "./home-client";

export const metadata: Metadata = {
  title: "Pradžia | MarineTECH",
  description: "UAB „Marinetechas“ – patikimi inžineriniai sprendimai pramonei ir laivynui visame pasaulyje. Laivų remontas, šaldymo įranga, variklių dalių tiekimas.",
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  return <HomeClient />;
}
