import { createPortal } from "react-dom";
import css from "./Modal.module.css";
import { MdClose } from "react-icons/md";
import { useEffect } from "react";

interface ModalProps {
  closeModal: () => void;
  children: React.ReactNode;
}

export default function Modal({ closeModal, children }: ModalProps) {

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) closeModal();
  };

  useEffect(() => {

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKeyDown);


    const scrollY = window.scrollY;
    const scrollbarW = window.innerWidth - document.documentElement.clientWidth;

    const html = document.documentElement;
    const body = document.body;

    html.style.overflow = "hidden";
    html.style.paddingRight = `${scrollbarW}px`;

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.paddingRight = `${scrollbarW}px`;
    body.style.overscrollBehavior = "contain";

    return () => {
      document.removeEventListener("keydown", onKeyDown);

      html.style.overflow = "";
      html.style.paddingRight = "";

      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      body.style.paddingRight = "";
      body.style.overscrollBehavior = "";


      window.scrollTo(0, scrollY);
    };
  }, [closeModal]);


  const root = document.getElementById("modal-root") as HTMLDivElement;

  return createPortal(
    <div
      className={css.backdrop}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={css.closeButton}
          onClick={closeModal}
          aria-label="Close modal"
          type="button"
        >
          <MdClose size={24} color="#ffffff" />
        </button>
        {children}
      </div>
    </div>,
    root
  );
}
