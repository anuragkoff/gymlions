import React from 'react'

import './About.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import girl from './girl.jpg'

export default function About() {
  return (
    <div className='aboutAll'>
      <Row>
        <Col sm={6}>
          <img className='girlImg' src={girl} alt="Girl" />
        </Col>
        <Col sm={6}>
          <h2 className='wWA'>About Us</h2>
          <p className='aboutDesc'>Welcome to our gym in Bengaluru, KA. We aim to make fitness easy and accessible for everyone. Our team uses React to create a responsive website that fits your needs.</p>
          <p className='aboutDesc'>Whether you're a beginner or a fitness enthusiast, we're here to help you reach your goals. Join us and start your fitness journey today!</p>
        </Col>
      </Row>
    </div>
  )
}
