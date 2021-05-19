import React from "react";

<<<<<<< HEAD
const ContactForm = ({
  cname,
=======
export const ContactForm = ({
  name,
>>>>>>> 98b9cffbc1a8b6d266d3d3f64803a08fb978e673
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
<<<<<<< HEAD
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
=======
    // Some name have hyphens, some have apostrophes. Let’s add support for these characters now.
    <form onSubmit={handleSubmit}>
      {/* name input */}
      <input
        className="checkname"
        type="text"
        placeholder="name"
        value={name}
        pattern="[a-zA-Z]+(?:(?:\. |[' ])[a-zA-Z]+)*"
        onChange={({ target }) => {
          setName(target.value);
        }}
        autoComplete="on"
        required
      />
      {/* phone numer input */}
      {/* This regex pattern is for Autralia and lineline and mobile numbers. */}
      <input
        type="tel"
        placeholder="phone number"
        // regex
        // pattern="\d{3}[\-]\d{3}[\-]\d{4}"
        value={phone}
        onChange={({ target }) => {
          setPhone(target.value);
        }}
        required
      />
      {/* email input  */}
      <input
        className="checkemail"
        type="text"
        value={email}
        // pattern=""
        onChange={({ target }) => {
          setEmail(target.value);
        }}
        placeholder="example@domain.com"
        autoCapitalize="none"
        spellCheck="false"
        pattern="^(?![\.\-_])((?![\-\._][\-\._])[a-z0-9\-\._]){0,63}[a-z0-9]@(?![\-])((?!--)[a-z0-9\-]){0,63}[a-z0-9]\.(|((?![\-])((?!--)[a-z0-9\-]){0,63}[a-z0-9]\.))(|([a-z]{2,14}\.))[a-z]{2,14}$"
        required
      />

      <button>Submit</button>
    </form>
>>>>>>> 98b9cffbc1a8b6d266d3d3f64803a08fb978e673
  );
};

default export ContactForm;