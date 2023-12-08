import './contact.css';
import React, { useEffect, useRef, useState } from 'react';

const Contact = () => {
  return (
    <section id='contact'>
      <div className='container contact__container'>
        <h2>Start A Project</h2>
        <div className='formContainer'>
          <form action='https://formspree.io/f/xaygreyo' method='POST'>
            <label>
              Name<span>*</span>
            </label>
            <input type='text' name='name' required />
            <label>
              Email<span>*</span>
            </label>
            <input type='email' name='email' required />
            <label>
              Project Title <span>*</span>
            </label>
            <input type='text' name='project-title' required />
            <label>
              Project Details<span>*</span>
            </label>
            <textarea required name='project-details' rows='8'></textarea>
            <button type='submit' className='btn'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
