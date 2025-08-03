import type { Metadata } from "next";
import { inter, roboto } from "@/src/lib/fonts";
import "../globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";


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
      <body className={`${inter.variable} ${roboto.variable}`}>
        <Header/>
        <main id="main-content">{children}</main>
        <Footer/>
        <div id="modal-root" />
      </body>
    </html>
  );
}
