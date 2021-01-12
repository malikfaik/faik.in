import { SpringStartFn, useSprings, SpringValue } from 'react-spring'

export type OnHover = {
  onMouseEnter: () => void
  onMouseLeave: () => void
}

export type OnHoverInput = {
  scaleTo: number
  currentIndex: number
}

export type AnimationHookInput = {
  size: number
  defaultScale: number
}

export type AnimationHook = { scale: SpringValue<number> }[]

type SetAnimationInput = {
  scale: number
  setScaleSprings: SpringStartFn<{ scale: number }>
  currentIndex: number
}

const animationHookParameters = {
  scaleTo: null,
  defaultScale: null,
  setScaleSprings: null
}

const setAnimation = ({ scale, currentIndex, setScaleSprings }: SetAnimationInput): void => {
  setScaleSprings(index => {
    if (index === currentIndex) {
      return { scale }
    }
    return { scale: animationHookParameters.defaultScale }
  })
}

/**
 * useAnimationHook acts a wrapper for useSprings
 *
 * @param size no of springs
 * @param defaultScale default scale value
 */
export const useAnimationHook = ({ size, defaultScale }: AnimationHookInput): AnimationHook => {
  const [scaleSprings, setScaleSprings] = useSprings(size, () => ({ scale: defaultScale }))
  animationHookParameters.setScaleSprings = setScaleSprings
  animationHookParameters.defaultScale = defaultScale
  return scaleSprings
}

/**
 * onHover functionality like :hover in css for animating with react-spring
 *
 * @param scaleTo scale value to animate
 * @param defaultScale default scale value
 * @param currentIndex current index
 * @param setScaleSprings Set spring function
 */
export const onHover = ({ scaleTo, currentIndex }: OnHoverInput): OnHover => {
  const onMouseEnter = () =>
    setAnimation({
      scale: scaleTo,
      currentIndex,
      setScaleSprings: animationHookParameters.setScaleSprings
    })
  const onMouseLeave = () =>
    setAnimation({
      scale: animationHookParameters.defaultScale,
      currentIndex,
      setScaleSprings: animationHookParameters.setScaleSprings
    })
  return { onMouseEnter, onMouseLeave }
}
