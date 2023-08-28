import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    
  <footer className="footer">
  <div className="container">

    <div className="footer-top section">

      <div className="footer-brand">

        <a href="/" className="logo">PremiumTCT</a>

        <p className="footer-text">
        Thank you for choosing PremiumTCT. Your trust in us drives our commitment to delivering excellence. Your cargo's journey matters to us - let's navigate it together
        </p>
      <p>Email: emailpremiumtct@gmail.com </p>
      
      </div>


      <ul className="footer-list">
        <li>
          <Link to={"/trackingno"} className="footer-link">Track Your Shipment</Link>
        </li>
      </ul>

    </div>

    <div className="footer-bottom">
      <p className="copyright">
        &copy; 2023 Premium Express. All Rights Reserved by PremiumTCT
      </p>
    </div>

  </div>
</footer>



  )
}
