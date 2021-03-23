import styles from './main.module.css'
import {
  CSSIcon,
  GitIcon,
  HTMLIcon,
  JavaScriptIcon,
  Menu,
  MongoIcon,
  MySQLIcon,
  NodeJSIcon,
  ReactIcon,
} from '../Icons/Index'
import Article from '../Article/Article'

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
        <section className={styles.sections_container__section}>
          <h3 className={styles.section__title}>Professional skills</h3>
          <div className={styles.section__skills_container}>
            <div className={styles.skills_container__skills_grid}>
              <div
                style={{
                  backgroundColor: '#61DAFB',
                }}
                className={styles.skills_grid__skill}
              >
                <ReactIcon width={27} height={27} />
              </div>
              <div
                style={{
                  backgroundColor: '#13AA52',
                }}
                className={styles.skills_grid__skill}
              >
                <MongoIcon fill="#eee" width={27} height={27} />
              </div>
              <div
                style={{
                  backgroundColor: '#FCDC00',
                }}
                className={styles.skills_grid__skill}
              >
                <JavaScriptIcon width={27} height={27} />
              </div>
              <div
                style={{
                  backgroundColor: '#F29221',
                }}
                className={styles.skills_grid__skill}
              >
                <MySQLIcon fill="#eee" width={27} height={27} />
              </div>
              <div
                style={{
                  backgroundColor: '#13AA52',
                }}
                className={styles.skills_grid__skill}
              >
                <NodeJSIcon fill="#eee" width={27} height={27} />
              </div>
              <div
                style={{
                  backgroundColor: '#F64A1D',
                }}
                className={styles.skills_grid__skill}
              >
                <HTMLIcon fill="#eee" width={27} height={27} />
              </div>
              <div
                style={{
                  backgroundColor: '#249CDA',
                }}
                className={styles.skills_grid__skill}
              >
                <CSSIcon fill="#eee" width={27} height={27} />
              </div>
              <div
                style={{
                  backgroundColor: '#F14E32',
                }}
                className={styles.skills_grid__skill}
              >
                <GitIcon fill="#eee" width={27} height={27} />
              </div>
            </div>
            <div className={styles.skills_container__text_skills_container}>
              <span className={styles.text_skills_container__text_skill}>👉 Fast adaptation to teamwork</span>
              <span className={styles.text_skills_container__text_skill}>👉 Love to learn new things</span>
            </div>
          </div>
        </section>
        <section className={styles.sections_container__section}>
          <h3 className={styles.section__title}>Career and experience</h3>
          <p className={styles.section__description}>
            I started in the world of programming in a self-taught way having traveled almost two years of earning and
            experience in web design and frontend development. I have experience in website development with HTML, CSS,
            JavaScript, ReactJS, in addition to having experience with version control on Git and GitHub.
          </p>
        </section>
      </div>
      <section className={styles.main_container__projects_container}>
        <h2 className={styles.projects_container__title}>Projects</h2>
        <ul className={styles.projects_container__projects_list}>
          <Article
            titleBold="Product Hunt Clone"
            site="https://producthunt-cl.vercel.app/"
            github="https://github.com/tzivigelstein/Product-Hunt-Clone"
            image="/ProductHuntflyer.webp"
          />
          <Article
            titleBold="MERNTasks"
            site="https://mernt-tasks-client.vercel.app/"
            github="https://github.com/tzivigelstein/MERNTasks-Client"
            image="/MERNTasks.webp"
          />
          <Article
            titleBold="Twitter Clone"
            site="https://twitter-cl.vercel.app/"
            github="https://github.com/tzivigelstein/Twitter-Clone"
            image="/TwitterCloneFlyer.webp"
          />
          <Article
            titleBold="Chatty app"
            titleNormal="Chat app"
            site="https://chatty-app.vercel.app/login"
            github="https://github.com/tzivigelstein/Chatty"
            image="/Chatty.webp"
          />
          <Article
            titleBold="Lyric it"
            site="https://lyrict-it.netlify.app/"
            github="https://github.com/tzivigelstein/Lyric-it"
            image="/Lyricit.webp"
          />
        </ul>
      </section>
    </main>
  )
}

export default Main
