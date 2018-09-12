import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { membersFetch, membersMoreInfo } from '../../utils/fetchCalls.js';
import { membersCleaner } from '../../utils/dataCleaner.js';
import PropTypes from 'prop-types';
import './MemberContainer.css'
import { Card } from '../Card/Card' 

export const MemberContainer = ({ members }) => {
  const displayMembers = members.map(member => {
    if(!members.length) {
      return;
    }
    return (
      <Card
        {...member}
      />
    )
  })
  return(
    <div>
    </div>
  )
}


// export class MemberContainer extends Component {
//   constructor() {
//     super()
//     this.state = {
//       clicked: false
//     }
//   }

//   handleSubmit = (e) => {
//     const url = this.props.member.member_url
    
//     membersMoreInfo(url)
//   }

//   render() {
//     const { members } = this.props
//     const displayMembers = members.map(member => )
//     return(
//       <div className='memberInfo'>
//         <h1>{members.role} {members.name}</h1>
//         <h3>{members.party}</h3>
//         <h3>{members.member_url}</h3>
//         <button onClick={() => this.handleSubmit()}>More Information</button>
//       </div>
//     )
//   }
// }

// const MemberContainer = ({ member }) => {
//   return(
//     <div className='memberInfo'>
//       <h1>{member.role} {member.name}</h1>
//       <h3>{member.party}</h3>
//       <h3>{member.member_url}</h3>
//       <button onClick={() => membersMoreInfo(member.member_uri)}>More Information</button>
//     </div>
//   )
// }

export const mapStateToProps = state => ({
  members: state.searchResults
})

export default connect(mapStateToProps)(MemberContainer);