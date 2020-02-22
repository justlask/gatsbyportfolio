import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'


import namemark from './../images/namemark.png'


const header = (props) => {

  const handleMode = () => {
    return (props.mode === 'light') ? props.setMode('dark') : props.setMode('light')
  }

  return (
    <header>
      <Link to="/"><img src={namemark} alt="Logo" /></Link>
      <nav>
        <button className="modebtn" onClick={handleMode}><FontAwesomeIcon icon={faSun}/></button>
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/work">My Work</Link>
        <Link to="/blogs">Blogs</Link>
      </nav>
    </header>
  )
}

export default header