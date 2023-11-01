import { makeStyles } from '@material-ui/core/styles'

const useWelcomeSectionStyle = makeStyles(theme => ({
  coverPicture: {
    height: '100vh',
    objectFit: 'cover',
    objectPosition: 'bottom',
    overflow: 'hidden',
    position: 'absolute',
    width: '100%',
    zIndex: -2
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
    fontFamily: `'Pixelify Sans', sans-serif`,
    // fontFamily: `'Manrope', sans-serif`,
    height: '100vh',
    justifyContent: 'center',
    width: '100%'
  },

  nameText: {
    fontSize: '8.5vmin',
    fontWeight: 1000,
    opacity: '0.7',
    zIndex: -1,

    '& span': {
      display: 'inline-block',
      position: 'relative',

      '&::before': {
        marginRight: '1vmin',
        right: '100%'
      },

      '&::after': {
        left: '100%',
        marginLeft: '1vmin'
      }
    }
  },

  downArrow: {
    cursor: 'pointer',
    fontSize: '6vmin',
    position: 'absolute',
    top: '90%',

    [theme.breakpoints.between('xs', 'md')]: {
      fontSize: '10vmin',
      top: '93%'
    }
  },

  currentLocation: {
    fontFamily: `'Pixelify Sans', sans-serif`,
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
    fontFamily: `'Pixelify Sans', sans-serif`,
    fontSize: '2vmin',
    opacity: '0.7',
    // color: 'red',
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
