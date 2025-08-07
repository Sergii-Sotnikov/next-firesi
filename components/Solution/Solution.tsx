import css from "./Solution.module.css";

export default function Solution() {
  return (
    <section className={css.solution}>
      <div className={css.container}>
        <p className={css.title}>Гасить aбсалютно ВСЕ!</p>
        <p className={css.addtitle}>
          багато загроз одне рішення вогнегасник FIRESI
        </p>
        <p className={css.text}>
          Бензин, розчинники, олії, жир, пропан, метан, природний газ,
          електронне обладнання під напругою, електропроводка, ноутбуки,
          смартфони, електросамокати та інші пристрої з літій-іонними батареями.
          Один вогнегасник для всіх загроз, без роздумів. Цей унікальний
          універсальний засіб пожежогасіння усуває необхідність мати кілька
          типів вогнегасників, спрощуючи процес вибору та застосування в
          критичних ситуаціях. Він забезпечує миттєву реакцію на будь-яку
          пожежну загрозу, дозволяючи діяти швидко та рішуче.
        </p>
        <ul className={css.list}>
          <li className={css.item}>
            <picture>
              <source
                srcSet="/img/webp/fire_equipment.webp 1x, /img/webp/fire_equipment@2x.webp 2x"
                type="image/webp"
              />
              <img
                src="/img/webp/fire_equipment.webp"
                alt="Fire equipment"
                className="image"
                width={300}
                height={250}
              />
            </picture>
          </li>
          <li className={css.item}>
            <picture>
              <source
                srcSet="/img/webp/fire_kitchen.webp 1x, /img/webp/fire_kitchen@2x.webp 2x"
                type="image/webp"
              />
              <img
                src="/img/webp/fire_kitchen.webp"
                alt="Fire equipment"
                className="image"
                width={300}
                height={250}
              />
            </picture>
          </li>
          <li className={css.item}>
            <picture>
              <source
                srcSet="/img/webp/fire_electrical_panel.webp 1x, /img/webp/fire_electrical_panel@2x.webp 2x"
                type="image/webp"
              />
              <img
                src="/img/webp/fire_electrical_panel.webp"
                alt="Fire equipment"
                className="image"
                width={300}
                height={250}
              />
            </picture>
          </li>
          <li className={css.item}>
            <picture>
              <source
                srcSet="/img/webp/fire_computer.webp 1x, /img/webp/fire_computer@2x.webp 2x"
                type="image/webp"
              />
              <img
                src="/img/webp/fire_computer.webp"
                alt="Fire equipment"
                className="image"
                width={300}
                height={250}
              />
            </picture>
          </li>
          <li className={css.item}>
            <picture>
              <source
                srcSet="/img/webp/fire_scooter.webp 1x, /img/webp/fire_scooter@2x.webp 2x"
                type="image/webp"
              />
              <img
                src="/img/webp/fire_scooter.webp"
                alt="Fire equipment"
                className="image"
                width={300}
                height={250}
              />
            </picture>
          </li>
          <li className={css.item}>
            <picture>
              <source
                srcSet="/img/webp/fire_car.webp 1x, /img/webp/fire_car@2x.webp 2x"
                type="image/webp"
              />
              <img
                src="/img/webp/fire_car.webp"
                alt="Fire equipment"
                className="image"
                width={300}
                height={250}
              />
            </picture>
          </li>
        </ul>
      </div>
    </section>
  );
}
