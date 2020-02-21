import React from 'react'
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import face from '../images/myface.png'

export default function Work({ data }) {
  console.log(data)
  const projects = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="My Work - Lauren Laskerr: Web Developer"/>
      <section className="hero">
        <div className="herocontainer">
          <img src={face} />
          <div className="herotext">
            <h1>I'm a full stack web developer,</h1><br></br>
              <h3>Some of the technologies I use are:</h3>
              <h5>React, Express, Node, MongoDB, HTML, CSS, JavaScript, React Native, Cypress</h5>
              <br></br>
              <h3>But I'm always learning something new:</h3>
              <h6>Recently I've picked up Meteor, and currently I'm learning graphQL and playing with Socket.IO</h6>
          </div>
        </div>
        <a className="chevron" href="#viewmore"><i className="fa fa-chevron-down"></i></a>
      </section>
      <section id="viewmore">
        <div>
          <h3>Check out some of my work:</h3>
          <div class="boxes">
          {projects.map((edge) => {
            const project = edge.node.frontmatter
            return (
              <div class="box">
              <a href={project.path}><h3>{project.title}</h3></a>
              <p>{project.description}</p>
              <img src={project.image} alt="" />
              <a class="button" href={project.path}>View More</a>
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
            problem
            solution
            code
            liveURL
            githubURL
            image
            video
          }
        }
      }
    }
  }
`
