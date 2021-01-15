import { makeStyles } from '@material-ui/core/styles'

const useModelBoxStyles = makeStyles(theme => ({
  modelBoxWrapper: {
    backgroundColor: 'rgba(250,250,250,0.7)',
    bottom: 0,
    height: '100vh',
    left: 0,
    margin: 'auto',
    opacity: 0,
    position: 'fixed',
    right: 0,
    top: 0,
    transform: 'scale(0)',
    width: '100vw',
    zIndex: 3
  },

  modelBoxBody: {
    height: '70vh',

    [theme.breakpoints.between('xs', 'md')]: {
      height: '50vh'
    }
  },

  modelBoxHead: {
    height: '70vh',

    [theme.breakpoints.between('xs', 'md')]: {
      height: '20vh'
    }
  },

  modelBoxContent: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    fontFamily: `'Quicksand', sans-serif`,
    fontSize: '4vmin',
    fontWeight: 400,
    justifyContent: 'center',
    overflow: 'hidden',
    paddingLeft: '2vmin',
    paddingTop: '2vmin',
    textAlign: 'center',
    whiteSpace: 'pre-line'
  },

  modelBox: {
    backgroundColor: '#fff',
    bottom: 0,
    height: '70vh',
    left: 0,
    margin: 'auto',
    position: 'absolute',
    right: 0,
    top: 0,
    width: '50vw',

    [theme.breakpoints.between('xs', 'md')]: {
      height: '70vh',
      width: '80vw'
    }
  },

  modelBoxClose: {
    cursor: 'pointer',
    fontSize: '5vmin',
    marginLeft: '73%',
    marginTop: '4.5%',

    [theme.breakpoints.between('xs', 'md')]: {
      fontSize: '8vmin',
      marginLeft: '82%',
      marginTop: '18%'
    }
  },

  modelBoxLogo: {
    objectFit: 'contain',
    width: '40%',
    [theme.breakpoints.between('xs', 'md')]: {
      left: '10%',
      position: 'absolute',
      top: '9%',
      width: '20%'
    }
  },

  modelBoxName: {
    width: '100%',
    [theme.breakpoints.between('xs', 'md')]: {
      fontSize: '6vmin',
      marginBlockEnd: 0,
      marginBlockStart: '1%',
      marginLeft: '20%',
      marginTop: '25%',
      textAlign: 'justify'
    }
  },

  modelBoxDuration: {
    fontSize: '2vmin',
    fontWeight: 700,
    [theme.breakpoints.between('xs', 'md')]: {
      fontSize: '4vmin',
      marginBlockEnd: 0,
      marginBlockStart: '1%',
      marginLeft: '20%',
      textAlign: 'justify',
      width: '100%'
    }
  },

  modelBoxDescription: {
    fontSize: '2vmin',
    overflow: 'hidden',
    paddingLeft: '6vmin',
    paddingRight: '6vmin',

    textAlign: 'justify',

    [theme.breakpoints.between('xs', 'md')]: {
      fontSize: '3.5vmin',
      height: '80%'
    }
  }
}))

export default useModelBoxStyles
