import css from "./Advantages.module.css";
import Image from "next/image";

export default function Advantages() {
  return (
    <section className={css.advantages}>
      <div className={css.containerAdvantages}>
        <h2 className={css.advantagesTitle}>
          Європейські інновації для вашої безпеки
        </h2>
        <span className={css.advantagesTitleText}>
          переваги
          <Image
            className={css.pictureHero}
            src="/img/firesi@2x.png"
            width={346}
            height={145}
            alt="Вогнегасник FIPRON"
          /> 
        </span>
      </div>
    </section>
  );
}
