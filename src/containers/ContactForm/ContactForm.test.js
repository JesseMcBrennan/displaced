import { ContactForm, mapStateToProps, mapDispatchToProps } from './ContactForm';
import React from 'react';
import { shallow } from 'enzyme';
import { setMessage } from '../../actions'
import { mockMemberData, mockTitle } from '../../utils/mockData/mockMemberData'

describe('mapStateToProps', () => {
  it('should return an object with ')

  const mockState = {
    members:{}
  }
  const expected = {}

  const mappedProps = mapStateToProps(mockState)

  expect(mappedProps).toEqual(expected)
})