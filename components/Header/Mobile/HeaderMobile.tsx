"use client";
import { useState } from "react";
import Link from "next/link";
import css from "./HeaderMobile.module.css";
import { IoMdMenu } from "react-icons/io";
import { AiOutlineCloseSquare } from "react-icons/ai";

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
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav"
      > {!open ? (<IoMdMenu size={26}/>) : (<AiOutlineCloseSquare size={26}/>)}
        <span />
        <span />
        <span />
      </button>

      {open && (
        <nav id="mobile-nav" className={css.menu}>
          <ul>
            <li><Link href="/fipron" onClick={() => setOpen(false)}>Fipron</Link></li>
            <li><Link href="/certificates" onClick={() => setOpen(false)}>Сертифікати</Link></li>
            <li><Link href="/#contacts" onClick={() => setOpen(false)}>Контакти</Link></li>
          </ul>
        </nav>
      )}
    </div>
    </section>
  );
}