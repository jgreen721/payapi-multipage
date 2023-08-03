import React, {useRef, useEffect} from 'react'
import { FeatureItem } from '..'
import {Btn} from "../../../../components"
import {useObserver} from "../../../../hooks/useObserver"

const Plan = ({plan}) => {
  const planRef = useRef();
  const {inView} = useObserver(planRef,"show-plan")

  useEffect(()=>{
    //useObserver 'debugging' for edge cases
    if(innerWidth > 675){
      console.log("Attach class -- ",innerWidth);
      planRef.current.classList.add("show-plan");
    }
    if(plan.id == 1){
      planRef.current.classList.add("show-plan");

    }
  },[]);



  return (
    <div style={{'--i':plan.delay}} className="plan-container">
      <div ref={planRef} className="plan-content-container">
        <h2 className="header-font pink-font">{plan.title}</h2>
        <p className="plan-description desktop main-font">{plan.description}</p>
        <h1 className="header-font plan-price">{plan.price}</h1>
        <ul className="features">
            {plan.features.map((featureItem,idx)=>(
                <FeatureItem inView={inView} key={featureItem.id} item={featureItem} delay ={`${(2 + idx/5).toFixed(2)}s`}/>
            ))}
        </ul>
        <Btn handleSubmit={()=>console.log("Dummy application: Plan Component fired")} className="btn transparent-dark-btn">Request Access</Btn>
        </div>
    </div>
  )
}

export default Plan