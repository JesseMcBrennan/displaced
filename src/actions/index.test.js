import * as actions from '.';

describe('actions', () => {
  it('should return a type of SET_SEARCH with searchResults', () => {
    const searchResults = {};

    const expected = {
      type: 'SET_SEARCH',
      searchResults
    };
    const result = actions.setSearch(searchResults);
    expect(result).toEqual(expected);
  });
});