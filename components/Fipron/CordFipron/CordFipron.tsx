import css from "./CordFipron.module.css";
import Image from "next/image";

interface Props {
  children?: React.ReactNode;
}

const CordFipron = ({ children }: Props) => {
  return (
    <section className={css.cord}>
      <div className={css.container}>
        <div className={css.cordWrapper}>
          <h2 className={css.cordTitle}>«FIPRON STICKER»</h2>

          <Image
            className={css.cordImage}
            src="/img/fipron_cord@2x.jpg"
            width={1060}
            height={706}
            alt="FIPRON Cord - нове покоління вогнезахисних виробів"
          />

          <div className={css.cordInfo}>
            <Image
              className={css.cordImageFipron}
              src="/img/fipron_cord_add@2x.jpg"
              width={635}
              height={740}
              alt="FIPRON Cord"
            />
            <div className={css.cordDescription}>
              <Image
                className={css.cordImageLogo}
                src="/img/fipron.png"
                width={267}
                height={67}
                alt="Логотип FIPRON"
              />
              <p className={css.cordText}>
                <span className={css.cordTextBold}>«FIPRON STICKER»</span> -
                нове покоління вогнезахисних виробів. Це шнур з композитного
                матеріалу, що представляє собою хімічну суміш мікрокапсул з
                нагрівальною речовиною. Під впливом вогню в будь-якій точці
                корду відбувається ініціювання нагрівальної речовини з
                поступовою хімічною реакцією по всій його довжині. Реакція
                супроводжується тепловим розрядом, що призводить до розриву всіх
                мікрокапсул і вивільненню вогнегасної речовини.
                <br />
                👉 Може захистити об’єм від 50 до 2000 літрів.
                <br />
                👉 Термін експлуатації 5 років
              </p>
            </div>
          </div>
          <div className={css.product}>
            <p className={css.productText}>
              Один погонний метр{" "}
              <span className={css.productTextBold}>FIPRON™ Cord</span>{" "}
              забезпечує ефективний захист об’єму до 300 літрів.
              <br />
              <span className={css.productTextBold}>
                Вартість 1 м.п. - 27 790 грн. Шнур легко
              </span>
              <br />
              Шнур легко нарізається на необхідну довжину відповідно до
              специфіки електрощитових або розподільчих боксів, що забезпечує
              гнучкість монтажу та економне використання матеріалу.
            </p>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CordFipron;
