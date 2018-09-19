import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './MemberContainer.css';
import { Card } from '../Card/Card'; 

export const MemberContainer = ({ members, history }) => {
  const displayMembers = members.map((member, index) => {
    return (
      <Card
        member={member}
        key={index}
        history={history}
      />
    );
  });
  return (
    <div className="memberContainer">
      <h1>{displayMembers}</h1>
    </div>
  );
};

export const mapStateToProps = state => ({
  members: state.searchResults
});

export default connect(mapStateToProps)(MemberContainer);

MemberContainer.propTypes = {
  members: PropTypes.array,
  history: PropTypes.object
};