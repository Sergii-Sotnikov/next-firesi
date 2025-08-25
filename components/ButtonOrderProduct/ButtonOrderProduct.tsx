"use client";
import { useState } from "react";
import Modal from "../Modal/Modal";
import Order from "../Order/Order";
import css from "./ButtonOrderProduct.module.css";

interface ButtonOrderProductProps {
  productId: string;
}

const ButtonOrderProduct = ({productId}: ButtonOrderProductProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button className={css.btnChoice} type="button" onClick={openModal}>
        <span className={css.btnChoiceSpan}>замовити</span>
      </button>

      {isOpen && (
        <Modal closeModal={closeModal} >
          <Order closeModal={closeModal} productId={productId}/>
        </Modal>
      )}
    </>
  );
};

export default ButtonOrderProduct;
