import React, {useState} from "react";

export const ContactsPage = () => {

  /*
  Define state variables for 
  contact info and duplicate check
  */
  const contacts = props.contacts;
  const addContact = props.addContact;
//  const [contact, setContact] = useState(
//    {
//      contactName: "Jane Doe",
//      phone: "0414567855",
//      email: "yahoo@gmail.com",
//      isDuplicate: false,
//    },);
// local variables including boolean for duplication check
const [name, setName] = useState('');
const [phone, setPhone] = useState('');
const [email, setEmail] = useState('');
const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!duplicate) {

      addContact(name,phone, email);
      // reseting values clearing the form
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect( () => {
    for (const contact of contacts) {
      if (name === contact.name) {
        setDuplicate(true);
      }

      return;
    }
  });
//   const array1 = ['a', 'b', 'c'];
// const lett = array1[1]
// console.log(lett)
// let duplicate = false;

// for (const element of array1) {
//   if(element === lett){
//     duplicate = true
//   }else{
//      duplicate = false;
//   }
//   console.log(element);
//   console.log(duplicate);
// }
  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
         name={name}
          phone={phone}
          email={email}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
          handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList
          contactArray={props.contacts}
        />
      {/* <TileList {contact = props.contacts}/> */}
      </section>
    </div>
  );
};
