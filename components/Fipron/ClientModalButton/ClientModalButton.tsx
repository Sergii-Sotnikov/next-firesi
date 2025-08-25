"use client";

import { useState } from "react";
import Modal from "@/components/Modal/Modal";
import ButtonOrderConsultation from "@/components/ButtonOrderConsultation/ButtonOrderConsultation";
import Callback from "@/components/Callback/CallBack";
import ButtonOrderHeaderFipron from "../ButtonOrderHeaderFipron/ButtonOrderHeaderFipron";

interface Props {
  productName: string;
  id?: string;
}

const ClientModalButton = ({ productName, id }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  if (id === "1") {
    return (
      <>
        <ButtonOrderHeaderFipron openModal={openModal} id={"1"} />

        {isOpen && (
          <Modal closeModal={closeModal}>
            <Callback closeModal={closeModal} productName={productName} />
          </Modal>
        )}
      </>
    );
  }

  return (
    <>
      <ButtonOrderConsultation openModal={openModal}>
        {productName}
      </ButtonOrderConsultation>

      {isOpen && (
        <Modal closeModal={closeModal}>
          <Callback closeModal={closeModal} productName={productName} />
        </Modal>
      )}
    </>
  );
};

export default ClientModalButton;
