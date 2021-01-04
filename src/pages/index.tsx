import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Header from '../components/header-section/main'
import Welcome from '../components/welcome-section/main'
import About from '../components/about-section/main'
import Experience from '../components/experience-section/main'
import Tech from '../components/tech-section/main'
import Contact from '../components/contact-section/main'

const usePageStyle = makeStyles({
  headerFixed: {
    position: 'fixed'
  }
})

const Home = (): React.ReactElement => {
  const pageStyle = usePageStyle()

  return (
    <Grid container>
      <Grid className={pageStyle.headerFixed} container>
        <Header />
      </Grid>
      <Grid container>
        <Welcome />
      </Grid>
      <Grid container>
        <About />
      </Grid>
      <Grid container>
        <Experience />
      </Grid>
      <Grid container>
        <Tech />
      </Grid>
      <Grid container>
        <Contact />
      </Grid>
    </Grid>
  )
}

export default Home
