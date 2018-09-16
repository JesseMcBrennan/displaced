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
  console.log('hi')
  membersMoreInfo(url)
}

  render() {
  const { member } = this.props
  return (
    <div className='Card'>
      <div className='text-container'>
      <h2>{member.title} {member.firstName} {member.lastName}</h2>
      <h2>Party: {member.party}</h2>
      <h2>District: {member.district}</h2>
      <h2>Office: {member.office} </h2>
      <h2>Phone Number: {member.phone} </h2>
      <a href={member.memberUrl}>{member.memberUrl}</a>
      </div>
      <button>More Information</button>
    </div>
  )
  }
}

export const mapStateToProps = state => ({
  members: state.searchResults
})

export default connect(mapStateToProps)(Card);



