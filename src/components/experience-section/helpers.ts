import { SpringStartFn } from 'react-spring'

export type OnHover = {
  onMouseEnter: () => void
  onMouseLeave: () => void
}

export type OnHoverInput = {
  setSpring: SpringStartFn<{ borderRadius: number }>
  borderRadiusTo: number
  defaultBorderRadius: number
  currentIndex: number
}

export type DateStringInput = {
  dateFrom: Date
  dateTo: Date | number
}

/**
 * Formats the date to be displayed correctly by trimming useless parts
 *
 * @param dateFrom "to" field from the data file
 * @param dateTo "from" field from the data file
 */
export const getDateString = ({ dateFrom, dateTo }: DateStringInput): string => {
  const yeFrom = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(dateFrom).slice(-2)
  const moFrom = new Intl.DateTimeFormat('en', { month: 'short' }).format(dateFrom)
  let formatedToDate = 'present'
  if (dateTo !== 0) {
    const yeTo = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(dateTo).slice(-2)
    const moTo = new Intl.DateTimeFormat('en', { month: 'short' }).format(dateTo)
    formatedToDate = `${moTo} ${yeTo}'`
  }
  return `${moFrom} ${yeFrom}' - ${formatedToDate}`
}

/**
 * onHover functionality like :hover in css for animating with react-spring
 *
 * @param setSpring SetSpring function from react-spring
 * @param borderRadiusTo border-radius value to update
 * @param defaultBorderRadius default border radius value
 * @param currentIndex current index
 */
export const onHover = ({ setSpring, borderRadiusTo, defaultBorderRadius, currentIndex }: OnHoverInput): OnHover => {
  const onMouseEnter = () => {
    setSpring(i => {
      if (i === currentIndex) {
        return { borderRadius: borderRadiusTo }
      }
      return { borderRadius: defaultBorderRadius }
    })
  }

  const onMouseLeave = () => {
    setSpring({ borderRadius: defaultBorderRadius })
  }

  return {
    onMouseEnter,
    onMouseLeave
  }
}
