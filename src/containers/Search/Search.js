import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { membersFetch, nonProfitFetch } from '../../utils/fetchCalls.js'
import { membersCleaner } from '../../utils/dataCleaner.js'
import { setSearch } from '../../actions';
import PropTypes from 'prop-types';
import './Search.css'
import { getDistricts, confirm } from 'congressional-districts'

export class Search extends Component {
  constructor() {
    super();
    this.state = {
      chamber: '',
      state: '',
      zipcode: ''
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
    const zipcode = this.state.zipcode
    const district = getDistricts(zipcode)
    const validate = confirm(zipcode, district)

    if (validate === true) {

    const searchResults = await membersCleaner(this.state.chamber, this.state.state, district)
    this.props.setSearch(searchResults)
    this.setState({
      zipcode: ''
    })

    } else {
      alert('Invalid Zipcode')
    }
  }

  render() {
    return (
      <div className='search-container'>
        <section className='search-header'>
        </section>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <select name='chamber' onChange={this.handleChange}>
            <option 
              value=''
              type='dropdown'
            > 
            Pick a Chamber
            </option>           
            <option 
              value='senate'
              type='dropdown'
            >
            Senate
            </option>         
            <option 
              value='house'
              type='dropdown'
            >
            House  
            </option>        
          </select>
          <select name='state' onChange={this.handleChange}>
              <option value="">Pick a State</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>   
            <input
              name='zipcode'
              value={this.state.zipcode}
              onChange={this.handleChange}
              placeholder='Zipcode'
              type='number'
            />           
          <button className='submitButton' >Submit</button>
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

