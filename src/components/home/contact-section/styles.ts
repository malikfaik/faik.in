import { makeStyles } from '@material-ui/core/styles'

const useContactSectionStyle = makeStyles(theme => ({
  contactBody: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    fontFamily: `'Manrope', sans-serif`,
    fontSize: '4vmin',
    fontWeight: 400,
    height: '90vh',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: 0,
    textAlign: 'center',

    /**
     * 70% viewport height when device is smaller.
     */
    [theme.breakpoints.between('xs', 'md')]: {
      fontSize: '6vmin',
      height: '70vh',
      order: 2,
      paddingLeft: '2vh',
      paddingRight: '2vh'
    }
  },

  contactHead: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    fontFamily: `"DM Serif Text", serif`,
    opacity: '0.7',
    fontSize: '15vmin',
    fontWeight: 100,
    height: '90vh',
    justifyContent: 'center',

    /**
     * 20% viewport height when device is smaller.
     * @todo Shouldn't alignItems be center ?
     */
    [theme.breakpoints.between('xs', 'md')]: {
      alignItems: 'flex-end',
      height: '20vh',
      order: 1
    }
  },

  footer: {
    alignItems: 'center',
    display: 'flex',
    fontFamily: `"DM Serif Text", serif`,
    opacity: '0.7',
    fontSize: '1.7vmin',
    fontWeight: 700,

    /**
     * 10% viewport height.
     */
    height: '10vh',
    justifyContent: 'center',
    width: '100%',

    [theme.breakpoints.between('xs', 'md')]: {
      fontSize: '3vmin',
      order: 3
    }
  },

  contactBodyWrapper: {
    height: '30%',
    width: '100%'
  },

  greetingText: {
    fontWeight: 400,

    [theme.breakpoints.between('xs', 'md')]: {
      fontSize: '4.5vmin',
      fontWeight: 600
    }
  },

  contactEmailIcon: {
    marginLeft: '-2.2%',
    marginTop: '0.5%',
    position: 'absolute',

    [theme.breakpoints.between('xs', 'md')]: {
      marginLeft: '-6%',
      marginTop: '1.4vmin',
      position: 'absolute'
    }
  },

  emailContact: {
    cursor: 'pointer',
    fontWeight: 600,
    marginTop: '5%',

    '& a': {
      color: 'rgba(0, 0, 0, 0.87)',
      textDecoration: 'none'
    },

    [theme.breakpoints.between('xs', 'md')]: {
      fontSize: '6vmin'
    }
  },

  contactSocialIconWrapper: {
    cursor: 'pointer',
    marginTop: '5%',

    '& a': {
      color: 'rgba(0, 0, 0, 0.87)',
      textDecoration: 'none'
    },

    [theme.breakpoints.between('xs', 'md')]: {
      fontSize: '6vmin'
    }
  },

  contactSocialIcon: {
    marginLeft: '2%',
    marginRight: '2%'
  },

  footerYear: {
    marginTop: '1.9vmin',
    padding: '0 1vmin',

    [theme.breakpoints.between('xs', 'md')]: {
      marginTop: '3vmin'
    }
  },

  footerName: {
    '& button': {
      color: 'rgba(0, 0, 0, 0.87)',
      textDecoration: 'none'
    }
  }
}))

export default useContactSectionStyle
