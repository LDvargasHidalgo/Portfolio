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
import {NavLink} from 'react-router-dom'


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

      <NavLink to="/"> <img src={Home} alt=""  className="icon"/><span>Home</span>  </NavLink>
      <NavLink to="about"> <img src={About} alt=""  className="icon"/><span>About</span>  </NavLink>
      <NavLink to="portfolio"> <img src={Portfolio} alt=""  className="icon"/><span>Portfolio</span>  </NavLink>
      <NavLink to="contact"> <img src={Contact} alt=""  className="icon"/><span>Contact</span>  </NavLink>
    </div>
    </div>
     </div>
  );
}

export default sidebar;
