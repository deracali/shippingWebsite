import { useEffect,useState } from 'react'
import React from 'react'
import './form.css'
import Footer from '../../component/footer/Footer'
import Header from '../../component/header/header'
import axios from 'axios'
import {BsMap} from 'react-icons/bs'
import {IoMdCheckmarkCircle} from 'react-icons/io'
import {HiLocationMarker} from 'react-icons/hi'
import {FaPlaneArrival} from 'react-icons/fa'

export default function TrackNumberForm() {
const [number,setNumber] = useState("")
const [item,setItem] = useState([])
const [loading,setLoading] = useState(false)
const [error,setError] = useState("") 

const search = (e)=>{
  e.preventDefault()


 setLoading(true)
    // GET request using axios inside useEffect  React hook
    axios.get('https://premiumexpress.onrender.com/search/' + number)
        .then(response => {
          setItem(response.data)
          setLoading(false)
  
          if (!response.ok) {
            setError('Tracking Code not found. Please try again')
            return
        }
        });
       
  // empty dependency array means this effect will only run once (like componentDidMount in classes)

 
}

return (
    <>
    <Header/>
    <div className="form-container">
    <form>
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
        <button onClick={search} className="fluid ui button blue">Submit</button>
     <p>Paste Tracking No</p>
     <p className='trackText'>{error}</p>
      </div>
    </form>

    <div className='data-preview'>
      {loading? (
        <div className="spinner-square">
        <div className="square-1 square"></div>
        <div className="square-2 square"></div>
        <div className="square-3 square"></div>
</div>
      ):(
<>
      {item.map((item)=>(
      <div key={item._id}>
      <div className='location'>
      <div className='Location'>
        <p style={{color:"green"}}>Destination</p> 
        <BsMap size={18}/> <span className='trackText'>{item.location}</span></div>
      <div className='Address'>
        <p style={{color:"green"}}>Address</p>
        <HiLocationMarker size={20}/> <span className='trackText'>{item.address}</span></div>
      </div>
      <div className='steps'>
<div><span>Left Warehouse</span><IoMdCheckmarkCircle color='green'/></div>
<div><span>{item.checkpoint1? item.checkpoint1 : ""}</span>{item.checkpoint1? <IoMdCheckmarkCircle color={item.checkpoint1? "green" : ""}/> : ""}</div>
<div><span>{item.checkpoint2? item.checkpoint2 : ""}</span> {item.checkpoint2? <IoMdCheckmarkCircle color={item.checkpoint2? "green" : ""}/> : ""}</div>
<div><span>{item.checkpoint3? item.checkpoint3 : ""}</span>{item.checkpoint3? <IoMdCheckmarkCircle color={item.checkpoint3? "green" : ""}/> : ""}</div>

<div className='arrival'><span>{item.arrival}</span>{item.arrival? <FaPlaneArrival color={item.arrival? "green" : ""} /> : ""} </div>
      </div>
<div className='trackData'>
  <div className='mgb'>
    <p className='p'>Carrier</p>
    <p className='trackText'>Packages</p>
  </div>
  <div className='mgb'>
    <p className='p'>Type of Shipment</p>
    <p className='trackText'>{item.shipmentMethod}</p>
  </div>
  <div className='mgb'>
    <p className='p'>Weight</p>
    <p className='trackText'>{item.weight}</p>
  </div>
  <div className='mgb'>
    <p className='p'>Shipment method</p>
    <p className='trackText'>{item.shipmentMethod}</p>
  </div>
  <div className='mgb'>
    <p className='p'>Carrier Reference No</p>
    <p className='trackText'>{item.carrierReferenceNo}</p>
  </div>
  <div className='mgb'>
    <p className='p'>Product</p>
    <p className='trackText'>{item.product}</p>
  </div>
  <div className='mgb'>
    <p className='p'>Qty</p>
    <p className='trackText'>{item.qty}</p>
  </div>
  <div className='mgb'>
    <p className='p'>Payment Mode</p>
    <p className='trackText'>{item.paymentMethod}</p>
  </div>
  <div className='mgb'>
    <p className='p'>Expected Delivery Date</p>
    <p className='trackText'>{item.expectDeliveryDate}</p>
  </div>
</div>
      </div>
      ))}
      </>
      )}
    </div>
  </div>
  <Footer/>
  </>
  )
}
