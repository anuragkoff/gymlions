import React from 'react'
import './Pricing.css'

export default function Pricing() {
  return (
    <div className='Pricing'>
        <h1 className='priceHead'>Pricing</h1>
        <div className="pricing-section">
      <div className="pricing-card">
        <h3>Basic</h3>
        <p className="price">₹1099/month</p>
        <ul>
          <li>Group Fitness</li>
          <li>Zumba Classes</li>
        </ul>
        <button>Subscribe</button>
      </div>
      <div className="pricing-card highlighted">
        <h3>Pro</h3>
        <p className="price">₹2099/month</p>
        <ul>
          <li>Includes Basic</li>
          <li>Nutrition Advice</li>
          <li>Post Workout Support</li>
        </ul>
        <button>Subscribe</button>
      </div>
      <div className="pricing-card">
        <h3>Enterprise</h3>
        <p className="price">₹3499/month</p>
        <ul>
          <li>Includes Pro</li>
          <li>Personal Training</li>
          <li>24/7 Support</li>
        </ul>
        <button>Subscribe</button>
      </div>
    </div>
    </div>
  )
}
