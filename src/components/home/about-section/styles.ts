import { makeStyles } from '@material-ui/core/styles'

const useAboutSectionStyle = makeStyles(theme => ({
  aboutBody: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    fontFamily: `'Manrope', sans-serif`,
    fontSize: '3vmin',
    fontWeight: 400,
    height: '100vh',
    overflow: 'hidden',
    paddingRight: '7vmin',
    paddingTop: '2vmin',
    textAlign: 'justify',
    whiteSpace: 'pre-line',
    /**
     * 75% viewport height when device is smaller.
     */
    [theme.breakpoints.between('xs', 'md')]: {
      alignItems: 'center',
      fontSize: '3.8vmin',
      height: '75vh',
      paddingLeft: '6vh',
      paddingRight: '6vh'
    }
  },

  aboutHead: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    opacity: '0.7',
    fontFamily: `"DM Serif Text", serif`,
    fontSize: '15vmin',
    fontWeight: 500,
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
  }
}))

export default useAboutSectionStyle
