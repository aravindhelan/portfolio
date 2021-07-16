import React from "react";
import "../css/Nav.css";
// import About from "./About";
// import Contact from "./Contact";
// import Skills from "./Skills";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link ,animateScroll as Scroll} from "react-scroll";
// import { Link } from "react-router-dom";



function Nav() {
      return(
        <div className="pro">
            <div className="navbar">
              <h4>Portfolio</h4>
              <div className="categories">
                <Link activeClass="active" to="About" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">About</Link>
                <Link activeClass="active" to="Skills" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">Skills</Link>
                <Link activeClass="active" to="Contact" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">Contact</Link>
              </div>
            </div>
        </div>
      );  
}


export default Nav;