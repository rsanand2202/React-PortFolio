import React from 'react'
import "./intro.css"
import Avatar from "../../img/av.png"


const Intro = () => {
  return (
    <div className="intro">
      <div className= "iLeft">
        
          <div className="iLeft-wrapper">
        <h2 className="iIntro">Hello, My name is</h2>
        <h1 className="iName">Richa Anand</h1>
        <div className="iTitle">
                    <div className="iTitle-wrapper">
                    <div className="iTitle-item">Web Developer</div>
                    <div className="iTitle-item">Front-end Developer</div>
                    <div className="iTitle-item">Back-end Developer</div>
                    <div className="iTitle-item">Full Stack Developer</div>
                    <div className="iTitle-item">JS Developer</div>
                     
                </div>
                
                </div>
                   <p className="iDesc">
                       I am Web Developer. This is my 1st project for React Portfolio.
                       </p> 
            </div>
            
      </div>
      <div className= "iRight ">
          <div className="iBg"></div>
          <img src={Avatar} alt="" className="iImg" />

      </div>

    </div>
  )
}

export default Intro

