import React from "react";

const ContactsPage = ({contacts}) => {git 
  
  return (
    <div>
          {contacts.map((contact)=>{
                return<ul key={contact.phone}>
                <li>{contact.contactName}</li>
                <li>{contact.email}</li>
                 </ul>
          })}
      </div>

  );
}
export default ContactsPage;
