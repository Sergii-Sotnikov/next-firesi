import Advantages from "@/components/Advantages/Advantages";
import Arguments from "@/components/Arguments/Arguments";
import Contact from "@/components/Contact/Contact";
import Faq from "@/components/Faq/Faq";
import Feedbacks from "@/components/Feedbacks/Feedbacks";
import Fire from "@/components/Fire/Fire";
import HeroMain from "@/components/HeroMain/HeroMain";
import Solution from "@/components/Solution/Solution";
import VideoMainPage from "@/components/VideoMainPage/VideoMainPage";
import Choice from "@/components/Сhoice/Сhoice";
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "FIRETECH - інноваційне рішення для пожежогасіння",
  description: "FIRESI - універсальні вогнегасники...",
  alternates: { canonical: "/" },
  openGraph: {
    title: "FIRETECH - інноваційне рішення для пожежогасіння",
    description: "FIRESI - універсальні вогнегасники...",
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
};


export default function Home() {
   return (
    <>
      <HeroMain />
      <Fire/>
      <Advantages/>
      <VideoMainPage/>
      <Solution/>
      <Arguments/>
      <Choice/>
      <Feedbacks/>
      <Faq/>
      <Contact/>
    </>
  );
}
