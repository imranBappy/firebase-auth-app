import React, { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({});
  const handleChange = (e) => {
    const name = e.target.name,
      value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    
    e.preventDefault();
  };
  return (
    <div>
      <h1>Register you info</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <br />
        <input
          onChange={handleChange}
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <br />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Password"
          name="password"
          required
        />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
