import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    
  <footer className="footer">
  <div className="container">

    <div className="footer-top section">

      <div className="footer-brand">

        <a href="#" className="logo">Courier Swift</a>

        <p className="footer-text">
          Many desktop publishing packages and web page editors now use are dolra Ipsum as their default.
        </p>
      <p>Email: emailcourierswift@gmail.com </p>
        {/* <ul className="social-list">

          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-youtube"></ion-icon>
            </a>
          </li>

        </ul> */}

      </div>

      <ul className="footer-list">

        <li>
          <p className="footer-list-title">Quick Links</p>
        </li>

        <li>
          <a href="#" className="footer-link">About</a>
        </li>

        <li>
          <a href="#" className="footer-link">Services</a>
        </li>

        <li>
          <a href="#" className="footer-link">Blog</a>
        </li>

        <li>
          <a href="#" className="footer-link">FAQ</a>
        </li>

        <li>
          <a href="#" className="footer-link">Contact Us</a>
        </li>

      </ul>

      <ul className="footer-list">

        <li>
          <p className="footer-list-title">Services</p>
        </li>

        <li>
          <a href="#" className="footer-link">Warehouse</a>
        </li>

        <li>
          <a href="#" className="footer-link">Air Freight</a>
        </li>

        <li>
          <a href="#" className="footer-link">Ocean Freight</a>
        </li>

        <li>
          <a href="#" className="footer-link">Road Freight</a>
        </li>

        <li>
          <a href="#" className="footer-link">Packaging</a>
        </li>

      </ul>

      <ul className="footer-list">

        <li>
          <p className="footer-list-title">Community</p>
        </li>

        <li>
          <a href="#" className="footer-link">Business Consulting</a>
        </li>

        <li>
          <a href="#" className="footer-link">Testimonials</a>
        </li>

        <li>
          <a href="/trackingno" className="footer-link">Track Your Shipment</a>
        </li>

        <li>
          <a href="#" className="footer-link">Privacy Policy</a>
        </li>

        <li>
          <a href="#" className="footer-link">Terms & Condition</a>
        </li>

      </ul>

    </div>

    <div className="footer-bottom">
      <p className="copyright">
        &copy; 2023 Premium Express. All Rights Reserved by <a href="#" className="copyright-link">Premium Express</a>
      </p>
    </div>

  </div>
</footer>



  )
}
