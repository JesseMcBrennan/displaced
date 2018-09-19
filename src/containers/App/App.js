import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import MemberContainer from '../MemberContainer/MemberContainer';
import Search from '../Search/Search';
import ContactForm from '../ContactForm/ContactForm';
import ContactPdf from '../ContactPdf/ContactPdf';
import './App.css';


export class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={NavBar}/>
        <Route exact path="/" component={Search}/>
        <Route exact path="/MemberContainer" render={({ history }) => 
          <MemberContainer history={history}/>} 
        />
        <div className='contact-section'>
          <Route exact path="/ContactForm" render={({ history }) => 
            <ContactForm history={history}/>} 
          />
          <Route exact path="/ContactPdf" render={() => 
            <ContactPdf 
            />} />
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  members: state.searchResults
});

App.propTypes = {
  members: PropTypes.object
};


export default withRouter(connect(mapStateToProps)(App));




