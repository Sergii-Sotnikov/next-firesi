import css from "./Arguments.module.css";
import Image from "next/image";
import ArgumentsMobileSlider from "./ArgumentsMobileSlider";

export default function Arguments() {
  return (
    <section className={css.arguments}>
                          <Image
        className={css.fireImage}
        src="/img/webp/fire_bg@2x.webp"
        width={1440}
        height={650}
        alt="Fire background"
      />
      <div className={css.container}>
        <h3 className={css.title}>чому варто обрати саме Firesi ?</h3>
                <div className={css.argumentsMobileSwiper}>
          <ArgumentsMobileSlider/>
        </div>
        <ul className={css.list}>
          <li className={css.item}>
            <p className={css.number}>1</p>
            <p className={css.itemTitle}>Гасить літій - іонні батареї!</p>
            <p className={css.text}>
              Цей інноваційний вогнегасник спеціально розроблений для гасіння
              пожеж, що виникають у літій-іонних акумуляторах та сучасній
              електроніці. Він надійно працює для: ноутбуків і смартфонів,
              електросамокатів та електровелосипедів, павербанків, зарядних
              електростанцій, електроавтомобілів та інших пристроїв із
              вбудованими батареями.
            </p>
          </li>

          <li className={css.item}>
            <p className={css.number}>2</p>
            <p className={css.itemTitle}>Гасить обаднання під напругою! </p>
            <p className={css.text}>
              Безпечний під час гасіння обладднання яке перебуває під
              напругою!!!
            </p>
            <ul className={css.additionalList}>
              <li className={css.additionalItem}>
                <p className={css.text}>
                  спрей FRSE-FS для використання на пожежах під напругою до
                  400В;
                </p>
              </li>
              <li className={css.additionalItem}>
                <p className={css.text}>
                  вогнегасники FRSE-F2 та FRSE-F6, для використання на пожежах
                  під напругою до 1000В.
                </p>
              </li>
            </ul>
          </li>

          <li className={css.item}>
            <p className={css.number}>3</p>
            <p className={css.itemTitle}>Вогонь не повернеться!</p>
            <p className={css.text}>
              Наша унікальна речовина створює невидимий бар’єр, який не дасть
              вогню спалахнути знову після гасіння. Також має вогнезахисні
              властивості, якщо обробити поверхню - матеріал набуває
              вогнезахисних властивостей, забезпечуючи надійний захист від
              займання.
            </p>
          </li>

          <li className={css.item}>
            <p className={css.number}>4</p>
            <p className={css.itemTitle}>Нетоксичний!</p>
            <p className={css.text}>
              Безпечний для дітей і тварин.Не шкодить техніці. Еко-безпечний!
              Забудьте про зіпсований ремонт і чорну сажу. Firesi не залиає
              жодного бруду! Діє чисто, немов його й не було. Прибрати його
              залишки простіше, ніж пил. Ваші речі залишаться цілими і не
              ушкодженими.
            </p>
          </li>

          <li className={css.item}>
            <p className={css.number}>5</p>
            <p className={css.itemTitle}>6 років гарантіі!</p>
            <p className={css.text}>
              Не потребує обслуговування і перевірок 6 років + !  Він чекає свого часу ! 
            </p>
          </li>

          <li className={css.item}>
            <p className={css.number}>6</p>
            <p className={css.itemTitle}>Працює в любу погоду!</p>
            <p className={css.text}>
              Працює від -15°C до +50°C. Йому байдуже на мороз чи спеку! Ідеально для машини!
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
