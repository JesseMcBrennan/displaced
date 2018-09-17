import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar.js'
import { setMessage } from '../../actions'
import './ContactForm.css'

export class ContactForm extends Component {
  constructor() {
    super()
    this.state={
      name: '',
      body: '',
      signature: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]:value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { history } = this.props
    this.props.setMessage(this.state)
    this.setState({
      name: '',
      body: '',
      signature: ''
    })
    history.push('/ContactPdf')
  }

  render () {
    return(
        <form className="ContactForm" onSubmit={this.handleSubmit}>
            <input  
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
              placeholder='Enter your Name'
              type='text'
            />              
            <textarea 
              rows="4"
              cols="50" 
              name='body'
              value={this.state.body}
              onChange={this.handleChange}
              placeholder='Enter your Message'
              className='inputBody'
            />          
            <input 
              name='signature'
              value={this.state.signature}
              onChange={this.handleChange}
              placeholder='Enter your Signature'
              type='text'
            /> 
            <button>Submit your Message</button>     
        </form>
    )
  }
}

export const mapStateToProps = state => ({
  member: state.searchResults
})

export const mapDispatchToProps = dispatch => ({
  setMessage: createMessage => dispatch(setMessage(createMessage))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);