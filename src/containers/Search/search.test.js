import { Search, mapDispatchToProps } from './Search';
import React from 'react';
import { shallow } from 'enzyme';
import { setSearch } from '../../actions';


describe('Search', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Search />
    );
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapDispatchToProps', () => {
    it('should return an object', () => {
      const mockDispatch = jest.fn();

      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.setSearch();
      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});