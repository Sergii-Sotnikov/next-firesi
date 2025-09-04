import css from "./Advantages.module.css";
import Image from "next/image";

export default function Advantages() {
  return (
    <section className={css.advantages}>
      <div className={css.containerAdvantages}>
        <h2 className={css.advantagesTitle}>Європейські&nbsp;інновації</h2>
        <div className={css.wrapperMobile}>
          <p className={css.advantagesTitleText}>переваги</p>
          <Image
            className={css.pictureHero}
            src="/img/firesi_mobile@2x.png"
            width={346}
            height={145}
            alt="Вогнегасник FIPRON"
          />
          </div>
        <p className={css.advantagesTitle}> для&nbsp;вашої&nbsp;безпеки</p>
      </div>
    </section>
  );
}
