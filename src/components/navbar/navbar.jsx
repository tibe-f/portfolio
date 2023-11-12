import React, { useState } from "react";
import './navbar.css'
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faAddressBook , faBars} from '@fortawesome/free-solid-svg-icons'

const Navbar = ()=>{
    const [showMenu, setShowMenu] = useState(false)
    return(
        <nav className="navbar">
            <a href="#"><span className="logo"> Tibe.F</span></a>
            <div className="desktopMenu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="menuitem">Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-70} className="menuitem">About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} className="menuitem">Portfolio</Link>
            </div>
            <button onClick={()=>{
                document.getElementById('contact').scrollIntoView({behavior:'smooth'})
            }} className="contactBtn"><FontAwesomeIcon icon={faAddressBook} /> Contact Me</button>
            <button className="mobMenu" onClick={()=>{setShowMenu(!showMenu)}}><FontAwesomeIcon className="mobMenu" icon={faBars} /></button>
            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>{setShowMenu(false)}} >Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-70} duration={500} className="listItem" onClick={()=>{setShowMenu(false)}}>About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>{setShowMenu(false)}}>Portfolio</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>{setShowMenu(false)}}>Contact</Link>
            </div>
        </nav>
    )
}
 
export default Navbar