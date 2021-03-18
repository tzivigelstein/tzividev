import { Menu } from '../Icons/Index'
import styles from './main.module.css'

const Main = () => {
  return (
    <main className={styles.main_container}>
      <div className={styles.main_container__navigation}>
        <h2 className={styles.navigation__title}>About me</h2>
        <div className={styles.navigation__menu_container}>
          <Menu />
        </div>
      </div>
      <div className={styles.main_container__sections_container}>
        <section className={styles.sections_container__section}></section>
        <section className={styles.sections_container__section}>
          <h3 className={styles.section__title}>Career and experience</h3>
          <p className={styles.section__description}>
            I started in the world of programming in a self-taught way having traveled almost two years of earning and
            experience in web design and frontend development. I have experience in website development with HTML, CSS,
            JavaScript, ReactJS, in addition to having experience with version control on Git and GitHub.
          </p>
        </section>
      </div>
      <section>
        <h2>Projects</h2>
      </section>
    </main>
  )
}

export default Main
