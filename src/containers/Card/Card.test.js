import { Card, mapStateToProps, mapDispatchToProps } from './Card';
import React from 'react';
import { shallow } from 'enzyme';
import { setSearch } from '../../actions'


describe('mapStateToProps', () => {
  it('should return an object with ')
  //Setup
  const mockState = {
    members:{}
  }
  const expected = {}

  const mappedProps = mapStateToProps(mockState)

  expect(mappedProps).toEqual(expected)
})