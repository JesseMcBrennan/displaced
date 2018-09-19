import React from 'react';
import ReactDom from 'react-dom';
import { shallow, mount } from 'enzyme';
import { membersFetch, membersMoreInfo } from './fetchCalls';
import { mockMemberData, mockRawData } from './mockData/mockMemberData';
import { memberKey } from './apiKey.js';

describe('fetchCalls', () => {
  const response = { status: 'success', message: '2 row was deleted.' };
  let mockMemberKey;
  let mockChamber;
  let mockState;
  let mockDistrict;

  beforeEach(() => {
    mockMemberKey = 'key';
    mockChamber = 'house';
    mockState = 'OR';
    mockDistrict = 1;
    window.fetch = jest
      .fn()
      .mockImplementation(() =>
        Promise.resolve({ json: () => Promise.resolve(mockRawData) })
      );
  });

  it('membersFetch', () => {
    const url = `https://api.propublica.org/congress/v1/members/house/OR/1/current.json`;

    const expected =  [
      url, {
        headers: {
          'X-API-Key':memberKey
        }
      }
    ];
    membersFetch(mockChamber, mockState, mockDistrict);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
});