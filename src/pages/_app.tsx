import React from 'react'
import { AppProps } from 'next/dist/next-server/lib/router/router'

import '../stylesheets/footer-app.scss'
import '../stylesheets/header-app.scss'
import '../stylesheets/section.scss'

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return <Component {...pageProps} />
}

export default MyApp
