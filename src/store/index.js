import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

const composeEnhancers =
  typeof window === 'object' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk))

export default createStore(
  rootReducer,
  enhancer,
)