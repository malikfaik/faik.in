import { useState } from 'react'
import { useSpring, SpringValue } from 'react-spring'

type ModelData = {
  img: string
  description: string
  name: string
  duration: string
}

export type AnimationHook = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  animatedStyle: { scale: SpringValue<number>; opacity: SpringValue<any> }
  modelData: ModelData
}

const animationHook = {
  setStyleSpring: null,
  setModelData: null
}

export const onOpen = (modelData: ModelData): void => {
  animationHook.setModelData(modelData)
  animationHook.setStyleSpring({ scale: 1, opacity: 1 })
}

export const onClose = (): void => {
  animationHook.setStyleSpring({ scale: 0, opacity: 0 })
}

export const useAnimationHook = (): AnimationHook => {
  const [modelData, setModelData] = useState({ img: null, description: null, name: null, duration: null })
  const [animatedStyle, setStyleSpring] = useSpring(() => ({ scale: 0, opacity: 0 }))

  animationHook.setStyleSpring = setStyleSpring
  animationHook.setModelData = setModelData
  return {
    animatedStyle,
    modelData
  }
}
