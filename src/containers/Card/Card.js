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
      <h2>{member.role} {member.name}</h2>
      <h2>Party: {member.party}</h2>
      </div>
      <iframe id="inlineFrameExample"
          width="600"
          height="200"
          src="https://www.nytimes.com/search?query=Merkley%252C+Jeff+">
      </iframe>
    </div>
  )
  }
}

export const mapStateToProps = state => ({
  members: state.searchResults
})

export default connect(mapStateToProps)(Card);



