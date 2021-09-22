import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
  body {
    font-family: 'system-ui', sans-serif;
    background: ${({ theme }) => theme.body.bg};
  }
`
export default GlobalStyles
