import React from 'react'
import { connect } from 'react-redux';
import { compose, setDisplayName, branch, renderNothing } from 'recompose'

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const withUser = () => (
  compose(
    setDisplayName('WithUser'),
    connect(mapStateToProps),
    branch(
      (props) => !props.user,
      renderNothing
    )
  )
)

export default withUser
