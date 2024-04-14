import type { Metadata } from "next";
import { ReactNode } from "react";
import "../styles/index.scss";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Script from "next/script";
import { AOSProvider } from "@/providers/AOSProvider";

export const metadata: Metadata = {
  verification: { google: "Svdl6t_Sje2On7p425w9pkTzyfzAnRhcyQOC19Gv4Ek" },
  applicationName: "D&D Bezpieczna Przystań - Gabinet Psychologiczny",
  creator: "DasminX",
  category: "Psycholog",
  icons: "/assets/favicon.png",
  keywords:
    "ddbezpiecznaprzystan, dd, bezpieczna, przystań, D&D, Bezpieczna, Przystań, doświadczony, psycholog, śląsk, Dąbrowa, Górnicza, Jaworzno, dla, dzieci, nastolatka, nastolatki, dorosłych, gabinet, psychologiczny, Dominika, Jazowska, Wąchadło, Rejtana 20, pomoc, psychologa, psychologiczna",
  openGraph: {
    locale: "pl_PL",
    siteName: "D&D Bezpieczna Przystań - Gabinet Psychologiczny",
    type: "website",
    url: "https://www.ddbezpiecznaprzystan.pl/",
  },
};

type RootLayoutProps = Readonly<{ children: ReactNode }>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <AOSProvider>
      <html lang="pl">
        <head>
          <link
            href="https://unpkg.com/aos@2.3.1/dist/aos.css"
            rel="stylesheet"
          />
          <Script defer src="https://unpkg.com/aos@2.3.1/dist/aos.js" />
        </head>
        <body>
          <Navbar />
          <div id="mainContainer" className="mainContainer">
            {children}
          </div>
          <Footer />
        </body>
      </html>
    </AOSProvider>
  );
}
