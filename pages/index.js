import styles from './index.module.css'
import Aside from '../components/Aside/Aside'
import Main from '../components/Main/Main'

const Index = () => {
  return (
    <div className={styles.container}>
      <Aside />
      <Main />
    </div>
  )
}

export default Index
