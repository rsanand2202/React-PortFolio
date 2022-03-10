import React from 'react'
import "./projectList.css"
import Project from "../project/project"
import { projects } from "../../data.js"


const projectList = () => {
  return (
    <div className="projectList">
      <div className="proTexts">
          <h1 className="proTitle">Some I learned In my BootCamp</h1>
          <p classname="proDesc">
              It was a greate experiance to learn and creativity in the BootCamp. I like all the project in this 12weeks. Learning something new was really good experiance to know and work in teams.please have a look to my work below.
          </p>
          </div> 
          <div className="proList">
        {projects.map((item) => (
          <Project key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
      
    </div> 
  ) 
}

export default projectList
