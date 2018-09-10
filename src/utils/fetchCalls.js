import { memberKey } from '../utils/apiKey.js';
const membersUrl = 'https://api.propublica.org/congress/v1/90-115/senate/members.json'
const nonProfitUrl = 'https://projects.propublica.org/nonprofits/api/v2/search.json?q=Turing'

export const membersFetch = async () => {
  const response = await fetch(membersUrl, {
   headers: {
      'X-API-Key':memberKey
    }
    });
    const result = await response.json()
    debugger;
    return result;
  }

  export const nonProfitFetch = async (search) => {
    const url = `https://projects.propublica.org/nonprofits/api/v2/search.json?q=${search}`
    const response = await fetch(url)
    const result = await response.json()
    return result
  }


