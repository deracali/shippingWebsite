import React from 'react'
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';
import { AiFillForward } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
import './header.css'

export default function Header() {
  const [open,setOpen] = useState(false)
  
  return (
    
  <header className="header" data-header>
  <div className="container">

    <h1>
      <a href="/" className="logo">PremiumExpress</a>
    </h1>

    <nav className={open? "navbar-active" : "navbar"}>

      <div className="navbar-top">
        <a href="/" className="logo">PremiumExpress</a>
      </div>

      <ul className="navbar-list">

        <li className="navbar-item">
          <a href="/" className="navbar-link">
            <span>Home</span>

            
          </a>
        </li>

        <li className="navbar-item">
          <a href="#about" className="navbar-link">
            <span>About</span>

            
          </a>
        </li>

        <li className="navbar-item">
          <a href="#service" className="navbar-link">
            <span>Service</span>

            
          </a>
        </li>

        <li className="navbar-item">
          <a href="#blog" className="navbar-link">
            <span>Blog</span>

            
          </a>
        </li>

        <li className="navbar-item">
          <a href="#" className="navbar-link">
            <span>Contact</span>

            
          </a>
        </li>
        <li className="navbar-item">
          <a href="trackingno" className="navbar-link">
            <span>Track</span>
          </a>
        </li>

      </ul>

    </nav>

    <div className="header-contact">

      <div>
        <p className="contact-label">Free Call In U.S.A</p>

        <a href="tel:12345678910" className="contact-number">+1 440 482 8455</a>
      </div>

      <div className="contact-icon">
        <BiPhoneCall/>
      </div>

    </div>

    <button className={open? "nav-close" : "nav-open"} onClick={()=>setOpen(true)}>
    <AiOutlineMenu color='#fff' size={32}/>
    </button>
    <button className={open? "nav-open" : "nav-close"} onClick={()=>setOpen(false)}>
    <FaTimes color='#fff' size={32}/>
    </button>

   
  </div>
</header>


  )
}
