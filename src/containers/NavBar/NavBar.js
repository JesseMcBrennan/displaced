import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink, Link } from 'react-router-dom';
import './NavBar.css'

export const NavBar = () => {
  return(
    <ul className='navBar'>
      <Link to='/' className="navLink">
      <h1>repre</h1><h1 className="title-middle">sent</h1><h1>ed</h1>
      </Link>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  )
}