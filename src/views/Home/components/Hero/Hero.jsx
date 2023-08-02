import React from 'react'
import "./Hero.css"
import {Btn} from "../../../../components"
import {Link} from "react-router-dom"
import { simpleUiIllustration, bankingCoverageIcon,consumerPaymentsIcon, personalFinancesIcon,easyImplementIllustration,phoneMockupIllustration } from '../../../../const'

const Hero = () => {
  return (
    <header className="home-hero">
      <div className="mobile-home-hero-column">
      <img className="home-hero-mobile-phone-img" src={phoneMockupIllustration} alt="" />
      </div>
      <div className="home-hero-column home-hero-column-center">
        <div className="hero-content">
          <h1 className="home-hero-h1">Start building with our APIs for absolutely free.</h1>
          <div className="form-div">
            <input type="text" className="form-control" name="email" placeholder="Enter email address" />
            <Btn handleSubmit={()=>console.log("Dummy application: HeroBtn fired")} className="absolute-right-btn">Schedule a Demo</Btn>
            <p className="form-caption">Have any questions? <Link className="contact-link" to="/contact"><strong className="strong-bold">Contact Us</strong></Link></p>
          </div>
        </div>
      </div>
      <div className="home-hero-column home-hero-img-column desktop-column">
<img className="home-hero-phone-img" src={phoneMockupIllustration} alt="" />
      </div>
    </header>
  )
}

export default Hero