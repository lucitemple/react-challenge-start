import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (appointments, contacts, addAppointment) => {
  /*
  Define state variables for 
  appointment info
  */

  const [title, setTitle] = useState("");
  const [contact, setContact] = useState({});
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    let timestamp = new Date();
    setTitle(e.target.title);
    setContact(e.target.contact);
    setDate(e.target.date);
    setTime(timestamp);
    addAppointment(title, contact, date, time);
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          title={title}
          setTitle={setTitle}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList appointments={appointments} />
      </section>
    </div>
  );
};
