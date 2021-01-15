import React, { useState } from 'react'
import sizeMe from 'react-sizeme'
import { useSpring, animated } from 'react-spring'

// Local Imports
import useLinkHoverStyles from './styles'

type LinkType = {
  anchorClass: string
  linkText: string
  onClick?: () => void
}

/**
 * Anchor component
 *
 * @param anchorClass
 * @param linkText
 * @param href
 * @param onClick
 */
const LinkComponent = sizeMe()(({ linkText, onClick }: LinkType) => {
  return (
    <button type="button" onClick={onClick}>
      {linkText}
    </button>
  )
})

/**
 * onHover anchor tag styled component
 *
 * @param inputParams
 */
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
      className={`${hoverStyles.hoverWrapper} ${inputParams.anchorClass}`}
    >
      <LinkComponent {...inputParams} onSize={onSize} />
      <svg className={hoverStyles.hoverUnderline} style={{ width }}>
        <animated.line className={hoverStyles.svgLine} x1={animate.to(x1 => `${x1}%`)} />
      </svg>
    </div>
  )
}

export default HoverUnderline
