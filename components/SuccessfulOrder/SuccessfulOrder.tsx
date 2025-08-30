import css from "./SuccessfulOrder.module.css";
import { Dispatch, SetStateAction } from "react";
import { IoChevronBackOutline } from "react-icons/io5";

interface SuccessfulOrderProps {
  closeModal: () => void;
  setSuccessful: Dispatch<SetStateAction<boolean>>;
}

const SuccessfulOrder = ({
  closeModal,
  setSuccessful,
}: SuccessfulOrderProps) => {
  return (
    <>
      <div className={css.mainDiv}>
        <p className={css.title}>✅ Ваше замовлення прийнято!</p>
        <p className={css.mainText}>Дякуємо, що дбаєте про безпеку з</p>
        <div className={css.fire}>
          <p className={css.logoTextHeader}>
            Fire<span className={css.logoTextHeaderSpan}>si</span>
          </p>
        </div>
        <p className={css.mainAdd}>
          Ми отримали ваше замовлення і вже працюємо над ним. <br />
          Очікуйте дзвінка або повідомлення від нашого менеджера.
        </p>
      </div>
      <div className={css.buttonGroup}>
        <button type="button" onClick={closeModal} className={css.btnAll}>
          <IoChevronBackOutline className={css.btnIcon} aria-hidden />
          <span className={css.btnLabel}>Повернутись на головну сторінку</span>
        </button>

        <button
          type="button"
          onClick={() => setSuccessful(true)}
          className={css.btnAll}
        >
          Оформити ще одне замовлення
        </button>
      </div>
    </>
  );
};

export default SuccessfulOrder;
