import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import auth from './auth/reducer'
import accessPath from './accessPath'

export default combineReducers({
  auth,
  routing: routerReducer,
  accessPath,
})
