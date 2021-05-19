<<<<<<< HEAD
import React, {useState, useEffect} from "react";
import ContactForm from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";
const ContactsPage = ({contacts,addContacts}) => {
// local variables including boolean for duplication check
const [cname, setName] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
const [duplicate, setDuplicate] = useState(false);
=======
import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*Define state variables for 
  contact info and duplicate check
  */
  const contacts = props.contacts;
  const addContact = props.addContact;

  // local variables including boolean for duplication check
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);
>>>>>>> 98b9cffbc1a8b6d266d3d3f64803a08fb978e673

  const handleSubmit = (e) => {
    e.preventDefault();
    /*Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!duplicate) {
<<<<<<< HEAD
      addContacts(cname,phone, email);
=======
      addContact(name, phone, email);
>>>>>>> 98b9cffbc1a8b6d266d3d3f64803a08fb978e673
      // reseting values clearing the form
      setName("");
      setPhone("");
      setEmail("");
    }
  };
  /* Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
<<<<<<< HEAD
    const nameIsduplicate=()=>{
    const found= contacts.find((contact)=> contact.cname===cname);
      if (found!==undefined) {
        return true;
      }
      return false;
    };
    if (nameIsduplicate){
      setDuplicate(true);
    }else 
    setDuplicate(false);
    },[cname,contacts,duplicate]);
=======
    for (const contact of contacts) {
      if (name === contact.name) {
        setDuplicate(true);
      }
      return false;
    }
  }, [name, contacts]);
>>>>>>> 98b9cffbc1a8b6d266d3d3f64803a08fb978e673

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
<<<<<<< HEAD
        <ContactForm 
         name={cname}
=======
        <ContactForm
          name={name}
>>>>>>> 98b9cffbc1a8b6d266d3d3f64803a08fb978e673
          phone={phone}
          email={email}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <br />
      <section>
        <h2>Contacts</h2>
<<<<<<< HEAD
        <TileList
          tiles={contacts}
        />
=======
        <TileList array={props.contacts} />
>>>>>>> 98b9cffbc1a8b6d266d3d3f64803a08fb978e673
      </section>
    </div>
  );
};
export default ContactsPage;