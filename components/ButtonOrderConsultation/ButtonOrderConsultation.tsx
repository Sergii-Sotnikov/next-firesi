'use client'

import css from "./ButtonOrderConsultation.module.css"

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
      <span className={css.btnOrderConsultationSpan}>{children}</span>
    </button>
  );
};

export default ButtonOrderConsultation;
