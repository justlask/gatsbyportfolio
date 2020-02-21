import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from './footer'

import './layout.scss';

// const initialVal = typeof window !== 'undefined' ? 'light' : localStorage.getItem('jlmode')


const Layout = ({ children }) => {
  const initialMode = (typeof window !== 'undefined' && localStorage.getItem('jlmode') == undefined) ? 'light' : localStorage.getItem('jlmode')
  const [ mode, setMode ] = useState(initialMode)

//   if (typeof window !== 'undefined') {
//     localStorage.setItem('myCat', 'Tom');
// }
// if (typeof window !== undefined) {
// }

  useEffect(() => {
    if (mode === 'dark' && typeof window !== 'undefined') {
      localStorage.setItem('jlmode', 'dark')
      document.body.classList.remove('light');
      document.body.classList.add(mode);
      console.log('go dark')
      console.log(mode)
    }
    else if (mode === 'light' && typeof window !== "undefined") {
      console.log('go light')
      console.log(mode)
      localStorage.setItem('jlmode', 'light')
      document.body.classList.remove('dark');
      document.body.classList.add(mode);
    }
  }, [mode])


  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} mode={mode} setMode={setMode} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
