'use client'

import css from "./ButtonOrderConsultation.module.css"
import { FaArrowRight } from "react-icons/fa6";

interface Props {
  children: React.ReactNode;
  openModal: ()=> void;
}




const ButtonOrderConsultation = ({ children, openModal }: Props) => {
  
  return (
    <button
      className={css.btnOrderConsultation}
      type="button"
      onClick={openModal}
    >
      <span className={css.btnOrderConsultationSpan}>{children} <FaArrowRight className={css.btnIcon} size={20}/></span>
    </button>
  );
};

export default ButtonOrderConsultation;
