
import ClientModalButton from "@/components/Fipron/ClientModalButton/ClientModalButton";
import CordFipron from "@/components/Fipron/CordFipron/CordFipron";
import HeroFipron from "@/components/Fipron/HeroFipron/HeroFipron";
import StickerFipron from "@/components/Fipron/StickerFipron/StickerFipron";
import WorksFipron from "@/components/Fipron/WorksFipron/WorksFipron";



const Fipron = () => {
  return (
    <>
      <HeroFipron />
      <WorksFipron />
<StickerFipron>
  <ClientModalButton productName="Замовити консультацію і розрахунок FIPRON Sticker "/>
</StickerFipron>
<CordFipron>
  <ClientModalButton productName="Замовити консультацію і розрахунок FIPRON Cord "/>
</CordFipron>
    </>
  );
};

export default Fipron;
