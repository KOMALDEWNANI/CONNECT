import React, { useContext } from 'react'
import icon from '../profile.png'
import { Link } from 'react-router-dom'
import contactContext from '../context/contactContext'

function Info() {

  const data = useContext(contactContext)
  

  // To generate a random 6 digit OTP
  const generateRandomNumber = () => {
    var minm = 100000;
    var maxm = 999999;
     return (Math.floor(Math.random() * (maxm - minm + 1)) + minm).toString();
   
  };
  
  // The function sets the otp value of the ContactState
  const onSendMessageClick = () => {
      const otp = generateRandomNumber();
      data.update(data.state.name, data.state.phone, otp);
  }
  return (
   
    <div className="card text-center">
    
    <div className="card-body">
       <img  className="card-title" src = {icon}/>
      <h5 className="card-title">{data.state.name !== null ? data.state.name : "Your name "}</h5>
      <p className="card-text">{data.state.phone !== null ? data.state.phone : "Your phone "}</p>
      <Link to="/message" className="btn btn-primary" onClick={onSendMessageClick}>Send Message</Link>
    </div>
    
  </div>
    
  )
}

export default Info