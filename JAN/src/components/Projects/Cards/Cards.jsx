import React from 'react'

const Cards = ({name,img,date,description}) => {
  return (
    <div className="card-container">
      <div className="card-img-div">
      <img src={img} alt="" className="card-img" /></div>
      <div className="text-container">
        <p className="card-name">{name}</p>
        <p className="card-description">{description}</p>
        <p className="card-date">{date}</p>
        <button className='card-btn'>Read More</button>
      </div>
    </div>
  )
}

export default Cards