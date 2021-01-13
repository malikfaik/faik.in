import React, { MutableRefObject, useRef } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Header from '../components/header-section/main'
import Welcome from '../components/welcome-section/main'
import About from '../components/about-section/main'
import Experience from '../components/experience-section/main'
import Tech from '../components/tech-section/main'
import Contact from '../components/contact-section/main'
import { useScrollAnimation } from '../components/common-components/on-scroll-spring/main'

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

  const pageStyle = usePageStyle()
  useScrollAnimation({ initialValue: 0, refs })

  return (
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
  )
}

export default Home
