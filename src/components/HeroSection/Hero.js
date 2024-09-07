import React from 'react'
import { Link } from 'react-router-dom';

import './Hero.css';
import image1 from './hero.jpg'
import Login from '../LoginPage/Login';

export default function Hero() {

  return (
    <div>
        <img style={{height:'90vh', width:'100%'}} src={image1} className='d-block w-100 hero-image' alt="slide1" />
          <div class="hero-text">
          <h1>Quick Start Your Fitness Journey</h1>
          <p>Join a gym community that cares about you. We help you to get your dream physique.</p>
          
          </div>
    </div>
  )
}
