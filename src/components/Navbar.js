import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="header">
    <a href="/" className="logo">GymLions</a>
    <nav className="navbar">
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/pricing">Pricing</a>
        <a href="/contact">Contact</a>
        <Link to="/login">
        <button className='loginBtn'>Login / SignUp</button>
        </Link>
    </nav>
    </header>

  )
}
