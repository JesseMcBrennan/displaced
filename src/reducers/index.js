import { combineReducers } from 'redux';
import { searchReducer } from './search-reducer';
import { messageReducer } from './message-reducer';

const rootReducer = combineReducers({
  searchResults: searchReducer,
  messages: messageReducer
});

export default rootReducer;