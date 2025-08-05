'use client';

import { useState } from 'react';
import Modal from '@/components/Modal/Modal';
import ButtonOrderConsultation from '@/components/ButtonOrderConsultation/ButtonOrderConsultation';
import Callback from '@/components/Callback/CallBack';

interface Props {
  productName: string;
}

const ClientModalButton = ({ productName }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);



  return (
    <>
      <ButtonOrderConsultation openModal={openModal}>
        {productName}
      </ButtonOrderConsultation>

      {isOpen && (
        <Modal closeModal={closeModal}>
            
          <Callback closeModal={closeModal} productName={productName}/>
        </Modal >
      )}
    </>
  );
};

export default ClientModalButton;
