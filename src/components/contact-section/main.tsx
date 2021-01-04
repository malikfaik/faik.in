import React from 'react'
import Grid from '@material-ui/core/Grid'
import { FaRegLaughWink } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { FiTwitter, FiGithub } from 'react-icons/fi'
import { BiCopyright } from 'react-icons/bi'
import { useSprings, animated } from 'react-spring'
import { fullLengthColumnSize, sectionColumnSize } from '../../config/section-grid-size'
import useContactSectionStyle from './styles'
import onHover from './helpers'
import HoverUnderline from '../common-components/link-hover/main'

const AnimatedLinkedin = animated(AiOutlineLinkedin)
const AnimatedTwitter = animated(FiTwitter)
const AnimatedGithub = animated(FiGithub)
const AnimatedEmail = animated(HiOutlineMail)

const Contact = (): React.ReactElement => {
  const contactClasses = useContactSectionStyle()
  const [scaleSprings, setScaleSprings] = useSprings(4, () => ({ scale: 1 }))
  return (
    <>
      <Grid className={contactClasses.contactBody} item {...sectionColumnSize}>
        <div className={contactClasses.contactBodyWrapper}>
          <Grid item {...fullLengthColumnSize}>
            <div className={contactClasses.greetingText}>
              <span>Drop a line for projects or to just say hi</span>
              <FaRegLaughWink className={contactClasses.contactSmileyIcon} />
            </div>
          </Grid>

          <Grid {...onHover(1.2, 1, 0, setScaleSprings)} item {...fullLengthColumnSize}>
            <div className={contactClasses.emailContact}>
              <AnimatedEmail style={scaleSprings[0]} className={contactClasses.contactEmailIcon} />
              <span>hi@faik.in</span>
            </div>
          </Grid>

          <Grid item {...fullLengthColumnSize}>
            <div className={contactClasses.contactSocialIconWrapper}>
              <AnimatedLinkedin style={scaleSprings[1]} {...onHover(1.2, 1, 1, setScaleSprings)} className={contactClasses.contactSocialIcon} />

              <AnimatedTwitter style={scaleSprings[2]} {...onHover(1.2, 1, 2, setScaleSprings)} className={contactClasses.contactSocialIcon} />

              <AnimatedGithub {...onHover(1.2, 1, 3, setScaleSprings)} style={scaleSprings[3]} className={contactClasses.contactSocialIcon} />
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
        <HoverUnderline anchorClass={contactClasses.footerName} href="#/home" linkText="Faik Malik" />
      </Grid>
    </>
  )
}

export default Contact
