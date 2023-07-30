import React from 'react'

const AssociateItem = ({icon}) => {
  return (
    <li className="associate-item">
<img className="associate-icon" src={icon.icon} alt="" />
    </li>
  )
}

export default AssociateItem