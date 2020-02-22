import React from 'react'
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Blogs({ data }) {
  const blogs = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Blog - Lauren Laskerr: Web Developer"/>
      <section className="hero">
            <div className="boxes">
            {blogs.map((edge) => {
              const blog = edge.node.frontmatter
              return (
                <div className="box">
                <Link to={blog.path}><h3>{blog.title}</h3></Link>
                <p>{blog.description}</p>
                <img src={blog.image} alt="" />
                <Link className="button" to={blog.path}>View More</Link>
              </div>
              )
            })}
        </div>
      </section>
    </Layout>
  )
}

export const blogsQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___order], order: ASC }
      filter: {frontmatter: { type: { eq: "blog" } }}
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
          }
        }
      }
    }
  }
`
