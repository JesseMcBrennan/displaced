import { combineReducers } from 'redux';
import { searchReducer } from './search-reducer'

const rootReducer = combineReducers({
  searchResults: searchReducer
})

export default rootReducer;