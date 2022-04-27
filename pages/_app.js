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
    background-color: hsl(195, 100%, 65%);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%230046ff'/%3E%3Cstop offset='1' stop-color='%230046ff' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%230076ff'/%3E%3Cstop offset='1' stop-color='%230076ff' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2300acff'/%3E%3Cstop offset='1' stop-color='%2300acff' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%230011FF'/%3E%3Cstop offset='1' stop-color='%230011FF' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23007BFF'/%3E%3Cstop offset='1' stop-color='%23007BFF' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2300DCFF'/%3E%3Cstop offset='1' stop-color='%2300DCFF' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
    scrollbar-color: rgb(0, 17, 255) transparent;
  }

  body {
    &::-webkit-scrollbar {
      width: 1em;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgb(0, 17, 255);
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
