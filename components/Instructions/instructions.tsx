import css from "./instructions.module.css";
import Image from "next/image";

const Instructions = () => {
  return (
    <>
      <section className={css.instructions}>
        <div className={css.container}>
          <h2 className={css.title}>Інструкція з експлуатаціі</h2>
          <ul className={css.instructionsList}>
            <li className={css.instructionsItem}>
              <Image
                className={css.instructionsImage}
                src="/img/instructions/FRSE-F6_instruction_Page_1_of_2.jpg"
                alt="Інструкція з експлуатаціі FRSE-F6 сторінка 1"
                width={1140}
                height={1646}
              />
            </li>
            <li className={css.instructionsItem}>
              <Image
                className={css.instructionsImage}
                src="/img/instructions/FRSE-F6_instruction_Page_2_of_2.jpg"
                alt="Інструкція з експлуатаціі FRSE-F6 сторінка 2"
                width={1140}
                height={1646}
              />
            </li>
            <li className={css.instructionsItem}>
              <Image
                className={css.instructionsImage}
                src="/img/instructions/FRSE_instruction_Page_1_of_3.jpg"
                alt="Інструкція з експлуатаціі FRSE сторінка 1"
                width={1140}
                height={1646}
              />
            </li>
            <li className={css.instructionsItem}>
              <Image
                className={css.instructionsImage}
                src="/img/instructions/FRSE_instruction_Page_2_of_3.jpg"
                alt="Інструкція з експлуатаціі FRSE сторінка 2"
                width={1140}
                height={1646}
              />
            </li>
            <li className={css.instructionsItem}>
              <Image
                className={css.instructionsImage}
                src="/img/instructions/FRSE_instruction_Page_3_of_3.jpg"
                alt="Інструкція з експлуатаціі FRSE сторінка 3"
                width={1140}
                height={1646}
              />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Instructions;
