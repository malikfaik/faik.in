import React from 'react'
import Grid from '@material-ui/core/Grid'
import { animated } from 'react-spring'
import techData from '../../data/tech-data'
import { useAnimatedIcons, setAnimatedHooks } from './hooks'

const setAnimation = (type: string, scale: number, opacity: number, currentIndex: number): void => {
  if (setAnimatedHooks.hooksAreLive) {
    setAnimatedHooks[type].setIconSprings(index => {
      if (index === currentIndex) {
        return { scale }
      }
      return { scale: setAnimatedHooks.defaults.scale }
    })
    setAnimatedHooks[type].setNameSprings(index => {
      if (index === currentIndex) {
        return { opacity }
      }
      return { scale: setAnimatedHooks.defaults.opacity }
    })
  }
}

/**
 * This functions returns constructed li element with animations.
 *
 * @param type The type of stack to return data for.
 */
const techList = (type, { iconSprings, nameSprings }): React.ReactElement[] =>
  techData[type].map((data, key) => {
    const icon = data.iconAvailable ? (
      <data.icon className="tech-icons" />
    ) : (
      <img src={data.iconPath} className="tech-icons" alt={data.alt} />
    )

    return (
      <Grid
        className="tech-list-grid"
        onMouseEnter={() => setAnimation(type, 1.2, 1, key)}
        onMouseLeave={() => setAnimation(type, 1, 0, key)}
        item
        xs
        sm
        md
        lg
        xl
      >
        <animated.div className="tech-list" style={iconSprings[key]}>
          {icon}
        </animated.div>

        <animated.div className="tech-name" style={{ opacity: nameSprings[key].opacity }}>
          {data.name}
        </animated.div>
      </Grid>
    )
  })

const Tech = (): React.ReactElement => {
  const { backend, frontend, devops, tools } = useAnimatedIcons(1, 0, {
    backend: techData.backend.length,
    frontend: techData.frontend.length,
    devops: techData.devops.length,
    tools: techData.tools.length
  })

  return (
    <>
      <Grid className="main-section-head" item xs={12} sm={12} md={12} lg={6} xl={6}>
        <span>Tech</span>
      </Grid>

      <Grid className="section-body tech-body" container item xs={12} sm={12} md={12} lg={6} xl={6}>
        <div className="tech-main-container">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              Backend
            </Grid>

            <Grid className="tech-list-container" container xs={12} sm={12} md={12} lg={12} xl={12}>
              {techList('backend', backend)}
            </Grid>
          </Grid>

          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              DevOps
            </Grid>

            <Grid className="tech-list-container" container xs={12} sm={12} md={12} lg={12} xl={12}>
              {techList('devops', devops)}
            </Grid>
          </Grid>

          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              Frontend
            </Grid>

            <Grid className="tech-list-container" container xs={12} sm={12} md={12} lg={12} xl={12}>
              {techList('frontend', frontend)}
            </Grid>
          </Grid>

          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              Tools
            </Grid>

            <Grid className="tech-list-container" container xs={12} sm={12} md={12} lg={12} xl={12}>
              {techList('tools', tools)}
            </Grid>
          </Grid>
        </div>
      </Grid>
    </>
  )
}

export default Tech
