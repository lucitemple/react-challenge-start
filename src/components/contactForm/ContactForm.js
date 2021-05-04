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
          Contact Name:
          <input type="text" name="cname" value={cname} onChange={(e)=> setName(e.target.value)}required palceholder="Contact Name"/>
        </label> 
        <br/>
         <label>
          Phone # :
          <input type="tel" name="phone" value={phone} onChange={(e)=> setPhone(e.target.value)}required palceholder="Contact Phone" />
        </label>
        <br/>
        <label>
          Email :
          <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} required placeholder="Contact Email" />
        </label>
        <br/>
        <input type="submit" value="Submit" />
      </form>
  );
};
export default ContactForm;