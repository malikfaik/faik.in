import React from 'react'
import Grid from '@material-ui/core/Grid'

// Local Imports
import experienceContent from './experience-content'
import useExperienceSectionStyle from './styles'
import { getDateString } from './helpers'
import { SectionColumn } from '../../config/types'
import ModelBox from '../common-components/model-box/main'
import { onOpen } from '../common-components/model-box/helpers'
import HoverUnderline from '../common-components/link-hover/main'

type ExperienceListInput = {
  experienceClasses: Record<string, string>
}

const sectionColumnSize: SectionColumn = {
  xs: 12,
  sm: 12,
  md: 12,
  lg: 6,
  xl: 6
}

/**
 * This is an experience list child component with animations.
 *
 * @param experienceClasses Experience Styles
 */
const ExperienceList = ({ experienceClasses }: ExperienceListInput): React.ReactElement => {
  return (
    <ul className={experienceClasses.experienceList}>
      {experienceContent.map(data => (
        <li key={data.id}>
          <div className={experienceClasses.bulletPoint} />
          <div className={experienceClasses.employerName}>{data.name}</div>
          <div className={experienceClasses.experienceDuration}>
            <div>
              {getDateString({ dateFrom: data.from, dateTo: data.to })}
              <HoverUnderline
                onClick={() =>
                  onOpen({
                    img: data.img,
                    description: data.description,
                    name: data.name,
                    duration: getDateString({ dateFrom: data.from, dateTo: data.to })
                  })
                }
                anchorClass={experienceClasses.experienceMore}
                linkText="more+"
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

/**
 * Experience Section of the page.
 */
const Experience = (): React.ReactElement => {
  const experienceClasses = useExperienceSectionStyle()
  return (
    <>
      <ModelBox />
      <Grid className={experienceClasses.experienceBody} item {...sectionColumnSize}>
        <ExperienceList {...{ experienceClasses }} />
      </Grid>

      <Grid className={experienceClasses.experienceHead} item {...sectionColumnSize}>
        <span>Experience</span>
      </Grid>
    </>
  )
}

export default Experience
