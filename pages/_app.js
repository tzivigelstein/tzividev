import '../styles/globals.css'
import Head from 'next/head'
import AppState from '../context/appState'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <html lang="en" />
        <title>Home | tzividev</title>
        <meta name="description" content="I'm Tzivi and this is my portfolio 😄 enter to know more about me" />
      </Head>
      <AppState>
        <Component {...pageProps} />
      </AppState>
    </>
  )
}

export default App
