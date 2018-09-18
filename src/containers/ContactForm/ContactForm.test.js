import { ContactForm, mapStateToProps, mapDispatchToProps } from './ContactForm';
import React from 'react';
import { shallow } from 'enzyme';
import { setMessage } from '../../actions'
import { mockMemberData, mockTitle } from '../../utils/mockData/mockMemberData'

describe('ContactForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ContactForm />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

describe('mapStateToProps', () => {
  it('should return an object with ', () => {

  const mockState = {
    member:{}
  }

  const expected = {}

  const mappedProps = mapStateToProps(mockState)

  expect(mappedProps).toEqual(expected)
  })
})
})