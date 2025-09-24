import css from "./WorksFipron.module.css";

const WorksFipron = () => {
  return (
    <section className={css.works}>
      <div className={css.container}>
        <h2 className={css.worksTitle}>як це працює</h2>
        <div className={css.videoWrapper}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Ca9C34MVQy8"
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

export default WorksFipron;