import { membersFetch } from './fetchCalls.js'

export const membersCleaner = async () => {
  const fetchedMemberData = await membersFetch();
  const memberUrl = fetchedMemberData.results[0].members.map(member => member.api_uri)
  return memberUrl
}