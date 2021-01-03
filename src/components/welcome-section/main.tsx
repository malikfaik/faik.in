import React from 'react'
import { useSpring, animated } from 'react-spring'
import { IoIosArrowDown } from 'react-icons/io'
import useWelcomeSectionStyle from './styles'

const Welcome = (): React.ReactElement => {
  const welcomeStyles = useWelcomeSectionStyle()
  const props = useSpring({
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
        <animated.div className={welcomeStyles.downArrow} style={props}>
          <IoIosArrowDown />
        </animated.div>
      </div>
    </>
  )
}

export default Welcome
