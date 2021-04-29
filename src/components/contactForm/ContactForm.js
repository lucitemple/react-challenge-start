import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
        <label>
          Contact Name:
          <input type="text" value={ContactForm.setName} onChange={handleChange} />
        </label>
        {/* <label>
          Phone #:
          <input type="number" value={this.state.value} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" value={this.state.value} onChange={handleChange} />
        </label> */}
        <input type="submit" value="Submit" />
      </form>
  );
};
