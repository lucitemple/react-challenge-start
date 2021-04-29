import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";


function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
 const [contacts, setContacts] = useState([
   {
     contactName: "Jane Doe",
     phone: "0414567855",
     email: "yahoo@gmail.com",
   },
   {
     contactName: "John Doe",
     phone: "0414567855",
     email: "yahoo@gmail.com",
   },
 ]);
 const [appointments, setAppointments] = useState([
   {
     title: "Dentist",
     contact: "Jane Doe",
     date : "25-09-2021",
     time: "10:30pm",
   },
 ]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const addContacts = (contactName, phone, email) => {
    let newContact = {
      contactName: contactName,
      phone, 
      email,
    };
    setContacts((prev) => [newContact, ...prev]);
  };

    const addAppointments = (title, contact, date, time) => {
      let newAppointment = {
        title,
        contact,
        date,
        time,
      };
      setAppointments((prev) => [newAppointment, ...prev]);
    };

  //console.log(addContacts(contacts));
  /*
  Implement functions to add data to
  contacts and appointments
  */

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage />
            <ul>{contacts.map(contact => <li key={contact.phone}>{contact.name}</li>)}</ul>  
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
