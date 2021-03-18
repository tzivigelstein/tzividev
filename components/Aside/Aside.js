import styles from './aside.module.css'
import { DownloadIcon, GithubIcon, LinkedinIcon } from '../Icons/Index'

const Aside = () => {
  return (
    <aside className={styles.aside_container}>
      <div className={styles.aside_container__image_container}>
        <div className={styles.image_container__circle}></div>
        <img className={styles.image_container__image} src="/me.png" alt="Tzivi Gelstein" />
      </div>
      <div className={styles.aside_container__info_container}>
        <h3 className={styles.info_container__name}>Tzivi Gelstein</h3>
        <p className={styles.info_container__profession}>Web developer</p>

        <h3 className={styles.info_container__title}>Goals and objectives ✍</h3>
        <p className={styles.info_container__goal}>💡 Learn something new every day</p>
        <p className={styles.info_container__goal}>☝ Improve our workspace</p>

        <h3 className={styles.info_container__title}>Contact</h3>

        <div className={styles.info_container__social_container}>
          <div className={styles.social_container__link_container}>
            <LinkedinIcon fill="#000000de" />
            <a className={styles.link_container__link} href="https://www.linkedin.com/in/tzivigelstein">
              Go to Linkedin 🚀
            </a>
          </div>
          <div>
            <GithubIcon fill="#000000de" />
            <a className={styles.link_container__link} href="https://github.com/tzivigelstein">
              Go to Github 🛸
            </a>
          </div>
        </div>

        <button href="/curriculum_escuela.pdf" style={{ margin: '1rem 0', alignSelf: 'center' }} className="btn btn_primary btn_primary__text">
          Download CV <DownloadIcon width={18} height={21.86} />
        </button>
      </div>
    </aside>
  )
}

export default Aside
