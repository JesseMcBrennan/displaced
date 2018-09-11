import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { membersFetch, nonProfitFetch } from '../../utils/fetchCalls.js'
import { setSearch } from '../../actions';
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
    const searchResults = await nonProfitFetch(this.state.search)
    this.props.setSearch(searchResults.organizations)
    this.setState({
      search: ''
    })
  }

  render() {
    return (
      <div className='search-container'>
        <section className='search-header'>
        </section>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input 
            name='search'
            value={this.state.search}
            onChange={this.handleChange}
            type='text'
          />
          <select>
            <option 
              name='chamber'
              value={this.state.chamber}
              onChange={this.handleChange}
              type='dropdown'
            >
            Senate
            </option>         
            <option 
              name='chamber'
              value={this.state.chamber}
              onChange={this.handleChange}
              type='dropdown'
            >
            House  
            </option>        
          </select>
          <button className='submitButton'>Submit</button>
        </form>
      </div>
    )
  }
}

// export const mapStateToProps = state => ({
//   searchResults: state.searchResults
// })

export const mapDispatchToProps = dispatch => ({ 
  setSearch: searchResults => dispatch(setSearch(searchResults))
})


export default connect(null, mapDispatchToProps)(Search)

