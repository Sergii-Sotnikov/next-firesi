import Contact from "@/components/Contact/Contact";
import ClientModalButton from "@/components/Fipron/ClientModalButton/ClientModalButton";
import CordFipron from "@/components/Fipron/CordFipron/CordFipron";
import HeroFipron from "@/components/Fipron/HeroFipron/HeroFipron";
import Mounting from "@/components/Fipron/Mounting/Mounting";
import StickerFipron from "@/components/Fipron/StickerFipron/StickerFipron";
import StickerVideo from "@/components/Fipron/StickerVideo/StickerVideo";
import WorksFipron from "@/components/Fipron/WorksFipron/WorksFipron";

const Fipron = () => {
  return (
    <>
      <HeroFipron />
      <WorksFipron />
      <CordFipron>
        <ClientModalButton productName="Замовити консультацію і розрахунок FIPRON Cord " />
      </CordFipron>
      <Mounting />
      <StickerFipron>
        <ClientModalButton productName="Замовити консультацію і розрахунок FIPRON Sticker " />
      </StickerFipron>
      <StickerVideo />
      <Contact />
    </>
  );
};

export default Fipron;
