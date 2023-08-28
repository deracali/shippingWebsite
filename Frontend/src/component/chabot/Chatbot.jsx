import React from 'react'
import Chatbot from 'react-simple-chatbot'
import 'semantic-ui-css/semantic.min.css'
import { useState } from 'react'
import {BiSolidMessageRoundedDetail} from 'react-icons/bi'
import {Link} from 'react-router-dom'

export default function ChatbotView() {
  const [open,setOpen] = useState(false)
  
    const steps = [
    {
        id:'Greet',
        message:'Hello Welcome to our website',
        trigger:'Ask Name',
    },
    {
        id:'Ask Name',
        message:'Please enter your name',
        trigger:'waiting1',
    },
    {
        id:'waiting1',
        user:true,
        trigger:'Name',
    },
    {
        id:'Name',
        message:'Hi (previousValue), Please select your issue',
        trigger:'issues',
    },
    {
        id:'issues',
        options:[
            {value:'React',label:'React',trigger:'React'},
            {value:'Angular',label:'Angular',trigger:'Angular'},
        ],
    },
    {
        id:'React',
        message:"Thanks for telling your react issue",
        end:true
    },
    {
        id:'Angular',
        message:'Thanks for telling your angular issue',
    end:true
    }
  ]
  return (
<>
<div className={open? "chatbox-container-active":"chatbox-container"}>
    <Chatbot steps={steps}/>
</div>
<button className="chatbot">
   <a href="mailto:emailpremiumtct@gmail.com"><BiSolidMessageRoundedDetail  size={50}/></a>
</button>
  
</>    
  )
}
