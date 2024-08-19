/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { CgClose } from 'react-icons/cg'
import { animated } from 'react-spring'
import { Chip, Grid } from '@material-ui/core'
import useModelBoxStyles from './styles'
import { ModelData, onClose, useAnimationHook } from './helpers'
import { SectionColumn } from '../../../../config/types'
import { FileType, techList } from '../../../../config/tech-data'

const sectionColumnSize: SectionColumn = {
  xs: 12,
  sm: 12,
  md: 12,
  lg: 6,
  xl: 6
}

const ModelBox = (): React.ReactElement => {
  const modelBoxClasses = useModelBoxStyles()
  const { animatedStyle, modelData } = useAnimationHook()
  return (
    <>
      <animated.div className={modelBoxClasses.modelBoxWrapper} style={animatedStyle}>
        <div role="presentation" onClick={onClose} className={modelBoxClasses.modelBoxClose}>
          <CgClose />
        </div>
        <div className={modelBoxClasses.modelBox}>
          <Grid container>
            <Grid className={`${modelBoxClasses.modelBoxContent} ${modelBoxClasses.modelBoxHead}`} item {...sectionColumnSize}>
              <div>
                <img className={modelBoxClasses.modelBoxLogo} alt="model-box-logo" src={modelData.img} />
                <p className={modelBoxClasses.modelBoxName}>{modelData.name}</p>
                <p className={modelBoxClasses.modelBoxDuration}>{modelData.duration}</p>
              </div>
            </Grid>

            <Grid item {...sectionColumnSize}>
              <Grid className={modelBoxClasses.modelBoxTech} item {...sectionColumnSize}>
                {modelData.tech?.map((techItem: ModelData['tech'][0]) => {
                  const data = techList[techItem.id]
                  const icon = data.type === FileType.icon ? <data.icon className={modelBoxClasses.techIcons} /> : <img src={data.iconPath} className={modelBoxClasses.techIcons} alt={data.alt} />

                  return <Chip variant="outlined" key={techItem.id} label={techItem.name} className={modelBoxClasses.modelBoxBadge} icon={icon} size="small" />
                })}
              </Grid>
              <Grid className={`${modelBoxClasses.modelBoxContent} ${modelBoxClasses.modelBoxBody}`} item {...sectionColumnSize}>
                <p className={modelBoxClasses.modelBoxDescription}>{modelData.description}</p>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </animated.div>
    </>
  )
}

export default ModelBox
