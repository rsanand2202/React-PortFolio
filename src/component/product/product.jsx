import React from 'react'
import "./product.css"

const product = ({img,link}) => {
  return (
    <div className="project">
      <div className="pBrowser">
        <div className="pCircle"></div>
        <div className="pCircle"></div>
        <div className="pCircle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
  )
}

export default product;
