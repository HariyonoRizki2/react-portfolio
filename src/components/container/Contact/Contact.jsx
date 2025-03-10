import React from 'react';
import "./Contact.scss";
import { contacts } from '../../../Data';
import { socialIcons } from '../../../Data';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="container" id="contact">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}} 
        className="title"
      >
            <span>get in touch</span>
            <h1>Contact Me</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [-150,0], opacity: 1 }}
          transition={{duration: 1}}
          className='contact_left_container'>
          <h3>Just Say Hi</h3>
          <p className='contact_text'>Let's talk briefly about your project design with me!</p>
          {contacts.map(contact => {
            return (
              <div className='contact_left' key={contact.id}>
                <div className="icon">
                  {contact.icon}
                </div>
                <p>{ contact.infoText}</p>
              </div>
            )
          })}
          <div className="social_icons">
            {socialIcons.map((socialIcon, index) => {
            return (
              <div key={index} >
                {socialIcon}
              </div>
            )
          })}
          </div>
        </motion.div>
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [150,0], opacity: 1 }}
          transition={{duration: 1}}
          className="contact_right"
        
        >
          <h3>Get In Touch</h3>
          <form method="POST" action="https://formsubmit.co/nabilaputridwianjani526@gmail.com">
          <div className="row">
            <input type="text" name="Front Name" placeholder='Front Name' />
            <input type="text" name="Last Name" placeholder='Last Name'/>
          </div>
          <div className="row">
            <input type="text" name="WhatsApp" placeholder='Whatsapp' />
            <input type="email" name="Email Address" placeholder='Email Address' />
          </div>
          <div className="row">
            <textarea name="Messages" placeholder='Messages'></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{duration: 0.3}}
            className="btn"
            type="submit"
          >
           Send
          </motion.button>
         </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
