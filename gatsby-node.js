const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {

  const { createPage } = actions;

  // const projectTemplate = path.resolve('src/templates/project.js');

  return graphql(`
    query {
    allMarkdownRemark {
      edges {
        node {
          html
          id
          frontmatter {
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
      console.log(node)
      createPage({
        path: `project/${node.frontmatter.slug}`,
        component: path.resolve(`./src/templates/project.js`),
        context: node.fields
      })
    })
  })

}