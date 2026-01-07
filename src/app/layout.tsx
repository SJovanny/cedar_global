import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cedar Global | Importation Premium de Véhicules Européens",
  description:
    "Importation sur-mesure de véhicules et pièces détachées européennes vers les Caraïbes. L'Europe à portée de main, le rêve dans votre garage.",
  keywords: [
    "import voiture Europe",
    "véhicules européens Caraïbes",
    "import auto Martinique",
    "import auto Guadeloupe",
    "pièces détachées Europe",
    "conciergerie automobile",
  ],
  authors: [{ name: "Cedar Global" }],
  openGraph: {
    title: "Cedar Global | Importation Premium de Véhicules Européens",
    description:
      "Importation sur-mesure de véhicules et pièces détachées européennes vers les Caraïbes.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

