import React from 'react'
import Grid from '@material-ui/core/Grid'
import useAboutSectionStyle from './styles'
import aboutContent from './about-content'
import { sectionColumnSize } from '../../../config/constants'

const About = (): React.ReactElement => {
  const aboutClasses = useAboutSectionStyle()
  return (
    <>
      <Grid className={aboutClasses.aboutHead} item {...sectionColumnSize}>
        <span>About</span>
      </Grid>

      <Grid className={aboutClasses.aboutBody} item {...sectionColumnSize}>
        <p>{aboutContent.body}</p>
      </Grid>
    </>
  )
}

export default About
