import React from 'react'
import {Ready} from "../../components"
import {Hero,Associates,Implements,SimpleUi,Services} from "./components"
import "./Home.css"
import {bgPatternCircle} from "../../const";
import { simpleUiIllustration, bankingCoverageIcon,consumerPaymentsIcon, personalFinancesIcon,easyImplementIllustration,phoneMockupIllustration } from '../../const'


const Home = () => {
  return (
    <div className="page-view">
         <div className="top-bg-overlay">
            <img className="top-bg-circles" src={bgPatternCircle}/>
        </div>
        {/* <div className="home-page-view"> */}
          <Hero/>
          <Associates/>
          <Implements/>
          <SimpleUi/>
          <Services/>
          <Ready/>
        {/* </div> */}
    </div>
  )
}

export default Home