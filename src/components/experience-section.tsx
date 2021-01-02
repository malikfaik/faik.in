import React from 'react'
import Grid from '@material-ui/core/Grid'
import { useSprings, animated } from 'react-spring'
import experienceData from '../data/experience-data'

/**
 * Formats the date to be displayed correctly by trimming useless parts
 *
 * @param {Date} dateFrom "to" field from the data file
 * @param {Date | Number } dateTo "from" field from the data file
 */
const getDateString = (dateFrom: Date, dateTo: Date | number): string => {
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
 * This functions returns constructed li element with animations.
 *
 * @param springs List of springs
 * @param setSpring Setter function for springs
 */
const experienceList = (springs, setSpring): React.ReactElement[] => {
  return experienceData.map((data, key) => (
    <li
      onMouseEnter={() => {
        setSpring(i => {
          if (i === key) {
            return { borderRadius: 0 }
          }
          return { borderRadius: 50 }
        })
      }}
      onMouseLeave={() => {
        setSpring({ borderRadius: 50 })
      }}
    >
      <animated.div className={data.className} style={springs[key]}>
        {/* <animated.svg style={springs[key]}>
          <circle style={{ width: '100%', height: '100%' }} />
        </animated.svg> */}
      </animated.div>
      <div className="company-name">{data.name}</div>
      <div className="exp-duration">{getDateString(data.from, data.to)}</div>
    </li>
  ))
}

const Experience = (): React.ReactElement => {
  const [springs, set] = useSprings(experienceData.length, () => ({ borderRadius: 50 }))

  return (
    <>
      <Grid className="experience-body section-body" item xs={12} sm={12} md={12} lg={6} xl={6}>
        <ul className="experience-list">{experienceList(springs, set)}</ul>
      </Grid>

      <Grid className="main-section-head experience-head" item xs={12} sm={12} md={12} lg={6} xl={6}>
        <span>Experience</span>
      </Grid>
    </>
  )
}

export default Experience
