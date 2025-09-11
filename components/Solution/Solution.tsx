import css from "./Solution.module.css";
import Image from "next/image";
import SolutionMobileSlider from "./SolutionMobileSlider";

export default function Solution() {
  return (
    <section className={css.solution}>
      <div className={css.container}>
        <p className={css.title}>Гасить абсолютно все!</p>
        <p className={css.addtitle}>
          багато загроз <br className={css.addtitleMobile}/> 
          одне рішення <br className={css.addtitleMobile}/>
          вогнегасник <span className={css.addtitleMobileDefis}>- </span>FIRESI
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
        <div className={css.mobileSwiper}>
          <SolutionMobileSlider />
        </div>
        <ul className={css.list}>
          <li className={css.item}>
            <Image
              src="/img/webp/fire_equipment@2x.webp"
              className={css.imageSolution}
              width={300}
              height={250}
              alt="Fire equipment"
            />
          </li>
          <li className={css.item}>
            <Image
              src="/img/webp/fire_kitchen@2x.webp"
              className={css.imageSolution}
              width={300}
              height={250}
              alt="Fire equipment"
            />
          </li>
          <li className={css.item}>
            <Image
              src="/img/webp/fire_electrical_panel@2x.webp"
              className={css.imageSolution}
              width={300}
              height={250}
              alt="Fire equipment"
            />
          </li>
          <li className={css.item}>
            <Image
              src="/img/webp/fire_computer@2x.webp"
              className={css.imageSolution}
              width={300}
              height={250}
              alt="Fire equipment"
            />
          </li>
          <li className={css.item}>
            <Image
              src="/img/webp/fire_scooter@2x.webp"
              className={css.imageSolution}
              width={300}
              height={250}
              alt="Fire equipment"
            />
          </li>
          <li className={css.item}>
            <Image
              src="/img/webp/fire_car@2x.webp"
              className={css.imageSolution}
              width={300}
              height={250}
              alt="Fire equipment"
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
