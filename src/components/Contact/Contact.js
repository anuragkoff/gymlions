import React from 'react'
import './Contact.css'
import MapComponent from './MapComponent'
// import { Alert } from 'react-bootstrap'

export default function Contact() {
  return (
    <div>
        <div className="contact-us">
          <div className="contact-container">
            <h2>Contact Us</h2>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      <MapComponent lat={27.212655703009098} lng={75.70030686940399} />
    </div>
  )
}
