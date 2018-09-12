import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { membersFetch, nonProfitFetch } from '../../utils/fetchCalls.js';
import { membersCleaner } from '../../utils/dataCleaner.js';
import PropTypes from 'prop-types';

const MemberContainer = ({ member }) => {
  return(
    <div>
      <h1>{member.name}</h1>
    </div>
  )
}

export const mapStateToProps = state => ({
  member: state.searchResults
})

export default connect(mapStateToProps)(MemberContainer);