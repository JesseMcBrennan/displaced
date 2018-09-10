import { memberKey } from '../utils/apiKey.js';
import { membersFetch } from '../utils/dataCleaner'
const nonProfitUrl = 'https://projects.propublica.org/nonprofits/api/v2/search.json?q=Turing'

export const membersFetch = async () => {
  const response = await fetch(membersUrl, {
   headers: {
      'X-API-Key':memberKey
    }
    });
    const result = await response.json()
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



