import React, { Component } from 'react';
import { membersFetch, nonProfitFetch } from '../../utils/fetchCalls.js';
import { Route, withRouter } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar'
import { setSearch } from '../../actions';
import { membersCleaner } from '../../utils/dataCleaner';
import MemberContainer from '../MemberContainer/MemberContainer'
import Search from '../Search/Search';
import ContactForm from '../ContactForm/ContactForm';
import ContactPdf from '../ContactPdf/ContactPdf';
import './App.css';


class App extends Component {
  render() {
    const { members } = this.props

    return(
        <div className="App">
          <Route exact path="/" component={NavBar}/>
          <Route exact path="/" component={Search}/>
          <Route exact path="/" render={({ history }) => <MemberContainer history={history}/>} />
          <div className='contact-section'>
            <Route exact path="/ContactForm" render={({ history }) => <ContactForm history={history}/>} />
            <Route exact path="/ContactPdf" render={() => <ContactPdf />} />
          </div>
        </div>
      )
    }
  }

export const mapStateToProps = state => ({
  members: state.searchResults
})




export default withRouter(App)
