import { makeStyles } from '@material-ui/core/styles'

const useHeaderSectionStyle = makeStyles(() => ({
  logo: {
    float: 'left',
    height: '5vmin',
    paddingLeft: '1vmin',
    position: 'absolute',
    top: '15%',
    zIndex: 2
  },

  navigationText: {
    '& a': {
      color: 'rgba(0, 0, 0, 0.87)',
      fontFamily: `'Quicksand', sans-serif`,
      fontSize: '2vmin',
      fontWeight: 600,
      textDecoration: 'none'
    }
  },

  navigationWrapper: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'flex-end',
    width: '100%',
    zIndex: 2,

    '& div': {
      paddingRight: '4vmin'
    }
  },

  navigationHamburgerMenu: {
    fontSize: '10vmin',
    zIndex: 2
  },

  navigationHamburgerCross: {
    fontSize: '10vmin',
    marginRight: '-0.7vmin',
    opacity: 0,
    position: 'absolute',
    zIndex: 2
  },

  navigationHamburgerItemsWrapper: {
    alignItems: 'center',
    backgroundColor: '#fff',
    display: 'flex',
    height: '40vh',
    justifyContent: 'center',
    left: 0,
    opacity: 0,
    position: 'absolute',
    width: '100%',
    zIndex: 1
  },

  navigationHamburgerItems: {
    fontFamily: `'Quicksand', sans-serif`,
    fontSize: '4vmin',
    fontWeight: 400,
    listStyleType: 'none',
    marginTop: '15%',
    paddingInlineStart: 0,
    textAlign: 'center',
    width: '100%',

    '& li': {
      marginTop: '1.5%',
      paddingBottom: '1.5%',
      width: '100%'
    }
  },

  headerWhiteShade: {
    height: '100%',
    position: 'absolute',
    width: '100%'
  }
}))

export default useHeaderSectionStyle
