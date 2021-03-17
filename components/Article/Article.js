import styles from './article.module.css'
import theme from '../../theme'
import { GithubIcon } from '../Icons/Index'

const Article = ({
  titleBold,
  titleNormal,
  image,
  site = 'http://localhost:3000',
  github = 'https://github.com/tzivigelstein',
}) => {
  return (
    <article className={styles.article}>
      <div className={styles.article__preview_container}>
        <img className={styles.preview_container__preview} src={image} alt="MernTasks - page preview" />
      </div>
      <div className={styles.article__info_container}>
        <div className={styles.info_container__title_container}>
          <h5 className={styles.title_container__title}>
            {titleBold} <span className={styles.title__span}>- {titleNormal}</span>
          </h5>
        </div>
        <div className={styles.info_container__content_container}></div>
        <div className={styles.info_container__buttons_container}>
          <a className={styles.buttons_container__button} href={site}>
            Visit site
          </a>
          <a className={styles.buttons_container__button} href={github}>
            Code <GithubIcon style={{ marginLeft: '0.5rem' }} width={16} height={16} fill={theme['--eerie-black']} />
          </a>
        </div>
      </div>
    </article>
  )
}

export default Article
