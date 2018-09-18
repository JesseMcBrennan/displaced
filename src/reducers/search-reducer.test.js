import { searchReducer } from './search-reducer.js';
import * as actions from '../actions';

describe('searchReducer', () => {
  it('should return initial state by default', () => {
    const expected = []
    const result = searchReducer(undefined, []);
    expect(result).toEqual(expected)
  })
  it('should return an object with search results' , () => {
    const mockResult = []
    const expected = mockResult
    const result = searchReducer([], actions.setSearch(mockResult))
    expect(result).toEqual(expected)
  })
})