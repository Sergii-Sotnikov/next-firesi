import css from "./ContactMobile.module.css";
import Link from "next/link";
import "react-phone-input-2/lib/style.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";


const ContactMobile = () => {
  return (
    <section className={css.contactMobile}>
      <div className={css.container}>
    <ul className={css.navList}>
      <li className={css.navItem}>
        <Link
          href="https://www.facebook.com/profile.php?id=61577673877070"
          target="_blank"
          rel="noopener noreferrer"
          className={css.socItem}
        >
          <FaFacebookF size={28} />
        </Link>
      </li>
      <li className={css.navItem}>
        <Link
          href="https://www.instagram.com/stop_fire_lviv?utm_source=ig_web_button_share_sheet&igsh=MWtwYmVvaDJieTI3dA%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className={css.socItem}
        >
          <FaInstagram size={28} />
        </Link>
      </li>
      <li className={css.navItem}>
        <Link
          href="https://www.tiktok.com/@stopfire.firesi?_t=ZM-8zYKw5JU7Jm"
          target="_blank"
          rel="noopener noreferrer"
          className={css.socItem}
        >
          <AiFillTikTok size={28} />
        </Link>
      </li>
    </ul>
    </div>
    </section>
  );
};

export default ContactMobile;
