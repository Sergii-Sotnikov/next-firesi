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
      <div className={css.btnDiv}>
        <p className={css.textBtn}>{children}</p>
        <FaArrowRight className={css.btnIcon} size={24}/>
      </div>
    </button>
  );
};

export default ButtonOrderConsultation;
