"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import css from "./HeaderMobile.module.css";
import { IoMdMenu } from "react-icons/io";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { LuDock, LuHousePlug, LuFireExtinguisher } from "react-icons/lu";
import { usePathname } from "next/navigation";

export default function HeaderMobile() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");


  useEffect(() => {
    const img = new Image();
    img.src = "/img/fire_backgraund_mobile.png";
  }, []);


  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);


  useEffect(() => {
    setOpen(false);
  }, [pathname]);


  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [open]);

  return (
    <section className={css.header} id="hero">
      <div className={css.container}>
        <Link href="/" className={css.logo}>
          Fire<span className={css.logoAccent}>tech</span>
        </Link>

        <button
          ref={buttonRef}
          className={css.burger}
          onClick={() => setOpen((p) => !p)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
        >
          {!open ? (
            <IoMdMenu size={26} className={css.burgerIcon} />
          ) : (
            <AiOutlineCloseSquare size={26} className={css.burgerIcon} />
          )}
        </button>

        {/* Overlay: клик по нему закрывает меню */}
        {open && <div className={css.overlay} onClick={() => setOpen(false)} />}

        {open && (
          <nav
            ref={menuRef}
            id="mobile-nav"
            className={`${css.menu} ${open ? css.menuOpen : ""}`}
          >
            <ul className={css.navList}>
              <li className={css.navItem}>
                <Link
                  href="/"
                  className={`${css.navLink} ${
                    isActive("/") ? css.navLinkActive : ""
                  }`}
                  aria-current={isActive("/") ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  <LuFireExtinguisher className={css.navIcon} size={24} /> Firesi
                </Link>
              </li>
              <li className={css.navItem}>
                <Link
                  href="/fipron"
                  className={`${css.navLink} ${
                    isActive("/fipron") ? css.navLinkActive : ""
                  }`}
                  aria-current={isActive("/fipron") ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  <LuHousePlug className={css.navIcon} size={24} /> Fipron
                </Link>
              </li>
              <li className={css.navItem}>
                <Link
                  href="/certificates"
                  className={`${css.navLink} ${
                    isActive("/certificates") ? css.navLinkActive : ""
                  }`}
                  aria-current={isActive("/certificates") ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  <LuDock className={css.navIcon} size={24} /> Сертифікати
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </section>
  );
}
