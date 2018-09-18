import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { membersFetch, nonProfitFetch } from '../../utils/fetchCalls.js';
import { Route, withRouter } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import { setSearch } from '../../actions';
import { membersCleaner } from '../../utils/dataCleaner';
import MemberContainer from '../MemberContainer/MemberContainer';
import Search from '../Search/Search';
import ContactForm from '../ContactForm/ContactForm';
import ContactPdf from '../ContactPdf/ContactPdf';
import './App.css';


class App extends Component {
  render() {
    const { members } = this.props;
    return (
      <div className="App">
        <Route path="/" component={NavBar}/>
        <Route exact path="/" component={Search}/>
        <Route exact path="/MemberContainer" render={({ history }) => <MemberContainer history={history}/>} />
        <div className='contact-section'>
          <Route exact path="/ContactForm" render={({ history }) => <ContactForm history={history}/>} />
          <Route exact path="/ContactPdf" render={() => <ContactPdf />} />
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  members: state.searchResults
});

App.propTypes = {
  member: PropTypes.object
};


export default withRouter(connect(mapStateToProps)(App));


{ /*          <Route path={`/members/:id`} render={({ history, match }) => {
            const matchedMember = members.find(member => member.member_id === match.params.member_id )
            if (matchedMember) {
              return <MemberContainer history={history} />
            } 
            }} />
       
          <div className='contact-section'>
            <Route exact path="/ContactForm" render={({ history }) => <ContactForm history={history}/>} />
            <Route exact path="/ContactPdf" render={() => {
              if (members) {
              return <ContactPdf />
              }
              }} />*/ }


