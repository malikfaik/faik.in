import React from 'react'
import { CgClose } from 'react-icons/cg'
import { animated } from 'react-spring'
import { Grid } from '@material-ui/core'
import useModelBoxStyles from './styles'
import { onClose, useAnimationHook } from './helpers'
import { SectionColumn } from '../../../config/types'

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

            <Grid className={`${modelBoxClasses.modelBoxContent} ${modelBoxClasses.modelBoxBody}`} item {...sectionColumnSize}>
              <p className={modelBoxClasses.modelBoxDescription}>{modelData.description}</p>
            </Grid>
          </Grid>
        </div>
      </animated.div>
    </>
  )
}

export default ModelBox
