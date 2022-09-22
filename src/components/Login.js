import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({});
  return (
    <div>
      <form action="">
        <input type="email" placeholder="Email" />
        <br />
        <input type="text" placeholder="Password" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
