import { makeStyles } from '@material-ui/core/styles'

const useTechSectionStyle = makeStyles(theme => ({
  techBody: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    fontFamily: `'Quicksand', sans-serif`,
    fontSize: '4vmin',
    fontWeight: 400,
    height: '100vh',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: '2%',
    paddingTop: '2vmin',
    textAlign: 'center',

    /**
     * 75% viewport height when device is smaller.
     */
    [theme.breakpoints.between('xs', 'md')]: {
      alignItems: 'center',
      fontSize: '6vmin',
      height: '75vh',
      paddingLeft: '2vh',
      paddingRight: '2vh'
    }
  },

  techHead: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    fontFamily: `'Quicksand', sans-serif`,
    fontSize: '15vmin',
    fontWeight: 100,
    height: '100vh',
    justifyContent: 'center',

    /**
     * 25% viewport height when device is smaller.
     * @todo Shouldn't alignItems be center ?
     */
    [theme.breakpoints.between('xs', 'md')]: {
      alignItems: 'flex-end',
      height: '25vh'
    }
  },

  techList: {
    height: '15vmin',
    marginTop: '6%',
    padding: '5%',
    width: '15vmin',

    [theme.breakpoints.between('xs', 'md')]: {
      height: '18vmin',
      padding: '8%',
      width: '18vmin'
    }
  },

  techIcons: {
    cursor: 'pointer',
    height: '60%',
    objectFit: 'contain',
    textAlign: 'center',
    width: '60%',

    [theme.breakpoints.between('xs', 'md')]: {
      height: '90%',
      width: '100%'
    }
  },

  techName: {
    cursor: 'pointer',
    fontSize: '2.5vmin',
    fontWeight: 400,
    marginLeft: '-0.5%',
    marginTop: '4.5%',
    opacity: 0,
    position: 'absolute',
    textAlign: 'center',

    [theme.breakpoints.between('xs', 'md')]: {
      fontSize: '3.5vmin',
      marginTop: '20%'
    }
  },

  techListGrid: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  },

  techMainContainer: {
    width: '100%'
  }
}))

export default useTechSectionStyle
