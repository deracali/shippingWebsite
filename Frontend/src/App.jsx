import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Form from './pages/Form/Form'
import TrackNumberForm from './pages/Form/TrackNumberForm'
import Home from './pages/Home/home'


function App() {
  
  return (
  
      <div>
        <BrowserRouter>
        <Routes>
         <Route path="/" exact element={<Home/> } />   
         <Route path="/form" element={<Form/> } />   
         <Route path="/Trackingno" element={<TrackNumberForm/> } />   
        </Routes>
        </BrowserRouter>      
        </div>
  
  )
}

export default App
