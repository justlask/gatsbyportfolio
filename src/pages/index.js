import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import face from '../images/myface.png'
import crohniclev2 from '../images/crohniclev2.png'
import reqresnext from '../images/reqresnext.png'
import dosted from '../images/dostedss.png'

const IndexPage = () => (
  <Layout>
    <SEO title="Lauren Laskerr - Full Stack Web Developer" />
    <section className="hero">
      <div className="herocontainer">
        <img src={face} />
        <div className="herotext">
          <h1>Hi, I’m Lauren Laskerr,</h1>
          <h3>Full Stack Web Developer</h3>
          <p>with a thing for fun dress socks, physical books and accessibility,
          oh, and playing with adobe illustrator for fun</p>
          <br></br>
          <h6>React, Express, Node, MongoDB, HTML, CSS, JavaScript, React Native, Cypress</h6>
        </div>
      </div>

      <a className="chevron" href="#viewmore"><i className="fa fa-chevron-down"></i></a>
    </section>
    <section id="viewmore">
      <div>
        <h3>I like to build cool things:</h3>
        <div className="boxes">
          <div className="box">
            <Link to="/project/crohniclev2"><h3>Crohnicle v2</h3></Link>
            <p>Social network for people with chronic conditions to find friends and create groups for support and activities.</p>
            <img src={crohniclev2} alt="" />
            <Link className="button" to="/project/crohniclev2">View More</Link>
          </div>
          <div className="box">
            <Link to="/project/reqresnext"><h3>ReqResNext</h3></Link>
            <p>ReqResNext is a project management platform for small dev teams.</p>
            <img src={reqresnext} alt="" />
            <Link className="button" to="/project/reqresnext">View More</Link>
          </div>
          <div className="box">
            <Link to="/project/dosted"><h3>DOSTED</h3></Link>
            <p>A web app that believes in the power of everyone Doing One Small Thing Every Day to make the world a better place.</p>
            <img src={dosted} alt="" />
            <Link className="button" to="/project/dosted">View More</Link>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
