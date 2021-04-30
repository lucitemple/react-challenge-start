import React from "react";

export const ContactPicker = ({contacts, onChange}) => {
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
          Contact
        </option>
        {contacts.map((ele) => {
          return (
            <option key={ele.name} value={ele.name}>
              `${ele.name}`
            </option>
          );
        })}
      </select>
    </>
  );
};
