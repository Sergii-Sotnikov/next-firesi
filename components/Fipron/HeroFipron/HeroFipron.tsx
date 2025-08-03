import Image from "next/image";
import css from "./HeroFipron.module.css";

const HeaderFipron = () => {
  return (
    <section className={css.hero}>
      <div className={css.container}>
        <div className={css.heroTitle}>
          <Image
            src="/img/attention.png"
            alt="Увага"
            width={225}
            height={225}
          ></Image>
          <h1 className={css.heroTitleText}>
            зупинись на мить!
            <br />
            прочитай!
          </h1>
        </div>
        <p className={css.heroTextMain}>
          До 80% пожеж у побуті та на підприємствах виникає через проблеми в
          електропроводці: коротке замикання, перегрів, перевантаження мережі.
          Це підтверджують офіційні дані ДСНС України та Європейської асоціації
          з протипожежної безпеки (European Fire Safety Alliance). Але тепер є
          рішення, яке спрацьовує ще до того, як пожежа встигне розгорітися.
        </p>
        <Image
          className={css.fipronLogo}
          src="/img/fipron.png"
          alt="Fipron logo"
          width={643}
          height={161}
        ></Image>
        <p className={css.heroText}>
          Це сучасне рішення для захисту електричних та технічних об’єктів від
          загорянь — працює повністю автономно, не потребує підключення до
          електромережі, не шкодить людині чи довкіллю.
          <br />
          Серія пожежогасильних пристроїв FIPRON створена на основі
          термоактивованих мікрокапсул, заповнених інноваційною вогнегасною
          речовиною <span className={css.heroTextBolt}>Novec™ 1230</span> .
          <br />
          Цей компонент:
        </p>
        <ul className={css.heroList}>
          <li className={css.heroItem}>
            активується точково при досягненні критичної температури (без
            сторонніх втручань),
          </li>
          <li className={css.heroItem}>не провокує корозію, не залишає слідів після спрацювання,</li>
          <li className={css.heroItem}>є абсолютно безпечним для електроніки, людей та тварин.</li>
        </ul>
        <p className={css.heroText}><span className={css.heroTextBolt}>Системи FIPRON</span> забезпечують миттєве локальне гасіння пожежі в момент її зародження, зберігаючи не лише обладнання, а й безперервність критичних процесів.</p>
      </div>
    </section>
  );
};

export default HeaderFipron;
