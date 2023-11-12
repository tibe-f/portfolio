import React, { useRef } from 'react'
import './contact.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faLinkedin} from '@fortawesome/free-brands-svg-icons' 
import { faGithub} from '@fortawesome/free-brands-svg-icons' 
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3xzndyo', 'template_e0ij5dp', form.current, '2xrfT14VL5JljuOT-')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
        <h1 className="contactMeTitle">Contact Me</h1>
         <span className="contactDesc">Please fill out the form to discus any word opportunities</span>
         <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" name='from_name' id='name' className='contactInput name' placeholder='Your Name'/>
          <input type="email" name='your_email' id='email' className='contactInput email' placeholder='Your Email' />
          <textarea name="message" className='contactInput msg' placeholder='Your Message' rows="4"></textarea>
          <button type='submit' className='contactbtn' value='send'>Submit</button>
         </form>
         <a href=""><FontAwesomeIcon className='Icon' icon={faGithub} /></a>
         <a href=""><FontAwesomeIcon className='Icon' icon={faLinkedin} /></a>
    </section>
  )
}

export default Contact