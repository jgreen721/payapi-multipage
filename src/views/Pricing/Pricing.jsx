import React from 'react'
import "./Pricing.css"
import { bgPatternCircle } from '../../const'
import { Ready } from '../../components'
import {Plan} from "./components"

const Pricing = () => {
  const plans = [
    {id:1,title:"Free Plan",description:"Build and test using our core set of products with up to 100 API requests.",price:"$0.00",features:[
      {id:1,name:"Transasction",checked:true},
      {id:2,name:"Auth",checked:true},
      {id:3,name:"Identify",checked:true},
      {id:4,name:"Investments",checked:false},
      {id:5,name:"Assets",checked:false},
      {id:6,name:"Liabilities",checked:false},
      {id:7,name:"Income",checked:false},
    ],
  delay:'.25s',
},
    {id:2,title:"Basic Plan",description:"Launch your project with unlimited requests and no contratual minimums.",price:"$249.00",features:[
      {id:1,name:"Transasction",checked:true},
      {id:2,name:"Auth",checked:true},
      {id:3,name:"Identify",checked:true},
      {id:4,name:"Investments",checked:true},
      {id:5,name:"Assets",checked:true},
      {id:6,name:"Liabilities",checked:false},
      {id:7,name:"Income",checked:false},
    ],
    delay:'.5s',
  },
    {id:3,title:"Premium Plan",description:"Get tailored solutions, volume pricing, and dedicated support for your team.",price:"$499.00",features:[
      {id:1,name:"Transasction",checked:true},
      {id:2,name:"Auth",checked:true},
      {id:3,name:"Identify",checked:true},
      {id:4,name:"Investments",checked:true},
      {id:5,name:"Assets",checked:true},
      {id:6,name:"Liabilities",checked:true},
      {id:7,name:"Income",checked:true},
    ],
    delay:'.75s',
  },
    
  ]
  return (
    <div className="page-view pricing-view">
         <div className="pricing-top-bg-overlay">
            {/* <img className="pricing-top-bg-circles" src={bgPatternCircle}/> */}
            <div className="div-bg-circle">
              
            </div>
        </div>
        <div className="pricing-content-view">
        <h1 className="pricing-h1-header dark-blue">Pricing</h1>
        <div className="pricing-container">
          {plans.map(plan=>(
            <Plan key={plan.id} plan={plan} />
          ))}
        </div>
        </div>
        <Ready/>
    </div>
  )
}

export default Pricing