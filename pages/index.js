import styles from './index.module.css'
import { ArrowBottom, GithubIcon, LinkedinIcon, Menu } from '../components/Icons/Index'
import theme from '../theme'
import Article from '../components/Article/Article'
import Aside from '../components/Aside/Aside'

const Index = () => {
  return (
    <div className={styles.container}>
      <Aside />
      <main style={{ backgroundColor: '#fff', width: '75%', marginLeft: '2rem', borderRadius: '2rem' }}>
        {/* About me */}
        <section>{/* Projects */}</section>
      </main>
    </div>
  )
}

export default Index
