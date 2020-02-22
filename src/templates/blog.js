import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import Layout from '../components/layout'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Blog ({ data }) {
  const blog = data.markdownRemark.frontmatter
  const html = data.markdownRemark.html
  return (
    <Layout> 
      <SEO title={`${blog.title}`}/>
      <section class="hero">
        <div class="projectherocontainer">
          <div class="herotext">
            <h1>{blog.title}</h1>
            <br></br>
            <h3>{blog.description}</h3>
            <br></br>
            <h5>{blog.builtWith}</h5>
          </div>
        </div>
        <Link to="#viewmore" className="chevron"><FontAwesomeIcon icon={faChevronDown} /></Link>
      </section>
      <section id="viewmore" className="blogcontent" dangerouslySetInnerHTML={{__html: `<div>${html}</div>`}}></section>
    </Layout>
  )
}

export const blogQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        slug
        title
        description
        builtWith
      }
    }
  }
`
 