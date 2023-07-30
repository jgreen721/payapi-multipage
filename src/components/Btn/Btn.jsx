import React from 'react'
// import 

const Btn = ({className,children}) => {
  return (
    <button className={className}>
        {children}
    </button>
  )
}

export default Btn