import React from 'react'
import {simpleUiIllustration} from "../../../../const"
import "./SimpleUi.css"

const SimpleUi = () => {
  return (
    <section className="simple-section">
         <div className="simple-column mobile-simple-column">
            <img className="simple-ui-img" src={simpleUiIllustration} alt="" />
        </div>
<div className="simple-column">
            <div className="simple-content">
                <h2 className="simple-header">Simple UI & UX</h2>
                <p className="simple-blurb">  
                Our pre-built form is easy to integrate in your app or website's checkout flow and designed to optimized conversion.</p>
            </div>
        </div>
        <div className="simple-column desktop-simple-column">
            <img className="simple-ui-img" src={simpleUiIllustration} alt="" />
        </div>

    </section>
  )
}

export default SimpleUi