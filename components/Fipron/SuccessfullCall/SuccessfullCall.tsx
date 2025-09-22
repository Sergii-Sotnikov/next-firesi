import css from "./SuccessfullCall.module.css";
import { Dispatch, SetStateAction } from "react";
import { IoChevronBackOutline } from "react-icons/io5";

interface SuccessfullCallProps {
  closeModal: () => void;
  setSuccessful: Dispatch<SetStateAction<boolean>>;
}

const SuccessfullCall = ({
  closeModal,
  setSuccessful,
}: SuccessfullCallProps) => {
  return (
    <>
      <div className={css.mainDiv}>
        <p className={css.title}>✅ Ваше запит<br className={css.titleMob} /> прийнято!👌</p>
        <p className={css.mainText}>Дякуємо, що дбаєте<br className={css.titleMob} /> про безпеку з</p>
        <div className={css.fire}>
          <p className={css.logoTextHeader}>
            Fire<span className={css.logoTextHeaderSpan}>si</span>
          </p>
        </div>
        <p className={css.mainAdd}>
          Наш менеджер зателефонує або напише Вам найближчим часом, щоб надати консультацію та розрахунок.
        </p>
      </div>
      <div className={css.buttonGroup}>
        <button type="button" onClick={closeModal} className={css.btnAll}>
          <IoChevronBackOutline className={css.btnIcon} aria-hidden />
          <span className={css.btnLabel}>Повернутись на головну сторінку</span>
        </button>
      </div>
    </>
  );
};

export default SuccessfullCall;
