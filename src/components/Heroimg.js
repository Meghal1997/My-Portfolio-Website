import "./HeroimgStyles.css";
import React from 'react';
import appbg from "../assets/appbg.jpg";
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={appbg} alt="appbgimg"/>
        </div>
        <div className="content">
            <h1>HI, I'M Meghal.</h1>
            <h1>A Curious Web Developer.</h1>
            <p>I'm probably the most passionate developer you will ever get to work with. If you need a great roject that needs some amazing skills, I'm your guy</p><br></br>
            <Link to="/project" className="btn">Projects</Link>
        <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
    </div>
  )
}

export default Heroimg