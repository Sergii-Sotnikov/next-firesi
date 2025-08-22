"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { NavigationOptions } from "swiper/types";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import css from "./Feedbacks.module.css";
import Image from "next/image";

export default function Feedbacks() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [progress, setProgress] = useState(0);

  return (
    <section className={css.feedbacks}>
                    <Image
        className={css.fireImage}
        src="/img/webp/fire_bg@2x.webp"
        width={1440}
        height={650}
        alt="Fire background"
      />
      <div className={css.container}>
        
        <h2 className={css.title}>
          Справжній захист{" "}
          <span className={css.titleAddtext}>
            Іновація в світі пожежогасіння
          </span>
          врятовані життя
        </h2>
        <p className={css.feedbacksGroupTitle}>Реальні історії порятунку.</p>

        <div className={css.nav}>
          <button
            ref={prevRef}
            className={`${css.btn} ${css.prev} ${
              isBeginning ? css.disabled : ""
            }`}
            aria-label="Previous slide"
            disabled={isBeginning}
          >
            <ChevronLeft className={css.btnPrev} size={24} strokeWidth={3.5} />
          </button>
          <button
            ref={nextRef}
            className={`${css.btn} ${css.next} ${isEnd ? css.disabled : ""}`}
            aria-label="Next slide"
            disabled={isEnd}
          >
            <ChevronRight className={css.btnNext} size={24} strokeWidth={3.5} />
          </button>
        </div>

        <div className={css.progressWrapper}>
          <div
            className={css.progressBar}
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>

        <Swiper
          className={css.swiper}
          modules={[Navigation, Autoplay]}
          spaceBetween={16}
          slidesPerView={3}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (typeof swiper.params.navigation === "object") {
              const navigation = swiper.params.navigation as NavigationOptions;
              navigation.prevEl = prevRef.current;
              navigation.nextEl = nextRef.current;
            }
          }}
          onSwiper={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onAutoplayTimeLeft={(_, __, progress) => {
            setProgress(1 - progress);
          }}
        >
          <SwiperSlide className={css.slide}>
            <p className={css.feedbacksGroupRating}>★★★★★</p>
            <p className={css.feedbacksGroupUser}>Ірина І., Київ</p>
            <p className={css.feedbacksGroupText}>
              Мій павербанк загорівся. Жах! Вдома був сперй він загасив вогонь
              за 3 секунди! Жодного диму, бруду, а головне – нічого не згоріло,
              крім павербанка. Це не просто спрей, це рятівник мого спокою!”
            </p>
          </SwiperSlide>

          <SwiperSlide className={css.slide}>
            <p className={css.feedbacksGroupRating}>★★★★★</p>
            <p className={css.feedbacksGroupUser}>Андрій К., Черкаси</p>
            <p className={css.feedbacksGroupText}>
              Купив цей чудо вогнегасник для мами на дачу. Вона переживала за
              старі розетки. Тепер спокійна! Пояснив як користуватись такий
              легкий і зручний, що навіть вона ним справиться. Найкращий
              подарунок – це спокій її душі!
            </p>
          </SwiperSlide>

          <SwiperSlide className={css.slide}>
            <p className={css.feedbacksGroupRating}>★★★★★</p>
            <p className={css.feedbacksGroupUser}>Олена В., Львів.</p>
            <p className={css.feedbacksGroupText}>
              Загорілося масло на сковорідці. Кошмар! Я не знала, що робити.
              Firesi врятував нашу кухню від повної пожежі. Швидко, чисто. Він
              просто МАЄ бути в кожному домі. Обов’язково!
            </p>
          </SwiperSlide>

          <SwiperSlide className={css.slide}>
            <p className={css.feedbacksGroupRating}>★★★★★</p>
            <p className={css.feedbacksGroupUser}>Віктор Л., Київ</p>
            <p className={css.feedbacksGroupText}>
              Купив для сім’ї після новин про пожежі електросамокатів. Перевірив
              на навчанні – гасить моментально, без жодних бризок та диму. Тепер
              почуваюся значно спокійніше вдома й у гаражі.
            </p>
          </SwiperSlide>

          <SwiperSlide className={css.slide}>
            <p className={css.feedbacksGroupRating}>★★★★★</p>
            <p className={css.feedbacksGroupUser}>Ірина С., Суми</p>
            <p className={css.feedbacksGroupText}>
              Порадив знайомий, який мав пожежу зарядної станції і справився з
              нею за допомогою вашого великого вогнегасника. Після ціє розповіді
              я купила аж два, тепер один стоїть у майстерні, другий — у домі.
            </p>
          </SwiperSlide>

          <SwiperSlide className={css.slide}>
            <p className={css.feedbacksGroupRating}>★★★★★</p>
            <p className={css.feedbacksGroupUser}>Світлана Р., Тернопіль</p>
            <p className={css.feedbacksGroupText}>
              У нас вдома багато гаджетів — ноутбуки, самокат, дитячий
              електромобіль. Вибирали спеціально модель, яка підходить для
              літієвих батарей. Сподіваюся, ніколи не доведеться користуватись,
              але відчуття захищеності безцінне.
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
