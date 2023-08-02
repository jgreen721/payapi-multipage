import React from 'react'
// import 

const Btn = ({className,children,handleSubmit}) => {
  return (
    <button onClick={handleSubmit} className={className}>
        {children}
    </button>
  )
}

export default Btn