import React from 'react'
import { compose, setDisplayName, withProps } from 'recompose'

const withSignOut = ({
  getAction = (props) => Promise.resolve,
  // getOnRequest = (props) => () => {},
  // getOnSuccess = (props) => () => {},
  // getOnFailure = (props) => () => {},
}) => (
  compose(
    setDisplayName('With Sign out'),
    withProps((props) => ({
      onSignOut: getAction(props)
    }))
  )
)

export default withSignOut