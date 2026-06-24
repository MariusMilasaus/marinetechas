import type { Metadata } from "next";
import SlapukaiClient from "./slapukai-client";

export const metadata: Metadata = {
  title: "Slapukų politika",
  description: "UAB „Marinetechas“ slapukų (cookies) politika – kokius slapukus naudojame ir kaip galite valdyti jų nustatymus.",
  alternates: {
    canonical: "/slapukai",
  },
};

export default function Page() {
  return <SlapukaiClient />;
}
