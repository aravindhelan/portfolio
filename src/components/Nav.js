import React from "react";
import "../css/Nav.css";
// import About from "./About";
// import Contact from "./Contact";
// import Skills from "./Skills";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";



function Nav() {
      return(
        <div className="pro">
             <div className="navbar">
             <h4>Portfolio</h4>
              <div className="categories">
                <Link to="/" style={{ textDecoration: "none"}}><p>Home</p></Link>
                <Link to="/about" style={{ textDecoration: "none"}}><p>About</p></Link>
                <Link to="/skills" style={{ textDecoration: "none"}}><p>Skills</p></Link>
                <Link to="/contact" style={{ textDecoration: "none"}}><p>Contact</p></Link>
              </div>   
            </div>
        </div>
      );  
}


export default Nav;