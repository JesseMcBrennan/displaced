import { messageReducer } from './message-reducer.js';
import * as actions from '../actions';

describe('messageReducer', () => {
  it('should return initial state by default', () => {
    const expected = []
    const result = messageReducer(undefined, {});
    expect(result).toEqual(expected)
  })
  it('should return an object with memberdat', () => {
    const mockResult = []
    const expected = mockResult
    const result = messageReducer([], actions.setMessage(mockResult))
    expect(result).toEqual(expected)
  })
})