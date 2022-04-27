import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import { CacheProvider } from '@emotion/react'
import createEmotionCache from '../components/createEmotionCache'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../components/theme'
import CssBaseline from '@mui/material/CssBaseline'

import Header from '../components/Header'
import Footer from '../components/Footer'

const clientSideEmotionCache = createEmotionCache()

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Global styles={GlobalStyle} />
        <DivGrid>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </DivGrid>
      </ThemeProvider>
    </CacheProvider>
  )
}

const GlobalStyle = css`
  * :not(.header > a) {
    box-sizing: border-box;
    font-family: 'Titillium Web';
  }

  html {
    font-size: 1rem;
  }

  html, body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    height: 100%;
    background-color:  rgb(229, 168, 214);
    background-image: url('/img/bg.svg');
    background-attachment: fixed;
    background-size: cover;
    scrollbar-color: hsl(227, 100%, 50%) transparent;
  }

  body {
    &::-webkit-scrollbar {
      width: 1em;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color: hsl(227, 100%, 50%);
    }
  }

  #__next {
    height: 100%;
  }

  a {
    text-decoration: none;
  }

  /* faster-one-regular - latin */
  @font-face {
    font-family: 'Faster One';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/faster-one-v15-latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('/fonts/faster-one/faster-one-v15-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/faster-one/faster-one-v15-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('/fonts/faster-one/faster-one-v15-latin-regular.woff') format('woff'), /* Modern Browsers */
        url('/fonts/faster-one/faster-one-v15-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/fonts/faster-one/faster-one-v15-latin-regular.svg#FasterOne') format('svg'); /* Legacy iOS */
  }

  /* titillium-web-regular - latin */
  @font-face {
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 400;
    src: url('../fonts/titillium-web-v14-latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('/fonts/titillium-web/titillium-web-v14-latin-regular.eot?#iefix') format('embedded-opentype'), /*IE6-IE8*/
        url('/fonts/titillium-web/titillium-web-v14-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('/fonts/titillium-web/titillium-web-v14-latin-regular.woff') format('woff'), /* Modern Browsers */
        url('/fonts/titillium-web/titillium-web-v14-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/fonts/titillium-web/titillium-web-v14-latin-regular.svg#TitilliumWeb') format('svg'); /* Legacy iOS */
  }
`

const DivGrid = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  grid-template-columns: 1fr 1200px 1fr;
  min-height: 100%;
  position: relative;
`
