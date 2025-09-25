import type { Metadata } from "next";
import "../globals.css";
import HeaderCertificates from "@/components/HeaderCertificates/HeaderCertificates";
import Footer from "@/components/Footer/Footer";
import ContactMobile from "@/components/ContactMobile/ContactMobile";

const siteUrl = "https://firetech.com.ua"; // без конечного слэша
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
  alternates: { canonical: "/instructions" },
  openGraph: {
    title: "Інструкція з використання | FIRETECH",
    description:
      "Покрокова інструкція з використання вогнегасника FRSE-F6, а також FIPRON Sticker та FIPRON Cord: монтаж, умови експлуатації, правила безпеки, обслуговування та перевірка працездатності.",
    url: "/instructions", // относительный путь
    siteName: "FIRETECH",
    images: [
      {
        url: ogImage,
        width: 436,
        height: 630,
        alt: "Інструкція з використання продукції FIRETECH",
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

export default function InstructionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderCertificates />
      <main>{children}</main>
      <ContactMobile />
      <Footer />
    </>
  );
}