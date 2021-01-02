import { UseSpringProps, useSprings } from 'react-spring'

type AnimatedHook = {
  [type: string]: {
    iconSprings: UseSpringProps[]
    nameSprings: UseSpringProps[]
  }
}

type SizeType = {
  [type: string]: number
}

export const setAnimatedHooks = {
  hooksAreLive: false,
  backend: {
    setIconSprings: null,
    setNameSprings: null
  },
  frontend: {
    setIconSprings: null,
    setNameSprings: null
  },
  devops: {
    setIconSprings: null,
    setNameSprings: null
  },
  tools: {
    setIconSprings: null,
    setNameSprings: null
  },

  defaults: {
    scale: null,
    opacity: null
  }
}

export const useAnimatedIcons = (scale: number, opacity: number, size: SizeType): AnimatedHook => {
  const [backendIconSprings, setBackendIconSprings] = useSprings(size.backend, () => ({ scale }))
  const [frontendIconSprings, setFrontendIconSprings] = useSprings(size.frontend, () => ({ scale }))
  const [devopsIconSprings, setDevopsIconSprings] = useSprings(size.devops, () => ({ scale }))
  const [toolsIconSprings, setToolsIconSprings] = useSprings(size.tools, () => ({ scale }))

  const [backendNameSprings, setBackendNameSprings] = useSprings(size.backend, () => ({ opacity }))
  const [frontendNameSprings, setFrontendNameSprings] = useSprings(size.frontend, () => ({ opacity }))
  const [devopsNameSprings, setDevopsNameSprings] = useSprings(size.devops, () => ({ opacity }))
  const [toolsNameSprings, setToolsNameSprings] = useSprings(size.tools, () => ({ opacity }))

  setAnimatedHooks.backend = {
    setIconSprings: setBackendIconSprings,
    setNameSprings: setBackendNameSprings
  }

  setAnimatedHooks.frontend = {
    setIconSprings: setFrontendIconSprings,
    setNameSprings: setFrontendNameSprings
  }

  setAnimatedHooks.devops = {
    setIconSprings: setDevopsIconSprings,
    setNameSprings: setDevopsNameSprings
  }

  setAnimatedHooks.tools = {
    setIconSprings: setToolsIconSprings,
    setNameSprings: setToolsNameSprings
  }

  setAnimatedHooks.defaults = {
    scale,
    opacity
  }

  setAnimatedHooks.hooksAreLive = true

  return {
    backend: {
      iconSprings: backendIconSprings,
      nameSprings: backendNameSprings
    },

    frontend: {
      iconSprings: frontendIconSprings,
      nameSprings: frontendNameSprings
    },

    devops: {
      iconSprings: devopsIconSprings,
      nameSprings: devopsNameSprings
    },

    tools: {
      iconSprings: toolsIconSprings,
      nameSprings: toolsNameSprings
    }
  }
}
