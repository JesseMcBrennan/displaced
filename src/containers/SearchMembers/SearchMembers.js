import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { membersFetch } from '../../utils/fetchCalls.js';
import PropTypes from 'prop-types';

export class SearchMembers extends Component {
  constructor() {
    super()
    this.state = {
      chamber: '',
      state: '',
      district: ''
    }
  }

  render() {
    return(
      <form>
        <select>
          <option 
            name='chamber'
            value={this.state.chamber}
            onChange={this.handleChange}
            type='text'
          >
          Senate
          </option>         
          <option 
            name='chamber'
            value={this.state.chamber}
            onChange={this.handleChange}
            type='text'
          >
          House
          </option>

        </select>
      </form>
    )
  }
}

export default SearchMembers