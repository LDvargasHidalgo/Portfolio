import React from "react";
import Foto from "../../img/foto.jpg";
import Portfolio from "../../img/portfolio.png";
import About from "../../img/about.png";
import Contact from "../../img/contact.png";
import Home from "../../img/home.png";
import Logo from "../../img/logoFondoNegro.png"
import "../style/global.css";
import "../style/sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook} from  '@fortawesome/free-brands-svg-icons'


function sidebar() {
  return (
    <div>
    <nav>
    <label>Fullstack Developer</label>
  
    <ul>
          {/*   <li><a href="#"><img src={Logo} alt="" className="logo"/></a></li> */}
        </ul> <label for="menu" class="menu-bar"> 
        <FontAwesomeIcon icon={faFacebook}/>
         </label>
    </nav>
    <div className="side-menu">
      <center>
        <img src={Foto} alt="" />
        <h2>Laura Vargas</h2>
      </center>
      <br />
      <div className="icons">
      <a href="#"> <img src={Home} alt=""  className="icon"/><span>Home</span>  </a>
      <a href="#"> <img src={About} alt=""  className="icon"/><span>About</span>  </a>
      <a href="#"> <img src={Portfolio} alt=""  className="icon"/><span>Portfolio</span>  </a>
      <a href="#"> <img src={Contact} alt=""  className="icon"/><span>Contact</span>  </a>
    </div>
    </div>
     </div>
  );
}

export default sidebar;
