import css from "./instructions.module.css";
import Image from "next/image";

// FRSE-F6 (2 стр.)
import frseF6_1of2 from "@/public/img/instructions/FRSE-F6_instruction_Page_1_of_2.jpg";
import frseF6_2of2 from "@/public/img/instructions/FRSE-F6_instruction_Page_2_of_2.jpg";

// FRSE (3 стр.)
import frse_1of3 from "@/public/img/instructions/FRSE_instruction_Page_1_of_3.jpg";
import frse_2of3 from "@/public/img/instructions/FRSE_instruction_Page_2_of_3.jpg";
import frse_3of3 from "@/public/img/instructions/FRSE_instruction_Page_3_of_3.jpg";

const Instructions = () => {
  const frseF6 = [
    { src: frseF6_1of2, alt: "Інструкція з експлуатації FRSE-F6 — сторінка 1", priority: true },
    { src: frseF6_2of2, alt: "Інструкція з експлуатації FRSE-F6 — сторінка 2" },
  ];

  const frse = [
    { src: frse_1of3, alt: "Інструкція з експлуатації FRSE — сторінка 1" },
    { src: frse_2of3, alt: "Інструкція з експлуатації FRSE — сторінка 2" },
    { src: frse_3of3, alt: "Інструкція з експлуатації FRSE — сторінка 3" },
  ];

  return (
    <section className={css.instructions}>
      <div className={css.container}>
        <h2 className={css.title}>Інструкція з експлуатації FRSE-F6</h2>
        <ul className={css.instructionsList}>
          {frseF6.map((img, i) => (
            <li key={i} className={css.instructionsItem}>
              <Image
                className={css.instructionsImage}
                src={img.src}
                alt={img.alt}
                placeholder="blur"
                {...(img.priority ? { priority: true } : {})}
              />
            </li>
          ))}
        </ul>

        <h2 className={css.title}>Інструкція з експлуатації FRSE</h2>
        <ul className={css.instructionsList}>
          {frse.map((img, i) => (
            <li key={i} className={css.instructionsItem}>
              <Image
                className={css.instructionsImage}
                src={img.src}
                alt={img.alt}
                placeholder="blur"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Instructions;
