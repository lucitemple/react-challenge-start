import React, {useState} from "react";

export const AppointmentsPage = (appointments, contacts, addAppointment) => {
  /*
  Define state variables for 
  appointment info
  */

  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState();
  const [submissionTime, setSubmissionTime] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
      </section>
    </div>
  );
};
