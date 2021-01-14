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
