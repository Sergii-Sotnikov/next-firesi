import css from "./Certificates.module.css";
import Image from "next/image";

import declPage1 from "@/public/img/certificates/declaration_EXcellent_UA_Page_1_of_3.jpg";

const Certificates = () => {
  return (
    <>
      <section className={css.certificates}>
        <div className={css.container}>
          <h2 className={css.title}>Декларація відповідності</h2>
          <ul className={css.declarationList}>
            <li className={css.declarationItem}>
              <Image
                className={css.declarationImage}
                src={declPage1}
                alt="Сетрифікат відповідності сторінка 1"
                priority
                placeholder="blur"
              />
            </li>
            <li className={css.declarationItem}>
              <Image
                className={css.declarationImage}
                src="/img/certificates/declaration_EXcellent_UA_Page_2_of_3.jpg"
                alt="Сетрифікат відповідності сторінка 2"
                width={1140}
                height={1646}
              />
            </li>
            <li className={css.declarationItem}>
              <Image
                className={css.declarationImage}
                src="/img/certificates/declaration_EXcellent_UA_Page_3_of_3.jpg"
                alt="Сетрифікат відповідності сторінка 3"
              />
            </li>
          </ul>
          <h2 className={css.titleSert}>Сертифікат відповідності</h2>
          <ul className={css.certificateList}>
            <li className={css.certificateItem}>
              <Image
                className={css.certificateImage}
                src="/img/certificates/certificate_of_Conformity_FRSE_F6_2_Page_1_of_1.jpg"
                alt="Сетрифікат відповідності вогнегасник FRSE-F6-2"
              />
            </li>
            <li className={css.certificateItem}>
              <Image
                className={css.certificateImage}
                src="/img/certificates/fire_extinguisher_type_examination_certificate_FRSE_F6_2_Page_1_of_4.jpg"
                alt="Декларація відповідності вогнегасник FRSE-F6-2 сторінка 1"
              />
            </li>
            <li className={css.certificateItem}>
              <Image
                className={css.certificateImage}
                src="/img/certificates/fire_extinguisher_type_examination_certificate_FRSE_F6_2_Page_2_of_4.jpg"
                alt="Декларація відповідності вогнегасник FRSE-F6-2 сторінка 2"
              />
            </li>
            <li className={css.certificateItem}>
              <Image
                className={css.certificateImage}
                src="/img/certificates/fire_extinguisher_type_examination_certificate_FRSE_F6_2_Page_3_of_4.jpg"
                alt="Декларація відповідності вогнегасник FRSE-F6-2 сторінка 3"
              />
            </li>
            <li className={css.certificateItem}>
              <Image
                className={css.certificateImage}
                src="/img/certificates/fire_extinguisher_type_examination_certificate_FRSE_F6_2_Page_4_of_4.jpg"
                alt="Декларація відповідності вогнегасник FRSE-F6-2 сторінка 4"
              />
            </li>
            <li className={css.certificateItem}>
              <Image
                className={css.certificateImage}
                src="/img/certificates/certificate_of_Conformity_FRSE_F2_Page_1_of_1.jpg"
                alt="Декларація відповідності вогнегасник FRSE-F2 сторінка 1"
              />
            </li>
            <li className={css.certificateItem}>
              <Image
                className={css.certificateImage}
                src="/img/certificates/certificate_of_Conformity_FIPRON_CORD_Page_1_of_1.jpg"
                alt="Декларація відповідності вогнегасник шнур CORD сторінка 1"
              />
            </li>
            <li className={css.certificateItem}>
              <Image
                className={css.certificateImage}
                src="/img/certificates/certificate_of_Conformity_FIPRON_STICKERS_Page_1_of_1.jpg"
                alt="Декларація відповідності мініатюрна автономна система пожежогасіння STICKERS сторінка 1"
              />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Certificates;
