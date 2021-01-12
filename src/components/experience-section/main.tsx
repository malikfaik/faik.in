import React from 'react'
import Grid from '@material-ui/core/Grid'
import { useSprings, animated, SpringValue } from 'react-spring'

// Local Imports
import experienceContent from './experience-content'
import useExperienceSectionStyle from './styles'
import { getDateString, onHover, OnHoverInput } from './helpers'
import { SectionColumn } from '../../config/types'

const sectionColumnSize: SectionColumn = {
  xs: 12,
  sm: 12,
  md: 12,
  lg: 6,
  xl: 6
}

type ExperienceListInput = {
  springs: { borderRadius: SpringValue<number> }[]
  setSpring: OnHoverInput['setSpring']
  experienceClasses: Record<string, string>
}

/**
 * This is an experience list child component with animations.
 *
 * @param springs List of springs
 * @param setSpring Setter function for springs
 * @param experienceClasses Experience Styles
 */
const ExperienceList = ({ springs, setSpring, experienceClasses }: ExperienceListInput): React.ReactElement => {
  return (
    <ul className={experienceClasses.experienceList}>
      {experienceContent.map((data, key) => (
        <li key={data.id}>
          <a {...onHover({ setSpring, borderRadiusTo: 0, defaultBorderRadius: 50, currentIndex: key })}>
            <animated.div className={experienceClasses.bulletPoint} style={springs[key]} />
            <div className={experienceClasses.employerName}>{data.name}</div>
            <div className={experienceClasses.experienceDuration}>{getDateString(data.from, data.to)}</div>
          </a>
        </li>
      ))}
    </ul>
  )
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
        <ExperienceList {...{ springs, setSpring, experienceClasses }} />
      </Grid>

      <Grid className={experienceClasses.experienceHead} item {...sectionColumnSize}>
        <span>Experience</span>
      </Grid>
    </>
  )
}

export default Experience
