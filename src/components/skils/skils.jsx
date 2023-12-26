import React from 'react'
import './skils.css'
import uxuipng from '../../img/uxui.png'
import webpng from '../../img/tagpng.png'
import gxpng from '../../img/gxpng.png'

const Skills = () => {
  return (
    <section id="skills">
      <span className="skilTitle">What I do</span>
      <span className="skilDesc">I am a skilled and passinate web designer and graphics desinger with the creativitie and experience in creating visually appealing and user-friendly website. i have a strong understanding of design and a keen eye for detail. i am a proficient in HTML, CSS and JavaScript, as well as design sofware such as Adobe Photoshop and Illustrator</span>

      <div className="skillBars">
        <div className="skillBar">
          <img src={uxuipng} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Development</h2>
            <p>Produce beautiful UI designs. </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={webpng} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Design</h2>
            <p>produce web designs that will increase your business 200%.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={gxpng} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Graphics Design</h2>
            <p>Create unique designs(Logo, brouchure, busines-card, etc)</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Skills