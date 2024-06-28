import React from 'react'
import "./Projects.css"
import { projects } from '../Data/userData'

const Projects = () => {
  return (
    <div className='projects-section-container' id='projects'>
              <h3>Projects</h3>
      <div className="projects-container">

        {projects.map((project)=>(
            <div className="project-box" key={project.ID}>
                <a target='__blank' href={project.Website_link}><img src={project.Img_link} alt={project.Title} />
                <h4>{project.Title}</h4>
                <p>{project.Description}</p></a>
            </div>
        ))}
        
        
      </div>
    </div>
  )
}

export default Projects
