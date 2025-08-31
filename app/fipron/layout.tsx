import type { Metadata } from "next";
import "../globals.css";
import HeaderFipron from "@/components/Fipron/HeaderFipron/HeaderFipron";
import ClientModalButton from "@/components/Fipron/ClientModalButton/ClientModalButton";

const siteUrl = "https://next-firesi.vercel.app";
const ogImage = "/img/og/fipron.webp";


export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "FIPRON: автономні системи пожежогасіння - Sticker та Cord",
  description:
    "FIPRON Sticker та FIPRON Cord гасять займання на старті: автономно, безпечно для електроніки й людей",
  keywords: [
  "FIPRON",
  "FIPRON Sticker",
  "FIPRON Cord",
  "автономна система пожежогасіння",
  "локальне пожежогасіння",
  "вогнегасний стікер",
  "вогнегасний шнур",
  "Novec 1230",
  "захист електрощитів",
  "захист розеток",
  "пожежна безпека",
  "гасіння без води",
  "термоактивовані мікрокапсули",
  "мікрокапсули пожежогасіння",
  "серверна безпека",
  "офіс",
  "квартира",
  "замовити консультацію"
  ],
  alternates: {
    canonical: "/fipron",
  },
    openGraph: {
    title: `FIPRON: автономні системи пожежогасіння - Sticker та Cord`,
    description: `FIPRON Sticker та FIPRON Cord гасять займання на старті: автономно, безпечно для електроніки й людей`,
    url: `${siteUrl}/fipron`,
    siteName: "FIRETECH",
    images: [
      {
        url: ogImage,
        width: 557,
        height: 649,
        alt: `FIPRON: автономні системи пожежогасіння`,
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
