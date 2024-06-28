import React from 'react'
import { about } from '../Data/userData'
import "./About.css"

const About = () => {
  return (
    <div id='about' className='About-container'>
        <div className='About-content'>
            <h3>About</h3>
            <p dangerouslySetInnerHTML={{__html:about.about}}></p>
        </div>
    </div>
  )
}
export default About
