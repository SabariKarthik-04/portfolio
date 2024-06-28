import React, { useState } from 'react'
import logo from "../assets/logo.jpg"
import "./Navbar.css"

export const navbar_items = {
    logo_link : logo,
    Name : "Sabari Karthik S"
}
const Navbar = () => {
    const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className='container'>
        <nav className='navbar'>
        <div className="navbar-logo" onClick={()=>window.open("/","_parent")} role='link'>
            <img src={navbar_items.logo_link} alt={navbar_items.Name}/>
            <h4>{navbar_items.Name}</h4>
        </div>
        <div className="menu" onClick={()=>{
            setMenuOpen(!menuOpen)
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className="navbar-items">
            <ul className={`navbar-list ${menuOpen ? "open":""}`}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>
        </div>
        <div className="navbar-contactme nav-btn">
            <button onClick={()=>window.open("#contactme",'_parent')} className='contact-btn'>Contact Me</button>
        </div> 
        </nav>
   </div>
  )
}

export default Navbar
