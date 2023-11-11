import React from 'react'
import './works.css'
import bab from '../../img/IMG.png'
import tibe from '../../img/me.jpg'
import todo from '../../img/todo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faSearchPlus } from '@fortawesome/free-solid-svg-icons'

const Works = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">My Portfolio </h2>
        <span className="workdesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, natus fugiat. Cumque, officiis. Nisi, sequi!
        </span>
        <div className="works">
          <div className="work">
          <div className="moreInfo">
              <button className='zoom'><FontAwesomeIcon className='icon' icon={faSearchPlus} /></button> 
              <button className='code'><FontAwesomeIcon className='icon' icon={faCode} /> </button>
            </div>
           <img src={todo} alt="" className='workImg'/>
          </div> 
          <div className="work">
          <div className="moreInfo">
              <button className='zoom'><FontAwesomeIcon className='icon' icon={faSearchPlus} /></button> 
              <button className='code'><FontAwesomeIcon className='icon' icon={faCode} /> </button>
          </div>
           <img src={bab} alt="" className='workImg'/>
          </div> 
          <div className="work">
          <div className="moreInfo">
              <button className='zoom'><FontAwesomeIcon className='icon' icon={faSearchPlus} /></button> 
              <button className='code'><FontAwesomeIcon className='icon' icon={faCode} /> </button>
            </div>
           <img src={tibe} alt="" className='workImg'/>
          </div>
          <div className="work">
          <div className="moreInfo">
              <button className='zoom'><FontAwesomeIcon className='icon' icon={faSearchPlus} /></button> 
              <button className='code'><FontAwesomeIcon className='icon' icon={faCode} /> </button>
            </div>
           <img src={todo} alt="" className='workImg'/>
          </div> 
          <div className="work">
          <div className="moreInfo">
              <button className='zoom'><FontAwesomeIcon className='icon' icon={faSearchPlus} /></button> 
              <button className='code'><FontAwesomeIcon className='icon' icon={faCode} /> </button>
            </div>
           <img src={bab} alt="" className='workImg'/>
          </div> 
          <div className="work">
          <div className="moreInfo">
              <button className='zoom'><FontAwesomeIcon className='icon' icon={faSearchPlus} /></button> 
              <button className='code'><FontAwesomeIcon className='icon' icon={faCode} /> </button>
            </div>
           <img src={tibe} alt="" className='workImg'/>
          </div>

        </div>
        <button className="workbtn">show more</button>

    </section>
  )
}

export default Works