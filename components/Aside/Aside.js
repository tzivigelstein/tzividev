import styles from './aside.module.css'
import { DownloadIcon, GithubIcon, LinkedinIcon } from '../Icons/Index'
import { useEffect, useRef, useState } from 'react'

const Aside = () => {
  const [downloadOpen, setDownloadOpen] = useState(false)
  const [downloadHeight, setDownloadHeight] = useState(null)
  const [buttonHeight, setButtonHeight] = useState(null)

  const linksRef = useRef()
  const buttonRef = useRef()

  useEffect(() => {
    setButtonHeight(buttonRef.current.clientHeight)
    setDownloadHeight(linksRef.current.clientHeight + buttonRef.current.clientHeight)
  }, [])

  useEffect(() => {
    console.log(downloadOpen)
  }, [downloadOpen])

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
          <div style={{ height: downloadHeight }} className={styles.info_container__download_container}>
            <button
              ref={buttonRef}
              onClick={() => setDownloadOpen(!downloadOpen)}
              className={`btn btn_primary btn_primary__text ${styles.button}`}
            >
              Download CV <DownloadIcon width={18} height={21.86} />
            </button>
            <div
              style={downloadOpen ? { top: buttonHeight - 3 } : { top: -buttonHeight * 2 }}
              ref={linksRef}
              className={styles.download_container__links_container}
            >
              <a className={styles.links_container__link} download href="/Tzivi_Gelstein_CV_EN.pdf">
                English 🇺🇸
              </a>
              <a className={styles.links_container__link} download href="/Tzivi_Gelstein_CV_ES.pdf">
                Spanish 🇪🇸
              </a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Aside
