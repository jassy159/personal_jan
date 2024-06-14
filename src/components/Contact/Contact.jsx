import React from 'react'
import './Contact.css'
import { ToastContainer, toast, Bounce } from "react-toastify";

const Contact = () => {
    
  const datanotadded = () => {
    toast.error('Data not added !!!', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      
      theme: "dark",
      transition: Bounce,
      });
    console.log("Toasted");
  };
  
  return (
    <div>
        <h1 className='Contact-header'>Contact</h1>
        <div className="Contactform-container">
        <input type="text" className="Input" placeholder='Name'  />
        <input type="text" className="Input" placeholder='Email'/>
        <textarea name="" className="Textarea" placeholder='Talk to Me' id=""></textarea>
        
        <button className='btn-send' onClick={datanotadded}>Send</button>
        </div> 
        <ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"

/>
    </div>
  )
}

export default Contact