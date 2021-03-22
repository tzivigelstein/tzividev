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
    <li className={styles.article}>
      <div className={styles.article__preview_container}>
        <img className={styles.preview_container__preview} src={image} alt={`${titleBold} - page preview`} />
      </div>
    </li>
  )
}

export default Article
