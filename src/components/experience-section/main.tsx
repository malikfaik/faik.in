import React from 'react'
import Grid from '@material-ui/core/Grid'
import { useSprings, animated, SpringStartFn } from 'react-spring'

// Local Imports
import experienceContent from './experience-content'
import useExperienceSectionStyle from './styles'
import { getDateString, onHover } from './helpers'
import { sectionColumnSize } from '../../config/section-grid-size'
import { BorderRadiusSetSpring, BorderRadiusSpring } from '../../config/types'

/**
 * This functions returns constructed li element with animations.
 *
 * @param springs List of springs
 * @param setSpring Setter function for springs
 */
const experienceList = (springs: BorderRadiusSpring[], setSpring: SpringStartFn<BorderRadiusSetSpring>, experienceClasses: Record<string, string>): React.ReactElement[] => {
  return experienceContent.map((data, key) => (
    <li key={data.id} {...onHover(setSpring, 0, 50, key)}>
      <animated.div className={experienceClasses.bulletPoint} style={springs[key]} />
      <div className={experienceClasses.employerName}>{data.name}</div>
      <div className={experienceClasses.experienceDuration}>{getDateString(data.from, data.to)}</div>
    </li>
  ))
}

/**
 * Experience Section of the page.
 */
const Experience = (): React.ReactElement => {
  const [springs, setSpring] = useSprings(experienceContent.length, () => ({ borderRadius: 50 }))
  const experienceClasses = useExperienceSectionStyle()
  return (
    <>
      <Grid className={experienceClasses.experienceBody} item {...sectionColumnSize}>
        <ul className={experienceClasses.experienceList}>{experienceList(springs, setSpring, experienceClasses)}</ul>
      </Grid>

      <Grid className={experienceClasses.experienceHead} item {...sectionColumnSize}>
        <span>Experience</span>
      </Grid>
    </>
  )
}

export default Experience
