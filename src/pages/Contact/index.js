import React from 'react';
import {MdOutlineEmail} from 'react-icons/md'
import {BiMessageRoundedDetail} from 'react-icons/bi'
import {FaTwitter} from 'react-icons/fa'
import { useRef } from 'react';
// import emailjs from 'emailjs-com'
// import emailjs from '@emailjs-com'
import emailjs from '@emailjs/browser';
import './Contact.scss'


function Contact(props) {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_rf9l1js', 'template_mtypnya', form.current, 'xThaqrqqYCPi8tEht')
      e.target.reset()
        // .then((result) => {
        //     console.log(result.text);
        // }, (error) => {
        //     console.log(error.text);
        // });
       
    };
    return (
        <div className='contact'>
            <div className='contact-form'>
                <form ref={form} onSubmit={sendEmail}>
                    <h1>Contact Us</h1>
                    <p>Name</p>
                    <input className='form__input' type="text" name='name' placeholder='Your Full Name' required />
                    <p>Email</p>
                    <input className='form__input' type="email" name='email' placeholder='Email' required />
                    <p>Message</p>
                    <textarea name="message"  rows="7" placeholder='Message' required></textarea>
                    <button type='submit' className='button'>Send Message</button>
                    <h2>Our representative will get back to you within 12 hours</h2>
                </form>
            </div>
         </div>
    );
}

export default Contact;