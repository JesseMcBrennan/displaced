import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { membersFetch, membersMoreInfo } from '../../utils/fetchCalls.js';

export class Card extends Component {
  constructor() {
    super()
    this.state = ({
      clicked: false
    })
  }
  render() {
  const { member } = this.props
  return (
    <div className='memberInfo'>
      <h1>{member.role} {member.name}</h1>
      <h3>{member.party}</h3>
      <h3>{member.member_url}</h3>
      <button onClick={() => membersMoreInfo(member.member_uri)}>More Information</button>
    </div>
  )
  }
}

export const mapStateToProps = state => ({
  members: state.searchResults
})

export default connect(mapStateToProps)(Card);



