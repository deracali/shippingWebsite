import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
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
      <Link to={"/"} className="logo">PremiumTCT</Link>
    </h1>

    <nav className={open? "navbar-active" : "navbar"}>

      <div className="navbar-top">
        <Link to={"/"} className="logo">PremiumTCT</Link>
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
          <Link to="/trackingno" className="navbar-link">
            <span>Track</span>
          </Link>
        </li>

      </ul>

    </nav>

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
