import css from "./VideoMainPage.module.css"

export default function VideoMainPage(){
  return (
    <section className={css.video}>
      <div className={css.container}>
        <div className={css.videoWrapper}>
<iframe
  src="https://www.youtube.com/embed/wYesTZs_8-o?controls=1"
  title="YouTube video player"
  frameBorder={0}
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>
        </div>
      </div>
    </section>
  );
}