import React from 'react'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import './app.css'

const generateClassName = createGenerateClassName({
  disableGlobal: false,
  productionPrefix: 'c'
})

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <>
      <StylesProvider generateClassName={generateClassName}>
        <CssBaseline />
        <Component {...pageProps} />
      </StylesProvider>
    </>
  )
}

export default MyApp
