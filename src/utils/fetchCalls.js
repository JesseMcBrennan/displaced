import { memberKey } from '../utils/apiKey.js';
import { membersCleaner } from '../utils/dataCleaner'
const nonProfitUrl = 'https://projects.propublica.org/nonprofits/api/v2/search.json?q=Turing'

export const membersFetch = async () => {
  // const url = `https://api.propublica.org/congress/v1/members/${chamber}/${state}/${district}/current.json` 
  const url = 'https://api.propublica.org/congress/v1/members/congress/colorado/33/current.json'
  const response = await fetch(url, {
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

  export const nestedNpFetch = async (memberUrl) => {
    const response = await fetch(memberUrl[0], {
    headers: {
      'X-API-Key':memberKey
    }
  })
  const result = await response.json()
  debugger
  return result
}



