import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styles/Global'
import { Header } from './components/Header'

function App() {
  const theme = {
    body: {
      color: 'rebeccapurple',
      bg: '#ffd'
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
