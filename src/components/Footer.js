import React from "react";
import "../css/Footer.css";
import twitter from "../asserts/twitter.png"
import insta from "../asserts/instagram.png"
import linke from "../asserts/linkedin.png"



function Footer() {
    return(
      <div className="pro">
         <div className="footer">
           <img src={insta} className="icons"></img>
           <img src={twitter} className="icons"></img>
           <img src={linke} className="icons"></img>
           <p>© Copyright 2021 Aravindh</p>
         </div>
      </div> 
    );
  }  
  


export default Footer;