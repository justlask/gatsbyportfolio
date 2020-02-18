import React from 'react'
import { Link } from 'gatsby'

import Logo from './logo'

import logo from './../images/jlname.svg'


const header = () => {
  return (
    <header>
      <img src={logo} alt="Logo" />
      <Logo />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/work">My Work</Link>
      </nav>
    </header>
  )
}

export default header