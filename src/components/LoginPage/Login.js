import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Login.css'
import Validation from './LoginValidation';

export default function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({});


  const handleInput = (event) =>{
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    setErrors(Validation(values));
  }
  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Login</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label htmlFor="email">Email <span className="required">*</span></label>
            <input onChange={handleInput} type="email" id="email" placeholder='Enter email' name="email" required />
            {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password <span className="required">*</span></label>
            <input onChange={handleInput} type="password" id="password" placeholder='Enter Password' name="password" required />
            {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>
          
          <button style={{width:'100%'}} type="submit">Login</button>
        </form>
        <Link to={'/signup'}>
        <button className="toggle-button">
          Don\'t have an account? Sign Up
        </button></Link>
      </div>
    </div>
  )
}
