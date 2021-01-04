import { makeStyles } from '@material-ui/core/styles'

const useLinkHoverStyles = makeStyles({
  hoverUnderline: {
    display: 'block',
    height: '2vmin',
    position: 'relative'
  },

  svgLine: {
    stroke: '#000',
    strokeWidth: '0.8vmin'
  },

  hoverWrapper: {
    marginTop: '2.2vmin'
  }
})

export default useLinkHoverStyles
