"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import type { Swiper as SwiperType } from "swiper";

// core styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// локальные стили для слайдера
import css from "./SolutionMobileSlider.module.css";

const slides = [
  { src: "/img/webp/fire_equipment@2x.webp", alt: "Пальне й розчинники" },
  { src: "/img/webp/fire_kitchen@2x.webp", alt: "Кухня та олія" },
  { src: "/img/webp/fire_electrical_panel@2x.webp", alt: "Електрощит" },
  { src: "/img/webp/fire_computer@2x.webp", alt: "Комп’ютер/ноутбук" },
  { src: "/img/webp/fire_scooter@2x.webp", alt: "Електросамокат" },
  { src: "/img/webp/fire_car@2x.webp", alt: "Авто" },
];

export default function SolutionMobileSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className={css.wrap}>
      {/* Main slider */}
      <Swiper
        modules={[FreeMode, Navigation, Thumbs]}
        className={css.mainSwiper}
        spaceBetween={12}
        // важный фолбэк: не передавать разрушенный/пустой swiper
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        style={
          {
            // можно задать бренд-цвет стрелок (через css-переменные)
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties
        }
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i} className={css.slide}>
            <div className={css.card}>
              <Image
                src={s.src}
                alt={s.alt}
                width={300}
                height={250}
                priority={i === 0}
                className={css.img}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbs slider */}
      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[FreeMode, Thumbs]} // ✅ Navigation убран
        className={css.thumbsSwiper}
        spaceBetween={12}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        breakpoints={{
          360: { slidesPerView: 4, spaceBetween: 10 },
          480: { slidesPerView: 5, spaceBetween: 12 },
          768: { slidesPerView: 6, spaceBetween: 12 },
        }}
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i} className={css.thumbSlide}>
            <div className={css.thumbCard}>
              <Image
                src={s.src}
                alt={s.alt}
                width={120}
                height={90}
                className={css.thumbImg}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
