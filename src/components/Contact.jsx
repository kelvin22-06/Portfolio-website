import "../styles/Contact.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rafwpl9', 'template_ka9ndpo', form.current, 'XKSY3m3vxPOoCJxeS')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
        alert('Email Sent Successfully !');
      }, (error) => {
        console.log(error.text);
      }); 
  };

  return (
    <section className="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder='Your Name' name='user_name' />
          <input type="email" className="email" placeholder='Your Email' name='user_email'/>
          <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
          <button type='submit' value='send' className="submitbtn">Submit</button>
        </form>

      </div>
    </section>
  )
}

export default Contact