import React, { useEffect, useState } from 'react'
import './works.css'
import web1 from '../../img/web1.png'
import web2 from '../../img/web2.png'
import img1 from '../../img/1.jpg'
import img2 from '../../img/2.jpg'
import img3 from '../../img/3.jpg'
import img4 from '../../img/4.jpg'
import img5 from '../../img/5.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faSearchPlus } from '@fortawesome/free-solid-svg-icons'

const Works = () => {
  const graphicsWorks = [
    {id: 10, img: `${img1}`},
    {id: 11, img: `${img2}`}, 
    {id: 12, img: `${img3}`},
    {id: 13, img: `${img4}`},
    {id: 14, img: `${img5}`}
  ]
  const [imgItem, setImgItem] =useState(graphicsWorks)
  const [visible, setVisible] =useState([])

  const handleZoom = (id) =>{

    const activeImg = imgItem.find(item => item.id === id)
    setVisible(activeImg)

    console.log(visible.img)


  }


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
              <a target='blank' href='https://github.com/tibe-f/github-profiles' className='code'><FontAwesomeIcon className='icon' icon={faCode} /> </a>
            </div>
           <img src={web1} alt="" className='workImg'/>
          </div> 
          <div className="work">
          <div className="moreInfo">
              <button className='zoom'><FontAwesomeIcon className='icon' icon={faSearchPlus} /></button> 
              <button className='code'><FontAwesomeIcon className='icon' icon={faCode} /> </button>
            </div>
           <img src={web2} alt="" className='workImg'/>
          </div> 
        </div>
        <button className="workbtn">show more</button>

        <div className="works graphics">
          <div>
          <h1>Grapics Designs</h1>
          </div>
          <div className="workList">
          {
            imgItem.map(item => (
              <div className="work" key={item.id}>
                <div className="moreInfo">
                    <button className="zoom" onClick={() => handleZoom(item.id)}>
                    <FontAwesomeIcon className='icon' icon={faSearchPlus} />
                    </button>
                  </div>
                  <img src={item.img} alt="" className='workImg' />
                
              </div>
            ))
          }
          { <div className={visible.id ? 'imgZoom active' : 'imgZoom'}>

            <span className='close' onClick={()=> setVisible('')}> X </span>
            <img src={visible.img} alt="" />
          </div> } 
          </div>
        </div>
        <button className="workbtn">show more</button>

    </section>
  )
}
/*imgItem.splice(0,4).map(item=>(
              <div className="work">
          <div className="moreInfo">
              <div className="imgZoom" ></div>
              <button className='zoom' ><FontAwesomeIcon className='icon' icon={faSearchPlus} /></button> 
            </div>
           <img src={item} alt="" className='workImg'/>
          </div> 
            )) */

export default Works