import Link from "next/link";
import type { Metadata } from "next";
import css from "./not-found.module.css";

export const metadata: Metadata = {
  title: "FIRETECH - 404: Сторінку не знайдено",
  description: "Вибачте, сторінки не існує або її було переміщено.",
  openGraph: {
    title: "FIRETECH - 404: Сторінку не знайдено",
    description: "Сторінка не існує або була переміщена.",
    url: "https://firetech.com.ua/404",
    siteName: "FIRETECH",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "FIRETECH - 404: Сторінку не знайдено",
      },
    ],
    locale: "uk_UA",
    type: "website",
  },
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className={css.wrapper} aria-labelledby="not-found-title">
      <div className={css.card}>
        <p className={css.code} aria-hidden>404</p>
        <h1 id="not-found-title" className={css.title}>
          Сторінку не знайдено
        </h1>
        <p className={css.desc}>
          Можливо, адресу введено з помилкою або сторінку було переміщено.
        </p>

        <div className={css.actions}>
          <Link href="/" className={css.btnPrimary}>
            На головну
          </Link>
          <Link href="/#contacts" className={css.btnSecondary}>
            Контакти
          </Link>
        </div>
      </div>
    </main>
  );
}