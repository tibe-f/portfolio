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
                <Link className="menuitem">Home</Link>
                <Link className="menuitem">About</Link>
                <Link className="menuitem">Portfolio</Link>
                <Link className="menuitem">Clients</Link>

            </div>
            <button className="contactBtn"><FontAwesomeIcon icon={faAddressBook} /> Contact Me</button>
        </nav>
    )
}

export default Navbar