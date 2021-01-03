import React from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import face from '../images/myface.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
    <Layout>
      <SEO title="About Lauren Laskerr - Web Developer"/>
      <section className="hero">
        <div className="herocontainer">
          <img className="myface" src={face} />
          <div className="herotext">
            <h1>Hello Again,</h1>
            <h1>I’m Lauren Laskerr.</h1>
            <br></br>
            <h5>
              I'm a full stack web developer who believes that we can use tech to solve some of the worlds most difficult problems.
              <br></br><br></br>
            </h5>
            <h5><b>I'm Currently:</b> <br></br></h5>
            <p>
              <span style={{fontFamily: 'DM Serif Display', fontSize: '18px',}}><b>Reading</b></span> <i>Algorithms to Live By</i> by Brian Christian and Tom Griffiths<br></br>
              <span style={{fontFamily: 'DM Serif Display', fontSize: '18px',}}><b>Listening</b></span> to '80s dark wave or Bad Bunny.<br></br>
              <span style={{fontFamily: 'DM Serif Display', fontSize: '18px',}}><b>Learning</b></span> Dart<br></br><br></br>
            </p>
          </div>
        </div>
        <Link to="#viewmore" className="chevron"><FontAwesomeIcon icon={faChevronDown} /></Link>
      </section>
      <section id="viewmore">
          <h3>I’ve got a never give up, never give in attitude.<br></br>
            I guess you could say I’ve got guts!</h3>
          <div className="boxes">
            <div className="box">
              <h3>2017-2019</h3>
              <h4>The Start</h4>
              <p>
                Tech has the ability to be the greatest equalizer the world has ever known.
                <br></br><br></br>
                My journey began when I decided that I would learn how to bring an idea into existance.
                After a couple years of self study, I went to Ironhack Miami - did some freelance work and won some things.
              </p>
            </div>
            <div className="box">
              <h3>2020</h3>
              <h4>The Covid Era</h4>
              <p>
                In 2020 I joined a great team at GenVis, as a full stack web developer.
                <br></br><br></br>
                I am proud to be a part of a great team of people, working to use technology to make the world a better, safer place.
                <br></br><br></br>
                See Good. Do Good.
              </p>
            </div>
            <div className="box">
              <h3>2021</h3>
              <h4>Now + Beyond</h4>
              <p>
                They say, find something you love and let it kill you.
                I say, find something you love and use it to make the world a better place.
                <br></br><br></br>
                I'm devoted to making technology that does just that.
                If you are interested in trying to make sure we hit a technology renaissance, not dystopia, you're my people.
                <br></br>
                Email me.
                <br></br>
              </p>
            </div>
        </div>
      </section>
    </Layout>
  )
}

export default About
