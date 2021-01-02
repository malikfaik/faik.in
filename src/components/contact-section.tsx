import React from 'react'
import Grid from '@material-ui/core/Grid'
import { FaRegLaughWink } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { FiTwitter, FiGithub } from 'react-icons/fi'
import { useSprings, SpringStartFn, animated } from 'react-spring'

const AnimatedLinkedin = animated(AiOutlineLinkedin)
const AnimatedTwitter = animated(FiTwitter)
const AnimatedGithub = animated(FiGithub)
const AnimatedEmail = animated(HiOutlineMail)

const setAnimation = (scale: number, currentIndex: number, setScaleSprings: SpringStartFn<{ scale: number }>): void => {
  setScaleSprings(index => {
    if (index === currentIndex) {
      return { scale }
    }
    return { scale: 1 }
  })
}

const Contact = (): React.ReactElement => {
  const [scaleSprings, setScaleSprings] = useSprings(4, () => ({ scale: 1 }))
  return (
    <>
      <Grid className="section-body contact-body" item xs={12} sm={12} md={12} lg={6} xl={6}>
        <div className="contact-body-warpper">
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className="heading-contact">
              <span>Drop a line for projects or to just say hi</span>
              <FaRegLaughWink className="contact-smiley-icon" />
            </div>
          </Grid>

          <Grid
            onMouseEnter={() => setAnimation(1.2, 0, setScaleSprings)}
            onMouseLeave={() => setAnimation(1, 0, setScaleSprings)}
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
          >
            <div className="email-contact">
              <AnimatedEmail style={scaleSprings[0]} className="contact-email-icon" />
              <span>hi@faik.in</span>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className="contact-social-icons">
              <AnimatedLinkedin
                style={scaleSprings[1]}
                onMouseEnter={() => setAnimation(1.2, 1, setScaleSprings)}
                onMouseLeave={() => setAnimation(1, 1, setScaleSprings)}
                className="contact-social-icon"
              />

              <AnimatedTwitter
                style={scaleSprings[2]}
                onMouseEnter={() => setAnimation(1.2, 2, setScaleSprings)}
                onMouseLeave={() => setAnimation(1, 2, setScaleSprings)}
                className="contact-social-icon"
              />

              <AnimatedGithub
                onMouseEnter={() => setAnimation(1.2, 3, setScaleSprings)}
                onMouseLeave={() => setAnimation(1, 3, setScaleSprings)}
                style={scaleSprings[3]}
                className="contact-social-icon"
              />
            </div>
          </Grid>
        </div>
      </Grid>

      <Grid className="main-section-head contact-head" item xs={12} sm={12} md={12} lg={6} xl={6}>
        <span>Contact</span>
      </Grid>
    </>
  )
}

export default Contact
