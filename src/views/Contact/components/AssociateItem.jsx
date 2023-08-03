import React, {useRef, useLayoutEffect} from 'react'
import {gsap} from "gsap";

const AssociateItem = ({associateItem}) => {


    const associateRef = useRef();
    const parentRef = useRef();
  
    useLayoutEffect(() => {
    
      // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
      let ctx = gsap.context(() => {
        
        // Our animations can use selector text like ".box" 
        // this will only select '.box' elements that are children of the component
        // or we can use refs
        gsap.to(associateRef.current, { rotation: 360 });
        console.log("useLayoutEffect")
        
      }, parentRef.current); // <- IMPORTANT! Scopes selector text
      
      return () => ctx.revert(); // cleanup
      
    }, [])
  return (
    <li ref={parentRef} key={associateItem.id} className="contact-associate-item">
    <img ref={associateRef} src={associateItem.icon} alt="icon" className="associate-icon"/>
  </li>
  )
}

export default AssociateItem