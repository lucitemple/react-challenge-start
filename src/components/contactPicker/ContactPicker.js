import React from "react";

export const ContactPicker = ({onChange, contacts}) => {
  return (
    <>
    <label htmlFor="contacts"></label>
      <select name="contacts" id="contacts" onChange={onChange}>
        <option value="no contact selected">Contact</option>
        { contacts && contacts.map((contact) => <option>{contact.name}</option>)}
      </select>
    </>
  );
};
