import React from 'react';
import ReactDom from 'react-dom';
import { shallow, mount } from 'enzyme';
import { MemberContainer, mapStateToProps } from './MemberContainer'
import { mockMemberData } from '../../utils/mockData/MockMemberData'
import { setSearch } from '../../actions'

describe('MemberContainer container', () => {
  let wrapper; 

  beforeEach(() => {
    wrapper = shallow( 
      <MemberContainer 
        members={mockMemberData}
      />
    )
  })
  it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
  })
  describe('mapStateToProps', () => {
    it('should return an object', () => {
      const mockResult = { members: {} }

      const expected = {}

      const mappedProps = mapStateToProps(mockResult)

      expect(mappedProps).toEqual(expected)

    })
  })
  

})