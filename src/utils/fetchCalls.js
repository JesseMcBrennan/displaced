import { memberKey, campaignKey } from '../utils/apiKey.js';
const membersUrl = 'https://api.propublica.org/congress/v1/90-115/senate/members.json'
const campaignUrl = 'https://api.propublica.org/campaign-finance/v1/'

export const membersFetch = async () => {
  const response = await fetch(membersUrl, {
   headers: {
      'X-API-Key':memberKey
    }
    });
    const result = await response.json()
    return result;
  }


 export const campaignFetch = async () => {
  const response = await fetch(campaignUrl, {
   headers: {
      'X-API-Key':campaignKey
    }
    });
    const result = await response.json()
    debugger;
    return result;
  }


