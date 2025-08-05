import type { Metadata } from "next";
import { inter, roboto, } from "@/src/lib/fonts";
import "../globals.css";
import Footer from "@/components/Footer/Footer";
import HeaderFipron from "@/components/Fipron/HeaderFipron/HeaderFipron";


export const metadata: Metadata = {
  title: "FIPRON - це автономне рішення для локального пожежогасіння",
  description:
    "До 80% пожеж виникає через проблеми з електропроводкою. Серія пристроїв FIPRON забезпечує автономний захист і миттєве гасіння загорянь без шкоди для людей і техніки.",
  keywords: [
    "FIPRON",
    "пожежогасіння",
    "коротке замикання",
    "захист електропроводки",
    "Novec 1230",
    "пожежна безпека",
    "локальне гасіння",
    "пожежна безпека для підприємств",
    "вогнегасна капсула",
    "автономний пристрій",
  ],
  openGraph: {
    title: "FIPRON - це автономне рішення для пожежогасіння",
    description:
      "Сучасна система для гасіння пожеж в електрощитових, технічних приміщеннях, серверних. Без підключення, без шкоди, з Novec™ 1230.",
    url: "https://firesi.com/fipron",
    type: "website",
    images: [
      {
        url: "https://firesi.com/img/webp/fipronSEO.webp",
        width: 945,
        height: 630,
        alt: "Пристрій FIPRON для локального пожежогасіння",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className={`${inter.variable} ${roboto.variable}`}>
        <HeaderFipron />
        <main>{children}</main>
        <Footer />
        <div id="modal-root" />
      </body>
    </html>
  );
}
