import React from "react";
import "./Hero.css";
//icons
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";

//import Images
import Avatar from '../../assets/Images/vecteezy_young-boy-face-illustration-design_9280388.svg'

const Hero = () => {
  const datanotadded = () => {
    toast.error('Data not added !!!', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
    console.log("Toasted");
  };
  const navigate = useNavigate()
  const Instagramforward = () =>{
    window.location.assign('https://www.instagram.com/___jassyyy___145?igsh=MXZ3NG9uanptdGptOA==')
  }
  const Githubforward = () =>{
    window.location.assign('https://github.com/jassy159')
  }
  const Linkedinforward = () =>{
    window.location.assign('https://www.linkedin.com/in/jassy-mon-365492271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')
  }
  return (
    <div className="container-1  ">
      
      <div className="details">
        <p className="Name rubik-font">JASSY MON</p>
        <p className="Position">Jr. Developer</p>
        <div className="container-social">

          <FaInstagram onClick={Instagramforward} className="logo-social"/>
          <FaGithub onClick={Githubforward} className="logo-social"/>
          <FaLinkedin onClick={Linkedinforward} className="logo-social"/>
        </div>
        <p className="paragraph">
          Passionate about coding, I'm a junior developer looking to make a
          positive impact on software development projects.
        </p>
        <button className="continue" onClick={datanotadded}>Continue</button>
      </div>
      
      <div className="Avatarimg-div">
        <img src={Avatar} alt="" />
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
theme="light"

/>
    </div>
  );
};

export default Hero;
