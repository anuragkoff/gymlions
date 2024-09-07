import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import './Login.css'
import SignupValidation from './SignupValidation';
export default function Signup() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    cPassword: ''
  })

  const [errors, setErrors] = useState({});

  const handleInput = (event) =>{
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    setErrors(SignupValidation(values));
  }


  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          
            <div className="form-group">
              <label htmlFor="name">Name <span className="required">*</span></label>
              <input onChange={handleInput} type="text" id="name" placeholder='Enter name' name="name" required />
            </div>
          
          <div className="form-group">
            <label htmlFor="email">Email <span className="required">*</span></label>
            <input onChange={handleInput} type="email" id="email" placeholder='Enter email' name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password <span className="required">*</span></label>
            <input onChange={handleInput} type="password" id="password" placeholder='Enter Password' name="password" required />
          </div>
          
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm password <span className="required">*</span></label>
              <input onChange={handleInput} type="password" id="confirm-password" placeholder='Enter confirm password' name="cPassword" required />
              {errors.cPassword && <span className='text-danger'>{errors.cPassword}</span>}
            </div>
          
          <button style={{width:'100%'}} type="submit">Sign Up</button>
        </form>
        <Link to={'/login'}>
        <button className="toggle-button" >
          Already have an account? Login
        </button>
        </Link>
      </div>
    </div>
  )
}
