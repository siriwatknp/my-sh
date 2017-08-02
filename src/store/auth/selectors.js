import { createSelector } from 'reselect'
import { createMultipleStatusSelectors } from 'store/utils/selectorHelpers'
import types from './types'

const getAuthState = (state) => state.auth

export const selectUser = createSelector(
  [getAuthState],
  (auth) => auth.user
)

export const {
  selectObserveAuthStatus,
} = createMultipleStatusSelectors(types, getAuthState)
