import React, { useRef } from 'react'
import "./ContactForm.css"
import  EmailJS  from '@emailjs/browser'

const ConatctForm = () => {
  const form = useRef()
  const handleSubmit=(e)=>{
    e.preventDefault();
    EmailJS.sendForm('service_b9xt73p','template_nyx4nwg',form.current,{
      publicKey: 'V5CWHyCdJNZXJWj0g',
    }).then(
      () => {
        console.log('SUCCESS!');
        e.target.reset();
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
  }
  return (
    <div id='contactme' className='contactform-section-container'>
        <div className='contactform-container'>
            <h3>Contact Form</h3>
            <form ref={form} className="contactForm" onSubmit={handleSubmit}>
                <label htmlFor="name">Name : </label>
                <input type="text" name='to_name' id='name' placeholder='Name'/>
                <label htmlFor="mail">Mail ID: </label>
                <input type="text" id='mail' name='to_mail' placeholder='Email'/>
                <label htmlFor="query">Query : </label>
                <textarea name="to_message" id="query" cols="30" rows="10" placeholder='Type Your Query'></textarea>
                <div className="btn-submit">
                  <button type='submit' id='contact-btn' className='contact-btn special'>SUBMIT</button>
                </div>
            </form>
        </div>
      
    </div>
  )
}

export default ConatctForm
