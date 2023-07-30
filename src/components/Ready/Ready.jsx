import React from 'react'
import {Link} from "react-router-dom"
import {Btn} from "../"
import "./Ready.css"

const Ready = () => {
  return (
    <div className="ready-section">
        <div className="ready-column">
        <h2 className="header-font">Ready to start?</h2>
        </div>
        <div className="ready-column">
        <div className="form-div">
            <input type="text" className="form-control" name="email" placeholder="Enter email address" />
            <Btn className="absolute-right-btn">Schedule a Demo</Btn>
            {/* <h3>HELLO</h3> */}
          </div>
        </div>
    </div>
  )
}

export default Ready