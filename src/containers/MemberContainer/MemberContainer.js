import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { membersFetch, membersMoreInfo } from '../../utils/fetchCalls.js';
import { membersCleaner } from '../../utils/dataCleaner.js';
import './MemberContainer.css'
import { Card } from '../Card/Card' 

export const MemberContainer = ({ members, history }) => {
  const displayMembers = members.map((member, index) => {
    if(!members.length) {
      return;
    }
    return (
      <Card
        {...member}
        member={member}
        key={index}
        history={history}
      />
    )
  })
  return(
    <div className="memberContainer">
      <h1>{displayMembers}</h1>
    </div>
  )
}

export const mapStateToProps = state => ({
  members: state.searchResults
})

export default connect(mapStateToProps)(MemberContainer);

MemberContainer.propTypes = {
  members: PropTypes.array
};