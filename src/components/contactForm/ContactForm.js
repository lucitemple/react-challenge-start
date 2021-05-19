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
  );
};
