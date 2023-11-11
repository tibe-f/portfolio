import React from 'react'
import './contact.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faLinkedin} from '@fortawesome/free-brands-svg-icons' 
import { faGithub} from '@fortawesome/free-brands-svg-icons' 

const Contact = () => {
  return (
    <section id="contact">
        <h1 className="contactMeTitle">Contact Me</h1>
         <span className="contactDesc">Please fill out the form to discus any word opportunities</span>
         <form className="contactForm">
          <input type="text" className='name' placeholder='Your Name'/>
          <input type="email" className='email' placeholder='Your Email' />
          <textarea name="message" className='msg' placeholder='Your Message' rows="4"></textarea>
          <button type='submit' className='contactbtn' value='send' >Submit</button>
         </form>
         <a href=""><FontAwesomeIcon className='Icon' icon={faGithub} /></a>
         <a href=""><FontAwesomeIcon className='Icon' icon={faLinkedin} /></a>
    </section>
  )
}

export default Contact