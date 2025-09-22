
import css from "./StickerVideo.module.css"

const StickerVideo = ()=>{
return (
    <section className={css.stickerVideo}>
      <div className={css.container}>
        <h2 className={css.stickerVideoTitle}>Захист розподільчої коробки<br /> «FIPRON STIKER»</h2>
        <div className={css.videoWrapper}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/6HAL-d0qPmE"
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

export default StickerVideo
