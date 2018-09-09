import { membersFetch } from './fetchCalls.js'

export const membersCleaner = async () => {
  const fetchedMemberData = await membersFetch();
  const memberResults = fetchedMemberData.results[0].members
}