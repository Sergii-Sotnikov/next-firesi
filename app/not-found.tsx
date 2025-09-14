import Link from "next/link";
import css from "./not-found.module.css";
import Image from "next/image";
import { contacts } from "@/src/data/contacts";


export default function NotFound() {
  return (
    <section className={css.notfound}>
      <div className={css.container}>
       <div className={css.errorImageWrap}>
          <Image
            src="/img/desktop_404.png"
            className={css.errorImage}
            width={500}
            height={200}
            priority
            alt="Сторінка не знайдена"
          />
        </div>
        <h2 className={css.titleError}>
          Сторінка не знайдена,
          <br /> але ваша безпека завжди поруч.
        </h2>
        <p className={css.textError}>
          Можливо, посилання застаріло або змінилось,
          <br />
          але команда <span className={css.textErrorLogo}>
          {"\u00A0\u00A0\u00A0"}
          Fire<span className={css.textErrorLogoAdd}>tech</span></span>{"\u00A0\u00A0\u00A0"}
          готова допомогти:
        </p>
        <Link href="/" className={css.btnBack}>
          <span className={css.btnText}>на головну</span>
        </Link>
        <nav className={css.navError}>
        <a href={`tel:${contacts.email}`} className={css.addressPhone}>
          {contacts.phone}
        </a>
        <a href={`mailto:${contacts.email}`} className={css.addressMail}>
          {contacts.email}
        </a>
        </nav>
      </div>
    </section>
  );
}
