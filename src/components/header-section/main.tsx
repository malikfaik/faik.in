import React from 'react'
import Grid from '@material-ui/core/Grid'
import useHeaderSectionStyle from './styles'
import { fullLengthColumnSize } from '../../config/section-grid-size'

const Header = (): React.ReactElement => {
  const headerStyles = useHeaderSectionStyle()
  return (
    <>
      <Grid item {...fullLengthColumnSize}>
        <img src="/logo.svg" className={headerStyles.logo} alt="logo" />
      </Grid>
    </>
  )
}

export default Header
