import { memberKey } from '../utils/apiKey.js';
import { membersCleaner } from '../utils/dataCleaner'

export const membersFetch = async (chamber, state, district) => {
  const url = `https://api.propublica.org/congress/v1/members/${chamber}/${state}/${district}/current.json`

  const response = await fetch(url, {
   headers: {
      'X-API-Key':memberKey
    }
    });
    const result = await response.json()
    const fetchedMembersData = result
    return fetchedMembersData
  }

export const membersMoreInfo = async (memberObject) => {
  const url = memberObject.api_uri
  debugger;
}





