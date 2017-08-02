import { createActionCreators } from 'store/utils/actionHelpers'
import types from './types'
import { fireBaseAuth } from 'pages/Firebase/config'

const {
  observeAuthRequest,
  observeAuthSuccess,
  observeAuthFailure,
} = createActionCreators(types)

export const observeForAuth = () => (dispatch) => {
  dispatch(observeAuthRequest())
  return fireBaseAuth().onAuthStateChanged((user) => {
    if(user){
      const {
        displayName,
        email,
        photoURL,
      } = user
      return dispatch(observeAuthSuccess({
        displayName,
        email,
        photoURL,
      }))
    } else {
      dispatch(observeAuthFailure())
    }
  })
}
