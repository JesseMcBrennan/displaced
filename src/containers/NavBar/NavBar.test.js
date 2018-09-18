import React from 'react';
import ReactDom from 'react-dom';
import { shallow, mount } from 'enzyme';
import { NavBar } from './NavBar';

describe('NavBar container', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <NavBar />);
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});