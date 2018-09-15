import { membersFetch } from './fetchCalls.js'

export const membersCleaner = async (chamber, state, district) => {
  const fetchedMemberData = await membersFetch(chamber, state, district);
  const uncleanMemberData = await fetchedMemberData.results
  debugger
  const membersData = uncleanMemberData.reduce((membersData, member) => {
    membersData.push({
        name: member.name,
        district: member.district,
        party: member.party,
        role: member.role,
        facebook: member.facebook_account,
        twitter: member.twitter_id,
        member_url: member.api_uri
    })
    return membersData
  },[])
  return membersData
}