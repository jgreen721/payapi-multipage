import React from 'react'
import "./About.css"
import {teamMembersDesk,teamMembersMobile, teamMembersTablet,bgPatternCircle} from "../../const"
import {Ready} from "../../components";



const About = () => {
  return (
    <div className="page-view about-view">
        <div className="pricing-top-bg-overlay">
            {/* <img className="pricing-top-bg-circles" src={bgPatternCircle}/> */}
            <div className="div-bg-circle"></div>
        </div>


        <div className="about-view-big-padding-section dark-blue">
          <h2 className="about-h1-header header-font">
            We empower innovators by delivering access to the financial system
          </h2>
          <div className="visions-sections">
            <div className="vision-section">
              <h4 className="bold header-font">Our Vision</h4>
              <p className="main-font vision-description">  Our main goal is to build beautiful consumer experiences along with developer-friendly 
    infrastructure. The result is an intelligent tool that gives everyone the ability to create 
    amazing products that solve big problems. We are deeply focused on democratizing financial 
    services through technology.</p>
            </div>
            <div className="vision-section">
              <h4 className="bold header-font">Our Business</h4>
              <p className="main-font vision-description">At the core of our platform is the technical infrastructure APIs that connect consumers. 
    Our innovative product provides key insights for businesses and individuals, as well as 
    robust reporting for traditional financial institutions and developers.</p>
            </div>
          </div>
      </div>

      <div className="about-img-container">
        <img className="about-img-bg-circle" src={bgPatternCircle} alt="" />
            <picture>
              <source media="(min-width:850px)" srcSet={teamMembersDesk}/>
              <source media="(min-width:550px)" srcSet={teamMembersTablet}/>
              <img className="about-img" src={teamMembersMobile} alt="img"/>
            </picture>
          </div>
<ul className="stats-row">
  <li className="stat-item">
    <h4 className="light-blue main-font thin desktop-header">Team Members</h4>
    <h1 className="header-font pink-font thin margin-y">300+</h1>
  </li>
  <li className="stat-item">
    <h4 className="light-blue main-font thin desktop-header">Offices in the US</h4>
    <h1 className="header-font pink-font thin margin-y">3</h1>
  </li>
  <li className="stat-item">
    <h4 className="light-blue main-font thin desktop-header">Transactions analyzed</h4>
    <h1 className="header-font pink-font thin margin-y">10M+</h1>
  </li>
</ul>
         

          <div className="about-view-big-padding-section dark-blue">
          <div className="visions-sections">
            <div className="vision-section">
              <h4 className="bold header-font">The Culture</h4>
              <p className="main-font vision-description">    We strongly believe there's always an opportunity to learn from each other outside of 
    day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. 
    We always value cross-team collaboration and diversity of thought, no matter the job title.</p>
            </div>
            <div className="vision-section">
              <h4 className="bold header-font">The People</h4>
              <p className="main-font vision-description">  We're all passionate about building a more efficient and inclusive financial infrastructure 
    together. At PayAPI, we have diverse backgrounds and skills.</p>
            </div>
          </div>
          </div>
          <Ready/>
    </div>
  )
}

export default About