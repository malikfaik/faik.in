import { useState, useEffect, MutableRefObject, Dispatch, SetStateAction } from 'react'
import { useSpring } from 'react-spring'
import { animateScrollToTarget } from '../../shared/on-scroll-spring/main'

export type HamburgerMenuHookInput = {
  rotateDegFrom: number
  rotateDegTo: number
  opacityFrom: number
  opacityTo: number
  translateFrom: number
  translateTo: number
}

/**
 * Issue with opacity types, should be fixed in 9.0.0-rc-4
 * https://github.com/pmndrs/react-spring/issues/1102
 */
export type HamburgerMenuHook = {
  rotateMenu: unknown
  rotateCross: unknown
  translateMenuItems: unknown
  onMenuClickHandler: () => void
  onItemClickHandler: (section: string) => void
}

export type BgStyleInput = {
  backgroundOpacity: number
  refs: { [name: string]: MutableRefObject<HTMLDivElement> }
}

export type BgStyle = {
  backgroundColor: string
}

type UpdateOnScrollInput = {
  setBgStyle: Dispatch<
    SetStateAction<{
      backgroundColor: string
    }>
  >
  bgColor: (o: number) => string
  bgStyle: { backgroundColor: string }
  refs: BgStyleInput['refs']
}

/**
 * This function get called after each interval and checks if it needs update the header styles.
 *
 * @param setBgStyle Set state for bgStyle
 * @param bgColor background rgba string generator function
 * @param bgStyle current background color state
 * @param refs refrences to different sections
 */
const updateOnInterval = ({ setBgStyle, bgStyle, refs }: UpdateOnScrollInput): void => {
  const getTopForElement = element => window.scrollY + element.getBoundingClientRect().top

  const boundaries = {
    welcome: {
      upper: getTopForElement(refs.Welcome.current),
      bottom: getTopForElement(refs.About.current),
      color: 'rgba(250, 250, 250, 0)'
    },
    about: {
      upper: getTopForElement(refs.About.current),
      bottom: getTopForElement(refs.Experience.current),
      color: 'rgba(248, 237, 234, 0.7)'
    },
    experience: {
      upper: getTopForElement(refs.Experience.current),
      bottom: getTopForElement(refs.Tech.current),
      color: 'rgba(251, 239, 213, 0.7)'
    },
    tech: {
      upper: getTopForElement(refs.Tech.current),
      bottom: getTopForElement(refs.Contact.current),
      color: 'rgba(234, 230, 220, 0.7)'
    },
    contact: {
      color: 'rgba(245, 241, 207, 0.7)'
    }
  }

  /**
   * Had to do it this way to not re-render multiple times, we just need to render two times when top > about section top (only one time)
   * and when top < about section top ( only one time)
   */
  const changeBgForAbout = window.scrollY > boundaries.welcome.bottom && window.scrollY <= boundaries.about.bottom && bgStyle.backgroundColor !== boundaries.about.color
  const changeBgForExperience = window.scrollY > boundaries.about.bottom && window.scrollY <= boundaries.experience.bottom && bgStyle.backgroundColor !== boundaries.experience.color
  const changeBgForTech = window.scrollY > boundaries.experience.bottom && window.scrollY < boundaries.tech.bottom && bgStyle.backgroundColor !== boundaries.tech.color
  const changeBgForContact = window.scrollY >= boundaries.tech.bottom && bgStyle.backgroundColor !== boundaries.contact.color

  const changeBgToDefault = window.scrollY <= boundaries.welcome.bottom && bgStyle.backgroundColor !== boundaries.welcome.color

  if (changeBgForAbout) {
    setBgStyle({ backgroundColor: boundaries.about.color })
  } else if (changeBgForExperience) {
    setBgStyle({ backgroundColor: boundaries.experience.color })
  } else if (changeBgForTech) {
    setBgStyle({ backgroundColor: boundaries.tech.color })
  } else if (changeBgForContact) {
    setBgStyle({ backgroundColor: boundaries.contact.color })
  } else if (changeBgToDefault) {
    setBgStyle({ backgroundColor: boundaries.welcome.color })
  }
}

/**
 * Change the background of header when it moves out from welcome section into main sections.
 *
 * @param backgroundOpacity Intial background Opacity ( 0 )
 * @param refs Reference to different sections
 */
export const useBgStyle = ({ backgroundOpacity, refs }: BgStyleInput): BgStyle => {
  const bgColor = o => `rgba(250, 250, 250, ${o})`
  const [bgStyle, setBgStyle] = useState({ backgroundColor: bgColor(backgroundOpacity) })
  useEffect(() => {
    const intervalId = window.setInterval(() => updateOnInterval({ setBgStyle, bgColor, bgStyle, refs }), 20)
    return () => window.clearInterval(intervalId)
  }, [bgStyle, refs])

  return bgStyle
}

/**
 * Orchestrates the animation  the hamburger menu.
 *
 * @param rotateDegFrom Initial Degrees
 * @param rotateDegTo Final Degrees
 * @param opacityFrom Initial Opacity
 * @param opacityTo Final Opacity
 * @param translateFrom Initial Position
 * @param translateTo FInal Position
 */
export const useHamburgerMenuAnimation = ({ rotateDegFrom, rotateDegTo, opacityFrom, opacityTo, translateFrom, translateTo }: HamburgerMenuHookInput): HamburgerMenuHook => {
  const [rotateMenu, setRotateMenu] = useSpring(() => ({ rotate: `${rotateDegFrom}deg`, opacity: opacityFrom }))
  const [rotateCross, setCrossMenu] = useSpring(() => ({ rotate: `${rotateDegTo}deg`, opacity: opacityTo }))
  const [translateMenuItems, setTranslateMenuItems] = useSpring(() => ({ transform: `translate3d(0,${translateFrom}vh,0)`, opacity: opacityTo }))

  let toggled = false
  const onMenuClickHandler = () => {
    if (toggled) {
      setRotateMenu({ rotate: `${rotateDegFrom}deg`, opacity: opacityFrom })
      setCrossMenu({ rotate: `${rotateDegTo}deg`, opacity: opacityTo })
      setTranslateMenuItems({ transform: `translate3d(0,${translateFrom}vh,0)`, opacity: opacityTo })
      toggled = !toggled
      return
    }

    setRotateMenu({ rotate: `${rotateDegTo}deg`, opacity: opacityTo })
    setCrossMenu({ rotate: `${rotateDegFrom}deg`, opacity: opacityFrom })
    setTranslateMenuItems({ transform: `translate3d(0,${translateTo}vh,0)`, opacity: opacityFrom })
    toggled = !toggled
  }

  const onItemClickHandler = section => {
    animateScrollToTarget(section)
    onMenuClickHandler()
  }

  return {
    rotateMenu,
    rotateCross,
    translateMenuItems,
    onMenuClickHandler,
    onItemClickHandler
  }
}

export default useHamburgerMenuAnimation
