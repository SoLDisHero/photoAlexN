import { Link, NavLink } from "react-router-dom";
import "./sidebar.scss";
import LogoAN from "../assets/images/logo_svg.png"
import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import EmailIcon from '@mui/icons-material/Email';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {ReactComponent as IconMail} from "../assets/images/chat.svg";

function Sidebar() {
  const [showIcon, setShowIcon] = useState(false);

  return (
    <div  className="navbar">
        <Link to="/" className="logo">
            <img src={LogoAN} alt="logoAlex"/>
        </Link>
          <nav className={!showIcon ? "hide-icon navItems" : "navItems"}>
            <div className="mobile-icon-close" 
            onClick={() => setShowIcon(!showIcon)} role="button" onKeyDown={() => setShowIcon(!showIcon)}>
              <CloseIcon style={{opacity: showIcon ? "1" : "0", transform: `scale(${showIcon ? 1 : 0})`, transition: "opacity 0.2s ease-in-out, transform 0.9s ease-in-out"}} className={!showIcon ? "hide-icon" : ""}/>
            </div>
            <NavLink exact="true" activeClassName="active" to="/">
              <HomeIcon />
            </NavLink>
            <NavLink exact="true" activeClassName="active" to="/work" className="work-link">
              <PhotoCameraIcon/>
            </NavLink>
            <NavLink exact="true" activeClassName="active" to="/contact" className="contact-link">
              <EmailIcon/>
            </NavLink>
          </nav>
        <ul className={!showIcon ? "hide-icon" : ""}>
          <li>
            <a href="https://www.facebook.com/alex.nikitsin" target="_blank" rel="noreferrer" className="social-facebook">
              <FacebookOutlinedIcon/>
            </a>
          </li>
          <li>
            <a href="mailto:nikitsin@gmail.com" target="_blank" rel="noreferrer" className="social-mail">
              <IconMail/>
            </a>
          </li>
        </ul>
        <div className="mobile-icon"
        onClick={() => setShowIcon(!showIcon)} role="button" onKeyDown={() => setShowIcon(!showIcon)}>
          <MenuIcon style={{opacity: showIcon ? "0" : "1"}}/>
        </div>
    </div>
  )
}

export default Sidebar