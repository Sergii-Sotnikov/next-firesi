import css from "./StickerFipron.module.css";
import Image from "next/image";
import { price } from "@/src/data/products";

interface Props {
  children?: React.ReactNode;
}

const StickerFipron = ({children}:Props) => {
  return (
    <section className={css.sticker}>
      <div className={css.container}>
        <div className={css.stickerWrapper}>
          <h2 className={css.stickerTitle}>«FIPRON STICKER»</h2>

          <Image
            className={css.stickerImage}
            src="/img/fipron_sticker@2x.jpg"
            width={1060}
            height={706}
            alt="FIPRON STICKER автономна система пожежогасіння"
          />

          <div className={css.stickerInfo}>
            <div className={css.stickerDescription}>
              <Image
                className={css.stickerImageLogo}
                src="/img/fipron.png"
                width={267}
                height={67}
                alt="Логотип FIPRON"
              />
              <p className={css.stickerText}>
                <span className={css.stickerTextBold}>«FIPRON STICKER»</span> -
                мініатюрна автономна система пожежогасіння, яка монтується
                всередину розеток, електрощитів, розподільчих коробок тощо.
                <br />
                👉 Активується автоматично при температурі понад 120°C.
                <br />
                👉 Поглинає полум’я всередині електрообладнання миттєво, без
                води та без пошкодження техніки. Ідеально для: квартир,
                серверних, розподільчих щитів, офісів.
                <br />
                👉 Термін експлуатації - 5 років.
              </p>
            </div>
            <Image
              className={css.stickerImageAdd}
              src="/img/fipron_sticker_add@2x.jpg"
              width={557}
              height={649}
              alt="Логотип FIPRON"
            />
          </div>
          <div className={css.product}>
            <h3 className={css.productTitle}>варіанти продукту:</h3>
            <ul className={css.productList}>
              <li className={css.productItem}>
              <p className={css.productName}>1. <span className={css.productNameRed}>FIPRON™</span> Стікер P:</p>
              <p className={css.productDescription}> Об’єм гасіння: <span className={css.productValue}>0,2 літра</span></p>
              <p className={css.productDescription}> Ціна: <span className={css.productValue}>{price["FIPRON™ Стікер P"]} грн / шт</span></p>
              </li>
                            <li className={css.productItem}>
              <p className={css.productName}>2. <span className={css.productNameRed}>FIPRON™</span> Стікер P (в листах):</p>
              <p className={css.productDescription}> Об’єм гасіння: <span className={css.productValue}>15 літрів</span></p>
              <p className={css.productDescription}> Ціна: <span className={css.productValue}>{price["FIPRON™ Стікер P (в листах)"]} грн / шт</span></p>
              </li>
            </ul>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickerFipron;
