import React, { useContext, useEffect, useState } from "react";
import ContactContext from "../context/contactContext";
import SentContext from "../context/sentContext";

function Message() {
  
  //fetch the states using ContextAPI of ContactState
  const data = useContext(ContactContext);
  
   // fetch SentState
   const sentData = useContext(SentContext)
  
  // If OTP is successfully sent then showAlert becomes true else false
  const [showAlert, setAlert] = useState(false)

  // To store data values in details as we need to use data values from ContextAPI inside sendOTP function
  const [details, setDetails] = useState({
      "name": "",
      "phone":"",
       "otp": ""
  })

  // After component rendering local state variables are set.
  useEffect(() => {
     setDetails({"name": data.state.name, "phone": data.state.phone, "otp": data.state.otp})
  }, [])
  

  // function that calls the twilio API
 const sendOTP = () => {
    
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    sentData.update(details.name, time, details.otp)
    console.log(sentData)
    fetch('https://mycontactsproject.herokuapp.com/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({to: details.phone, body: `HOLLA. Your OTP is ${details.otp}`})
      })
        .then(res => {
          console.log(res)
          return res.json()
        })
        .then(ele => {
          if (ele.success) {

            setAlert(true)
          } else {
           setAlert(false)
          }
        });
    }
  
  return (
    <div>
      {showAlert && <div className="alert alert-success" role="alert">
       Success! Check your phone 
      </div>}
      
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">Hi. Your OTP is: {data.state.otp}</h5>
          <button className="btn btn-dark" onClick={sendOTP}>
            Send OTP
          </button>
        </div>
      </div>
    </div>
  );
  }

export default Message;
