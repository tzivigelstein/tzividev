import '../styles/globals.css'
import Head from 'next/head'
import AppState from '../context/appState'

const App = ({ Component, pageProps }) => {
  return (
    <html lang="en">
      <Head>
        <title>Home | tzividev</title>
        <meta name="description" content="I'm Tzivi and this is my portfolio 😄 enter to know more about me" />
        <link rel="shortcut icon" href="icon.webp" type="image/webp" />
      </Head>
      <AppState>
        <Component {...pageProps} />
      </AppState>
    </html>
  )
}

export default App
