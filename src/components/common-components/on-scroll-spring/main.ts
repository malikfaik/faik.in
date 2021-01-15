import { MutableRefObject } from 'react'
import { useSpring } from 'react-spring'
import logger from '../../../utils/logger'

export type ScrollAnimationInput = {
  initialValue: number
  refs: { [name: string]: MutableRefObject<HTMLDivElement> }
}

const hooksParameters = {
  isStopped: false,
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
 * @param section Name of the the section.
 */
export const animateScrollToTarget = (section: string): void => {
  const { setY, isSetup, refs } = hooksParameters
  if (!isSetup) {
    logger.warn({ section }, 'useScrollAnimation has not been called, isSetup is false.')
    return
  }

  const onWheel = () => {
    hooksParameters.isStopped = true
    window.removeEventListener('wheel', onWheel)
  }

  try {
    const ref = refs[section]
    const element = ref.current
    const value = window.scrollY + element.getBoundingClientRect().top

    window.addEventListener('wheel', onWheel)

    setY({
      y: value,
      reset: true,
      from: { y: window.scrollY },
      onRest: () => {
        hooksParameters.isStopped = false
        window.removeEventListener('wheel', onWheel)
      },
      onChange: props => {
        if (!hooksParameters.isStopped) {
          window.scroll(0, props.y)
        }
      }
    })
  } catch (err) {
    logger.error({ err, section }, 'Something went wrong with the animateScrollToTarget function')
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
export const useScrollAnimation = ({ initialValue, refs }: ScrollAnimationInput): void => {
  const [, setY] = useSpring(() => ({ y: initialValue }))

  hooksParameters.setY = setY
  hooksParameters.refs = refs
  hooksParameters.isSetup = true
}
