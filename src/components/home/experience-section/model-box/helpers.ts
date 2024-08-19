import { useState } from 'react'
import { useSpring, SpringValue } from 'react-spring'

export type ModelData = {
  img: string
  description: string
  name: string
  tech: { id: string; name: string }[]
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
  const [modelData, setModelData] = useState({ img: null, description: null, name: null, duration: null, tech: [] })
  const [animatedStyle, setStyleSpring] = useSpring(() => ({ scale: 0, opacity: 0 }))

  animationHook.setStyleSpring = setStyleSpring
  animationHook.setModelData = setModelData
  return {
    animatedStyle,
    modelData
  }
}

/**
 * Generate an idempotent color from a string.
 *
 * @param str String to convert to color
 * @returns HSL color string
 */
export const stringToColor = (str: string): string => {
  let hash = 0
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < str.length; i++) {
    // eslint-disable-next-line no-bitwise
    hash = str.charCodeAt(i) + ((hash << 15) - hash)
  }

  const hue = ((hash % 360) + 360) % 360 // Ensures hue is positive and within 0-360

  const saturation = 70
  const lightness = 90

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`
}
