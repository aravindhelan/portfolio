import React from "react";
import "../css/About.css";
import picture from "../asserts/About.jpg";


function About() {
    return(
        <div className="About">
            <div className="grid-container">
                <div className="place1">
                    <h1>Who Am I</h1>
                    <p>I'm Aravindh a ui/ux developer currenly pursing B.E from Rajalakshmi Institute of Technology. I did my Schooling in Arasunagar Matriculation higher School.I have a great interest in web development currently doing my full stack development internship from Vugha Technological Solutions.</p>
                </div>
                <div className="place2">
                    <img src={picture} className="photo"></img>
                </div>
                <div className="place3">
                    <ul>
                        <li><strong>Name:</strong>Aravindh</li>
                        <li><strong>Age:</strong>21</li>
                        <li><strong>Date of Birth:</strong>01/12/1999</li>
                        <li><strong>Qualification:</strong>B.E</li>
                    </ul>
                </div>
                <div className="place4">
                    <ul>
                        <li><strong>Emailid:</strong>aravindhelangovan696@gmail.com</li>
                        <li><strong>City:</strong>Chennai</li>
                        <li><strong>PhoneNo:</strong>8610192362</li>
                    </ul>
                </div>
                
            </div>
        </div>
    );
}



export default About;