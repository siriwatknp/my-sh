import React from 'react'
import PropTypes from 'prop-types'
import { compose, withProps, setPropTypes, setDisplayName, lifecycle } from 'recompose'
import { generateUrlFromAccessPath } from 'utils/constants/routeConstants'

const withAuthRedirect = () => (
  compose(
    setDisplayName('WithAuthRedirect'),
    setPropTypes({
      router: PropTypes.object.isRequired,
      user: PropTypes.object.isRequired,
      accessPath: PropTypes.string.isRequired,
    }),
    withProps(({
      router,
      user,
      accessPath,
    }) => {
      return {
        redirect: () => (
          router.push(
            user ? (
              generateUrlFromAccessPath({
                accessPath,
                username: user.email,
              })
            ) : (
              '/firebase/login'
            )
          )
        )
      }
    }),
    lifecycle({
      componentDidMount() {
        this.props.redirect()
      },
      componentWillReceiveProps(nextProps, nextContext) {
        if(this.props.user !== nextProps.user){
          nextProps.redirect()
        }
      },
    })
  )
)
export default withAuthRedirect
