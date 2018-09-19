import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setMessage } from '../../actions';
import './ContactForm.css';

export class ContactForm extends Component {
  constructor() {
    super();
    this.state={
      name: '',
      body: '',
      signature: '',
      error: false
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]:value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { history } = this.props;
    this.props.setMessage(this.state);
    this.setState({
      name: '',
      body: '',
      signature: ''
    });
    if (this.state.body.length) {
      history.push('/ContactPdf');
    } else {
      alert('Please enter a message');
      this.setState({
        error: true
      });
    }
  }

  render () {
    return (
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
    );
  }
}

export const mapStateToProps = state => ({
  member: state.searchResults
});

export const mapDispatchToProps = dispatch => ({
  setMessage: createMessage => dispatch(setMessage(createMessage))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
  setMessage: PropTypes.func,
  history: PropTypes.object,
  member: PropTypes.object
};

