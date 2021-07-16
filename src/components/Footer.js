import React from "react";
import "../css/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faFacebook} from "@fortawesome/free-brands-svg-icons";



function Footer() {
    return(
      <div className="pro" id="Contact">
         <div className="footer">
           <FontAwesomeIcon icon={faFacebook} size="2x" className="icons" />
           <FontAwesomeIcon icon={faTwitter} size="2x" className="icons" />
           <FontAwesomeIcon icon={faLinkedin} size="2x" className="icons" />
           <p>© Copyright 2021 Aravindh</p>
         </div>
      </div> 
    );
  }  
  


export default Footer;