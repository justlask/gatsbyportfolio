import React from "react"
import { graphql } from "gatsby"

export default function Project({ data }) {
  // const project = data.markdownRemark
  console.log(data)
  // console.log(project)
  return (
    <div> 
      oh hi
      {/* <h1>{project.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML = {{ __html: project.html }}></div> */}
    </div>
  )
}

export const projectQuery = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        slug
        path
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
 