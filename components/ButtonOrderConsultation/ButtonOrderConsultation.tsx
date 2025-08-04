import css from "./ButtonOrderConsultation.module.css"



interface Props {
  children: React.ReactNode;
}

const ButtonOrderConsultation = ({children}:Props) => {
  return (
    <button
      className={css.btnOrderConsultation}
      type="button"
    >
      <span className={css.btnOrderConsultationSpan}>
        {children}
      </span>
    </button>
  );
};

export default ButtonOrderConsultation;
