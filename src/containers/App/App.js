import React, { Component } from 'react';
import { membersFetch, nonProfitFetch } from '../../utils/fetchCalls.js';
import { setSearch } from '../../actions';
import { membersCleaner } from '../../utils/dataCleaner';
import { Route, withRouter } from 'react-router-dom';
import Search from '../Search/Search';
import { connect } from 'react-redux';




class App extends Component {
  componentDidMount() {
  // this.fetchNonProfit()
  }

  fetchMemberData = async () => {
    const memberData = await membersCleaner()

  }

  fetchNonProfit = async () => {
    const nonProfitData = await nonProfitFetch();
  }


  render() {
    return(
      <div className="App">
        <Route exact path="/" component={Search}/>
      </div>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  setSearch: search => dispatch(setSearch(search))
})

// export default withRouter(connect(null, mapDispatchToProps))

export default connect(null, mapDispatchToProps)(App)
