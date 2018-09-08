import React, { Component } from 'react'
import { membersFetch, campaignFetch } from '../../utils/fetchCalls.js'


class App extends Component {
  constructor() {
    super()
    this.class = {
      data: []
    }
  }

  componentDidMount() {
   this.fetchMemberData()
   this.fetchCampaignData()
  }

  fetchMemberData = async () => {
    const memberData = await membersFetch();
  }

  fetchCampaignData = async () => {
    const campaignData = await campaignFetch();
  }




  render() {
    return(
      <div>
        <h1>BONGO</h1>
      </div>
    )
  }
}

export default App;