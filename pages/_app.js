import '../styles/globals.css'
import Head from 'next/head'
import AppState from '../context/appState'

const App = ({ Component, pageProps }) => {
  return (
    <AppState>
      <Component {...pageProps} />
    </AppState>
  )
}

export default App
