import css from "./HeroMain.module.css";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

import logoFiresi from "@/public/img/firesi@2x.png";
import extinguisherDesktop from "@/public/img/extinguisher@2x.jpg";
import extinguisherMobile from "@/public/img/extinguisher_mobile@2x.png";

const HeroMain = () => {
  return (
    <section className={css.heroMain}>
      <div className={css.container}>
        <h1 className={css.heroMainTitle}>
          інноваційна технологія
          <br />
          <span className={css.heroMainTitleAdd}>
            прорив у світі <br className={css.mobileBr} /> пожежогасіння
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
              src={logoFiresi}
              alt="Логотип Firesi"
              placeholder="blur"
            />
            <p className={css.descriptionHeroAddtextMobile}>
              Сертифіковано в Україні
            </p>
            <div className={css.pictureHeroMobileWrap}>
              <Image
                className={css.pictureHeroMobile}
                src={extinguisherMobile}
                alt="Вогнегасник FIPRON (mobile)"
                placeholder="blur"
              />
            </div>

            <p className={css.descriptionHeroText}>
              Зупиніть будь яку пожежу за лічені секунди.
            </p>
            <p className={css.descriptionText}>
              <span className={css.descriptionTextBold}>FIRESI</span> - це ваша
              миттєва реакція на небезпеку. Гасить будь-яку пожежу - від
              палаючого телефону до олії на сковорідці, не залишаючи бруду.
              Збережіть свій дім. Захистіть найдорожчих. Створено в Європі.
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
            src={extinguisherDesktop}
            alt="Вогнегасник FIPRON"
            priority
            placeholder="blur"
            style={{ height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroMain;
