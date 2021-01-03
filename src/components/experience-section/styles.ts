import { makeStyles } from '@material-ui/core/styles'

const useExperienceSectionStyle = makeStyles(theme => ({
  experienceBody: {
    paddingLeft: '2vmin',

    [theme.breakpoints.between('xs', 'md')]: {
      order: 2
    }
  },

  experienceHead: {
    [theme.breakpoints.between('xs', 'md')]: {
      order: 1
    }
  },

  experienceList: {
    cursor: 'pointer',
    listStyleType: 'none',
    marginTop: '9.3vmin',

    '& li': {
      fontFamily: `'Quicksand', sans-serif`,
      margin: 0,
      paddingBottom: '8vmin',
      paddingLeft: '8vmin',
      position: 'relative',

      [theme.breakpoints.between('xs', 'md')]: {
        paddingBottom: '16vmin',
        paddingLeft: '0'
      },

      // The line between bullets
      '&:before': {
        backgroundColor: '#000',
        bottom: 0,
        content: '""',
        left: '9.2vmin',
        position: 'absolute',
        top: 0,
        width: '0.2vmin',
        zIndex: -1,

        [theme.breakpoints.between('xs', 'md')]: {
          left: '2.5vmin',
          width: '0.5vmin'
        }
      },

      '&:first-child::before': {
        top: '2vmin',

        [theme.breakpoints.between('xs', 'md')]: {
          top: '5.5vmin'
        }
      },

      '&:last-child::before': {
        height: 0,

        [theme.breakpoints.between('xs', 'md')]: {
          height: '2vmin'
        }
      }
    }
  },

  bulletPoint: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderWidth: '0.3vmin',
    display: 'flex',
    float: 'left',
    height: '2vmin',
    overflow: 'hidden',
    width: '2vmin',

    '& svg': {
      display: 'block',
      fill: '#000',
      height: '100%',
      margin: '0 auto',
      opacity: 1,
      width: '100%'
    },

    [theme.breakpoints.between('xs', 'md')]: {
      borderWidth: '0.8vmin',
      height: '4vmin',
      width: '4vmin'
    }
  },

  employerName: {
    float: 'left',
    marginTop: '-1.5vmin',
    paddingLeft: '3vmin',

    [theme.breakpoints.between('xs', 'md')]: {
      marginTop: '-1.1vmin'
    }
  },

  experienceDuration: {
    float: 'left',
    fontSize: '2vmin',
    marginTop: 0,
    paddingLeft: '2vmin',

    [theme.breakpoints.between('xs', 'md')]: {
      fontSize: '3vmin',
      marginTop: '1.5vmin'
    }
  }
}))

export default useExperienceSectionStyle
