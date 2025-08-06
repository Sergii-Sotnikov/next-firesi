import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Contact from "@/components/Contact/Contact";


export const metadata: Metadata = {
  title: "FIRESI - інноваційне рішення для пожежогасіння",
  description: "FIRESI - зупиняє будь-яке загоряння за секунди. Без бруду, без наслідків.",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>
        <Header/>
        <main id="main-content">{children}</main>
        <Contact/>
        <Footer/>
      </body>
    </html>
  );
}
