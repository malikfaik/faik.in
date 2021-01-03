import React from 'react'
import Grid from '@material-ui/core/Grid'
import Footer from '../components/footer-app'
import Header from '../components/header-app'
import Welcome from '../components/welcome-section/main'
import About from '../components/about-section/main'
import Experience from '../components/experience-section/main'
import Tech from '../components/tech-section/main'
import Contact from '../components/contact-section'
import usePageStyle from '../components/common/styles/page-style'

const Home = (): React.ReactElement => {
  const pageStyle = usePageStyle()
  return (
    <Grid container>
      <Grid className={pageStyle.headerFixed} container item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Header />
      </Grid>
      <Grid container item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Welcome />
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
  )
}

export default Home
