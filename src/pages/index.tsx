import React from 'react'
import Grid from '@material-ui/core/Grid'
import Footer from '../components/footer-app'
import Header from '../components/header-app'
import Cover from '../components/cover-picture'
import About from '../components/about-section'
import Experience from '../components/experience-section/main'
import Tech from '../components/tech-section/main'
import Contact from '../components/contact-section'

const Home = (): React.ReactElement => {
  return (
    <div className="home-container">
      <Grid container>
        <Grid className="header-fixed" container item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Header />
        </Grid>
        <Grid container item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Cover />
        </Grid>
        <Grid container item xs={12} sm={12} md={12} lg={12} xl={12}>
          <About />
        </Grid>
        <Grid container item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Experience />
        </Grid>
        <Grid container item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Tech />
        </Grid>
        <Grid container item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Contact />
        </Grid>
        <Grid container item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
