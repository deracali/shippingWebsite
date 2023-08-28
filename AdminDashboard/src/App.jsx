import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Data from '../pages/DataPage/Data'
import Form from '../pages/Form/Form'
import Update from '../pages/UpdateForm/Update'


function App() {
  
  return (
    <div>
    <BrowserRouter>
    <Routes>
     <Route path="/" exact element={<Data/> } />   
     <Route path="/form" element={<Form/> } />   
     <Route path="/update/:id" element={<Update/> } />   
    </Routes>
    </BrowserRouter>      
    </div>
  )
}

export default App
