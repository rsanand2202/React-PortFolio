import React from 'react'
import "./contact.css"
import Phone from "../../img/calling.png"
import Address from "../../img/address.png"
import email from "../../img/email.png"
import linkdin from "../../img/linkdin.png"
import github from "../../img/github.png"


const contact = () => {
  
  return (
    <div className="contact">
      <div className="cBg"></div>
      <div className="cWrapper">
          <div className="cLeft">
            <h1 className="cTitle">You want to hire me?</h1>
          <div className="cIntro">
              <div className="cInfo-item">
                  <img 
                  src={Phone} alt=""
                  className="c-icon" />
                  +1 407-913-6447
              </div>
              <div className="cInfo-item">
                  <img 
                  src={Address} alt=""
                  className="cIcon" />
                  Orlando,Florida
              </div>
              <div className="cInfo-item">
                  <img 
                  src= {email} alt=""
                  className="c-icon" />
                  richa.anand0222@gmail.com
              </div>
              <div className="cInfo-item">
                <a href="www.linkedin.com/in/richa-anand-112421173"><img src={linkdin}></img></a>
                <a href="https://github.com/rsanand2202/EmployeeTracker.git"><img src={github}></img></a>
              </div>
          </div>
          </div>
          <div className="cRight">
              <p className="cDesc">
                  <b>Feel free to reach out to me via Email. Let's get in touch.</b>
              </p>
              <form >
                  <input type="text" placeholder="Name" name="user_name" />
                  <input type="text" placeholder="Subject" name="user_subject" />
                  <input type="text" placeholder="Email" name="user_email" />
                  <textarea  rows="5" placeholder="Message" name="message"></textarea>
                  <button>Submit</button>
              </form>
          </div>
      </div>
    </div>
  )
}

export default contact
