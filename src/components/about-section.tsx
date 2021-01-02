import React from 'react'
import Grid from '@material-ui/core/Grid'

const About = (): React.ReactElement => {
  return (
    <>
      <Grid className="main-section-head" item xs={12} sm={12} md={12} lg={6} xl={6}>
        <span>About</span>
      </Grid>

      <Grid className="about-body section-body" item xs={12} sm={12} md={12} lg={6} xl={6}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Natoque penatibus et magnis dis parturient. Cras semper auctor neque vitae tempus quam
          pellentesque nec. Tincidunt arcu non sodales neque sodales ut etiam sit amet. Fringilla phasellus faucibus
          scelerisque eleifend donec pretium. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat.
          Scelerisque viverra mauris in aliquam sem fringilla.
        </p>
      </Grid>
    </>
  )
}

export default About
