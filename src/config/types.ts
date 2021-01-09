import { MutableRefObject } from 'react'
import { SpringValue } from 'react-spring'
import Grid from '@material-ui/core/Grid'

export type GridSizes = 'auto' | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export type SectionColumn = {
  xs: GridSizes
  sm: GridSizes
  md: GridSizes
  lg: GridSizes
  xl: GridSizes
}

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

export type GridRef = MutableRefObject<typeof Grid>

export type SpringScrollFunction = (ref: GridRef) => void
