import '../styles/globals.css'
import AppState from '../context/appState'

const App = ({ Component, pageProps }) => {
  return (
    <AppState>
      <Component {...pageProps} />
    </AppState>
  )
}

export default App
