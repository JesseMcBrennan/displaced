import React, { Component } from 'react';
import { membersFetch, nonProfitFetch } from '../../utils/fetchCalls.js';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { NavBar } from '../NavBar/NavBar'
import { setSearch } from '../../actions';
import { membersCleaner } from '../../utils/dataCleaner';
import MemberContainer from '../MemberContainer/MemberContainer'
import Search from '../Search/Search';
import './App.css'


class App extends Component {
  componentDidMount() {
  // this.fetchMemberData()
  }

  render() {
    return(
        <div className="App">
          <Route exact path="/" component={NavBar}/>
          <Route exact path="/" component={Search}/>
          <Route exact path="/" component={MemberContainer}/>
        </div>
    )
  }
}

export const mapDispatchToProps = dispatch => ({

})

// export default withRouter(connect(null, mapDispatchToProps))

export default connect(null, mapDispatchToProps)(App)
