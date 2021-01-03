import React from 'react'
import Grid from '@material-ui/core/Grid'
import useAboutSectionStyle from './styles'
import { sectionColumnSize } from '../../config/section'
import useSectionStyle from '../common/styles/section-style'
import aboutContent from './about-content'

const About = (): React.ReactElement => {
  const sectionClasses = useSectionStyle()
  const aboutClasses = useAboutSectionStyle()
  return (
    <>
      <Grid className={sectionClasses.sectionHead} item {...sectionColumnSize}>
        <span>About</span>
      </Grid>

      <Grid className={`${aboutClasses.aboutBody} ${sectionClasses.sectionBody}`} item {...sectionColumnSize}>
        <p>{aboutContent.body}</p>
      </Grid>
    </>
  )
}

export default About
