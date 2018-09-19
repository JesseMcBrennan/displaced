import React, { Component } from 'react';
import './Card.css';
import PropTypes from 'prop-types';

export class Card extends Component {
  constructor() {
    super();
    this.state = ({
      clicked: false
    });
  }

  handleSubmit = () => {
    const { history } = this.props;
    history.push('/ContactForm');
  }

  render() {
    const { member } = this.props;
    return (
      <div className='Card'>
        <div className='text-container'>
          <h2>{member.title} {member.firstName} {member.lastName}</h2>
          <h2>Party: {member.party}</h2>
          <h2>Voting Percentage: {member.voting_percentage}%</h2>
          <h2>Office: {member.office} </h2>
          <h2>Phone Number: {member.phone} </h2>
          <a href={member.memberUrl}>{member.memberUrl}</a>
        </div>
        <div className="iframe-section">
          <iframe id="card-iframe"
            title="Inline Frame Example"
            src={member.nyt}>
          </iframe>
          <button 
            className="submit-message" 
            onClick={this.handleSubmit}
          >
            Write your Representative
          </button>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  member: PropTypes.object,
  history: PropTypes.object
};

