/** utilities for create actions & actionCreators **/
import { createActions } from 'redux-actions'
import snakeCase from 'lodash/snakeCase'
import toUpper from 'lodash/toUpper'
import isString from 'lodash/isString'
import invariant from 'invariant'
import { compose } from 'redux'

/**
 *
 * @param text: string
 * return uppper of snakecase of text: string
 *
 * ex.
 * input = 'fetchOrders'
 * output = 'FETCH_ORDERS'
 */
export const turnTextToAction = (text) => toUpper(snakeCase(text))

export const createSimpleActionsCreators = (actions, otherCreators = {}) => {
  const actionCreators = createLifeCycleObject(actions) // object
  return createActions(
    {
      ...actionCreators,
      ...otherCreators,
    },
  )
}

/**
 * return object of actionCreators that have key = actions + lifeCycle suffix
 * @param actions: array of string
 * @param otherCreators: object (value = function or array, for more info go to redux-actions repo)
 * @returns {{...}}
 *
 * ex.
 * input = ['fetchOrders',deleteOrder']
 * output = {
 *  fetchOrdersRequest: (val) => actionCreator,
 *  fetchOrdersSuccess: (val) => actionCreator,
 *  fetchOrdersFailure: (val) => actionCreator,
 *  deleteOrderRequest: (val) => actionCreator,
 *  deleteOrderSuccess: (val) => actionCreator,
 *  deleteOrderFailure: (val) => actionCreator,
 * }
 */
export const createActionCreators = (actions, otherCreators = {}) => {
  // return object that has key = camelCase of actionsKey
  // with value of function that accept one arg
  const actionCreators = compose(
    createLifeCycleObject,
    createMultipleLifeCycleActions,
  )(actions)
  return createActions(
    {
      ...actionCreators,
      ...otherCreators,
    },
  )
}

/**
 * add lifeCycle suffix to string and return an array
 * @param action: string
 * @returns {[string,string,string]}
 */
const createSingleLifeCycleAction = (action) => {
  invariant(isString(action), `${action} is not a string.`)
  return [
    `${action}Initial`,
    `${action}Request`,
    `${action}Success`,
    `${action}Failure`,
  ]
}

/**
 * return array that contains multiple lifeCycle constants
 * @param actions
 *
 * input = ['fetchOrders','deleteOrder']
 * output = [
 *  fetchOrdersRequest,
 *  fetchOrdersSuccess,
 *  fetchOrdersFailure,
 *  deleteOrderRequest,
 *  deleteOrderSuccess,
 *  deleteOrderFailure,
 * ]
 */
const createMultipleLifeCycleActions = (actions) => (
  actions.reduce((prev, cur) => ([
    ...prev, ...createSingleLifeCycleAction(cur)]), [],
  )
)

/**
 * return object that contains multiple lifeCycle constants with UPPERSNAKECASE
 * @param actions
 *
 * input = ['fetchOrders','deleteOrder']
 * output = [
 *  FETCH_ORDERS_REQUEST: (val) => val,
 *  FETCH_ORDERS_SUCCESS: (val) => val,
 *  FETCH_ORDERS_FAILURE: (val) => val,
 *  DELETE_ORDER_REQUEST: (val) => val,
 *  DELETE_ORDER_SUCCESS: (val) => val,
 *  DELETE_ORDER_FAILURE: (val) => val,
 * ]
 */
const createLifeCycleObject = (actions) => (
  actions.reduce((actionMaps, string) => ({
    ...actionMaps,
    [turnTextToAction(string)]: (value) => value,
  }), {})
)
