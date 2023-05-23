import "./AboutContentStyle.css"

import React from 'react'
import { Link } from "react-router-dom"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>
            Im a react font-end developer. 
            I create responsive secure websites for my clients.
            </p>
            <Link to="/contact">
                <button className="button">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                <img className="img" src="https://s3.amazonaws.com/creativetim_bucket/products/581/original/vision-ui-dashboard-free-react.png?1641889248" alt="true"/>

                </div>
                <div className="img-stack bottom">
                <img className="img" src="https://s3.amazonaws.com/creativetim_bucket/products/581/original/vision-ui-dashboard-free-react.png?1641889248" alt="true"/>

                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent