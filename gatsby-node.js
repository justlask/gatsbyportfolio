const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {

  const { createPage } = actions;
  const projectTemplate = path.resolve(`src/templates/project.js`)
  const blogTemplate = path.resolve(`src/templates/blog.js`)

  const projects = graphql(`
    query {
    allMarkdownRemark(
      filter: {frontmatter: { type: { eq: "project" } }}
    ) {
      edges {
        node {
          html
          id
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
    }
  }`)
  .then(res => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }
    
    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: path.resolve(projectTemplate)
      })
    })
  })


  const blogs = graphql(`
    query {
      allMarkdownRemark(
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
              builtWith
            }
          }
        }
      }
    }`)
  .then(res => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }
    
    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: path.resolve(blogTemplate)
      })
    })
  })

  return projects, blogs


}