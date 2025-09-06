
import Link from "next/link";
import css from "./HeaderFipron.module.css"
import { MdOutlineArrowBackIos } from "react-icons/md";
import HeaderMobile from "@/components/Header/Mobile/HeaderMobile";

type Prop={
  children?: React.ReactNode;
}


const HeaderFipron = ({children}:Prop)=>{
 return (
  <>
    <section className={css.headerDesktop} id="hero">
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
        {children}
      </div>
    </section>
    <HeaderMobile />
    </>
  );
}

export default HeaderFipron