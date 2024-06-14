import React from 'react'
import './Projects.css'

//import components
import Cards from './Cards/Cards'

//import Assets
import project_img from '../../assets/Images/Project.png'
const Project = () => {

  const Card_details = [
    {
      img : project_img,
      name : "Sample Project",
      description : "Project created for visualizing./",
      time : "25/02/2022"
    },
    {
      img : project_img,
      name : "Sample Project",
      description : "Project created for visualizing./",
      time : "25/02/2022"
    },
    {
      img : project_img,
      name : "Sample Project",
      description : "Project created for visualizing./",
      time : "25/02/2022"
    },
    {
      img : project_img,
      name : "Sample Project",
      description : "Project created for visualizing./",
      time : "25/02/2022"
    }
    ,    {
      img : project_img,
      name : "Sample Project",
      description : "Project asdfasated for visualizing./",
      time : "25/02/2022"
    },
    {
      img : project_img,
      name : "Sample Project",
      description : "Project created for visualizing./",
      time : "25/02/2022"
    }
  ]


  return (
    <div className='project-div'>
        <p className="project-header jomhuria-regular">Projects</p>
        
        <div className="cards-div">
          {Card_details.map((card,index) =>(
            <Cards key={index} img={card.img} name={card.name} description={card.description} time={card.time}/>
          ))}
        </div>

    </div>
  )
}

export default Project