/* eslint-disable no-prototype-builtins,padded-blocks */
import { combineReducers } from 'redux'
import isString from 'lodash/isString'
import invariant from 'invariant'
import { turnTextToAction } from './actionHelpers'
import LIFE_CYCLE from './fetchStatus'

/**
 *  return object that has lifeCycle suffix to action
 *
 * @param action: string
 * @returns {{ request: string, success: string, failure: string }}
 *
 * ex.
 * input = 'fetchOrders'
 * output = {
 *  request: 'FETCH_ORDERS_REQUEST',
 *  success: 'FETCH_ORDERS_SUCCESS',
 *  failure: 'FETCH_ORDERS_FAILURE',
 * }
 */
export const createLifeCycleConstants = (action) => {
  invariant(isString(action), `${action} is not a string.`)
  const ACTION = turnTextToAction(action)
  return {
    initial: `${ACTION}_INITIAL`,
    request: `${ACTION}_REQUEST`,
    success: `${ACTION}_SUCCESS`,
    failure: `${ACTION}_FAILURE`,
  }
}

/**
 *  return object has life cycle constant in each key.
 * @param actions: array of string
 * @returns {{ [action1]: {request:'',success:'',failure:''}, ... }}
 *
 * ex.
 * input = ['fetchOrders','deleteOrder']
 * output = {
 *   fetchOrders: {
 *    request: 'FETCH_ORDERS_REQUEST',
 *    success: 'FETCH_ORDERS_SUCCESS',
 *    failure: 'FETCH_ORDERS_FAILURE',
 *   },
 *   deleteOrder: {
 *    request: 'DELETE_ORDER_REQUEST',
 *    success: 'DELETE_ORDER_SUCCESS',
 *    failure: 'DELETE_ORDER_FAILURE',
 *   }
 * }
 */
export const createMultipleLifeCycleConstants = (actions) => (
  actions.reduce((actionsMap, action) => ({
    ...actionsMap,
    [action]: createLifeCycleConstants(action),
  }), {})
)

/**
 * return reducers that have key = action input, support clear status action
 * @param actions: array of string
 * @param CLEAR: string (clear constant)
 *
 * ex.
 * input = ['fetchOrders','deleteOrder']
 * output = {
 *  fetchOrders: {
 *    status: (state,action) => ...,
 *    message: (state,action) => ...,
 *  },
 *  deleteOrder: {
 *    status: (state,action) => ...,
 *    message: (state,action) => ...,
 *  }
 * }
 */
export const createStatusReducers = (actions, CLEAR = 'CLEAR') => (
  // action is similar to status
  actions.reduce((statusReducers, status) => {
    const ACTION = createLifeCycleConstants(status)
    return {
      ...statusReducers,
      [status]: combineReducers({
        status: (state = null, action) => {
          switch (action.type) {
            case ACTION.initial:
              return LIFE_CYCLE.INITIAL
            case ACTION.request:
              return LIFE_CYCLE.REQUEST
            case ACTION.success:
              return LIFE_CYCLE.SUCCESS
            case ACTION.failure:
              return LIFE_CYCLE.FAILURE
            case CLEAR:
              return null
            default:
              return state
          }
        },
        message: (state = null, action) => {
          const { payload = {} } = action
          switch (action.type) {
            case ACTION.initial:
              return payload.message || `${status} initial`
            case ACTION.request:
              return payload.message || `${status} requesting.`
            case ACTION.success:
              return payload.message || `${status} success.`
            case ACTION.failure:
              return payload.message || ''
            case CLEAR:
              return null
            default:
              return state
          }
        },
        error: (state = null, action) => {
          const { payload = {} } = action
          switch (action.type) {
            case ACTION.initial:
              return null
            case ACTION.failure:
              return payload.error || null
            default:
              return state
          }
        },
      }),
    }
  }, {})
)

export const createDynamicStatusReducers = ({
  actions,
  CLEAR = 'CLEAR',
  resolveAction = (status) => status,
  resolveStatus = (status) => status,
}) => (
  // action is similar to status
  actions.reduce((statusReducers, status) => {

    const ACTION = createLifeCycleConstants(resolveAction(status))
    const reducerStatus = resolveStatus(status)
    return {
      ...statusReducers,
      [reducerStatus]: combineReducers({
        status: (state = null, action) => {
          switch (action.type) {
            case ACTION.request:
              return LIFE_CYCLE.REQUEST
            case ACTION.success:
              return LIFE_CYCLE.SUCCESS
            case ACTION.failure:
              return LIFE_CYCLE.FAILURE
            case CLEAR:
              return null
            default:
              return state
          }
        },
        message: (state = null, action) => {
          switch (action.type) {
            case ACTION.request:
              return action.payload || `${status} requesting.`
            case ACTION.success:
              return action.payload && action.payload.message ? action.payload.message : `${status} success.`
            case ACTION.failure:
              return action.payload || `Reducer Message: ${status} failed.`
            case CLEAR:
              return null
            default:
              return state
          }
        },
      }),
    }
  }, {})
)

export const createReducer = (initialState, handlers) => (
  (state = initialState, action) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    }
    return state
  }
)

export const createByIdObject = (
  idKey = 'id',
  responseKey = 'data',
  onResolve) => (state = {}, action) => (
  { ...state, [action.payload[idKey]]: onResolve ? onResolve(action) : action.payload[responseKey] }
)
