import type { Metadata } from "next";
import "../globals.css";
import { headers } from "next/headers";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import MobilePlaceholder from "@/components/MobilePlaceholder/MobilePlaceholder";
import {
  Roboto,
  Alumni_Sans_SC,
  Alumni_Sans_Pinstripe,
  Inter,
} from "next/font/google";


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

const siteUrl = "https://firetech.com.ua/";
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

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const headersList = await headers();
  const ua = headersList.get("user-agent") ?? "";
  const isMobileUA = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(ua);
  const isBot = /Googlebot|Bingbot|facebookexternalhit|Twitterbot|LinkedInBot|TelegramBot|Slackbot/i.test(ua);

  const showMobilePlaceholder = isMobileUA && !isBot;



  return (
    <html
      lang="uk"
      className={`${RobotoFont.variable} ${AlumniSansSCFont.variable} ${AlumniSansPinstripeFont.variable} ${InterFont.variable}`}
    >
      <body>
        {showMobilePlaceholder ? (
          <MobilePlaceholder />
        ) : (
          <>
            <Header />
            <main id="main-content">{children}</main>
            <Footer />
            <div id="modal-root" />
          </>
        )}
      </body>
    </html>
  );
}
