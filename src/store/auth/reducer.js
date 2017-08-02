import { combineReducers } from 'redux';
import {
  createStatusReducers,
  createMultipleLifeCycleConstants,
  createReducer,
} from 'store/utils/reducerHelpers'
import types from './types'

const AUTH = createMultipleLifeCycleConstants(types)

const user = createReducer(
  null,
  {
    [AUTH.observeAuth.success]: (
      (state, action) => action.payload
    ),
    [AUTH.observeAuth.failure]: (
      (state, action) => null
    )
  }
)

const statusReducers = createStatusReducers(types)

export default combineReducers({
  user,
  ...statusReducers,
})
