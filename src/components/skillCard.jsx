import React from 'react'
import { skills } from '../Data/userData'
import "./skillcard.css"

const SkillCard = () => {
  return (
    <div id='skills' className='skillcard-section-container'>
      <h3>skills</h3>
      <div className="skillscard-container">
        
        <div className="skills">
      {skills.map((skill)=>(
        <div className='skill-container' key={skill.id}>
          <img src={skill.Img_link} alt={skill.skillName} />
          <p>{skill.skillName}</p>
        </div>
      ))}
      </div>
      </div>
  </div>
  )
}

export default SkillCard
