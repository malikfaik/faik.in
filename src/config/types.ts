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
