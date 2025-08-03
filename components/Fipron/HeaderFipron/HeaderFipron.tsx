
import Link from "next/link";
import css from "./HeaderFipron.module.css"
import Image from "next/image";
import { MdOutlineArrowBackIos } from "react-icons/md";


const HeaderFipron = ()=>{
 return (
    <section className={css.header}>
      <div className={css.container}>
        <Link className={css.linkLogo} href="/">
        <Image className={css.logoGif} src="/img/fire.gif" width={44} height={52} alt="Fire animation"></Image>
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
          <Image className={css.logoGif} src="/img/fire.gif" width={30} height={47} alt="Fire animation"></Image>
        </button>
      </div>
    </section>
  );
}

export default HeaderFipron