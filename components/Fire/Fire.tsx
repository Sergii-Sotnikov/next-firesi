import css from "./Fire.module.css";
import Image from "next/image";

export default function Fire() {
  return (
    <section className={css.fire}>

      <Image
        className={css.fireImage}
        src="/img/webp/fire_bg@2x.webp"
        width={1440}
        height={620}
        alt="Fire background"
      />
    </section>
  );
}
