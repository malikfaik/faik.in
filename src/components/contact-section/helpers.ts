import { SpringStartFn } from 'react-spring'
import { OnHover, ScaleSetSpring } from '../../config/types'

let settedDefaultScale
const setAnimation = (scale: number, currentIndex: number, setScaleSprings: SpringStartFn<ScaleSetSpring>): void => {
  setScaleSprings(index => {
    if (index === currentIndex) {
      return { scale }
    }
    return { scale: settedDefaultScale }
  })
}

/**
 * onHover functionality like :hover in css for animating with react-spring
 *
 * @param scaleTo scale value to animate
 * @param defaultScale default scale value
 * @param currentIndex current index
 * @param setScaleSprings Set spring function
 */
const onHover = (scaleTo: number, defaultScale: number, currentIndex: number, setScaleSprings: SpringStartFn<ScaleSetSpring>): OnHover => {
  settedDefaultScale = defaultScale
  const onMouseEnter = () => setAnimation(scaleTo, currentIndex, setScaleSprings)
  const onMouseLeave = () => setAnimation(defaultScale, currentIndex, setScaleSprings)
  return { onMouseEnter, onMouseLeave }
}

export default onHover
