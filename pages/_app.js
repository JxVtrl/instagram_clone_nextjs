import { ThemeProvider } from 'styled-components'
import { AppProvider } from '../src/context/AppContext'

import GlobalStyle from '../src/styles/global'
import theme from '../src/styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppProvider>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </AppProvider>
    </>
  )
}

export default MyApp
