import css from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <section className={css.header}>
      <div className={css.container}>
        <Link className={css.linkLogo} href="/">
          <p className={css.logoTextHeader}>
            Fire<span className={css.logoTextHeaderSpan}>tech</span>
          </p>
        </Link>
        <nav className={css.navHeader}>
          <ul className={css.navList}>
            <li className={css.navItem}>
              <Link href="/fipron" className={css.navElem}>
                Firpon
              </Link>
            </li>
            <li className={css.navItem}>
              <Link href="/certificates" className={css.navElem}>
                Сертифікати
              </Link>
            </li>
            <li className={css.navItem}>
              <Link href="#contacts" className={css.navElem}>
                Контакти
              </Link>
            </li>
          </ul>
        </nav>
        <button className={css.btnHeader}>
          <span className={css.btnText}>замовити</span>
        </button>
      </div>
    </section>
  );
};

export default Header;
