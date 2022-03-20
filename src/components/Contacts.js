import React from "react";
import jsonData from "../fakeContacts.json";
import ContactsItem from "./ContactsItem";

function Contacts() {
  const data = jsonData.contacts;
  return (
    <>
    
      <div className="row">
        {data && data.map((element) => <ContactsItem key = {element.id} name={element.name} phone = {element.phone} />)}
      </div>
    
    </>
  );
}

export default Contacts;
