import type { Metadata } from "next";
import "../globals.css";
import HeaderFipron from "@/components/Fipron/HeaderFipron/HeaderFipron";
import ClientModalButton from "@/components/Fipron/ClientModalButton/ClientModalButton";

const siteUrl = "https://next-firesi.vercel.app";
const ogImage = "/img/og/extinguisher.webp";


export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "FIRETECH - інноваційне рішення для пожежогасіння",
  description:
    "FIRESI - універсальні вогнегасники нового покоління. Гасить літій-іонні батареї, електрообладнання під напругою та всі класи пожеж без бруду і шкоди. Сертифіковано в Україні. Захистіть свій дім та бізнес вже сьогодні!",
  keywords: [
    "FIRESI",
    "FIRETECH",
    "вогнегасник",
    "пожежогасіння",
    "літій-іонні батареї",
    "електрообладнання під напругою",
    "вогнегасник для авто",
    "пожежна безпека",
    "FIPRON",
  ],
  alternates: {
    canonical: "/",
  },
    openGraph: {
    title: `FIRETECH - інноваційне рішення для пожежогасіння`,
    description: `FIRESI - універсальні вогнегасники нового покоління. Гасить літій-іонні батареї, електрообладнання під напругою та всі класи пожеж без бруду і шкоди. Сертифіковано в Україні. Захистіть свій дім та бізнес вже сьогодні!`,
    url: "/",
    siteName: "FIRETECH",
    images: [
      {
        url: ogImage,
        width: 563,
        height: 705,
        alt: `FIRETECH - інноваційне рішення для пожежогасіння`,
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
export default function FipronLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body>
        <HeaderFipron>
        <ClientModalButton productName="Замовити" id="1"/>
        </HeaderFipron>
        <main>{children}</main>
        <div id="modal-root" />
      </body>
    </html>
  );
}
