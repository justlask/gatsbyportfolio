import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const footer = () => {
  return (

    <footer>
      <div>
        <Link to="/work">My Work</Link>
        <Link to="/about">About Me</Link>
        <a href="mailto:lauren@justlask.com">Email Me</a>
      </div>
      <div>
        <a href="http://www.github.com/justlask" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="fa"/></a>
        <a href="http://www.linkedin.com/in/lauren-laskerr" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="fa" /></a>
        <a href="http://www.twitter.com/justlask" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} className="fa" /></a> 
        <a href="http://www.instagram.com/justlask" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className="fa" /></a>

      </div>
    </footer>
    // <footer>
    // © {new Date().getFullYear()}, Built with
    // {` `}
    // <a href="https://www.gatsbyjs.org">Gatsby</a>
    // </footer>
  )
}

export default footer