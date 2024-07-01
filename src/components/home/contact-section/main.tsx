import React from 'react'
import Grid from '@material-ui/core/Grid'
import { animated } from 'react-spring'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { FiTwitter, FiGithub } from 'react-icons/fi'
import { BiCopyright } from 'react-icons/bi'

// Local Imports
import useContactSectionStyle from './styles'
import { onHover, useAnimationHook } from './helpers'
import HoverUnderline from '../../shared/link-hover/main'
import { SectionColumn } from '../../../config/types'
import { animateScrollToTarget } from '../../shared/on-scroll-spring/main'

const sectionColumnSize: SectionColumn = {
  xs: 12,
  sm: 12,
  md: 12,
  lg: 6,
  xl: 6
}

const fullLengthColumnSize: SectionColumn = {
  xs: 12,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 12
}

const AnimatedLinkedin = animated(AiOutlineLinkedin)
const AnimatedTwitter = animated(FiTwitter)
const AnimatedGithub = animated(FiGithub)

const Contact = (): React.ReactElement => {
  const contactClasses = useContactSectionStyle()
  const scaleSprings = useAnimationHook({ size: 4, defaultScale: 1 })

  return (
    <>
      <Grid className={contactClasses.contactBody} item {...sectionColumnSize}>
        <div className={contactClasses.contactBodyWrapper}>
          <Grid item {...fullLengthColumnSize}>
            <div className={contactClasses.greetingText}>
              <span>Reach out to say hello!</span>
            </div>
          </Grid>

          <Grid {...onHover({ scaleTo: 1.2, currentIndex: 0 })} item {...fullLengthColumnSize}>
            <div className={contactClasses.emailContact}>
              <a href="mailto:hi@faik.in">
                <span>hi@faik.in</span>
              </a>
            </div>
          </Grid>

          <Grid item {...fullLengthColumnSize}>
            <div className={contactClasses.contactSocialIconWrapper}>
              <a href="https://www.linkedin.com/in/malikfaik/">
                <AnimatedLinkedin style={scaleSprings[1]} {...onHover({ scaleTo: 1.2, currentIndex: 1 })} className={contactClasses.contactSocialIcon} />
              </a>
              <a href="https://twitter.com/malikfaik">
                <AnimatedTwitter style={scaleSprings[2]} {...onHover({ scaleTo: 1.2, currentIndex: 2 })} className={contactClasses.contactSocialIcon} />
              </a>
              <a href="https://github.com/malikfaik">
                <AnimatedGithub {...onHover({ scaleTo: 1.2, currentIndex: 3 })} style={scaleSprings[3]} className={contactClasses.contactSocialIcon} />
              </a>
            </div>
          </Grid>
        </div>
      </Grid>

      <Grid className={contactClasses.contactHead} item {...sectionColumnSize}>
        <span>Contact</span>
      </Grid>
      <Grid className={contactClasses.footer} item {...fullLengthColumnSize}>
        <BiCopyright />
        <p className={contactClasses.footerYear}> {new Date().getFullYear()}</p>
        <HoverUnderline onClick={() => animateScrollToTarget('Welcome')} anchorClass={contactClasses.footerName} linkText="FAIK MALIK" />
      </Grid>
    </>
  )
}

export default Contact
