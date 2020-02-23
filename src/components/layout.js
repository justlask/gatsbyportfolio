import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from './footer'

import './layout.scss';

const Layout = ({ children }) => {
  const initialMode = (typeof window !== 'undefined') ? (localStorage === undefined) ? 'light' : localStorage.getItem('jlmode') : 'light';
  const [ mode, setMode ] = useState('light');

  useEffect(() => {
    if (mode === 'dark' && typeof window !== 'undefined') {
      localStorage.setItem('jlmode', 'dark')
      document.body.classList.remove('light');
      document.body.classList.add(mode);
    }
    else if (mode === 'light' && typeof window !== "undefined") {
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
