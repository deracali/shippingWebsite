import { useEffect,useState } from 'react'
import React from 'react'
import './form.css'
import Footer from '../../component/footer/Footer'
import Header from '../../component/header/header'


export default function Form() {
   const [number,setNumber] = useState('')
  const [location,setLocation] = useState('')
  const [address,setAddress] = useState('')

const handleFormSubmit = async(e)=>{
  e.preventDefault()
const data = {number,location,address}
  const response = await fetch('http://localhost:3000/post',{
method:'POST',
body:JSON.stringify(data),
headers:{
  'Content-type':'application/json'
}
  })
  const json = await response.json()
}

  return (
    <>
    <Header/>
    <div className="form-container">
    <form method='post' action='#' onSubmit={handleFormSubmit}>
      <h1>Tracking Number Form</h1>
      <div className="ui divider"></div>
      <div className="ui form">
        <div className="field">
          <label>Tracking Number</label>
          <input
            type="text"
            name="number"
            placeholder="Tracking Number"
            value={number}
            onChange={(e)=>{
              setNumber(e.target.value)
            }}
          />
        </div>
        
        <div className="field">
          <label>Location</label>
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={location}
            onChange={(e)=>{
              setLocation(e.target.value)
            }}   
          />
        </div>
        
        <div className="field">
          <label>Address</label>
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={address}
            onChange={(e)=>{
              setAddress(e.target.value)
            }}
          />
        </div>
     
        <button type='submit' className="fluid ui btn blue">Submit</button>
      </div>
    </form>
  </div>
  <Footer/>
  </>
  )
}
