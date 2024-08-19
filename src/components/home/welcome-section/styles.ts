import { makeStyles } from '@material-ui/core/styles'

const useWelcomeSectionStyle = makeStyles(theme => ({
  coverPicture: {
    height: '100vh',
    objectFit: 'cover',
    objectPosition: 'bottom',
    overflow: 'hidden',
    position: 'absolute',
    width: '100%',
    zIndex: -2,

    [theme.breakpoints.between('xs', 'md')]: {
      objectPosition: '70% 30%'
    }
  },

  whiteShade: {
    backgroundColor: '#fff',
    height: '100vh',
    opacity: 0.7,
    position: 'absolute',
    width: '100%',
    zIndex: -1
  },

  coverFlex: {
    alignItems: 'center',
    display: 'flex',
    fontFamily: `"DM Serif Text", serif`,
    height: '100vh',
    justifyContent: 'center',
    width: '100%'
  },

  nameText: {
    fontSize: '8.5vmin',
    position: 'absolute',
    textAlign: 'center',
    fontWeight: 1000,
    width: '100%',
    opacity: '0.7',
    zIndex: -1,

    [theme.breakpoints.only('xs')]: {
      top: '40%'
    },

    [theme.breakpoints.only('md')]: {
      top: '38%'
    },

    '@media (min-height: 800px)': {
      top: '45%'
    },

    '@media (min-height: 650px)': {
      top: '42%'
    }
  },

  downArrow: {
    cursor: 'pointer',
    fontSize: '6vmin',
    position: 'absolute',
    opacity: '0.7',
    top: '90%',

    [theme.breakpoints.between('xs', 'md')]: {
      fontSize: '10vmin',
      top: '93%'
    }
  },

  currentLocation: {
    fontFamily: `"DM Serif Text", serif`,
    fontSize: '2vmin',
    opacity: '0.7',
    fontWeight: 600,
    position: 'absolute',
    top: '60%',

    [theme.breakpoints.between('xs', 'md')]: {
      fontSize: '3.5vmin',
      top: '58%'
    }
  },

  specialization: {
    fontFamily: `"DM Serif Text", serif;`,
    fontSize: '2vmin',
    opacity: '0.7',
    fontWeight: 600,
    position: 'absolute',
    top: '56%',

    [theme.breakpoints.between('xs', 'md')]: {
      fontSize: '3.5vmin',
      top: '54%'
    }
  },

  locationItem: {
    left: '-15%',
    position: 'absolute',
    top: '15%'
  }
}))

export default useWelcomeSectionStyle
