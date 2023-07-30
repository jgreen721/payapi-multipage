import React from 'react'
import "./Footer.css"
import {Link} from "react-router-dom"
import { whitelogo,facebookIcon, twitterIcon, linkedInIcon,twitterHighlightIcon,facebookHighlightIcon,linkedInHighlightIcon } from '../../const'
import {MediaLink} from "./components"

const Footer = () => {
    const mediaLinks=[
        {id:1,name:"Facebook",icon:facebookIcon,highlight:facebookHighlightIcon,site:"https://facebook.com"},
        {id:2,name:"Twitter",icon:twitterIcon,highlight:twitterHighlightIcon,site:"https://twitter.com"},
        {id:3,name:"LinkedIn",icon:linkedInIcon,highlight:linkedInHighlightIcon,site:"https://linkedin.com"},
    ]
  return (
    <footer className="footer">
<div className="footer-column">
    <img className="footer-logo" src={whitelogo} alt="" />
    <ul className="footer-links">
        <li className="footer-item">
            <Link className="footer-link" to="/pricing">
                <p>Pricing</p>
            </Link>
        </li>
        <li className="footer-item">
            <Link className="footer-link" to="/about">
               <p> About </p>
            </Link>
        </li>
        <li className="footer-item">
            <Link className="footer-link" to="/contact">
                <p>Contact</p>
            </Link>
        </li>
    </ul>
</div>
<ul className="footer-media-links">
    {mediaLinks.map(link=>(
        <MediaLink key={link.id} link={link}/>
    ))}

</ul>
    </footer>
  )
}

export default Footer