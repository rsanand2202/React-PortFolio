import React from 'react';
import "./modes.css"
import Shine from "../../img/sun.jpeg"
import Night from "../../img/moon.jpeg"
const modes = () => {
  return (
    <div className="m">
      <img src={Shine} alt="" className="m-icon"/>
      <img src={Night} alt="" className="m-icon"/>
      {/* <div
        className="-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div> */}
    </div>
  )
}

export default modes
