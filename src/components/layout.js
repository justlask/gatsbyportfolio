import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from './footer'

import './layout.scss';

const Layout = ({ children }) => {
  // console.log(mode)
  const [ mode, setMode ] = useState(localStorage.getItem('mode') ? localStorage.getItem('mode') : 'light')

  useEffect(() => {
    console.log(document.body)
    if (mode === 'dark') {
      localStorage.setItem('mode', 'dark')
      document.body.classList.remove('light');
      document.body.classList.add(mode);
      console.log('go dark')
      console.log(mode)
    }
    else {
      console.log('go light')
      console.log(mode)
      localStorage.setItem('mode', 'light')

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
