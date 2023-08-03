import React, {useState, useRef, useLayoutEffect} from 'react'
import { Ready,FormInput, Btn } from '../../components'
import {gsap} from "gsap";
import emailjs from "emailjs-com";
import "./Contact.css"
import {teslaDarkIcon,microsoftDarkIcon,hewlettDarkIcon,oracleDarkIcon,googleDarkIcon,nvidiaDarkIcon} from "../../const"
import AssociateItem from './components/AssociateItem';


const Contact = () => {
  const [subscribe, setSubscribe] = useState(false)
  const associates = [
    {id:1,icon:teslaDarkIcon,company:"Tesla"},
    {id:2,icon:microsoftDarkIcon,company:"Microsoft"},
    {id:3,icon:hewlettDarkIcon,company:"Hewlett"},
    {id:4,icon:oracleDarkIcon,company:"Oracle"},
    {id:5,icon:googleDarkIcon,company:"Google"},
    {id:6,icon:nvidiaDarkIcon,company:"Nvidia"},
  ]

  const [formFields,setFormFields] = useState(
    [
      {id:1,category:"Name",isTextArea:false,hasError:false, serialize:"name"},
      {id:2,category:"Email Address",isTextArea:false,hasError:false,serialize:"email"},
      {id:3,category:"Company Name",isTextArea:false,hasError:false,serialize:"company"},
      {id:4,category:"Title",isTextArea:false,hasError:false,serialize:"title"},
      {id:5,category:"Message",isTextArea:true,hasError:false,serialize:"message"},
    ]
  )

  const formRef = useRef();



  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("user submitted form --\n NEXT: validate form")
    // formRef.currentforEach(form=>{
    //   console.log(form)
    // })
    let formData = new FormData(formRef.current);
     let userInfo={
       name:formData.get("Name"),
       email:formData.get("Email Address"),
       company:formData.get("Company Name"),
       title:formData.get("Title"),
       message:formData.get("Message"),
     }
     console.log(userInfo)
     if(!validateUser(userInfo)){
       console.log("Error in form: validateUser() -- break out of function");
       return;
     }
     if(hasUsedEmail()){
       console.log("Error -- user has already signed up for service, no reason to accrue api costs on unnecessary email api service.");
       return;
     }

     
     handleEmail(userInfo)

     
  }


  function hasUsedEmail(){
    if(localStorage['hasEmailed']){
      console.log("user has 'received' email already.");
      return true;
    }
    return false;
  }

  function handleEmail(formData){
    console.log('handle Email fired!')

    const serviceID = 'service_rozru8a';
    const templateID = 'template_20wrm3t';
    const userID = "tcrTKSXuJg0Ubk8Ql";

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("Email sent successfully!", response);
        // Add any success message or action you want to take after successful email send
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        // Add any error handling or messages you want to show in case of failure
      });

  }


  function validateUser(user){
    let isValid = true
      for(let i in user){
        if(user[i] == ''){
          console.log("Invalid input at field of " + i)
          setFormFields((formFields)=>formFields.map(f=>f.serialize == i ? {...f,hasError:true} : f));
           isValid = false;
        }
      }

      return isValid
  }


  const toggleErrorOnKeyDown=(name)=>{
    setFormFields((formFields)=>formFields.map(f=>f.serialize == name ? {...f,hasError:false} : f));

  }
  return (
    <div className="page-view contact-view">
        <div className="pricing-top-bg-overlay">
            {/* <img className="pricing-top-bg-circles" src={bgPatternCircle}/> */}
            <div className="div-bg-circle"></div>
        </div>

        <div className="contact-view-content">
          <div className="contact-top-section">
            <div className="contact-column">
              <form ref={formRef} action="">
                {formFields.map((formField,i)=>(
                 <FormInput delay={i} toggleErrorOnKeyDown={toggleErrorOnKeyDown} key={formField.id} field={formField}/>
              
                ))}
                <div className="form-div checkbox-div">
                    <div onClick={()=>setSubscribe(!subscribe)} className={subscribe ? "checkbox checked" : "checkbox"}></div>
                  <p className="main-font light-blue">
                    Stay up-to-date with company announcements and updates to our API
                  </p>
                </div>
                <Btn handleSubmit={handleSubmit} className="btn transparent-dark-btn">Submit</Btn>
              </form>
            </div>
            <div className="contact-column">
              <h4 className="main-font h4-small dark-blue contact-associates-header">Join the thousands of innovators already building with us</h4>
              <ul className="contact-associates-list">
                {associates.map(a=>(
                <AssociateItem key={a.id} associateItem={a}/>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Ready/>

    </div>
  )
}

export default Contact