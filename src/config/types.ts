import { SpringValue } from 'react-spring'

export type OnHover = {
  onMouseEnter: () => void
  onMouseLeave: () => void
}

export type BorderRadiusSpring = {
  borderRadius: SpringValue<number>
}

export type BorderRadiusSetSpring = {
  borderRadius: number
}

export type ScaleSpring = {
  scale: SpringValue<number>
}

export type ScaleSetSpring = {
  scale: number
}

export type OpacitySpring = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  opacity: SpringValue<any>
}
