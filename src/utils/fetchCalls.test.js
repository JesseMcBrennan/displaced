import React from 'react';
import ReactDom from 'react-dom';
import { shallow, mount } from 'enzyme';
import { membersFetch, membersMoreInfo } from './fetchCalls';
import { mockMemberData } from './mockData/mockMemberData';

describe('fetchCalls', () => {
  const response = { status: 'success', message: '2 row was deleted.' };
  let mockMemberKey;
  let mockChamber;
  let mockState;
  let mockDistrict;

  beforeEach(() => {
    mockMemberKey = 'key'
    mockChamber = 'house'
    mockState = 'OR'
    mockDistrict = 01
    window.fetch = jest
      .fn()
      .mockImplementation(() =>
        Promise.resolve({ json: () => Promise.resolve(response) })
      );
  });

  it('membersFetch', () => {
    const url = `https://api.propublica.org/congress/v1/members/senate/or/01/current.json`

    const expected =  [
    url, {
      headers: {
        'X-API-Key':mockMemberKey
      }
    }
  ];
  membersFetch(mockChamber, mockState, mockDistrict)
  expect(window.fetch).toHaveBeenCalledWith(...expected)
  })
});