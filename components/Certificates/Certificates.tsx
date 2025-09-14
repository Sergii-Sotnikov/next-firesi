import css from "./Certificates.module.css";
import Image from "next/image";

// Declaration 
import decl1 from "@/public/img/certificates/declaration_EXcellent_UA_Page_1_of_3.jpg";
import decl2 from "@/public/img/certificates/declaration_EXcellent_UA_Page_2_of_3.jpg";
import decl3 from "@/public/img/certificates/declaration_EXcellent_UA_Page_3_of_3.jpg";

// Certificates
import frseF62_cert from "@/public/img/certificates/certificate_of_Conformity_FRSE_F6_2_Page_1_of_1.jpg";
import frseF62_te1 from "@/public/img/certificates/fire_extinguisher_type_examination_certificate_FRSE_F6_2_Page_1_of_4.jpg";
import frseF62_te2 from "@/public/img/certificates/fire_extinguisher_type_examination_certificate_FRSE_F6_2_Page_2_of_4.jpg";
import frseF62_te3 from "@/public/img/certificates/fire_extinguisher_type_examination_certificate_FRSE_F6_2_Page_3_of_4.jpg";
import frseF62_te4 from "@/public/img/certificates/fire_extinguisher_type_examination_certificate_FRSE_F6_2_Page_4_of_4.jpg";
import frseF2_cert from "@/public/img/certificates/certificate_of_Conformity_FRSE_F2_Page_1_of_1.jpg";
import cord_cert from "@/public/img/certificates/certificate_of_Conformity_FIPRON_CORD_Page_1_of_1.jpg";
import stickers_cert from "@/public/img/certificates/certificate_of_Conformity_FIPRON_STICKERS_Page_1_of_1.jpg";

const Certificates = () => {
  const declarations = [
    { src: decl1, alt: "Декларація відповідності — сторінка 1", priority: true },
    { src: decl2, alt: "Декларація відповідності — сторінка 2" },
    { src: decl3, alt: "Декларація відповідності — сторінка 3" },
  ];

  const certificates = [
    { src: frseF62_cert, alt: "Сертифікат відповідності — FRSE-F6-2" },
    { src: frseF62_te1, alt: "Сертифікація типу — FRSE-F6-2, стор. 1 з 4" },
    { src: frseF62_te2, alt: "Сертифікація типу — FRSE-F6-2, стор. 2 з 4" },
    { src: frseF62_te3, alt: "Сертифікація типу — FRSE-F6-2, стор. 3 з 4" },
    { src: frseF62_te4, alt: "Сертифікація типу — FRSE-F6-2, стор. 4 з 4" },
    { src: frseF2_cert, alt: "Сертифікат відповідності — FRSE-F2" },
    { src: cord_cert, alt: "Сертифікат відповідності — FIPRON Cord" },
    { src: stickers_cert, alt: "Сертифікат відповідності — FIPRON Stickers" },
  ];

  return (
    <section className={css.certificates}>
      <div className={css.container}>
        <h2 className={css.title}>Декларація відповідності</h2>
        <ul className={css.declarationList}>
          {declarations.map((img, i) => (
            <li key={i} className={css.declarationItem}>
              <Image
                className={css.declarationImage}
                src={img.src}
                alt={img.alt}
                placeholder="blur"
                {...(img.priority ? { priority: true } : {})}
              />
            </li>
          ))}
        </ul>

        <h2 className={css.titleSert}>Сертифікат відповідності</h2>
        <ul className={css.certificateList}>
          {certificates.map((img, i) => (
            <li key={i} className={css.certificateItem}>
              <Image
                className={css.certificateImage}
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

export default Certificates;
