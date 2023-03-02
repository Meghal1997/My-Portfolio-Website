import "./AboutContentStyle.css";

import React from 'react'
import { Link } from "react-router-dom";
import reactimg from "../assets/reactimg.jpg"
import reactimg2 from "../assets/reactimg2.jpg"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who I am?</h1>
            <p>
                I am a React Front-End Developer. I create Responsive secure websites.
            </p>
            <Link to="/Contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={reactimg} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={reactimg2} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent