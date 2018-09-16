import { membersFetch, membersMoreInfo } from './fetchCalls.js'

export const membersCleaner = async (chamber, state, district) => {
  const fetchedMemberData = await membersFetch(chamber, state, district);
  const uncleanMemberData = await fetchedMemberData.results
  const membersData = uncleanMemberData.reduce((membersData, member) => {
    membersData.push({
        firstName: member.first_name,
        lastName: member.last_name,
        district: member.roles[0].district,
        party: member.roles[0].party,
        title: member.roles[0].title,
        office: member.roles[0].office,
        phone: member.roles[0].phone,
        voting_percentage: member.roles[0].votes_with_party_pct,
        memberUrl: member.url
    })
    return membersData
  },[])
  return membersData
}