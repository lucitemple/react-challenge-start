import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  // get todays date to be used as input min
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <>
      <form className="AppointmentForm" onSubmit={handleSubmit}>
        <ContactPicker
          contacts={contacts}
          onChange={(target) => setContact(target.value)}
        />
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(target) => setTitle(target.value)}
        />
        <input
          type="date"
          value={date}
          min={getTodayString()}
          onChange={(target) => setDate(target.value)}
        />
        <input
          type="time"
          value={time}
          onChange={(target) => setTime(target.value)}
        />
        <button>Submit</button>
      </form>
    </>
  );
};
