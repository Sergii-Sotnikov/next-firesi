import css from "./HeroMain.module.css";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

const HeroMain = () => {
  return (
    <section className={css.heroMain}>
      <div className={css.container}>
        <h1 className={css.heroMainTitle}>
          іноваційна технологія
          <br />
          <span className={css.heroMainTitleAdd}>
            прорив у світі пожежогасіння
          </span>
        </h1>
        <h2 className={css.heroMainSecondTitle}>в 7 разів потужніший</h2>
        <div className={css.informationHero}>
          <div className={css.descriptionHero}>
            <span className={css.descriptionHeroAddtext}>
              <svg
                className={css.descriptionHeroAddtextPoint}
                width={7}
                height={7}
              >
                <use href="/icons/sprite.svg#icon-point"></use>
              </svg>
              Сертифіковано в Україні
            </span>
            <Image
              className={css.pictureHeroLogo}
              src="/img/firesi@2x.png"
              width={373}
              height={157}
              alt="Логотип Firesi"
            />
            <p className={css.descriptionHeroText}>
              Зупиніть будь яку пожежу за лічені секунди.
            </p>
            <p className={css.descriptionText}>
              FIRESI - це ваша миттєва реакція на небезпеку. Гасить будь-яку
              пожежу- від палаючого телефону до олії на сковорідці, не залишаючи
              бруду. Збережіть свій дім. Захистіть найдорожчих. Створено в
              Європі.
            </p>
            <Link href="#order" className={css.descriptionHeroBtn}>
              <span className={css.descriptionHeroBtnText}>
                ВИБРАТИ вогнегасник FRSE
                <FaArrowRight className={css.btnIcon} size={20} />
              </span>
            </Link>
          </div>
          <Image
            className={css.pictureHero}
            src="/img/extinguisher@2x.jpg"
            width={562}
            height={705}
            alt="Вогнегасник FIPRON"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroMain;
