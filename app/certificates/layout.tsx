import type { Metadata } from "next";
import "../globals.css";
import HeaderFipron from "@/components/Fipron/HeaderFipron/HeaderFipron";
import ClientModalButton from "@/components/Fipron/ClientModalButton/ClientModalButton";
import HeaderCertificates from "@/components/HeaderCertificates/HeaderCertificates";

const siteUrl = "https://firetech.com.ua/";
const ogImage = "/img/webp/certificates_EXcellent_UA.webp";


export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Сертифікати та декларації відповідності | FIRETECH",
  description:
    "Сертифікати відповідності та декларації відповідності на продукцію FIRETECH: FIPRON Sticker та FIPRON Cord. Документи, що підтверджують якість та безпеку автономних систем пожежогасіння.",
  keywords: [
"сертифікати пожежогасіння",
    "декларація відповідності",
    "сертифікати відповідності",
    "FIRETECH сертифікати",
    "FIPRON сертифікати",
    "FIPRON Sticker",
    "FIPRON Cord",
    "пожежна безпека документи",
    "якість пожежогасіння",
    "сертифікати безпеки",
    "декларації на продукцію",
    "сертифікати продукції FIRETECH"
  ],
  alternates: {
    canonical: "/certificates",
  },
    openGraph: {
    title: `Сертифікати та декларації відповідності | FIRETECH`,
    description: `Сертифікати відповідності та декларації відповідності на продукцію FIRETECH: FIPRON Sticker та FIPRON Cord. Документи, що підтверджують якість та безпеку автономних систем пожежогасіння.`,
    url: `${siteUrl}/certificates`,
    siteName: "FIRETECH",
    images: [
      {
        url: ogImage,
        width: 436,
        height: 630,
        alt: `Сертифікати та декларації відповідності | FIRETECH`,
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



export default function CertificatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body>
        <HeaderCertificates/>
        <main>{children}</main>
        <div id="modal-root" />
      </body>
    </html>
  );
}
