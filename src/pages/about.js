import React from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import face from '../images/myface.png'

const About = () => {
  return (
    <Layout>
      <SEO title="About Lauren Laskerr - Web Developer"/>
      <section className="hero">
        <div className="herocontainer">
          <img src={face} />
          <div className="herotext">
            <h1>Hello Again,</h1>
            <h1>I’m Lauren Laskerr.</h1>
            <br></br>
            <h5>
              I'm a full stack web developer with a thing for fun dress socks, physical books, pokemon go and accessibility.
              <br></br><br></br>
              While I try not to take myself too seriously, I do take my work super seriously.<br></br><br></br>
            </h5>
            <h5><b>I'm Currently:</b> <br></br></h5>
            <p>
              <span style={{fontFamily: 'DM Serif Display', fontSize: '18px',}}><b>Reading</b></span> <i>The Code Book</i> by Simon Singh<br></br>
              <span style={{fontFamily: 'DM Serif Display', fontSize: '18px',}}><b>Listening</b></span> to a random playlist I've made<br></br>
              <span style={{fontFamily: 'DM Serif Display', fontSize: '18px',}}><b>Learning</b></span> GraphQL<br></br><br></br>
            </p>
          </div>
        </div>
        <a className="chevron" href="#viewmore"><i className="fa fa-chevron-down"></i></a>
      </section>
      <section id="viewmore">
        <div>
          <h3>I’ve got a never give up, never give in attitude.<br></br>
            I guess you could say I’ve got guts!</h3>
          <div className="boxes">
            <div className="box">
              <h3>2017-2018</h3>
              <h4>The Start</h4>
              <p>I spent the better part of a decade working in specialty pharmacy, 
                so when I was diagnosed with a chronic condition, I was put in a position where 
                I could understand the situation from both sides.
                <br></br><br></br>
                This is where my journey started, with the bold idea that I could learn a new skill 
                and use my previous experience to help shape the world.
              </p>
            </div>
            <div className="box">
              <h3>2019</h3>
              <h4>Freelance</h4>
              <p>
                At the beginning of 2019 I set a few goals for myself. The first was to get healthy, and
                the second was to become a full stack web developer.
                <br></br><br></br>
                To be able to go from idea to full execution of that idea. I spent some time doing 
                freelance work and then I went to Ironhack Miami.
                <br></br><br></br>
                And won some things.
              </p>
            </div>
            <div className="box">
              <h3>2020</h3>
              <h4>Now</h4>
              <p>
                Freelance was fun. 
                <br></br><br></br>
                But I'm ready for a new challenge. I really want to work with great people building great tech.
                <br></br><br></br>
                I’m looking for a collaborative environment where I can use what I already know, learn and use new things and grow with a great team.
                <br></br><br></br>
                Front-End? Back-End? Both.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default About
