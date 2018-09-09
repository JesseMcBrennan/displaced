import React, { Component } from 'react'
import { membersFetch, nonProfitFetch } from '../../utils/fetchCalls.js'
import { membersCleaner } from '../../utils/dataCleaner'
import { Route, withRouter } from 'react-router-dom';




class App extends Component {
  constructor() {
    super()
    this.class = {
      data: []
    }
  }

  componentDidMount() {
   this.fetchMemberData();
   this.fetchNonProfit();
  }

  fetchMemberData = async () => {
    const memberData = await membersCleaner()

  }

  fetchNonProfit = async () => {
    const nonProfitData = await nonProfitFetch();
  }


  render() {
    return(
      <div>
        <h1>BONGO</h1>
      </div>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  getNpData: nonProfitData => dispatch(nonProfitData)
})

export default App;