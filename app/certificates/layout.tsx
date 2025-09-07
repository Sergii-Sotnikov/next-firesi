import type { Metadata } from "next";
import "../globals.css";
import HeaderCertificates from "@/components/HeaderCertificates/HeaderCertificates";
import Footer from "@/components/Footer/Footer";
import MobilePlaceholder from "@/components/MobilePlaceholder/MobilePlaceholder";
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

const siteUrl = "https://firetech.com.ua/";
const pagePath = "/certificates";
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
    "сертифікати продукції FIRETECH",
  ],
  alternates: {
    canonical: "/certificates",
  },
  openGraph: {
    title: `Сертифікати та декларації відповідності | FIRETECH`,
    description: `Сертифікати відповідності та декларації відповідності на продукцію FIRETECH: FIPRON Sticker та FIPRON Cord. Документи, що підтверджують якість та безпеку автономних систем пожежогасіння.`,
    url: `${siteUrl}${pagePath}`,
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

export default async function CertificatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="uk"
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
