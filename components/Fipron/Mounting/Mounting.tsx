
import css from "./Mounting.module.css"

const Mounting = ()=>{
return (
    <section className={css.mounting}>
      <div className={css.container}>
        <h2 className={css.mountingTitle}>як монтувати</h2>
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
}

export default Mounting
