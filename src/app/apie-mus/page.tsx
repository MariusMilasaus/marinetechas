import type { Metadata } from "next";
import ApieMusClient from "./apie-mus-client";

export const metadata: Metadata = {
  title: "Apie mus",
  description: "UAB „Marinetechas“ – nuo 2015 m. teikiame patikimas inžinerines paslaugas laivų remonto ir pramonės sektoriuose. Sertifikuoti specialistai, operatyvus aptarnavimas visame pasaulyje.",
  alternates: {
    canonical: "/apie-mus",
  },
  openGraph: {
    title: "Apie mus | MarineTECH",
    description: "UAB „Marinetechas“ – patikimas partneris laivų remonto ir pramonės srityse nuo 2015 m.",
  },
};

export default function Page() {
  return <ApieMusClient />;
}
