import React from 'react'
import Grid from '@material-ui/core/Grid'
import { useTheme } from '@material-ui/core/styles'
import { animated } from 'react-spring'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { FiMenu } from 'react-icons/fi'
import { CgClose } from 'react-icons/cg'

// Local Imports
import useHeaderSectionStyle from './styles'
import HoverUnderline from '../common-components/link-hover/main'
import { SectionColumn } from '../../config/types'
import { useHamburgerMenuAnimation, HamburgerMenuHook, useBgStyle, BgStyleInput } from './helpers'
import { animateScrollToTarget } from '../common-components/on-scroll-spring/main'

type ToggledWhiteShadeInput = {
  refs: BgStyleInput['refs']
  headerClasses: Record<string, string>
}

const navigationGridSize: SectionColumn = {
  xs: 1,
  sm: 1,
  md: 1,
  lg: 4,
  xl: 4
}

const logoGridSize: SectionColumn = {
  xs: 11,
  sm: 11,
  md: 11,
  lg: 8,
  xl: 8
}

/**
 * Desktop Navigation Component
 *
 * @param headerClasses header styles
 */
const DesktopNavigationComponent = (headerClasses: Record<string, string>): React.ReactElement => {
  return (
    <div className={headerClasses.navigationWrapper}>
      <HoverUnderline onClick={() => animateScrollToTarget('About')} anchorClass={headerClasses.navigationText} linkText="About" />
      <HoverUnderline onClick={() => animateScrollToTarget('Experience')} anchorClass={headerClasses.navigationText} linkText="Experience" />
      <HoverUnderline onClick={() => animateScrollToTarget('Tech')} anchorClass={headerClasses.navigationText} linkText="Tech" />
      <HoverUnderline onClick={() => animateScrollToTarget('Contact')} anchorClass={headerClasses.navigationText} linkText="Contact" />
    </div>
  )
}

/**
 * Mobile Navigation Component ( Hamburger Menu )
 *
 * @param headerClasses
 */
const HamburgerNavigationComponent = (headerClasses: Record<string, string>): React.ReactElement => {
  const inputParms = { rotateDegFrom: 0, rotateDegTo: 20, opacityFrom: 1, opacityTo: 0, translateFrom: -40, translateTo: 0 }
  const { rotateMenu, rotateCross, translateMenuItems, onMenuClickHandler, onItemClickHandler }: HamburgerMenuHook = useHamburgerMenuAnimation(inputParms)

  return (
    <>
      <animated.div className={headerClasses.navigationHamburgerItemsWrapper} style={translateMenuItems}>
        <ul className={headerClasses.navigationHamburgerItems}>
          <li role="presentation" onClick={() => onItemClickHandler('About')}>
            About
          </li>
          <li role="presentation" onClick={() => onItemClickHandler('Experience')}>
            Experience
          </li>
          <li role="presentation" onClick={() => onItemClickHandler('Tech')}>
            Tech
          </li>
          <li role="presentation" onClick={() => onItemClickHandler('Contact')}>
            Contact
          </li>
        </ul>
      </animated.div>
      <div role="presentation" onClick={onMenuClickHandler} className={headerClasses.navigationWrapper}>
        <animated.div className={headerClasses.navigationHamburgerMenu} style={rotateMenu}>
          <FiMenu />
        </animated.div>
        <animated.div className={headerClasses.navigationHamburgerCross} style={rotateCross}>
          <CgClose />
        </animated.div>
      </div>
    </>
  )
}

/**
 * Background shade of header
 *
 * @param refs Reference to sections
 * @param headerClasses Header styles
 */
const ToggledWhiteShade = ({ refs, headerClasses }: ToggledWhiteShadeInput): React.ReactElement => {
  const bgStyle = useBgStyle({ backgroundOpacity: 0, refs })
  return <div className={headerClasses.headerWhiteShade} style={bgStyle} />
}

/**
 * Header Section
 *
 * @param refs Reference to sections
 */
const Header = (refs: BgStyleInput['refs']): React.ReactElement => {
  const headerClasses = useHeaderSectionStyle()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.between('xs', 'md'))

  return (
    <>
      <ToggledWhiteShade refs={refs} headerClasses={headerClasses} />
      <Grid item {...logoGridSize}>
        <button type="button" onClick={() => animateScrollToTarget('Welcome')}>
          <img src="/logo.svg" className={headerClasses.logo} alt="logo" />
        </button>
      </Grid>

      <Grid item {...navigationGridSize}>
        {matches ? <HamburgerNavigationComponent {...headerClasses} /> : <DesktopNavigationComponent {...headerClasses} />}
      </Grid>
    </>
  )
}

export default Header
