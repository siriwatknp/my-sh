import React from 'react'
import { compose, setDisplayName, lifecycle } from 'recompose'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { observeForAuth } from 'store/auth/actions'
import { selectUser, selectObserveAuthStatus } from 'store/auth/selectors'

const mapStateToProps = (state) => ({
  user: selectUser(state),
  observeForAuthStatus: selectObserveAuthStatus(state),
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ observeForAuth }, dispatch)
);

const withObserveAuth = () => (
  compose(
    setDisplayName('Auth'),
    connect(mapStateToProps, mapDispatchToProps),
    lifecycle({
      componentDidMount() {
        this.props.observeForAuth()
      },
    }),
  )
)

export default withObserveAuth
