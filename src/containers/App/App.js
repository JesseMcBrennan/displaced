import React, { Component } from 'react'
import { apiFetch } from '../../utils/fetchCalls.js'

class App extends Component {
  constructor() {
    super()
    this.class = {
      data: []
    }
  }

  componentDidMount() {
   this.fetchMemberData()
  }

  fetchMemberData = async () => {
    const memberData = await apiFetch();
    const parsedMemberData = memberData.results[0].uri_.map(member => member)
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