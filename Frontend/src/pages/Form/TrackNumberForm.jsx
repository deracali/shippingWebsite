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
        .then(response => setItem(response.data));
  
  // empty dependency array means this effect will only run once (like componentDidMount in classes)
 setLoading(false)
 
}

return (
    <>
    <Header/>
    <div className={item.data? "formheight" : "form-container"}>
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
     <p>Past Tracking No</p>
      </div>
    </form>

    <div className='data-preview'>
      {item.map((item)=>(
      <div key={item._id}>
      <div className='location'>
      <div className='Location'><p>Destination</p> <BsMap size={18}/> {item.location}</div>
      <div className='Address'><p>Address</p><HiLocationMarker size={20}/> {item.address}</div>
      </div>
      <div className='steps'>
<div><span>Left Warehouse</span><IoMdCheckmarkCircle color='green'/></div>
<div><span>{item.checkpoint1? item.checkpoint1 : ""}</span>{item.checkpoint1? <IoMdCheckmarkCircle color={item.checkpoint1? "green" : ""}/> : ""}</div>
<div><span>{item.checkpoint2? item.checkpoint2 : ""}</span> {item.checkpoint2? <IoMdCheckmarkCircle color={item.checkpoint2? "green" : ""}/> : ""}</div>
<div><span>{item.checkpoint3? item.checkpoint3 : ""}</span>{item.checkpoint3? <IoMdCheckmarkCircle color={item.checkpoint3? "green" : ""}/> : ""}</div>

<div className='arrival'><span>{item.arrival}</span>{item.arrival? <FaPlaneArrival color={item.arrival? "green" : ""} /> : ""} </div>
      </div>
<div>
  <div className='mgb'>
    <p className='p'>Carrier</p>
    <p>Packages</p>
  </div>
  <div className='mgb'>
    <p className='p'>Type of Shipment</p>
    <p>{item.shipmentMethod}</p>
  </div>
  <div className='mgb'>
    <p className='p'>Weight</p>
    <p>{item.weight}</p>
  </div>
  <div className='mgb'>
    <p className='p'>Shipment method</p>
    <p>{item.shipmentMethod}</p>
  </div>
  <div className='mgb'>
    <p className='p'>Carrier Reference No</p>
    <p>{item.carrierReferenceNo}</p>
  </div>
  <div className='mgb'>
    <p className='p'>Product</p>
    <p>{item.product}</p>
  </div>
  <div className='mgb'>
    <p className='p'>Qty</p>
    <p>{item.qty}</p>
  </div>
  <div className='mgb'>
    <p className='p'>Payment Mode</p>
    <p>{item.paymentMethod}</p>
  </div>
  <div className='mgb'>
    <p className='p'>Expected Delivery Date</p>
    <p>{item.expectDeliveryDate}</p>
  </div>
</div>
      </div>
      ))}

    </div>
  </div>
  <Footer/>
  </>
  )
}
