import { membersFetch } from './fetchCalls.js'

export const membersCleaner = async (chamber, state, district) => {
  const fetchedMemberData = await membersFetch(chamber, state, district);
  // debugger
  const uncleanMemberData = fetchedMemberData.results[0]
  const memberObject = {
    name: uncleanMemberData.name,
    district: uncleanMemberData.district,
    party: uncleanMemberData.party,
    role: uncleanMemberData.role,
    facebook: uncleanMemberData.facebook_account,
    twitter: uncleanMemberData.twitter_id,
    member_url: uncleanMemberData.api_uri
  }
  return memberObject
}