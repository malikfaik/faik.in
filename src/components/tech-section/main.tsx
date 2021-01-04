import React from 'react'
import Grid from '@material-ui/core/Grid'
import { animated } from 'react-spring'
import techData from './tech-content'
import { useAnimatedIcons, onHover, AnimatedHook } from './helpers'
import { techSectionColumnSize, sectionColumnSize } from '../../config/section-grid-size'
import useTechSectionStyle from './styles'

/**
 * This functions returns constructed li element with animations.
 *
 * @param type The type of stack to return data for.
 */
const techList = ({ iconSprings, nameSprings }: AnimatedHook, techStyles: Record<string, string>): React.ReactElement[] =>
  techData.map((data, key) => {
    const icon = data.iconAvailable ? <data.icon className={techStyles.techIcons} /> : <img src={data.iconPath} className={techStyles.techIcons} alt={data.alt} />

    return (
      <Grid key={data.id} className={techStyles.techListGrid} {...onHover(1.2, 1, key)} item {...techSectionColumnSize}>
        <animated.div className={techStyles.techList} style={iconSprings[key]}>
          {icon}
        </animated.div>

        <animated.div className={techStyles.techName} style={{ opacity: nameSprings[key].opacity }}>
          {data.name}
        </animated.div>
      </Grid>
    )
  })

/**
 * Tech Section of the page
 */
const Tech = (): React.ReactElement => {
  const techStyles = useTechSectionStyle()
  const animatedSpring = useAnimatedIcons(1, 0, techData.length)

  return (
    <>
      <Grid className={techStyles.techHead} item {...sectionColumnSize}>
        <span>Tech</span>
      </Grid>

      <Grid className={techStyles.techBody} item {...sectionColumnSize}>
        <div className={techStyles.techMainContainer}>
          <Grid container>{techList(animatedSpring, techStyles)}</Grid>
        </div>
      </Grid>
    </>
  )
}

export default Tech
