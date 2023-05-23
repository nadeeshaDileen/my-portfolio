import "./WorkCardStyles.css"
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

import React from 'react'

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container"> 
        {WorkCardData.map((val, ind) =>{
            return(
                <WorkCard
                key={ind}
                title={val.title}
                year={val.year}
                text={val.text}
                view={val.view}
                />
            )
        }

        ) }

        </div>
        https://goodmockups.com/wp-content/uploads/2021/05/Free-Website-Presentation-Mockup-PSD.jpg
            https://images.template.net/wp-content/uploads/2017/02/24065157/Website-Presentation-Mockup1.jpg
    </div>
  )
}

export default Work