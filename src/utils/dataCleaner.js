import { membersFetch, membersMoreInfo } from './fetchCalls.js'

export const membersCleaner = async (chamber, state, district) => {
  const fetchedMemberData = await membersFetch(chamber, state, district);
  const uncleanMemberData = await fetchedMemberData.results
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
    const memberInfo = membersMoreInfo(member.api_uri)
    debugger
    return membersData
  },[])
  return membersData
}