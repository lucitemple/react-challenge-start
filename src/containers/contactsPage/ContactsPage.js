import React, { useState, useEffect } from "react";
import ContactForm from '../../components/contactForm/ContactForm'
import TileList from '../../components/tileList/TileList'
const ContactsPage = ({contacts, addContacts}) => {
  const [cname, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);
const handleSubmit = (e) => {
    e.preventDefault();
   if (!duplicate){
     addContacts(cname,phone,email);
     setName("");
     setPhone("");
     setEmail("");
   } 
  };

  useEffect(() => {
    const nameIsduplicate =()=> {
      const searchForDuplicate= contacts.find((contact)=> contact.contactName=== cname);
       if (searchForDuplicate !== undefined ){
         return true;
       }
       return false ;
    };

    if (nameIsduplicate()){
      setDuplicate(true);
    }else {
      setDuplicate(false);
    }
  
  }, [cname,contacts,duplicate]);
  return (
    <>
      <section>
        <h2>Add Contact</h2>
        <ContactForm cname={cname} setName={setName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail}  handleSubmit={handleSubmit}/> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
         <TileList tiles={contacts}/> 
      </section>
    </>
  );
}
export default ContactsPage;
