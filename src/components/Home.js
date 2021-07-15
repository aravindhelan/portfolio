import React from "react";
import ReactDom from "react-dom";
import "../css/Home.css";
import logo from "../asserts/profile.jpg"
import tick from "../asserts/Tick.jpg"
import program from "../asserts/programmer.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faFacebook} from "@fortawesome/free-brands-svg-icons";
import { faCheckCircle, faCode, faUsers, faHeart} from "@fortawesome/free-solid-svg-icons";


function Home(){
    return(
        <div class="Home">
            <div className="container">
                <div className="header">
                  <link rel="preconnect" href="https://fonts.googleapis.com"/>
                  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,600;1,600;1,900&family=Ubuntu:ital,wght@0,500;1,400&display=swap" rel="stylesheet"/>
                </div> 
                <div className="item1">
                    <h1>Hey. I'm Aravindh</h1>
                    <p>I am a creative front-end Developer from Chennai,India.I Create Custom Websites to help Business do Better</p>
                    <FontAwesomeIcon icon={faCode} size="2x" className="item1-icon" />
                </div>  
                <div className="item2">
                    <img src={logo} className="my-image"></img>
                </div>
            </div> 
            <div className="skills">
                <div className="skills-sec">
                    <FontAwesomeIcon icon={faCheckCircle} size="5x" style={{color:"red"}} className="icon" />
                    <h5>Easy to contact</h5>
                </div>
                <div className="skills-sec">
                    <FontAwesomeIcon icon={faUsers} size="5x" style={{color:"red"}} className="icon" />
                    <h5>Elite Clientele</h5>
                </div>
                <div className="skills-sec">
                    <FontAwesomeIcon icon={faHeart} size="5x" style={{color:"red"}} className="icon" />
                    <h5>Ready to Work</h5>
                </div>
            </div>
        </div>
    );
}


export default Home;