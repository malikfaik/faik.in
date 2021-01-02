import React from 'react'
import { BiCopyright } from 'react-icons/bi'
import Grid from '@material-ui/core/Grid'

const Footer = (): React.ReactElement => {
  return (
    <>
      <Grid className="footer" item xs={12} sm={12} md={12} lg={12} xl={12}>
        <BiCopyright className="footer-copywrite" />
        <p className="footer-year"> {new Date().getFullYear()}</p>
        <a className="footer-name" href="#/home">
          Faik Malik
        </a>
      </Grid>
    </>
  )
}

export default Footer
