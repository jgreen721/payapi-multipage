import React, {useState} from 'react'
import { Ready,FormInput, Btn } from '../../components'
import "./Contact.css"
import {teslaDarkIcon,microsoftDarkIcon,hewlettDarkIcon,oracleDarkIcon,googleDarkIcon,nvidiaDarkIcon} from "../../const"

const Contact = () => {
  const [subscribe, setSubscribe] = useState(false)
  const associates = [
    {id:1,icon:teslaDarkIcon,company:"Tesla"},
    {id:2,icon:microsoftDarkIcon,company:"Microsoft"},
    {id:3,icon:hewlettDarkIcon,company:"Hewlett"},
    {id:4,icon:oracleDarkIcon,company:"Oracle"},
    {id:5,icon:googleDarkIcon,company:"Google"},
    {id:6,icon:nvidiaDarkIcon,company:"Nvidia"},
  ]
  return (
    <div className="page-view contact-view">
        <div className="pricing-top-bg-overlay">
            {/* <img className="pricing-top-bg-circles" src={bgPatternCircle}/> */}
            <div className="div-bg-circle"></div>
        </div>

        <div className="contact-view-content">
          <div className="contact-top-section">
            <div className="contact-column">
              <form action="">
                <FormInput category="Name" isTextArea={false}/>
                <FormInput category="Email Address" isTextArea={false}/>
                <FormInput category="Company Name" isTextArea={false}/>
                <FormInput category="Title" isTextArea={false}/>
                <FormInput category="Message" isTextArea={true}/>
                <div className="form-div checkbox-div">
                    <div onClick={()=>setSubscribe(!subscribe)} className={subscribe ? "checkbox checked" : "checkbox"}></div>
                  <p className="main-font light-blue">
                    Stay up-to-date with company announcements and updates to our API
                  </p>
                </div>
                <Btn className="btn transparent-dark-btn">Submit</Btn>
              </form>
            </div>
            <div className="contact-column">
              <h4 className="main-font h4-small dark-blue contact-associates-header">Join the thousands of innovators already building with us</h4>
              <ul className="contact-associates-list">
                {associates.map(a=>(
                  <li key={a.id} className="contact-associate-item">
                    <img src={a.icon} alt="icon" className="associate-icon"/>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Ready/>

    </div>
  )
}

export default Contact