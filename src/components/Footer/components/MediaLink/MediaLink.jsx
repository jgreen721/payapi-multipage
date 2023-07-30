import React, {useState} from 'react'

const MediaLink = ({link}) => {
  const [isHighlight,setIsHighlight] = useState(false)
  return (
   
    <li onMouseEnter={()=>setIsHighlight(true)} onMouseLeave={()=>setIsHighlight(false)} className="footer-media-item">  
            <a href={link.site} target="_blank" className="footer-media-link">
                <img src={isHighlight ? link.highlight : link.icon} alt="media-icon"/>
            </a>
    </li>
  )
}

export default MediaLink