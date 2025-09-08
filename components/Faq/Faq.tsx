"use client";
import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, ChevronUp } from "lucide-react";
import css from "./Faq.module.css";

export default function Faq() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (value: string) => {
    setOpenItems((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const renderIcon = (value: string) => {
    const isOpen = openItems.includes(value);
    return isOpen ? (
      <ChevronUp className={css.icon} />
    ) : (
      <ChevronDown className={css.icon} />
    );
  };

  return (
    <section className={css.faq}>
      <div className={css.container}>
        <h2 className={css.title}>
          Є питання? Ми тут,
          <br className={css.titleAdd} /> щоб допомогти!
        </h2>

        <Accordion.Root
          type="multiple"
          className={css.accordion}
          value={openItems}
          onValueChange={setOpenItems}
        >
          <Accordion.Item value="item-1" className={css.item}>
            <Accordion.Header className={css.header}>
              <Accordion.Trigger className={css.trigger}>
                Можна в машину?
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleItem("item-1");
                  }}
                >
                  {renderIcon("item-1")}
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className={css.content}>
              <p className={css.faqText}>
                Так, абсолютно! Йому не страшний мороз до -15°C ні спека +50°C!
                Краще для авто підійде вогнегасник у форматі спрею, зручно
                тримати в бардачку, або у дверці авто, щоб був під рукою. Ваша
                безпека на дорозі - понад усе.
              </p>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="item-2" className={css.item}>
            <Accordion.Header className={css.header}>
              <Accordion.Trigger className={css.trigger}>
                Який краще вибрати для електрокара?
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleItem("item-2");
                  }}
                >
                  {renderIcon("item-2")}
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className={css.content}>
              <p className={css.faqText}>
                Вогнегасник{" "}
                <span className={css.faqTextBold}>
                  FRSE-F2 (обʼєм заряду - 2 л)
                </span>{" "}
                - оптимальне рішення для захисту електромобілів. Завдяки
                компактним розмірам і спеціальній формулі вогнегасної речовини,
                модель ефективно нейтралізує загоряння в електричних системах та
                акумуляторах, не завдаючи шкоди електроніці та не залишаючи
                агресивних залишків.
              </p>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="item-3" className={css.item}>
            <Accordion.Header className={css.header}>
              <Accordion.Trigger className={css.trigger}>
                Для квартири підходить?
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleItem("item-3");
                  }}
                >
                  {renderIcon("item-3")}
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className={css.content}>
              <p className={css.faqText}>
                Ідеально! Це універсальний захист для будь-якого дому, від
                електроніки до кухні. Нетоксичний. Безпечний для дітей і тварин.
                Не шкодить техніці. Еко-безпечний!
              </p>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="item-4" className={css.item}>
            <Accordion.Header className={css.header}>
              <Accordion.Trigger className={css.trigger}>
                Треба обслуговувати?
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleItem("item-4");
                  }}
                >
                  {renderIcon("item-4")}
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className={css.content}>
              <p className={css.faqText}>
                Забудьте про це на 6 років! Він просто чекає свого часу, без
                зайвих турбот.
              </p>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="item-5" className={css.item}>
            <Accordion.Header className={css.header}>
              <Accordion.Trigger className={css.trigger}>
                Чим він кращий за інші?
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleItem("item-5");
                  }}
                >
                  {renderIcon("item-5")}
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className={css.content}>
              <p className={css.faqText}>
                Firesi – це нове покоління! ГАСИТЬ ОБСАЛЮТНО ВСЕ -рідини, гази,
                олії, навіть палаючі акумулятори - це не просто іновація у світі
                пожежогасіння, це ваш особистий герой, який завжди напоготові.
              </p>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="item-6" className={css.item}>
            <Accordion.Header className={css.header}>
              <Accordion.Trigger className={css.trigger}>
                Можна гасити електроприлади під напругою?
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleItem("item-6");
                  }}
                >
                  {renderIcon("item-6")}
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className={css.content}>
              <p className={css.faqText}>
                Так, він безпечний під час гасіння обладднання яке перебуває під
                напругою!!!
                <br /> спрей FRSE-FS для використання на пожежах під напругою до
                400В;
                <br />
                вогнегасники FRSE-F2 та FRSE-F6, для використання на пожежах під
                напругою до 1000В.
              </p>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </section>
  );
}
