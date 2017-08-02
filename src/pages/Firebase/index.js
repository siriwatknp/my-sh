import React from 'react'
import { compose } from 'recompose'
import withAuth from 'pages/Firebase/hocs/withAuth'

const FireBase = compose(
  withAuth()
)(
  ({ children }) => {
    return (
      <div>
        {children}
      </div>
    )
  }
)

FireBase.propTypes = {}
FireBase.defaultProps = {}

export default FireBase
