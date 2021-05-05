import React, {useState, useEffect} from "react";
import ContactForm from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";
const ContactsPage = ({contacts,addContacts}) => {
// local variables including boolean for duplication check
const [cname, setName] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!duplicate) {
      addContacts(cname,phone, email);
      // reseting values clearing the form
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
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

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
         name={cname}
          phone={phone}
          email={email}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
          handleSubmit={handleSubmit} />
      </section>
      <br />
      <section>
        <h2>Contacts</h2>
        <TileList
          tiles={contacts}
        />
      </section>
    </div>
  );
};
export default ContactsPage;