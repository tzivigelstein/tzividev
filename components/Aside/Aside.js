import styles from './aside.module.css'
import { DownloadIcon, GithubIcon, LinkedinIcon } from '../Icons/Index'

const Aside = () => {
  return (
    <aside className={styles.aside_container}>
      <div className={styles.aside_container__image_container}>
        <div className={styles.image_container__circle}></div>
        <img className={styles.image_container__image} src="/me.webp" alt="Tzivi Gelstein" />
      </div>
      <div className={styles.aside_container__info_container}>
        <div>
          <h3 className={styles.info_container__name}>Tzivi Gelstein</h3>
          <p className={styles.info_container__profession}>Web developer</p>

          <h3 className={styles.info_container__title}>Goals and objectives ✍</h3>
          <p className={styles.info_container__goal}>💡 Learn something new every day</p>
          <p className={styles.info_container__goal}>☝ Improve our workspace</p>
        </div>
        <div>
          <h3 className={styles.info_container__title}>Contact</h3>

          <div className={styles.info_container__social_container}>
            <div className={styles.social_container__link_container}>
              <LinkedinIcon fill="#000000de" />
              <a className={styles.link_container__link} href="https://www.linkedin.com/in/tzivigelstein">
                Go to Linkedin 🚀
              </a>
            </div>
            <div className={styles.social_container__link_container}>
              <GithubIcon fill="#000000de" />
              <a className={styles.link_container__link} href="https://github.com/tzivigelstein">
                Go to Github 🛸
              </a>
            </div>
          </div>
          <button href="/curriculum_escuela.pdf" className={`btn btn_primary btn_primary__text ${styles.button}`}>
            Download CV <DownloadIcon width={18} height={21.86} />
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Aside
