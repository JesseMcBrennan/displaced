import { searchReducer } from './search-reducer.js';
import * as actions from '../actions';

describe('searchReducer', () => {
  it('should return initial state by default', () => {
    const expected = []
    const result = searchReducer(undefined, []);
    expect(result).toEqual(expected)
  })
})