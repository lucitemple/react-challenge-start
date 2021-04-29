import React, {useState} from "react";

const ContactsPage = ({contacts},{addContacts}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const contacts={
  contactName:'', 
  pNumber:'',
  email:'',
  isDuplicate: false,
}

const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if (isDuplicate)
   setcontacts(contacts);
  };
  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm contacts={contacts} setContacts={setcontacts} handleSubmit={handleSubmit}/> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts}/>
      </section>
    </div>
  );
}
export default ContactsPage;
