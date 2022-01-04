import { makeStyles } from '@material-ui/core/styles'

const useWelcomeSectionStyle = makeStyles(theme => ({
  coverPicture: {
    height: '100vh',
    objectFit: 'cover',
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
    fontFamily: `'Quicksand', sans-serif`,
    height: '100vh',
    justifyContent: 'center',
    width: '100%'
  },

  nameText: {
    fontSize: '10vmin',
    fontWeight: 500,
    zIndex: -1,

    '& span': {
      display: 'inline-block',
      position: 'relative',

      '&::before, &::after': {
        borderTop: '0.5vmin solid rgba(0, 0, 0, 0.87)',
        content: `''`,
        height: '1vmin',
        marginTop: '7vmin',
        position: 'absolute',
        width: '30%'
      },

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
    fontSize: '3vmin',
    fontWeight: 600,
    position: 'absolute',
    top: '57%',

    [theme.breakpoints.between('xs', 'md')]: {
      fontSize: '3.5vmin',
      top: '55.5%'
    }
  },

  locationItem: {
    left: '-15%',
    position: 'absolute',
    top: '15%'
  }
}))

export default useWelcomeSectionStyle
