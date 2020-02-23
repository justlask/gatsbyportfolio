import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import face from '../images/myface.png'

export default function IndexPage({ data }) {
  const projects = data.allMarkdownRemark.edges
  return(
    <Layout>
      <SEO title="Lauren Laskerr - Full Stack Web Developer" />
      <section className="hero">
        <div className="herocontainer">
          <img className="myface" src={face} />
          <div className="herotext">
            <h1>Hi, I’m Lauren Laskerr,</h1>
            <h3>Full Stack Web Developer</h3>
            <p>with a thing for fun dress socks, physical books and accessibility,
            oh, and playing with adobe illustrator for fun</p>
            <br></br>
            <h6>React, Express, Node, MongoDB, HTML, CSS, JavaScript, React Native, Cypress, graphQL</h6>
          </div>
        </div>
        <Link to="#viewmore" className="chevron"><FontAwesomeIcon icon={faChevronDown} /></Link>
      </section>
      <section id="viewmore">
          <h3>I like to build cool things:</h3>
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
      </section>
    </Layout>
  )
}


export const projectsQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 3
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
            image
            builtWith
          }
        }
      }
    }
  }
`