import React from 'react'
import Grid from '@material-ui/core/Grid'
import { animated } from 'react-spring'

// Local Imports
import techData from './tech-content'
import { useAnimatedIcons, onHover, AnimatedHook } from './helpers'
import useTechSectionStyle from './styles'
import { SectionColumn } from '../../../config/types'
import { sectionColumnSize } from '../../../config/constants'
import { FileType } from '../../../config/tech-data'

type TechListInput = {
  animatedSprings: AnimatedHook
  techClasses: Record<string, string>
}

const techSectionColumnSize: SectionColumn = {
  xs: 3,
  sm: 3,
  md: 3,
  lg: 3,
  xl: 3
}

/**
 * This is an tech list child component with animations.
 *
 * @param animatedSprings List of springs
 * @param techClasses Tech Styles
 */
const TechList = ({ animatedSprings, techClasses }: TechListInput): React.ReactElement => {
  const { nameSprings, iconSprings } = animatedSprings
  return (
    <Grid container>
      {techData.map((data, key) => {
        // eslint-disable-next-line @next/next/no-img-element
        const icon = data.type === FileType.icon ? <data.icon className={techClasses.techIcons} /> : <img src={data.iconPath} className={techClasses.techIcons} alt={data.alt} />

        return (
          <Grid key={data.id} className={techClasses.techListGrid} {...onHover({ scaleTo: 1.2, opacityTo: 1, currentIndex: key })} item {...techSectionColumnSize}>
            <animated.div className={techClasses.techList} style={iconSprings[key]}>
              {icon}
            </animated.div>

            <animated.div className={techClasses.techName} style={{ opacity: nameSprings[key].opacity }}>
              {data.name}
            </animated.div>
          </Grid>
        )
      })}
    </Grid>
  )
}

/**
 * Tech Section of the page
 */
const Tech = (): React.ReactElement => {
  const techClasses = useTechSectionStyle()
  const animatedSprings = useAnimatedIcons({ scale: 1, opacity: 0, size: techData.length })

  return (
    <>
      <Grid className={techClasses.techHead} item {...sectionColumnSize}>
        <span>Tech</span>
      </Grid>

      <Grid className={techClasses.techBody} item {...sectionColumnSize}>
        <div className={techClasses.techMainContainer}>
          <TechList {...{ animatedSprings, techClasses }} />
        </div>
      </Grid>
    </>
  )
}

export default Tech
