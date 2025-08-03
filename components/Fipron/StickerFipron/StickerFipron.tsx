import css from "./StickerFipron.module.css";
import Image from "next/image";

const StickerFipron = () => {
  return (
    <section className={css.sticker}>
      <div className={css.container}>
        <div className={css.stickerWrapper}>
          <h2 className={css.stickerTitle}>«FIPRON STICKER»</h2>

          <Image
            className={css.stickerImage}
            src="/img/fipron_sticker.jpg"
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
              className={css.stickerImage}
              src="/img/fipron_sticker_add.png"
              width={557}
              height={649}
              alt="Логотип FIPRON"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickerFipron;
