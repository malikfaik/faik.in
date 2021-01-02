import React from 'react'
import { useSpring, animated } from 'react-spring'
import { IoIosArrowDown } from 'react-icons/io'

// ACCENT #19456B
const Profile = (): React.ReactElement => {
  const props = useSpring({
    loop: { reverse: true },
    from: { transform: `translate3d(0,0%,0)` },
    to: { transform: `translate3d(0,-30%,0)` }
  })
  return (
    <>
      <img className="cover-picture" alt="faik" src="/cover-picture.jpg" />
      <div className="white-shade" />

      <div className="cover-flex">
        <p className="greeting">Hey I&#39;m</p>
        <p className="name">
          <span>Faik Malik</span>
        </p>
        <animated.div className="down-arrow" style={props}>
          <IoIosArrowDown />
        </animated.div>
      </div>
    </>
  )
}

export default Profile
