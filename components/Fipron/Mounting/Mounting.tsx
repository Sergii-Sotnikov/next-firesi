import css from "./Mounting.module.css";

const Mounting = () => {
  return (
    <section className={css.mounting}>
      <div className={css.container}>
        <h2 className={css.mountingTitle}>Інструкція з монтажу:</h2>
        <p className={css.mountingText}>
          1. Вимкніть живлення електричної шафи.<br />
          2. Зніміть захисну плівку з монтажних площ кріплення.<br />
          3. Наклейте монтажні кріплення всередині електричної шафи та закріпіть шнур пластиковими стяжками.<br />
          4. Переконайтеся, що пристрій надійно закріплений.<br />
          5. Встановіть наклейку із зазначенням дати проведення монтажу.<br />
        </p>
        <div className={css.videoWrapper}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/J3FdlAiFuec"
            title="FIPRON Video"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Mounting;
