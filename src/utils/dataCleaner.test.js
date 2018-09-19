import React from 'react';
import ReactDom from 'react-dom';
import { shallow } from 'enzyme';
import { mockMemberData, mockRawData } from './mockData/mockMemberData';
import { membersFetch } from './fetchCalls';
import { membersCleaner } from './dataCleaner';

jest.mock('./fetchCalls');


describe.skip('membersCleaner', () => {
  it('should clean data', async () => {

    let result = await membersCleaner(mockRawData);

    const expected = mockMemberData;

    expect(result).toEqual(expected);
  });

});