import css from "./Foote.module.css";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <section className={css.footer} id="hero">
      <div className={css.container}>
        <nav className={css.footerNav}>
          <li className={css.footerNavItem}>
            <Link href="/video" className={css.footerNavElem}>
              Відео
            </Link>
          </li>
          <li className={css.footerNavItem}>
            <Link href="/instructions" className={css.footerNavElem}>
              Інструкція з використання
            </Link>
          </li>
          <li className={css.footerNavItem}>
            <Link href="#header" className={css.footerNavElem}>
              Повернутись на початок
            </Link>
          </li>
          <li className={css.footerNavItem}>
            <Link
              href="https://www.facebook.com/profile.php?id=61577673877070"
              target="_blank"
              rel="noopener noreferrer"
              className={css.footerSocItem}
            >
              <FaFacebookF size={32} />
            </Link>
          </li>
          <li className={css.footerNavItem}>
            <Link
              href="https://www.instagram.com/stop_fire_lviv?utm_source=ig_web_button_share_sheet&igsh=MWtwYmVvaDJieTI3dA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className={css.footerSocItem}
            >
              <FaInstagram size={32} />
            </Link>
          </li>
          <li className={css.footerNavItem}>
            <Link
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={css.footerSocItem}
            >
              <AiFillTikTok size={32} />
            </Link>
          </li>
        </nav>
      </div>
    </section>
  );
};

export default Footer;
