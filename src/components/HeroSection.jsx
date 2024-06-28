import React from 'react'
import "./HeroSection.css"

import { data,Social_media_links } from '../Data/userData'


const HeroSection = () => {
  return (
    <div id='home' className="herosection-container">
      <div className='Hero-container'>
      <div className="hero-content">
        <h3>Hello 👋!</h3>
        <h4 className='hero-content-header'>
        <span>I'm</span> {data.Name}</h4>
        <p>I'm a {data.Domain}<br/></p>
          <button className='contact-btn special' onClick={()=>window.open("#contactme",'_parent')}>Contact Me</button>
          <div className="social-media-links">
          {Social_media_links.map((links)=>(
            <a target='__blank' key={links.ID} href={links.link_address}><img src={links.Img_link} alt={links.name} /></a>  
          ))}
          </div>
        
      </div>
    </div>
    </div>
  )
}

export default HeroSection
