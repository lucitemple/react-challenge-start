import React from "react";

const ContactForm = ({
  cname,
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
      <input type="text" name="cname" value={cname} onChange={(e) => setName(e.target.value)}
        required placeholder="Contact Name"/>
        <label/>
        <br/>
        <label>
        <input type="tel" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}
        required placeholder="Phone Number"/> 
        </label>
        <br/>
        <label>       
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}
        required placeholder="Email address"/>
        </label>
        <br/>
        <input type="submit" value="Add Contact" />
     </form>
  );
};

default export ContactForm;