import type { Metadata } from "next";
import "../globals.css";
import HeaderCertificates from "@/components/HeaderCertificates/HeaderCertificates";
import Footer from "@/components/Footer/Footer";
import {
  Roboto,
  Inter
} from "next/font/google";

const RobotoFont = Roboto({
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  subsets: ["latin", "cyrillic"],
  fallback: ["system-ui", "Arial", "sans-serif"],
  adjustFontFallback: false,
  display: "swap",
});

const InterFont = Inter({
  weight: ["400", "500", "700"],
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  fallback: ["system-ui", "Arial", "sans-serif"],
  adjustFontFallback: false,
  display: "swap",
});

const siteUrl = "https://firetech.com.ua";
const pagePath = "/instructions";
const ogImage = "/img/webp/FRSE-F6_instructions.webp";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Інструкція з використання | FIRETECH",
  description:
    "Покрокова інструкція з використання вогнегасника FRSE-F6, а також FIPRON Sticker та FIPRON Cord: монтаж, умови експлуатації, правила безпеки, обслуговування та перевірка працездатності.",
  keywords: [
    "інструкція з використання",
    "керівництво користувача",
    "вогнегасник FRSE-F6",
    "монтаж FRSE-F6",
    "FIPRON Sticker",
    "FIPRON Cord",
    "автономна система пожежогасіння",
    "пожежна безпека",
    "експлуатація",
    "обслуговування",
    "перевірка працездатності",
  ],
  alternates: {
    canonical: "/instructions",
  },
  openGraph: {
    title: `Інструкція з використання | FIRETECH`,
    description: `Покрокова інструкція з використання вогнегасника FRSE-F6, а також FIPRON Sticker та FIPRON Cord: монтаж, умови експлуатації, правила безпеки, обслуговування та перевірка працездатності.`,
    url: `${siteUrl}${pagePath}`,
    siteName: "FIRETECH",
    images: [
      {
        url: ogImage,
        width: 436,
        height: 630,
        alt: `Інструкція з використання продукції FIRETECH`,
      },
    ],
    locale: "uk_UA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function ІnstructionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
    lang="uk"
    className={`${RobotoFont.variable} ${InterFont.variable}`}
    >
      <body>
        <HeaderCertificates />
        <main>{children}</main>
        <Footer />
        <div id="modal-root" />
      </body>
    </html>
  );
}
