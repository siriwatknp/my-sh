/* eslint-disable no-shadow */
import { createSelector } from 'reselect'
import upperFirst from 'lodash/upperFirst'
import FETCH_STATUS from './fetchStatus'

// /**
//  *
//  * @param statusNode
//  * @returns {{isRequest: boolean, isSuccess: boolean, isFailure: boolean, message: *}}
//  */
// export const createSingleStatusSelector = (statusNode) => {
//   invariant(isObject(statusNode),
//     'Status node must be an object shape { status: null || `REQUEST,SUCCESS,FAILURE`, message: null || string.' +
//     'May be u forget to add getSlicedState in createMultipleStatusSelectors')
//   const { status, message } = statusNode
//   return {
//     isRequest: status === LIFE_CYCLE.REQUEST,
//     isSuccess: status === LIFE_CYCLE.SUCCESS,
//     isFailure: status === LIFE_CYCLE.FAILURE,
//     message,
//   }
// }

export const generateBooleanFetchStatusByActionStatus = (actionStatus) => ({
  isInitial: actionStatus !== FETCH_STATUS.INITIAL &&
             actionStatus !== FETCH_STATUS.REQUEST &&
             actionStatus !== FETCH_STATUS.SUCCESS &&
             actionStatus !== FETCH_STATUS.FAILURE,
  isRequest: actionStatus === FETCH_STATUS.REQUEST,
  isSuccess: actionStatus === FETCH_STATUS.SUCCESS,
  isFailure: actionStatus === FETCH_STATUS.FAILURE,
})

  // accept statusSelector to create a new selector that provide status value
  // including errorMessage and message
  // statusSelector is a function that accept state and return a status node
  // ex. statusSelector = (state) => state.cart.getCart
export const generateStatusNode = (statusSelector) => createSelector(
  statusSelector,
  (statusState) => {
    const { status, error, message } = statusState
    return {
      ...generateBooleanFetchStatusByActionStatus(status),
      message,
      errorMessage: error && error.code ?
        createErrorMessage(error)
        :
        '',
    }
  },
)

const errorSwitcher = {}

export const createErrorMessage = ({
  code,
  message,
}) => {
  const createErrorFromCode = errorSwitcher[code]
  return createErrorFromCode ?
    // there is mapped code in errorSwitcher
    createErrorFromCode({
      code,
      message,
    })
    :
    // if no code specified in errorSwitcher return message from api error
    message
}

/**
 * return object of status selectors which keys = 'select{upperFirst(status)}Status'
 * @param actions
 * @param getSlicedState
 */
export const createMultipleStatusSelectors = (actions, getSlicedState) => actions.reduce((statusMap, status) => {
  const statusKey = `select${upperFirst(status)}Status`
  return {
    ...statusMap,
    // [statusKey]: (state) => createSingleStatusSelector(
    //   getSlicedState ? getSlicedState(state)[status] : state[status],
    // ),
    [statusKey]: generateStatusNode((state) => (
      getSlicedState ?
        getSlicedState(state)[status]
        :
        state[status]
    )),
  }
}, {})
