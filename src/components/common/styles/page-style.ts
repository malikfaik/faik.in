import { makeStyles } from '@material-ui/core/styles'

const usePageStyle = makeStyles({
  '& body': {
    margin: 0
  },

  headerFixed: {
    position: 'fixed'
  }
})

export default usePageStyle
