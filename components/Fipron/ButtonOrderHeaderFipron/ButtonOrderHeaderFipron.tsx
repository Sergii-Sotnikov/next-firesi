'use client'

import css from "./ButtonOrderHeaderFipron.module.css"


interface Props {
  openModal: ()=> void;
  id?: string;
}



const ButtonOrderHeaderFipron = ({ id, openModal }: Props) => {
  
  return (
    <button className={css.btnHeader}
        id={id}
      type="button"
      onClick={openModal}
    >
      <span className={css.btnText}>Замовити</span> 
    </button>
  );
};

export default ButtonOrderHeaderFipron;
        
        