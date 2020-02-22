import React from 'react'
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import face from '../images/myface.png'

export default function Work({ data }) {
  const projects = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="My Work - Lauren Laskerr: Web Developer"/>
      <section className="hero">
        <div className="herocontainer">
          <img src={face} />
          <div className="herotext">
            <h1>I'm a full stack web developer,</h1><br></br>
              <h4>Some of the technologies I use are:</h4>
              <h5>React, Express, Node, MongoDB, HTML, CSS, JavaScript, React Native, Cypress, graphQL</h5>
              <br></br>
              <h4>But I'm always learning something new:</h4>
              <h6>Recently I've picked up graphQL, I'm playing with Socket.IO, learning AWS, and this is built with Gatsby!</h6>
          </div>
        </div>
        <Link to="#viewmore" className="chevron"><FontAwesomeIcon icon={faChevronDown} /></Link>
      </section>
      <section id="viewmore">
        <div>
          <h3>Check out some of my work:</h3>
          <div className="boxes">
          {projects.map((edge) => {
            const project = edge.node.frontmatter
            return (
              <div className="box">
              <Link to={project.path}><h3>{project.title}</h3></Link>
              <p>{project.description}</p><br></br>
              <p>{project.builtWith}</p>
              <img src={project.image} alt="" />
              <Link className="button" to={project.path}>View More</Link>
            </div>
            )
          })}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const projectsQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___order], order: ASC }
      filter: {frontmatter: { type: { eq: "project" } }}
      ) {
      edges {
        node {
          html
          frontmatter {
            type
            path
            slug
            title
            description
            builtWith
            image
          }
        }
      }
    }
  }
`
