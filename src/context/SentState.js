import React, { useState } from "react";
import SentContext from "./sentContext";


const SentState = (props) => {
  const s1 = []
  const [state, setState] = useState(s1);

  const update = (sName, sTime, otp) => {
    s1.unshift({
        "name": sName,
        "time": sTime,
        "otpSent" : otp,
       
      })
    setState(s1);
  };
  return (
    <SentContext.Provider value={{ state, update }}>
      {props.children}
    </SentContext.Provider>
  );
};

export default SentState;
