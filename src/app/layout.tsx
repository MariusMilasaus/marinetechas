import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer"; // Importuojame footerį

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MarineTECH | Inžineriniai sprendimai",
  description: "Patikimi inžineriniai sprendimai pramonei ir laivynui visame pasaulyje.",
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
        {/* Navigacija viršuje */}
        <Navbar /> 
        
        {/* flex-1 užtikrina, kad turinys nustumtų footerį į patį puslapio galą */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footeris, kuris dabar bus visuose puslapiuose */}
        <Footer />
      </body>
    </html>
  );
}