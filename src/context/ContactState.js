import React, { useState } from "react";
import ContactContext from "./contactContext";

const ContactState = (props) => {
  const s1 = {
    "name": "Komal Dewnani",
    "phone": "9672102558",
    "otp" : "999999"
  };
  const [state, setState] = useState(s1);

  const update = (cName, cPhone, otp) => {
    setState({
      "name": cName,
      "phone": cPhone,
      "otp" : otp,
      
    });
  };
  return (
    <ContactContext.Provider value={{ state, update }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
