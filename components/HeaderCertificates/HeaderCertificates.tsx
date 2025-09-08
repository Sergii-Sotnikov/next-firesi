
import Link from "next/link";
import css from "./HeaderCertificates.module.css"
import { MdOutlineArrowBackIos } from "react-icons/md";
import HeaderMobile from "@/components/Header/Mobile/HeaderMobile";




const HeaderCertificates = ()=>{
 return (
    <>
    <section className={css.HeaderCertificates} id="hero">
      <div className={css.containerHeader}>
        <nav className={css.navHeader}>
              <Link href="/" className={css.navElem}>
                <MdOutlineArrowBackIos /> <span className={css.btnBack}>Повернутись на головну сторінку</span>
              </Link>
        </nav>
                <Link className={css.linkLogo} href="/">
          <p className={css.logoTextHeader}>
            Fire<span className={css.logoTextHeaderSpan}>tech</span>
          </p>
        </Link>
      </div>
    </section>
    {/* <HeaderMobile /> */}
    </>
  );
}

export default HeaderCertificates