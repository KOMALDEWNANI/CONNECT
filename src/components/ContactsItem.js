import React, { useContext } from "react";
import {
    Link
  } from "react-router-dom";
import ContactContext from "../context/contactContext";

function ContactsItem(props) {
  // using the context
  const info = useContext(ContactContext)
  const onCardClick = () => {
      info.update(props.name, props.phone)
  }
  return (
    <>
      <div
        className="card text-dark bg-light mb-3"
        style={{ maxWidth: "50rem" }} 
      >
        <div className="card-body">
        
          <Link className="card-text stretched-link" to = "/info" style = {{textDecoration: "none"}} onClick = {onCardClick}>{props.name}</Link>
        </div>
      </div>
    </>
  );
}

export default ContactsItem;
