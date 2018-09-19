import React from 'react';
import { ContactForm, mapStateToProps, mapDispatchToProps } from './ContactForm';
import { shallow } from 'enzyme';

describe('ContactForm', () => {
  let wrapper;
  let mockHistory;
  let event;
  let mockSetMessage;

  beforeEach(() => {
    mockHistory = { push: jest.fn()};
    event = {
      preventDefault: jest.fn(),
      target: {
        value: 'hello',
        name: 'name'
      }
    };
    mockSetMessage = jest.fn();
    wrapper = shallow(
      <ContactForm history={mockHistory} setMessage={mockSetMessage}/>);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return an object with ', () => {

      const mockState = {
        member:{}
      };

      const expected = {};

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });
  describe('mapDispatchToProps', () => {
    it('should call dispatch to props', () => {
      const mockDispatch = jest.fn();
      
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.setMessage();
      expect(mockDispatch).toHaveBeenCalledTimes(1);
    });
  });
  describe('handleSubmit', () => {
    it('should call setMessage', () => {
      
      wrapper.state().name = 'Joel';
      wrapper.state().body = 'blahblahblah';
      wrapper.state().signature = 'Joel';

      wrapper.instance().handleSubmit(event);
      expect(mockSetMessage).toHaveBeenCalled();
    });
  });
  describe('handleChange', () => {
    it('should change the state of the container', () => {
      wrapper
        .find('input')
        .first()
        .simulate('change', event);
      expect(wrapper.state('name')).toEqual('hello');
    });
  });
});