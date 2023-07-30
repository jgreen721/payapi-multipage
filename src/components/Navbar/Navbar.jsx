import React, {useState} from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
import { logo } from '../../const'
import {Btn,MobileMenu} from ".."
import { menuIcon } from '../../const'

const Navbar = () => {
    const [showMobile,setShowMobile] = useState(false)

  return (
    <nav className="navbar">
<div className="navbar-column">
    <Link to="/">
    <img className="footer-logo" src={logo} alt="" />
    </Link>
    <ul className="navbar-links">
        <li className="navbar-item">
            <Link className="navbar-link" to="/pricing">
                <p>Pricing</p>
            </Link>
        </li>
        <li className="navbar-item">
            <Link className="navbar-link" to="/about">
               <p> About </p>
            </Link>
        </li>
        <li className="navbar-item">
            <Link className="navbar-link" to="/contact">
                <p>Contact</p>
            </Link>
        </li>
    </ul>
</div>
<Btn className="btn primary-btn desktop-navbar-btn">Schedule a Demo</Btn>
<button onClick={()=>setShowMobile(!showMobile)} className="mobile-menu-icon-btn">
<img src={menuIcon} alt="menu-icon" className="mobile-menu-icon"/>
</button>
<MobileMenu showMobile={showMobile} setShowMobile={setShowMobile}/>
    </nav>
  )
}

export default Navbar