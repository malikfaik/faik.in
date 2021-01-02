import React from 'react'
import propTypes from 'prop-types'
import '../stylesheets/footer-app.scss'
import '../stylesheets/header-app.scss'
import '../stylesheets/cover-picture.scss'
import '../stylesheets/section.scss'
import '../stylesheets/experience.scss'
import '../stylesheets/index.scss'

function MyApp({ Component }: { Component: new () => React.Component }): React.ReactElement {
  return <Component />
}

MyApp.propTypes = {
  Component: propTypes.func.isRequired
}

export default MyApp
