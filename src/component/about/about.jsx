import React from 'react';
import "./about.css"
import Apic from "../../img/Mypic.jpg"

const about = () => {
  return (
    <div className="about">
      <div className="aLeft">
          <div className="aCard bg">

          </div>
          <div className="aCard">
        <img src= {Apic} alt="" />
              
          </div>
      </div>
      <div className="aRight">
          <h1 className="aTitle">About Me</h1>
          <p className="aSub">Richa Anand</p>
          <p className="aDesc">I am from Orlando. with experience in accounting for 4 year and in management 2years. 
                                i completed my college in Mumbai & Full stack bootcamp from UCF. I love dogs and The dog in My hand is Shibu the Shiba Inu.</p>
        <div className="aAwards"> </div> 
      </div>
    </div>
  )
}

export default about
