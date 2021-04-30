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
      {/* name input */}
    <input type="text" placeholder="name" value={name}
        onChange={({target}) => {setName(target.value)}}
        required />
      {/* phone numer input */}
      <input type="number" placeholder='phone number'
        pattern="(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)"   value={phone} onChange={({ target }) => { setPhone(target.value) }} required/>
      {/* ^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$ */}
      {/* email input  */}
      <input type="text" placeholder='email' pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
        value={email} onChange={({ target }) => { setEmail(target.value) }} required />
       <button>Submit</button>
    </form>
  );
};
