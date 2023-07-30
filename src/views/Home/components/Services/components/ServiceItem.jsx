import React from 'react'

const ServiceItem = ({service,delay}) => {
  return (
    <li style={{"--i":`${service.delay}`}} className="service-item">
        <div className="service-icon-div">
            <img src={service.icon} alt="" />
        </div>
        <h5 className="service-item-header">{service.title}</h5>
        <p className="service-item-blurb">{service.blurb}</p>
    </li>
  )
}

export default ServiceItem