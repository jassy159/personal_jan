import React from "react";
import "./Projects.css";

import { ToastContainer, toast, Bounce } from "react-toastify";
//import components
import Cards from "./Cards/Cards";



//import Assets
import project_img from "../../assets/Images/blank.png";
const Project = () => {
  const Githubforward = () =>{
    window.location.assign("https://github.com/jassy159")
  }
  const Card_details = [
    {
      img: project_img,
      name: "Sample Project",
      description: "Project created for visualizing./",
      time: "25/02/2022",
    },
    {
      img: project_img,
      name: "Sample Project",
      description: "Project created for visualizing./",
      time: "25/02/2022",
    },
    {
      img: project_img,
      name: "Sample Project",
      description: "Project created for visualizing./",
      time: "25/02/2022",
    },
    {
      img: project_img,
      name: "Sample Project",
      description: "Project created for visualizing./",
      time: "25/02/2022",
    },
    {
      img: project_img,
      name: "Sample Project",
      description: "Project asdfasated for visualizing./",
      time: "25/02/2022",
    },
    {
      img: project_img,
      name: "Sample Project",
      description: "Project created for visualizing./",
      time: "25/02/2022",
    },
  ];
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
    <div className="project-div">
      <p className="project-header">Projects</p>
      <div className="cards-div">
        {Card_details.map((card, index) => (
          <Cards
            key={index}
            img={card.img}
            name={card.name}
            datanotadded={datanotadded}
            description={card.description}
            time={card.time}
          />
        ))}
      </div>
      <a href="">
        <p className="Github-forward" onClick={Githubforward}>
          VISIT GITHUB FOR MORE.....
        </p>
      </a>
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
  );
};

export default Project;
