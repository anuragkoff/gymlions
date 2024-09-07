import React from 'react'
import './Home.css'
// import Navbar from './components/Navbar'
import Hero from './components/HeroSection/Hero'
import Test from './components/Testimonials/Test'
import Footer from './components/Footer/Footer'

export default function Home() {
  return (
    <div>
        <Hero/>
        <Test/>
        <Footer/>
    </div>
  );
}
