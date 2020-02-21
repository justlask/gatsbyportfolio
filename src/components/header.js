import React from 'react'
import { Link } from 'gatsby'

import Logo from './logo'

import logo from './../images/namemarkpurple.svg'
import icon from './../images/lightdarkblack.svg'


const header = (props) => {

  const handleMode = () => {
    return (props.mode === 'light') ? props.setMode('dark') : props.setMode('light')
  }

  return (
    <header>
      <Link to="/"><img src={logo} alt="Logo" /></Link>
      <nav>
        <button className="modebtn" onClick={handleMode}><img src={icon} /></button>
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/work">My Work</Link>
      </nav>
    </header>
  )
}

export default header