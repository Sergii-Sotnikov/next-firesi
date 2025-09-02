"use client";
import { useState } from "react";
import Link from "next/link";
import css from "./HeaderMobile.module.css";
import { IoMdMenu } from "react-icons/io";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { LuDock } from "react-icons/lu";
import { LuHousePlug } from "react-icons/lu";
import { LuFireExtinguisher } from "react-icons/lu";


export default function HeaderMobile() {
  const [open, setOpen] = useState(false);

  return (
    <section className={css.header} id="hero">
    <div className={css.container}>
      <Link href="/" className={css.logo}>
        Fire<span className={css.logoAccent}>tech</span>
      </Link>

      <button
        className={css.burger}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls="mobile-nav"
      > {!open ? (<IoMdMenu size={26} className={css.burgerIcon}/>) : (<AiOutlineCloseSquare size={26} className={css.burgerIcon}/>)}
      </button>

      {open && (
        <nav id="mobile-nav" className={`${css.menu} ${open ? css.menuOpen : ""}`}>
          <ul className={css.navList}>
            <li className={css.navItem}><Link className={css.navLink} href="/fipron" onClick={() => setOpen(false)}><LuFireExtinguisher className={css.navIcon} size={24}/> Firesi</Link></li>
            <li className={css.navItem}><Link className={css.navLink} href="/certificates" onClick={() => setOpen(false)}><LuHousePlug className={css.navIcon} size={24}/> Fipron</Link></li>
            <li className={css.navItem}><Link className={css.navLink} href="/#contacts" onClick={() => setOpen(false)}><LuDock className={css.navIcon} size={24}/> Сертифікати</Link></li>
          </ul>
        </nav>
      )}
    </div>
    </section>
  );
}