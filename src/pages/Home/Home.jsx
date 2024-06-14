import React from 'react'
import { useEffect } from 'react'
import './Home.css'
import Hero from '../../components/Hero/Hero'
import Project from '../../components/Projects/Project'
import Contact from '../../components/Contact/Contact'

import { ToastContainer, toast,  } from "react-toastify";


const Home = () => {
  useEffect(()=>{
        toast.warn('Backend Is Yet to Be Deployed..!!!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          
          theme: "dark",
          containerId:'datawarning'
          
          });
      console.log("Toastedddddddddddddfs");
    }
  
      ,[]
    )
  return (
    <>

    <Hero/>
    <Project/>
    <Contact/>
    <footer>
     <p> ************</p>
     <ToastContainer containerId='datawarning'/>
    </footer>
    </>
  )
}

export default Home