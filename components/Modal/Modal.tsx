"use client";

import { createPortal } from "react-dom";
import { useEffect } from "react";
import css from "./Modal.module.css";
import { MdClose } from "react-icons/md";

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


    const scrollY = window.scrollY || 0;
    const sbw = window.innerWidth - document.documentElement.clientWidth;

    const prev = {
      htmlOverflow: document.documentElement.style.overflow,
      htmlPaddingRight: document.documentElement.style.paddingRight,
      bodyOverflow: document.body.style.overflow,
      bodyPosition: document.body.style.position,
      bodyTop: document.body.style.top,
      bodyWidth: document.body.style.width,
      bodyPaddingRight: document.body.style.paddingRight,
    };

    document.documentElement.style.overflow = "hidden";
    if (sbw > 0) document.documentElement.style.paddingRight = `${sbw}px`;

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    if (sbw > 0) document.body.style.paddingRight = `${sbw}px`;

    return () => {
      document.removeEventListener("keydown", onKeyDown);

      document.documentElement.style.overflow = prev.htmlOverflow;
      document.documentElement.style.paddingRight = prev.htmlPaddingRight;

      document.body.style.overflow = prev.bodyOverflow;
      document.body.style.position = prev.bodyPosition;
      document.body.style.top = prev.bodyTop;
      document.body.style.width = prev.bodyWidth;
      document.body.style.paddingRight = prev.bodyPaddingRight;

      window.scrollTo(0, scrollY);
    };
  }, [closeModal]);

  const portalEl = document.getElementById("modal-root") as HTMLDivElement | null;
  if (!portalEl) return null;

  return createPortal(
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modal} role="dialog" aria-modal="true" tabIndex={-1}>
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
    portalEl
  );
}
