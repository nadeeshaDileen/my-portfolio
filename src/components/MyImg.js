import React from 'react'
import "./MyImgStyles.css";
import Img1 from "../assets/img1.jpg"

import { Link } from 'react-router-dom';

function myimg() {
  return (
    <div className="my">
      <div className="mask">
        <img className="intro-img"
          src={Img1} alt="MyImg" />
      </div>
      <div className="content">
        <p>Hi, I'm Undergraduate.</p>
        <h1>Software Enginear</h1>
        <div>
          <Link to="/project" className="button">Project</Link>
          <Link to="/contact" className="button">Contact</Link>

        </div>

      </div>

    </div>
  );
} 

export default myimg