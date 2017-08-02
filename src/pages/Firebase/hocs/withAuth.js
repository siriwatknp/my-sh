import React from 'react'
import { compose, setDisplayName, withState, lifecycle, branch, withProps, renderComponent, renderNothing } from 'recompose'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { observeForAuth } from 'store/auth/actions'
import { selectUser, selectObserveAuthStatus } from 'store/auth/selectors'
import { Loader as SemanticLoader } from 'semantic-ui-react'
import { withRouter } from 'react-router'
import withAccessPath from 'store/accessPath/withAccessPath'
import { generateUrlFromAccessPath } from 'utils/constants/routeConstants'
import withAuthRedirect from './withAuthRedirect'
import withLoading from './withLoading'
import withObserveAuth from 'store/auth/withObserveAuth'

const mapStateToProps = (state) => ({
  user: selectUser(state),
  observeForAuthStatus: selectObserveAuthStatus(state),
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ observeForAuth }, dispatch)
);

const withAuth = () => compose(
  withObserveAuth(),
  withLoading({
  // special case for observe auth
  // also check isInitial, otherwise always redirect to login
    predicate: (props) => props.observeForAuthStatus.isInitial ||
                          props.observeForAuthStatus.isRequest,
  }),
  withRouter,
  withAccessPath(),
  lifecycle({
    componentWillMount() {
      const { setAccessPath, location: { pathname } } = this.props
      setAccessPath(pathname)
    },
  }),
  branch(
    (props) => !props.accessPath,
    renderNothing,
  ),
  withAuthRedirect(),
)

export default withAuth
