import React, { MutableRefObject, useRef, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Head from 'next/head'
import * as Rdd from 'react-device-detect'
import Header from '../components/header-section/main'
import Welcome from '../components/welcome-section/main'
import About from '../components/about-section/main'
import Experience from '../components/experience-section/main'
import Tech from '../components/tech-section/main'
import Contact from '../components/contact-section/main'
import { useScrollAnimation } from '../components/common-components/on-scroll-spring/main'
import { pageview } from '../utils/analytics'

const usePageStyle = makeStyles({
  headerFixed: {
    position: 'fixed',
    zIndex: 2
  }
})

const Home = (): React.ReactElement => {
  const refs: { [name: string]: MutableRefObject<HTMLDivElement> } = {
    Welcome: useRef(null),
    About: useRef(null),
    Experience: useRef(null),
    Tech: useRef(null),
    Contact: useRef(null)
  }
  useEffect(() => {
    if (process.env.NODE_ENV === 'production')
      pageview(window.location.pathname, {
        browserVersion: Rdd.fullBrowserVersion,
        browserName: Rdd.browserName,
        mobileVendor: Rdd.mobileVendor,
        mobileModel: Rdd.mobileModel,
        engineName: Rdd.engineName,
        deviceType: Rdd.deviceType,
        userAgent: Rdd.getUA
      })
  })

  const pageStyle = usePageStyle()
  useScrollAnimation({ initialValue: 0, refs })

  return (
    <>
      <Head>
        <title>Faik Malik - Personal Page</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="I am an experienced developer having worked in analytics, payment, travel and freelancing space for more than 6 years. I have experience working on Micro-Services Architecture, gRPC, Restful APIs, GraphQL among other things. I love experimenting to make products better and to learn new things along the way."
        />
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <Grid container>
        <Grid className={pageStyle.headerFixed} container>
          <Header {...refs} />
        </Grid>
        <Grid ref={refs.Welcome} container>
          <Welcome />
        </Grid>
        <Grid ref={refs.About} container>
          <About />
        </Grid>
        <Grid ref={refs.Experience} container>
          <Experience />
        </Grid>
        <Grid ref={refs.Tech} container>
          <Tech />
        </Grid>
        <Grid ref={refs.Contact} container>
          <Contact />
        </Grid>
      </Grid>
    </>
  )
}

export default Home
