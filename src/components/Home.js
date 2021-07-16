import React from "react";
import ReactDom from "react-dom";
import "../css/Home.css";
import picture from "../asserts/About.jpg";
import logo from "../asserts/profile.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCode, faUsers, faHeart} from "@fortawesome/free-solid-svg-icons";
import { faJsSquare, faPython, faCss3Alt, faHtml5, faJava, faBootstrap} from "@fortawesome/free-brands-svg-icons";


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
            <div className="goods">
                <div className="goods-sec">
                    <FontAwesomeIcon icon={faCheckCircle} size="5x" style={{color:"#7DEDFF"}} className="icon" />
                    <h5>Easy to contact</h5>
                </div>
                <div className="goods-sec">
                    <FontAwesomeIcon icon={faUsers} size="5x" style={{color:"#7DEDFF"}} className="icon" />
                    <h5>Elite Clientele</h5>
                </div>
                <div className="goods-sec">
                    <FontAwesomeIcon icon={faHeart} size="5x" style={{color:"#7DEDFF"}} className="icon" />
                    <h5>Ready to Work</h5>
                </div>
            </div>
            <div className="About" id="About">
                <div className="grid-container">
                    <div className="myself">
                      <h1>Who Am I</h1>
                      <p>I'm Aravindh a ui/ux developer currenly pursing B.E from Rajalakshmi Institute of Technology. I did my Schooling in Arasunagar Matriculation higher School.I have a great interest in web development currently doing my full stack development internship from Vugha Technological Solutions.</p>
                    </div>
                    <div className="bio-data">
                        <div className="place1">
                            <ul>
                                <li><strong>Name:</strong>Aravindh</li>
                                <li><strong>Age:</strong>21</li>
                                <li><strong>Date of Birth:</strong>01/12/1999</li>
                                <li><strong>Qualification:</strong>B.E</li>
                            </ul>
                        </div>
                        <div className="place2">
                            <ul>
                                <li><strong>Emailid:</strong>aravindhelangovan696@gmail.com</li>
                                <li><strong>City:</strong>Chennai</li>
                                <li><strong>PhoneNo:</strong>8610192362</li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="place2">
                        <img src={picture} className="photo"></img>
                </div>    
            </div>
            <div className="skills" id="Skills">
                <div className="header">
                    <h1>My Skills</h1>
                </div>
                <div className="contain">
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="img">
                                <FontAwesomeIcon icon={faHtml5} size="5x" style={{color:"#7DEDFF"}} className="icon" />
                            </div>
                            <h3>HTML</h3>
                        </div>
                        <p>lorem</p>
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="img">
                                <FontAwesomeIcon icon={faCss3Alt} size="5x" style={{color:"#7DEDFF"}} className="icon" />
                            </div>
                            <h3>CSS</h3>
                        </div>
                        <p>lorem</p>
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="img">
                                <FontAwesomeIcon icon={faJsSquare} size="5x" style={{color:"#7DEDFF"}} className="icon" />
                            </div>
                            <h3>JavaScript</h3>
                        </div>
                        <p>lorem</p>
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="img">
                                <FontAwesomeIcon icon={faJava} size="5x" style={{color:"#7DEDFF"}} className="icon" />
                            </div>
                            <h3>Java</h3>
                        </div>
                        <p>lorem</p>
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="img">
                                <FontAwesomeIcon icon={faPython} size="5x" style={{color:"#7DEDFF"}} className="icon" />
                            </div>
                            <h3>Phython</h3>
                        </div>
                        <p>lorem</p>
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="img">
                                 <FontAwesomeIcon icon={faBootstrap} size="5x" style={{color:"#7DEDFF"}} className="icon" />
                            </div>
                            <h3>BootStrap</h3>
                        </div>
                        <p>lorem</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Home;