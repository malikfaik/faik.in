import React from 'react'
import Grid from '@material-ui/core/Grid'

const Header = (): React.ReactElement => {
  return (
    <>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <img src="/logo.svg" className="logo" alt="logo" />
      </Grid>
    </>
  )
}

export default Header
