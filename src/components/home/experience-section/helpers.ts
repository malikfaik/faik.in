export type DateStringInput = {
  dateFrom: Date
  dateTo: Date | null
}

/**
 * Formats the date to be displayed correctly by trimming useless parts
 *
 * @param dateFrom "to" field from the data file
 * @param dateTo "from" field from the data file
 */
export const getDateString = ({ dateFrom, dateTo }: DateStringInput): string => {
  const yeFrom = dateFrom.toLocaleString('en', { year: 'numeric' }).slice(-2)
  const moFrom = dateFrom.toLocaleString('en', { month: 'short' })
  let formatedToDate = 'present'
  if (dateTo !== null) {
    const yeTo = dateTo.toLocaleString('en', { year: 'numeric' }).slice(-2)
    const moTo = dateTo.toLocaleString('en', { month: 'short' })
    formatedToDate = `${moTo} ${yeTo}'`
  }
  return `${moFrom} ${yeFrom}' - ${formatedToDate}`
}
