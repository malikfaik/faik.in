import { makeStyles } from '@material-ui/core/styles'

const useAboutSectionStyle = makeStyles(theme => ({
  aboutBody: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    fontFamily: `'Quicksand', sans-serif`,
    fontSize: '4vmin',
    fontWeight: 400,
    height: '100vh',
    overflow: 'hidden',
    paddingRight: '2vmin',
    paddingTop: '2vmin',
    textAlign: 'justify',
    whiteSpace: 'pre-line',
    /**
     * 75% viewport height when device is smaller.
     */
    [theme.breakpoints.between('xs', 'md')]: {
      alignItems: 'center',
      fontSize: '5.5vmin',
      height: '75vh',
      paddingLeft: '2vh',
      paddingRight: '2vh'
    }
  },

  aboutHead: {
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
  }
}))

export default useAboutSectionStyle
