import { useEffect,useState } from 'react'
import axios from 'axios'
import React from 'react'
import './form.css'
import { useParams,useNavigate,Link } from 'react-router-dom'

export default function Update() {
   const [number,setNumber] = useState()
  const [location,setLocation] = useState()
  const [address,setAddress] = useState()
  const [checkpoint1,setCheckpoint1] = useState()
  const [checkpoint2,setCheckpoint2] = useState()
  const [checkpoint3,setCheckpoint3] = useState()
  const [packages,setPackages] = useState()
  const [weight,setWeight] = useState()
  const [shipmentMethod,setShipmentMethod] = useState()
  const [carrierReferenceNo,setCarrierReferenceNo] = useState()
  const [product,setProduct] = useState()
  const [qty,setQty] = useState()
  const [paymentMethod,setPaymentMethod] = useState()
  const [expectedDeliveryDate,setExpectedDeliveryDate] = useState()
  const navigate = useNavigate()
  const [status,setStatus] = useState("")
  
  const params = useParams()
  const id = params.id
 
const handleFormSubmit = async(e)=>{
  e.preventDefault()
const data = {number,location,address,checkpoint1,checkpoint2,checkpoint3,packages,weight,shipmentMethod,carrierReferenceNo,product,qty,paymentMethod,expectedDeliveryDate}
  const response = await fetch('https://premiumexpress.onrender.com/' + id,{
method:'PATCH',
body:JSON.stringify(data),
headers:{
  'Content-type':'application/json'
}
  })
  const json = await response.json()
  navigate("/")
}

const handleDelete = async()=>{
 // DELETE request using fetch inside useEffect React hook
 fetch('https://premiumexpress.onrender.com/' + id, { method: 'DELETE' })
 .then(() => setStatus('Delete successful'));
// empty dependency array means this effect will only run once (like componentDidMount in classes)
}


  return (
    <>
    {/* <Header/> */}
    <div className="formheight">
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
          <label>Check Point 1</label>
          <input
            type="text"
            name="checkpoint1"
            placeholder="Check Point"
            value={checkpoint1}
            onChange={(e)=>{
                setCheckpoint1(e.target.value)
            }}   
          />
        </div>
        <div className="field">
          <label>Check Point 2</label>
          <input
            type="text"
            name="checkpoint2"
            placeholder="Check Point"
            value={checkpoint2}
            onChange={(e)=>{
              setCheckpoint2(e.target.value)
            }}   
          />
        </div>
        <div className="field">
          <label>Check Point 3</label>
          <input
            type="text"
            name="checkpoint3"
            placeholder="Check Point"
            value={checkpoint3}
            onChange={(e)=>{
              setCheckpoint3(e.target.value)
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
        <div className="field">
          <label>Packages</label>
          <input
            type="text"
            name="packages"
            placeholder="Packages"
            value={packages}
            onChange={(e)=>{
              setPackages(e.target.value)
            }}
          />
        </div>
        <div className="field">
          <label>Payment Method</label>
          <input
            type="text"
            name="paymentMethod"
            placeholder="Payment Method"
            value={paymentMethod}
            onChange={(e)=>{
              setPaymentMethod(e.target.value)
            }}
          />
        </div>
        <div className="field">
          <label>Qty</label>
          <input
            type="text"
            name="qty"
            placeholder="Quantity"
            value={qty}
            onChange={(e)=>{
              setQty(e.target.value)
            }}
          />
        </div>
        <div className="field">
          <label>Weight</label>
          <input
            type="text"
            name="weight"
            placeholder="Weight"
            value={weight}
            onChange={(e)=>{
              setWeight(e.target.value)
            }}
          />
        </div>
        <div className="field">
          <label>Product</label>
          <input
            type="text"
            name="product"
            placeholder="Product"
            value={product}
            onChange={(e)=>{
              setProduct(e.target.value)
            }}
          />
        </div>
        <div className="field">
          <label>Shipment Method</label>
          <input
            type="text"
            name="shipmentMethod"
            placeholder="Shipmenth Method"
            value={shipmentMethod}
            onChange={(e)=>{
              setShipmentMethod(e.target.value)
            }}
          />
        </div>
        <div className="field">
          <label>Carrier Reference No</label>
          <input
            type="text"
            name="carrierNo"
            placeholder="Carrier No"
            value={carrierReferenceNo}
            onChange={(e)=>{
              setCarrierReferenceNo(e.target.value)
            }}
          />
        </div>
        <div className="field">
          <label>Expect Delivery Date</label>
          <input
            type="text"
            name="expectedDeliveryDate"
            placeholder="Expected Delivery"
            value={expectedDeliveryDate}
            onChange={(e)=>{
              setExpectedDeliveryDate(e.target.value)
            }}
          />
        </div>
     
        <button type='submit'  className="fluid ui btn blue">Submit</button>
        <button style={{marginLeft:"20px"}} class="button_two" onClick={handleDelete}>Delete</button>
     <p>{status} Go back to <Link to={"/"}>Home</Link></p>
      </div>
    </form>
  </div>

  </>
  )
}
