import React from "react";
import "./Hero.css";
//icons
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

//import Images
import Avatar from '../../assets/Images/Avatar.png'

const Hero = () => {
  return (
    <div className="container-1  ">
      
      <div className="details">
        <p className="Name jomhuria-regular">JASSY MON</p>
        <p className="Position">Jr. Developer</p>
        <div className="container-social">

          <FaInstagram className="logo-social"/>
          <FaGithub className="logo-social"/>
          <FaLinkedin className="logo-social"/>
        </div>
        <p className="paragraph">
          Passionate about coding, I'm a junior developer looking to make a
          positive impact on software development projects.
        </p>
        <button className="continue">Continue</button>
      </div>
      
      <div className="Avatarimg-div">
        <img src={Avatar} alt="" />
      </div>
      
    </div>
  );
};

export default Hero;
