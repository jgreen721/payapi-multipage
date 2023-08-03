import React from 'react'
import "./FormInput.css";

const FormInput = ({field,toggleErrorOnKeyDown,delay}) => {
  return (
    <div style={{"--i":`${delay/5}s`}} className="form-div">
        {!field.isTextArea 
        ? <input onKeyDown={()=>toggleErrorOnKeyDown(field.serialize)}  autoFocus ={field.serialize == "name" ? true : false} type="text" className={field.hasError ? "contact-form-input error-input" : "contact-form-input focus" } placeholder={field.category} name={field.category} autoComplete="off" />
        : <textarea onKeyDown={()=>toggleErrorOnKeyDown(field.serialize)}  type="text" className={field.hasError ? "contact-textarea error-input" : "contact-textarea focus"} placeholder={field.category} name={field.category} autoComplete="off" />
}
<small className={field.hasError ? "error show-error main-font" : "error"}>This field can't be empty</small>
    </div>
  )
}

export default FormInput