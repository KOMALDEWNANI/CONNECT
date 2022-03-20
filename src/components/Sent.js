import React, { useContext } from 'react'
import SentContext from "../context/sentContext";

function Sent() {

  const sentData = useContext(SentContext)
  return (
    <table className="table">
  <thead>
    <tr>
      
      <th scope="col">Name</th>
      <th scope="col">Time</th>
      <th scope="col">OTP</th>
    </tr>
  </thead>
  <tbody>

  {sentData.state && sentData.state.map(element => 
    <tr key = {element.time}>
  
    <td>{element.name}</td>
    <td>{element.time}</td>
    <td>{element.otpSent}</td>
  </tr>
      )}
    
    {/* <tr>
      
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
     
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr> */}
  </tbody>
</table>
  )
}

export default Sent