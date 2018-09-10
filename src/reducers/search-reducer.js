
export const searchReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_SEARCH':
      return action.searchResults
    default:
      return state;
  }
}