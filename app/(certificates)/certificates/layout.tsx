// app/(certificates)/certificates/layout.tsx
import type { Metadata } from "next";
import HeaderCertificates from "@/components/HeaderCertificates/HeaderCertificates";
import Footer from "@/components/Footer/Footer";
import ContactMobile from "@/components/ContactMobile/ContactMobile";

const siteUrl = "https://firetech.com.ua/";
const pagePath = "/certificates";
const ogImage = "/img/webp/certificates_EXcellent_UA.webp";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Сертифікати та декларації відповідності | FIRETECH",
  description: "Сертифікати відповідності та декларації...",
  alternates: { canonical: "/certificates" },
  openGraph: {
    title: "Сертифікати та декларації відповідності | FIRETECH",
    description: "Сертифікати відповідності та декларації...",
    url: `${siteUrl}${pagePath}`,
    siteName: "FIRETECH",
    images: [{ url: ogImage, width: 436, height: 630, alt: "Сертифікати та декларації відповідності | FIRETECH" }],
    locale: "uk_UA",
    type: "website",
  },
  robots: { index: true, follow: true, nocache: false, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};

export default function CertificatesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderCertificates />
      <main>{children}</main>
      <ContactMobile />
      <Footer />
    </>
  );
}