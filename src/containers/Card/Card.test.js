import { Card } from './Card';
import React from 'react';
import { shallow } from 'enzyme';


describe('Card', () => {
  let wrapper;
  let member = {member:'steve'};
  let event;

  beforeEach(() => {
    event = event = {
      preventDefault: jest.fn(),
      target: {
        value: 'hello',
        name: 'name'
      }
    };
    wrapper = shallow(
      <Card member={member} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
