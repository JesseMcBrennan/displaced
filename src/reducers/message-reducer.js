export const messageReducer = (state=[], action) => {
  switch(action.type) {
    case 'SET_MESSAGE':
      return action.createMessage
    default:
      return state
  }
}