const path = {
  SET: 'SET_ACCESS_PATH',
}

export const setAccessPath = (accessPath) => ({
  type: path.SET,
  payload: accessPath
})

export default (state = '', action) => {
  switch (action.type) {
    case path.SET:
      return action.payload
    default:
      return state
  }
}