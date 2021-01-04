import React, { useState } from 'react'
import sizeMe from 'react-sizeme'
import { useSpring, animated } from 'react-spring'
import useLinkHoverStyles from './styles'

type LinkType = {
  anchorClass: string
  linkText: string
  href: string
}

const LinkComponent = sizeMe()(({ anchorClass, linkText, href }: LinkType) => {
  return (
    <a className={anchorClass} href={href}>
      {linkText}
    </a>
  )
})

const HoverUnderline = (inputParams: LinkType): React.ReactElement => {
  const hoverStyles = useLinkHoverStyles()
  const [width, setWidth] = useState(10)
  const onSize = input => setWidth(input.width)
  const [{ animate }, setSpring] = useSpring(() => ({ animate: 0 }))

  return (
    <div
      onMouseEnter={() => {
        setSpring({ animate: 100 })
      }}
      onMouseLeave={() => {
        setSpring({ animate: 0 })
      }}
      className={hoverStyles.hoverWrapper}
    >
      <LinkComponent {...inputParams} onSize={onSize} />
      <svg className={hoverStyles.hoverUnderline} style={{ width }}>
        <animated.line className={hoverStyles.svgLine} x1={animate.to(x1 => `${x1}%`)} />
      </svg>
    </div>
  )
}

export default HoverUnderline
