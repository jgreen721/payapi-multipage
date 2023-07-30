import React, {useRef} from 'react'
import {personalFinancesIcon,bankingCoverageIcon,consumerPaymentsIcon} from "../../../../const"
import ServiceItem from './components/ServiceItem'
import { useObserver } from '../../../../hooks/useObserver'
import "./Services.css"

const Services = () => {
    const services =[
        {id:1,title:"Personal Finances",delay:".3s",icon:personalFinancesIcon,blurb:"Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account."},
        {id:2,title:"Banking & Coverage",delay:".6s",icon:bankingCoverageIcon,blurb:"With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts."},
        {id:3,title:"Consumer Payments",delay:".9s",icon:consumerPaymentsIcon,blurb:"It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account."},
    ]
    const servicesRef = useRef();
    useObserver(servicesRef,"scale-item")
  return (
    <section ref={servicesRef} className="services-section">
        <ul className="services-list">
            {services.map(s=>(
                <ServiceItem key={s.id} service={s} delay={s.id}/>
            ))}
        </ul>
    </section>
  )
}

export default Services