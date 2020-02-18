import React from 'react'
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const reqresnext = () => {
  return (
    <Layout>
      <SEO title="ReqResNext" />
      <section className="hero">
      <div className="projectherocontainer">
        <div className="herotext">
          <h1>ReqResNext</h1>
          <br></br>
          <h3>is a project management
            platform for small dev teams.</h3>
          <br></br>
          <h5><span style={{fontWeight: 500}}>Built With:</span></h5>
          <h5>React, Express, Node, MongoDB, Cloudinary, Heroku
          </h5>
          <div className="viewmorelinks">
            <a className="button" target="_blank" href="https://www.reqresnext.com/">View Project</a>
            <a className="button" target="_blank" href="https://www.github.com/justlask/reqresnext">View Code</a>
          </div>
        </div>
        <iframe src="https://www.youtube.com/embed/ju-Pi-j0Y2A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <a className="chevron" href="#viewmore"><i className="fa fa-chevron-down"></i></a>
    </section>
    <section id="viewmore">
      <div>
        <h3>ReqResNext is a project management<br></br>
          platform for small dev teams.</h3>
        <div className="boxes">
          <div className="box">
            <h3>The Problem</h3>
            <p>
              When I was getting ready to start a new solo project, I realized that there was no project management tool that was highly geared to a team of one, or even to a team of a few. 
              <br></br><br></br>
              Most large teams use not only one tool, but many. And that's great, but for a small project, it can become too much to keep track of - I wanted something simple.
            </p>
          </div>
          <div className="box">
            <h3>The Solution</h3>
            <p>
              We needed a project management tool that better emphasized the whole process, including being able to better visualize designs. 
              
              <br></br><br></br>And importantly, to easily see the project’s progress from a bird’s eye view.
              <br></br><br></br>So I decided to emphasize the Project, Action, Task model for organizing development.
            </p>
          </div>
          <div className="box">
            <h3>The Code</h3>
            <p>
              There are many interconnected moving parts in project management, and therefore there is a great need to keep things organized.
              <br></br><br></br>
              And although there are many pieces and information models, I aimed to create the most minimal visualization and easiest "flow" possible.
              This includes keeping all components nicely organized in their own folders.
            </p>
          </div>
        </div>
      </div>
    </section>
    </Layout>
  )
}

export default reqresnext
