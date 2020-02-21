import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from '../components/layout'

export default function Project ({ data }) {
  const project = data.markdownRemark.frontmatter
  return (
    <Layout> 
      <SEO title={`${project.title}`}/>
      <section class="hero">
        <div class="projectherocontainer">
          <div class="herotext">
            <h1>{project.title}</h1>
            <br></br>
            <h3>{project.description}</h3>
            <br></br>
            <h5><span style={{fontWeight: 500}}>Built With:</span></h5>
            <h5>
              {project.builtWith}
            </h5>
            <div class="viewmorelinks">
              <a class="button" target="_blank" href={project.liveURL}>View Project</a>
              <a class="button" target="_blank" href={project.githubURL}>View Code</a>
            </div>
          </div>
          <iframe src={project.video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        {/* <a class="chevron" href="#viewmore"><FontAwesome icon={faChevronDown}/></a> */}
      </section>
      <section id="viewmore">
        <div>
          <h3>{project.title} {project.description}</h3>
          <div class="boxes">
            <div class="box">
              <h3>The Problem</h3>
              <p>
                {project.problem}
              </p>
            </div>
            <div class="box">
              <h3>The Solution</h3>
              <p>{project.solution}</p>
            </div>
            <div class="box">
              <h3>The Code</h3>
              <p>
                {project.code}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const projectQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
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
`
 