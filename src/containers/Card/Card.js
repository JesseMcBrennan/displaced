import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { membersFetch, membersMoreInfo } from '../../utils/fetchCalls.js';
import './Card.css'

export class Card extends Component {
  constructor() {
    super()
    this.state = ({
      clicked: false
    })
  }

  handleSubmit = (e) => {
  const url = this.props.member.member_url
  
  membersMoreInfo(url)
}

  render() {
  const { member } = this.props
  return (
    <div className='Card'>
      <h2>{member.role} {member.name}</h2>
      <h4>Party: {member.party}</h4>
      <button className='moreInfo' onClick={() => membersMoreInfo(member.member_uri)}>More Information</button>
    </div>
  )
  }
}

export const mapStateToProps = state => ({
  members: state.searchResults
})

export default connect(mapStateToProps)(Card);



