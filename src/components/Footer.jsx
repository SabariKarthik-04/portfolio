import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer-container'>
        <footer className='footer'>
            <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />Copyright and Designed by SK
        </footer>
    </div>
  )
}

export default Footer
