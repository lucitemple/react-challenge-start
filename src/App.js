import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
// import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import ContactsPage  from "./containers/contactsPage/ContactsPage";


function App() {
  
 const [contacts, setContacts] = useState([
   {
     contactName: "Jane Doe",
     phone: "0414567855",
     email: "yahoo@gmail.com",
   },
   {
     contactName: "Merry Bernards",
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

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addContacts = (contactName, phone, email) => {
    setContacts([...contacts,{
      contactName :contactName,
      phone: phone,
      email:email,

    },

    ]);
  };

    const addAppointment = (title, contact, date, time) => {
      setAppointments([...appointments,{
        title:title,
        contact:contact,
        date :date,
        time:time,
      },
    ]);
    };

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
            <ContactsPage contacts={contacts} addContacts={addContacts}/>  
          </Route>
          /* <Route path={ROUTES.APPOINTMENTS}> 
             {/* <AppointmentsPage appointments={appointments} addAppointment={addAppointment} contacts={contacts}/>  */}
          </Route>
          </Switch>
      </main>
    </>
  );
}

export default App;
