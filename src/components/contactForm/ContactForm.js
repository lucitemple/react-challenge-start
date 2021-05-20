import React from "react";
export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
        <label>
          Contact Name:
          <input type="text" name="name" value={name} onChange={(e)=> setName(e.target.value)}required palceholder="Contact Name"/>
        </label> 
        <br/>
         <label>
          Phone # :
          <input type="tel" name="phone" value={phone} onChange={(e)=> setPhone(e.target.value)}required pattern="(\(+61\)|\+61|\(0[1-9]\)|0[1-9])?( ?-?[0-9]){6,9}"
         palceholder="Phone number" />
        </label>
        <br/>
        <label>
          Email :
          <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} autoCapitalize="none" spellCheck="false" required pattern="^(?![\.\-_])((?![\-\._][\-\._])[a-z0-9\-\._]){0,63}[a-z0-9]@(?![\-])((?!--)[a-z0-9\-]){0,63}[a-z0-9]\.(|((?![\-])((?!--)[a-z0-9\-]){0,63}[a-z0-9]\.))(|([a-z]{2,14}\.))[a-z]{2,14}$"
         placeholder="example@domain.com" />
        </label>
        <br/>
        <input type="submit" value="Submit" />
      </form>
  );
};

