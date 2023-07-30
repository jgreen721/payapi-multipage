import React from 'react'

const FeatureItem = ({inView,item,delay}) => {
  console.log("inView",inView)
  return (
    <li style={{"--i":delay}} className={item.checked && inView ? "feature-item dark-blue-animate main-font" : "feature-item light-blue main-font"}>
        <div style={{"--i":delay}} className={item.checked && inView ? "check-div animate-check" : "check-div no-opacity"}></div>
       <p> {item.name} </p>
    </li>
  )
}

export default FeatureItem