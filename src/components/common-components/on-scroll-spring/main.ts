import { useRef, useEffect, useState } from 'react'
import { useSpring } from 'react-spring'
import { GridRef, SpringScrollFunction } from '../../../config/types'
import logger from '../../../utils/logger'

let isStopped = false
let movedDown = false
let movedUp = false

const hooksParameters = {
  isMenuButtonClicked: null,
  setY: null,
  bgStyle: null,
  refs: null,
  bgColor: null,
  setBgStyle: null,
  scrollDir: null,
  intervalId: null,
  isSetup: false
}

/**
 * Scrolls smoothly to the section as indicated by the ref.
 * @param ref Reference to the section.
 */
const animateScrollToTarget = (ref, isNavigation = true) => {
  const { isMenuButtonClicked, setY, isSetup } = hooksParameters
  if (!isSetup) {
    logger.warn('useScrollAnimation has not been called, isSetup is false.', { ref, hooksParameters })
    return
  }

  const onWheel = () => {
    isStopped = true
    window.removeEventListener('wheel', onWheel)
  }

  try {
    isMenuButtonClicked.current = isNavigation
    const element = ref.current
    const value = window.scrollY + element.getBoundingClientRect().top

    window.addEventListener('wheel', onWheel)

    setY({
      y: value,
      reset: true,
      from: { y: window.scrollY },
      onRest: () => {
        isStopped = false
        isMenuButtonClicked.current = false
        window.removeEventListener('wheel', onWheel)
      },
      onChange: props => {
        if (!isStopped || movedDown || movedUp) {
          window.scroll(0, props.y)
        }
      }
    })
  } catch (err) {
    logger.error('Something went wrong with the animateScrollToTarget function', err, { ref, hooksParameters })
  }
}

/**
 * Function that runs every 30ms
 *
 * This function checks if navigation is below the welcome section, if it is, it adds a white
 * shade behind it, else removes it.
 *
 * This function also animates the scrolling smoothly from Welcome Section to about section.
 */
const keepChecking = () => {
  const { isMenuButtonClicked, bgStyle, setBgStyle, bgColor, isSetup, refs, scrollDir } = hooksParameters

  if (!isSetup) {
    logger.warn('useScrollAnimation has not been called, isSetup is false.', { hooksParameters })
    return
  }

  const getTopForElement = element => window.scrollY + element.getBoundingClientRect().top

  try {
    const boundries = {
      welcome: {
        upper: getTopForElement(refs.Welcome.current),
        bottom: getTopForElement(refs.About.current)
      }
    }
    /**
     * Had to do it this way to not re-render multiple times, we just need to render two times when top > about section top (only one time)
     * and when top < about section top ( only one time)
     */
    const changeBgToOpacity = window.scrollY > boundries.welcome.bottom && bgStyle.backgroundColor === bgColor(0)
    const changeBgToDefault = window.scrollY <= boundries.welcome.bottom && bgStyle.backgroundColor === bgColor(0.7)

    if (changeBgToOpacity && !isMenuButtonClicked.current) {
      setBgStyle({ backgroundColor: bgColor(0.7) })
    } else if (changeBgToDefault && !isMenuButtonClicked.current) {
      setBgStyle({ backgroundColor: bgColor(0) })
    }

    /**
     * Checks which side are we scrolling, and are we still in welcome section
     * and verfying that we didn't call the function before already and it is not triggered because a click in navigation.
     * If everything is correct we call animate for to Welcome Section or About section respectively
     *
     * Note: A small threshold of 0.1 is added to the up scroll because the scroll animates slowly towards
     * the end and the helper function for getting the scroll direction registers down as up.
     */
    const isUpandInWelcomeSection = scrollDir.current === 'up' && window.scrollY < boundries.welcome.bottom / 1.1
    const isDownandInWelcomeSection = scrollDir.current === 'down' && window.scrollY < boundries.welcome.bottom

    if (isDownandInWelcomeSection && !movedDown && !isMenuButtonClicked.current) {
      animateScrollToTarget(refs.About, false)
      movedDown = true
      movedUp = false
    } else if (isUpandInWelcomeSection && !movedUp) {
      animateScrollToTarget(refs.Welcome, false)
      movedUp = true
      movedDown = false
    }
  } catch (err) {
    // Clearing the function from interval if error happens.
    window.clearInterval(hooksParameters.intervalId)
    logger.error({ err }, 'Something went wrong with the keepChecking function')
  }
}

/**
 * This module does a number of things that require related to scrolling,
 * 1) It animated the scroll to the section user click on in the navigation.
 * 2) It animates the scroll to about section from welcome section smoothly.
 * 2) It return background style of the navigation when it scrolls from  welcome section to the main sections.
 * @param initialValue
 * @param refs
 */
const useScrollAnimation = (initialValue: number, refs: { [name: string]: GridRef }): UseScrollAnimationReturn => {
  const bgColor = o => `rgba(250, 250, 250, ${o})`

  const isMenuButtonClicked = useRef(false)
  const scrollDir = useRef(null)

  const [bgStyle, setBgStyle] = useState({ backgroundColor: bgColor(0) })
  const [, setY] = useSpring(() => ({ y: initialValue }))

  hooksParameters.bgColor = bgColor
  hooksParameters.bgStyle = bgStyle
  hooksParameters.setBgStyle = setBgStyle
  hooksParameters.isMenuButtonClicked = isMenuButtonClicked
  hooksParameters.setY = setY
  hooksParameters.refs = refs
  hooksParameters.scrollDir = scrollDir
  hooksParameters.isSetup = true

  /**
   * Tracking scroll direction and add 20ms repeating function.
   * Credits: https://stackoverflow.com/a/62497293
   */
  useEffect(() => {
    try {
      hooksParameters.intervalId = window.setInterval(keepChecking, 20)
      const threshold = 0
      let lastScrollY = window.pageYOffset
      let ticking = false

      const updateScrollDir = () => {
        const scrollY = window.pageYOffset

        if (Math.abs(scrollY - lastScrollY) < threshold) {
          ticking = false
          return
        }
        scrollDir.current = scrollY > lastScrollY ? 'down' : 'up'
        lastScrollY = scrollY > 0 ? scrollY : 0
        ticking = false
      }

      const scrollEvent = () => {
        if (!ticking) {
          window.requestAnimationFrame(updateScrollDir)
          ticking = true
        }
      }

      window.addEventListener('scroll', scrollEvent)
      return () => window.removeEventListener('scroll', scrollEvent)
    } catch (err) {
      logger.error('Something went wrong with the scroll direction checker', err, { hooksParameters })
    }

    return () => null
  }, [scrollDir])

  return { scrollToTarget: animateScrollToTarget, bgStyle }
}

export type UseScrollAnimationReturn = {
  scrollToTarget: SpringScrollFunction
  bgStyle: { backgroundColor: string }
}

export default useScrollAnimation
