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
    opacity: 0.65,
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
    fontWeight: 'lighter',
    zIndex: -1,

    '& span': {
      display: 'inline-block',
      position: 'relative',

      '&::before, &::after': {
        borderTop: '0.1rem solid rgba(0, 0, 0, 0.87)',
        content: `''`,
        height: '1vmin',
        marginTop: '7vmin',
        position: 'absolute',
        width: '40%'
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

  greetingText: {
    fontSize: '4vmin',
    fontStyle: 'italic',
    fontWeight: 500,
    marginTop: '-5%',
    position: 'absolute',
    textAlign: 'center',
    zIndex: -1,

    [theme.breakpoints.between('xs', 'md')]: {
      marginTop: '-10%'
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
  }
}))

export default useWelcomeSectionStyle
