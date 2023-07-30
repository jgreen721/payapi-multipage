import React, {useEffect, useState} from "react"



export const useObserver=(el,className)=>{
        const [inView,setInView] = useState(false)

    const elObserver = new IntersectionObserver(animateEl);

    function animateEl(el){
        console.log("animateEl fired",el[0]);
        if(el[0].isIntersecting){
            console.log("show " + el[0])
             setInView(true)

            //check for service items (home-page)
            if(el[0].target.querySelectorAll(".service-item").length){
            el[0].target.querySelectorAll(".service-item").forEach(item=>{
                item.classList.add(className)
            })
        }

        el[0].target.classList.add(className)
        }
        else{
            console.log("hide!!")
            
        }
    }

    useEffect(()=>{
        if(el.current){
            console.log("attach observer")
            elObserver.observe(el.current)
        }
    },[el])

    return {inView}


}