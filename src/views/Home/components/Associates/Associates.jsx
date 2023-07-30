import React from 'react'
import {Btn} from "../../../../components"
import {teslaIcon, microsoftIcon, hewlettIcon, googleIcon,nvidiaIcon,oracleIcon,bgPatternCircle} from "../../../../const"
import {AssociateItem} from "./components"
import "./Associates.css"

const Associates = () => {
  const associates = [
    {id:1,icon:teslaIcon,company:"Tesla"},
    {id:2,icon:microsoftIcon,company:"Microsoft"},
    {id:3,icon:hewlettIcon,company:"Hewlett"},
    {id:4,icon:oracleIcon,company:"Oracle"},
    {id:5,icon:googleIcon,company:"Google"},
    {id:6,icon:nvidiaIcon,company:"Nvidia"},
  ]
  return (
    <div className="associates-container">
      <img className="circles-overlay" src={bgPatternCircle} alt="" />
      <div className="associates-column mobile-associates-column">
        <ul className="associates-links">
          {associates.map(a=>(
            <AssociateItem key={a.id} icon={a}/>
          ))}
        </ul>
      </div>
      <div className="associates-column">
        <div className="associates-content">
          <h2 className="associate-h2">Who we work with</h2>
          <p className="thin">Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users.</p>
          <Btn className="btn transparent-btn">About Us</Btn>
        </div>
      </div>
      <div className="associates-column desktop-associates-column">
        <ul className="associates-links">
          {associates.map(a=>(
            <AssociateItem key={a.id} icon={a}/>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Associates