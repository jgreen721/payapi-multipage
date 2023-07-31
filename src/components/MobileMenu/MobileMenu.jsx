import React from 'react'
import { closeIcon } from '../../const'
import {Btn} from ".."
import {Link} from "react-router-dom";
import "./MobileMenu.css"

const MobileMenu = ({showMobile, setShowMobile}) => {
  return (
    <div className={showMobile ? "mobile-menu" : "mobile-menu hide-mobile-menu"}>
        <div className="flex-end">
        <button onClick={()=>setShowMobile(false)} className="close-menu-btn">
            <img src={closeIcon} alt="icon" />
        </button>
        </div>
    <div className="mobile-menu-body">
        <ul className="mobile-links">
            <li onClick={()=>setShowMobile(false)} className="mobile-link-item">
                <Link className="mobile-link" to="/pricing">
                    <h5>Pricing</h5>
                </Link>
            </li>
            <li onClick={()=>setShowMobile(false)} className="mobile-link-item">
                <Link className="mobile-link" to="/about">
                    <h5>About</h5>
                </Link>
            </li>
            <li onClick={()=>setShowMobile(false)} className="mobile-link-item">
                <Link className="mobile-link" to="/contact">
                    <h5>Contact</h5>
                </Link>
            </li>
        </ul>
        <Btn className="btn primary-btn">Schedule a Demo</Btn>
        </div>
    </div>
  )
}

export default MobileMenu