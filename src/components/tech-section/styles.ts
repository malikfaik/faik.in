import { makeStyles } from '@material-ui/core/styles'

const useTechSectionStyle = makeStyles(theme => ({
  techBody: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: '2%',
    textAlign: 'center'
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
