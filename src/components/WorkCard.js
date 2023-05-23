import { NavLink } from "react-router-dom"
import "./WorkCardStyles.css"

import React from 'react'

const WorkCard = (props) => {
  return (
    <div className="project-card">
            <img src="https://mockuptree.com/wp-content/uploads/2020/01/website-mockup-psd.jpg" alt="project1"/>
            <h2 className="project-title">{props.title}</h2>
            <p>{props.year}</p>
            <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btns">
                    <NavLink to={props.view} className="button">View</NavLink>
                    <NavLink to="url.com" className="button">Source</NavLink>
                </div>
            </div>
            </div> 
  )
}

export default WorkCard