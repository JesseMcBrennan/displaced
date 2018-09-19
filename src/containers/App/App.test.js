import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps } from './App';

describe('App', () => {
  let wrapper;
  let mockHistory;

  beforeEach(() => {
    mockHistory = {push: jest.fn()};
    wrapper = shallow(<App history={mockHistory}/>);
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  describe('mapStateToProps', () => {
    it('should return an object', () => {
      const mockResult = { members: {} };

      const expected = {};

      const mappedProps = mapStateToProps(mockResult);

      expect(mappedProps).toEqual(expected);

    });
  });
});



