import type { Metadata } from "next";
import PirkimoTaisyklesClient from "./taisykles-client";

export const metadata: Metadata = {
  title: "Naudojimosi taisyklės",
  description: "UAB „Marinetechas“ paslaugų ir pirkimo–pardavimo naudojimosi taisyklės.",
  alternates: {
    canonical: "/taisykles",
  },
};

export default function Page() {
  return <PirkimoTaisyklesClient />;
}
