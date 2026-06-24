import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer"; // Importuojame footerį
import { LanguageProvider } from "@/lib/i18n/language-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marinetech.lt"),
  title: {
    default: "MarineTECH | Inžineriniai sprendimai laivynui ir pramonei",
    template: "%s | MarineTECH",
  },
  description: "UAB „Marinetechas“ – patikimi inžineriniai sprendimai, laivų remontas, šaldymo įranga ir variklių dalių tiekimas pramonei ir laivynui visame pasaulyje.",
  keywords: ["laivų remontas", "šaldymo įranga", "variklių remontas", "MarineTECH", "Marinetechas", "Klaipėda", "marine engineering"],
  authors: [{ name: "UAB Marinetechas" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "lt_LT",
    url: "https://marinetech.lt",
    siteName: "MarineTECH",
    title: "MarineTECH | Inžineriniai sprendimai laivynui ir pramonei",
    description: "Patikimi inžineriniai sprendimai, laivų remontas, šaldymo įranga ir variklių dalių tiekimas pramonei ir laivynui visame pasaulyje.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MarineTECH | Inžineriniai sprendimai laivynui ir pramonei",
    description: "Patikimi inžineriniai sprendimai, laivų remontas, šaldymo įranga ir variklių dalių tiekimas pramonei ir laivynui visame pasaulyje.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "UAB Marinetechas",
  alternateName: "MarineTECH",
  url: "https://marinetech.lt",
  logo: "https://marinetech.lt/marinetech.svg",
  foundingDate: "2015",
  email: "office@marinetech.lt",
  telephone: "+37067767287",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Klauso Malūno g. 1",
    addressLocality: "Klaipėda",
    addressCountry: "LT",
  },
  taxID: "LT100010805312",
  vatID: "LT100010805312",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="lt"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-white text-slate-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <LanguageProvider>
          {/* Navigacija viršuje */}
          <Navbar />

          {/* flex-1 užtikrina, kad turinys nustumtų footerį į patį puslapio galą */}
          <main className="flex-1">
            {children}
          </main>

          {/* Footeris, kuris dabar bus visuose puslapiuose */}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}