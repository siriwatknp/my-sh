import React from 'react'
import { compose } from 'recompose'
import PropTypes from 'prop-types'
import withUser from 'pages/Firebase/hocs/withUser'

const Account = compose(
  withUser(),
)(
  ({ user }) => {
    return (
      <div>{user.email}</div>
    )
  }
)

Account.propTypes = {}
Account.defaultProps = {}

export default Account
