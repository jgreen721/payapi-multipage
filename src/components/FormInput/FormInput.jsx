import React from 'react'
import "./FormInput.css";

const FormInput = ({category,isTextArea}) => {
  return (
    <div className="form-div">
        {!isTextArea 
        ? <input type="text" className="contact-form-input" placeholder={category} name={category} autoComplete="off" />
        : <textarea type="text" className="contact-textarea" placeholder={category} name={category} autoComplete="off" />
}
    </div>
  )
}

export default FormInput