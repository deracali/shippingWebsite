import { useEffect,useState } from 'react'
import axios from 'axios'
import React from 'react'
import './data.css'
import { Link } from 'react-router-dom'

export default function Data() {
 const [item,setItem] = useState([])


 const getData = () =>{
  axios.get('https://premiumexpress.onrender.com')
  .then((response)=>{
    const myData = response.data
    setItem(myData)
  })
}

 useEffect(()=>getData(),[getData])
 

  return (
    <>
    {/* <Header/> */}
    <h2>All Shipment</h2>
    <div>
      <Link className="ui button blue" to={"/form"}>Add Data</Link>
    </div>
<table>
  <thead>
    <tr>
      <th>Tracking Code</th>
      <th>Product</th>
      <th>Shipping Method</th>
      <th>Checkpoint1</th>
      <th>Checkpoint2</th>
      <th>Checkpoint3</th>
    </tr>
  </thead>

  <tbody>
    {item.map((item)=>(
    <tr key={item._id}>
      <td>{item.number}</td>
      <td>{item.product}</td>
      <td>{item.shipmentMethod}</td>
      <td>{item.checkpoint1}</td>
      <td>{item.checkpoint2}</td>
      <td>{item.checkpoint3}</td>
      <td style={{display:"flex"}}>
        <Link to={`/update/${item._id}`} class="button button_one">Update</Link>
        
      </td>
    </tr>
    ))}
    </tbody>  
</table>




  </>
  )
}
