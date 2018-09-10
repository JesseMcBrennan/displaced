import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { membersFetch, nonProfitFetch } from '../../utils/fetchCalls.js'
import PropTypes from 'prop-types';
import './Search.css'

export class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const submitSearch = await nonProfitFetch(this.state.search)
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input 
          name='search'
          value={this.state.search}
          onChange={this.handleChange}
          type='text'
        />
        <button className='submitButton'>Submit</button>
      </form>
    )
  }
}


export default Search;