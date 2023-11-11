import React from "react";
import './navbar.css'
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'

const Navbar = ()=>{
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

<a href="#"><span className="logo"> Tibe.F</span></a>
            <div className="desktopMenu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="menuitem">Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-70} className="menuitem">About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} className="menuitem">Portfolio</Link>
            </div>
        </nav>
    )
}

export default Navbar