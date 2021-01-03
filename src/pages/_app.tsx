import React from 'react'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import CssBaseline from '@material-ui/core/CssBaseline'
import '../stylesheets/footer-app.scss'
import '../stylesheets/header-app.scss'
import '../stylesheets/section.scss'

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
