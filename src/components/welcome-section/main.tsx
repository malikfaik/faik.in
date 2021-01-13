import React from 'react'
import { useSpring, animated } from 'react-spring'
import { IoIosArrowDown } from 'react-icons/io'
import useWelcomeSectionStyle from './styles'
import { animateScrollToTarget } from '../common-components/on-scroll-spring/main'

const Welcome = (): React.ReactElement => {
  const welcomeStyles = useWelcomeSectionStyle()
  const spring = useSpring({
    loop: { reverse: true },
    from: { transform: `translate3d(0,0%,0)` },
    to: { transform: `translate3d(0,-30%,0)` }
  })
  return (
    <>
      <img className={welcomeStyles.coverPicture} alt="faik" src="/cover-picture.jpg" />
      <div className={welcomeStyles.whiteShade} />

      <div className={welcomeStyles.coverFlex}>
        <p className={welcomeStyles.greetingText}>Hey I&#39;m</p>
        <p className={welcomeStyles.nameText}>
          <span>Faik Malik</span>
        </p>
        <animated.div onClick={() => animateScrollToTarget('About')} className={welcomeStyles.downArrow} style={spring}>
          <IoIosArrowDown />
        </animated.div>
      </div>
    </>
  )
}

export default Welcome
