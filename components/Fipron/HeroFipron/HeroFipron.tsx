import Image from "next/image";
import css from "./HeroFipron.module.css";
import attentionDesktop from "@/public/img/attention@2x.png";
import attentionMobile from "@/public/img/attention_mobile@2x.png";
import fipronLogo from "@/public/img/fipron.png";

const HeaderFipron = () => {
  return (
    <section className={css.hero}>
      <div className={css.container}>
        <div className={css.heroTitle}>
          <Image
            src={attentionDesktop}
            className={css.heroImage}
            alt="Увага"
            placeholder="blur"
          />
          <Image
            src={attentionMobile}
            className={css.heroImageMobile}
            alt="Увага"
            placeholder="blur"
          />
          <h1 className={css.heroTitleText}>
            Зупинись на <br className={css.heroTitleTextAdd} />
            мить!
            <br />
            прочитай!
          </h1>
        </div>
        <p className={css.heroTextMain}>
          До 80% пожеж у побуті та на підприємствах виникає через проблеми в
          електропроводці: коротке замикання, перегрів, перевантаження мережі.
          Це підтверджують офіційні дані ДСНС України та Європейської асоціації
          з протипожежної безпеки (European Fire Safety Alliance).
          <br /> Але тепер є рішення, яке спрацьовує ще до того, як пожежа
          встигне розгорітися.
        </p>
        <Image
          className={css.fipronLogo}
          src={fipronLogo}
          alt="FIPRON logo"
          placeholder="blur"
          priority
        />
        <ul className={css.heroMainList}>
          <li className={css.heroMainItem}>
            <p className={css.heroText}>
              <span className={css.heroTextBolt}>
                Найтонший у світі ВОГНЕГАСНИК
              </span>{" "}
              – сучасне рішення для захисту електричного устаткування від пожеж.
              Працює повністю автономно, не потребує підключення до
              електромережі, не шкодить людині чи довкіллю.
              <br />
              Серія пожежогасильних пристроїв FIPRON створена на основі
              термоактивованих мікрокапсул, заповнених інноваційною вогнегасною
              речовиною <span className={css.heroTextBolt}>Novec™ 1230.</span>
            </p>
          </li>

          <li className={css.heroMainItem}>
            <p className={css.heroText}>
              <span className={css.heroTextBolt}>
                Переваги цього компонента:
              </span>
            </p>
            <ul className={css.heroList}>
              <li className={css.heroItem}>
                активується локально при досягненні критичної температури (без
                стороннього втручання);
              </li>
              <li className={css.heroItem}>
                не провокує корозію, не залишає слідів після спрацювання;
              </li>
              <li className={css.heroItem}>
                абсолютно безпечний для електроніки, людей і тварин.
              </li>
            </ul>
          </li>

          <li className={css.heroMainItem}>
            <p className={css.heroText}>
              Системи <span className={css.heroTextBolt}>FIPRON</span>{" "}
              забезпечують миттєве локальне гасіння пожежі на стадії її
              зародження, зберігаючи не лише обладнання, а й безперервність
              критичних процесів. Це, по суті, найтонший у світі вогнегасник,
              який легко монтується в електричну шафу, не залежить від зовнішніх
              джерел електроживлення та автоматично спрацьовує при нагріванні до
              200 °C.
            </p>
            <ul className={css.heroList}>
              <li className={css.heroItem}>
                час ліквідації пожежі – до 1 хвилини.
              </li>
            </ul>
          </li>

          <li className={css.heroMainItem}>
            <p className={css.heroText}>
              <span className={css.heroTextBolt}>
                Як правильно розрахувати захищуваний об’єм (у літрах):
              </span>
              <br />
              Перемножити висоту, ширину та глибину електрошафи (в сантиметрах)
              і поділити на 1000. Наприклад: (50 × 30 × 10) / 1000 = 15 літрів.
            </p>
          </li>

          <li className={css.heroMainItem}>
            <p className={css.heroText}>
              <span className={css.heroTextBolt}>Технічні характеристики:</span>
            </p>
            <ul className={css.heroList}>
              <li className={css.heroItem}>Класи пожеж: A, B, E</li>
              <li className={css.heroItem}>
                Температура спрацювання: до 200 °C
              </li>
              <li className={css.heroItem}>
                Робоча температура: від –50 °C до +80 °C
              </li>
              <li className={css.heroItem}>Ступінь захисту: IP20 та вище</li>
              <li className={css.heroItem}>Робоча напруга: до 1000 В</li>
              <li className={css.heroItem}>
                Термін придатності: 60 місяців з дня встановлення
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HeaderFipron;
