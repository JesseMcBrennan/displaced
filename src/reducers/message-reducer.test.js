import { messageReducer } from './message-reducer.js';
import * actions from '../actions';

describe('messageReducer', () => {
  it('should return initial state by default', () => {
    const expected = []
    const result = messageReducer(undefined, {});
    expect(result).toEqual(expected)
  })
})