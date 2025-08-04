import ButtonOrderConsultation from "@/components/ButtonOrderConsultation/ButtonOrderConsultation";
import CordFipron from "@/components/Fipron/CordFipron/CordFipron";
import HeroFipron from "@/components/Fipron/HeroFipron/HeroFipron";
import StickerFipron from "@/components/Fipron/StickerFipron/StickerFipron";
import WorksFipron from "@/components/Fipron/WorksFipron/WorksFipron";
import { FaArrowRight } from "react-icons/fa6";

const Fipron = () => {
  return (
    <>
      <HeroFipron />
      <WorksFipron />
      <StickerFipron>
        <ButtonOrderConsultation>Замовити консультацію і розрахунок  FIPRON Stiker <FaArrowRight/></ButtonOrderConsultation>
      </StickerFipron>
      <CordFipron>
        <ButtonOrderConsultation>Замовити консультацію і розрахунок  FIPRON Cord <FaArrowRight/></ButtonOrderConsultation>
        </CordFipron>
    </>
  );
};

export default Fipron;
