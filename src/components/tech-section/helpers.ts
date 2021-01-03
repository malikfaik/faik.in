import { useSprings } from 'react-spring'
import { OnHover, OpacitySpring, ScaleSpring } from '../../config/types'

export type AnimatedHook = {
  iconSprings: ScaleSpring[]
  nameSprings: OpacitySpring[]
}

const setAnimatedHooks = {
  hooksAreLive: false,

  setIconSprings: null,
  setNameSprings: null,

  defaults: {
    scale: null,
    opacity: null
  }
}

/**
 * Animation helper function
 *
 * @param scale scale value to animate
 * @param opacity opacity value to animate
 * @param currentIndex current index
 */
const setAnimation = (scale: number, opacity: number, currentIndex: number): void => {
  if (setAnimatedHooks.hooksAreLive) {
    setAnimatedHooks.setIconSprings(index => {
      if (index === currentIndex) {
        return { scale }
      }
      return { scale: setAnimatedHooks.defaults.scale }
    })
    setAnimatedHooks.setNameSprings(index => {
      if (index === currentIndex) {
        return { opacity }
      }
      return { scale: setAnimatedHooks.defaults.opacity }
    })
  }
}

/**
 * This is a helper function abstact the logic to handle multiple spring animations
 *
 * @param scale initial scale value
 * @param opacity initial opacity
 * @param size size of the list
 */
export const useAnimatedIcons = (scale: number, opacity: number, size: number): AnimatedHook => {
  const [iconSprings, setBackendIconSprings] = useSprings(size, () => ({ scale }))

  const [nameSprings, setBackendNameSprings] = useSprings(size, () => ({ opacity }))

  setAnimatedHooks.setIconSprings = setBackendIconSprings
  setAnimatedHooks.setNameSprings = setBackendNameSprings

  setAnimatedHooks.defaults = {
    scale,
    opacity
  }

  setAnimatedHooks.hooksAreLive = true

  return {
    iconSprings,
    nameSprings
  }
}

/**
 * onHover functionality like :hover in css for animating with react-spring
 *
 * @param scaleTo scale value to animate
 * @param opacityTo opacity value to animate
 * @param currentIndex current index
 */
export const onHover = (scaleTo: number, opacityTo: number, currentIndex: number): OnHover => {
  const onMouseEnter = () => setAnimation(scaleTo, opacityTo, currentIndex)
  const onMouseLeave = () => setAnimation(setAnimatedHooks.defaults.scale, setAnimatedHooks.defaults.opacity, currentIndex)
  return { onMouseEnter, onMouseLeave }
}
