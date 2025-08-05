
import Link from "next/link";
import css from "./HeaderFipron.module.css"
import Image from "next/image";
import { MdOutlineArrowBackIos } from "react-icons/md";


const HeaderFipron = ()=>{
 return (
    <section className={css.header}>
      <div className={css.containerHeader}>
        <Link className={css.linkLogo} href="/">
          <p className={css.logoTextHeader}>
            Fire<span className={css.logoTextHeaderSpan}>tech</span>
          </p>
        </Link>
        <nav className={css.navHeader}>

              <Link href="/" className={css.navElem}>
                <MdOutlineArrowBackIos /> <span className={css.btnBack}>Повернутись на головну сторінку</span>
              </Link>
        </nav>
        <button className={css.btnHeader}>
          <span className={css.btnText}>замовити</span>
        </button>
      </div>
    </section>
  );
}

export default HeaderFipron