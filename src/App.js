import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styles/Global'
import { Header } from './components/Header'

function App() {
  const theme = {
    container: {
      color: 'rebeccapurple',
      bg: '#fff'
    },
    body: {
      bg: '#eee'
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
      </>
    </ThemeProvider>
  )
}

export default App
