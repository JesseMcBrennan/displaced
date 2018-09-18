import { Card, mapStateToProps, mapDispatchToProps } from './Card';
import React from 'react';
import { shallow } from 'enzyme';
import { setSearch } from '../../actions'
import { mockMemberData } from '../../utils/mockData/mockMemberData'

describe('Card', () => {
  let wrapper;
  let mockTitle = {title: 'Senator, 2nd Class'}
  let mockHistory = { push: jest.fn ()}

  beforeEach(() => {
    wrapper = shallow(
      <Card member={mockTitle}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})

// describe('mapStateToProps', () => {
//   it('should return an object with ')
//   //Setup
//   const mockState = {
//     members:{}
//   }
//   const expected = {}

//   const mappedProps = mapStateToProps(mockState)

//   expect(mappedProps).toEqual(expected)
// })