import React from "react";

export const ContactPicker = ({ contacts, onChange }) => {
  return (
    <>
      <label htmlFor="contacts"></label>
      <select
        name="contacts"
        id="contacts"
        onChange={onChange}
        value="no contact selected"
      >
        <option key="default" value="no contact selected">
          No contact selected
        </option>
        {contacts.map((contact) => {
          return (
            <option key={contact.contactName} value={contact.contactName}>
              {contact.contactName}
            </option>
          );
        })}
      </select>
    </>
  );
};
