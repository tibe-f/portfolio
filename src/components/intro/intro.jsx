import React from 'react'
import './intro.css'
import bgtb from '../../img/bab.png'
import { Link } from 'react-scroll'

const Intro = () => {
  return (
    <section id="intro">
         <div className="introContent">
          <span className="hello">Hello, </span>
          <span className="intro-text">I'm <span className="intro-name">Tibe</span><br /> website developer</span> 
          <p className="intropara">I am skilled web developer and Graphics Designer <br /> with experience in creating visually appealing websites <br />and Graphics</p>
          <Link><button className="btn">Hire me</button></Link>
         </div>

         <div className="bgtbcont">
         <img src={bgtb} className='bgtb' alt="" />
         </div>
         
    </section>
  )
}

export default Intro