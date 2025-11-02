import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {
  Roboto,
  Alumni_Sans_SC,
  Alumni_Sans_Pinstripe,
  Inter,
} from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const ceraStencilPRO = localFont({
  src: [
    {
      path: "../public/fonts/CeraStencilPRO-Medium/CeraStencilPRO-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/CeraStencilPRO-Black/CeraStencilPRO-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/CeraStencilPRO-Light/Cera_Stencil_PRO_Trial_Light.woff",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-cera-stencil",
});
const RobotoFont = Roboto({
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  subsets: ["latin", "cyrillic"],
  fallback: ["system-ui", "Arial", "sans-serif"],
  adjustFontFallback: false,
  display: "swap",
});
const AlumniSansSCFont = Alumni_Sans_SC({
  weight: ["400", "500", "700"],
  variable: "--font-alumni-sans-sc",
  subsets: ["latin", "cyrillic"],
  fallback: ["system-ui", "Arial", "sans-serif"],
  adjustFontFallback: false,
  display: "swap",
});
const AlumniSansPinstripeFont = Alumni_Sans_Pinstripe({
  weight: ["400"],
  variable: "--font-alumni-pinstripe",
  subsets: ["latin"],
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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "FIRETECH - інноваційне рішення для пожежогасіння",
  description: "FIRETECH - універсальні вогнегасники нового покоління...",
  alternates: { canonical: "/" },
  openGraph: {
    title: "FIRETECH - інноваційне рішення для пожежогасіння",
    description: "FIRETECH - універсальні вогнегасники нового покоління...",
    url: "/",
    siteName: "FIRETECH",
    images: [
      {
        url: "/img/og/extinguisher.webp",
        width: 563,
        height: 705,
        alt: "FIRETECH - інноваційне рішення для пожежогасіння",
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
  verification: { google: "PASTE_CODE_FROM_GSC" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="uk"
      className={`${ceraStencilPRO.variable} ${RobotoFont.variable} ${AlumniSansSCFont.variable} ${AlumniSansPinstripeFont.variable} ${InterFont.variable}`}
    >
      <body>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <div id="modal-root" />
      </body>
    </html>
  );
}
